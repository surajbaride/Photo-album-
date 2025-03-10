import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./style";
const { width } = Dimensions.get("window");
const IMAGE_SIZE = width / 2 - 20; // Adjust image size for a 2-column grid

const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchPhotos();
    loadFavorites();
  }, []);

  const fetchPhotos = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=30`
      );
      setPhotos((prev) => [...prev, ...response.data]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching photos:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadFavorites = async () => {
    try {
      const savedFavorites = await AsyncStorage.getItem("favorites");
      if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };

  const toggleFavorite = async (photo) => {
    const updatedFavorites = favorites.some((fav) => fav.id === photo.id)
      ? favorites.filter((fav) => fav.id !== photo.id)
      : [...favorites, photo];
    setFavorites(updatedFavorites);
    await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filteredPhotos = searchQuery
    ? photos.filter((photo) => photo.id.includes(searchQuery))
    : photos;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search by ID"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredPhotos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.download_url }} style={styles.image} />
            <Text style={styles.text}>{item.id}</Text>
            <TouchableOpacity onPress={() => toggleFavorite(item)}>
              <Text style={styles.favorite}>
                {favorites.some((fav) => fav.id === item.id) ? "★" : "☆"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        onEndReached={fetchPhotos}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <ActivityIndicator size="large" />}
      />
    </View>
  );
};



export default PhotoAlbum;
