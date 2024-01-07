# Mooviz React Native App
>A comprehensive movie hub, offering a vast collection and detailed information on movies and tv shows, akin to IMDB.

[Watch Overview Video (Click to Play)](https://cdn.jsdelivr.net/gh/dhananjaysr26/my-cdn@main/projects/mooviz/mooviz-overview.mp4)

## Features
1. **Infinite Loading in Both Directions**
   - **Up:** Move 2 cards down and then move up to trigger the previous fetch API call.
   - **Down:** Scroll to the end of the list to fetch the next year's movies data.

2. **Enhanced User Experience**
   - App logo and splash screen designed similar to Netflix.

3. **Wish List Feature**
   - Click on the heart icon to add movies to your wishlist. Stored conveniently in local storage.

4. **Detailed Movie Information**
   - Movie Details Screen showcasing comprehensive movie info along with OTT (Over-the-Top) Providers.


To start the project
1. Create .env file to the root Directory
>.env example

```bash
THEMOVIEDB_API_KEY=**********************
THEMOVIEDB_API_BASE_URL=https://api.themoviedb.org/3
```
2. Install the dependencies
```bash
npm install
```
3. Start the project then press a to run on android
```bash
npm start
```
## useFull commands
```bash
npm start -- --reset-cache
adb devices
```
