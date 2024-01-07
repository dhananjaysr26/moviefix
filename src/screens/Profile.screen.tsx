import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {getWatchListFromStorage} from '../lib/localStorage';
import {useIsFocused} from '@react-navigation/native';

const ProfileScreen = () => {
  const [wishListData, setWishListData] = useState([]);
  const isFocused = useIsFocused();

  const user = {
    username: 'John Doe',
    email: 'johndoe@example.com',
    profileImage: 'https://via.placeholder.com/150',
    coverPhoto: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93',
  };
  const openLink = () => {
    Linking.openURL('https://dhananjaysr.vercel.app/');
  };

  useEffect(() => {
    const fetchWishListData = async () => {
      try {
        const watchList = await getWatchListFromStorage();
        setWishListData(watchList);
      } catch (error) {
        console.error('Error fetching wish list data:', error);
      }
    };

    fetchWishListData();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri:
            (wishListData.length > 0 &&
              `https://image.tmdb.org/t/p/w500/${wishListData[0]?.backdrop_path}`) ||
            user.coverPhoto,
        }}
        style={styles.coverPhoto}
        resizeMode="cover">
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri:
                (wishListData.length > 0 &&
                  `https://image.tmdb.org/t/p/w500/${wishListData[0]?.poster_path}`) ||
                user.profileImage,
            }}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.content}>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.devContainer}>
        <TouchableOpacity onPress={openLink}>
          <Text style={styles.developerText}>
            Make with ❤️ by Dhananjay Singh
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
    position: 'absolute',
    bottom: 5,
    left: 5,
    flex: 1,
    flexDirection: 'row',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  content: {
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  email: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#4267B2',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  developerText: {
    color: 'gray',
    textDecorationLine: 'underline',
  },
  devContainer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ProfileScreen;
