# Photo Album App

## Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/surajbaride/Photo-album-.git
cd Photo-album-
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Expo Development Server
```sh
npx expo start
```

### 4. Running on Android or iOS
- **Android:** Press `a` to launch on an Android emulator/device.
- **iOS:** Press `i` to launch on an iOS simulator (Mac only).

### 5. Build APK for Android
```sh
npx expo run:android
```

### 6. Publish to Expo
```sh
expo publish
```

### 7. API Used
- Images are fetched from `https://picsum.photos/v2/list`.

### 8. Features Implemented
- **Lazy Loading & Pagination:** Ensures smooth scrolling.
- **Search Functionality:** Filters images by ID.
- **Favorites Feature:** Allows users to mark and store favorite images using AsyncStorage.
- **Error Handling:** Displays errors if the API request fails.

### 9. Folder Structure
```
Photo-album-
│── src/
│   ├── components/
│   ├── screens/
│   ├── App.js
│── assets/
│── package.json
│── README.md
```

### 10. Deploying APK
1. Run `npx expo build:android`.
2. Follow Expo instructions and download the APK from the Expo build dashboard.
3. Install it on an Android device for testing.
4. 
