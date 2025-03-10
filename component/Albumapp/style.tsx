import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const IMAGE_SIZE = width / 2 - 20; // Adjust image size for a 2-column grid
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#f5f5f5",
    },
    searchInput: {
      padding: 12,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
      backgroundColor: "white",
      marginBottom: 15,
      marginTop: 40, // Added margin to push it down from the top
    },
    row: {
      justifyContent: "space-between",
    },
    card: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 10,
      width: IMAGE_SIZE,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    image: {
      width: "100%",
      height: IMAGE_SIZE * 1.2,
      borderRadius: 10,
      resizeMode: "cover",
    },
    text: {
      marginTop: 5,
      fontSize: 14,
      fontWeight: "bold",
    },
    favorite: {
      fontSize: 20,
      marginTop: 5,
      color: "gold",
    },
  });
  export default styles