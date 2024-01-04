import AsyncStorage from '@react-native-community/async-storage';
import {WatchListKEY} from '../utils/config';

export const addOrRemoveFromList = async (item: any) => {
  try {
    const existingList = await AsyncStorage.getItem(WatchListKEY);
    let updatedList = [];
    // console.log({existingList});
    if (existingList) {
      updatedList = JSON.parse(existingList);
      //   console.log({updatedList});
      const index = updatedList.findIndex(
        (listItem: any) => listItem.key === item.key,
      );
      if (index !== -1) {
        updatedList.splice(index, 1);
        console.log('removed.');
      } else {
        updatedList.push(item);
        console.log('added');
      }
    } else {
      updatedList.push(item);
      console.log('added');
    }
    // console.log('---->Before Push', {updatedList});
    await AsyncStorage.setItem(WatchListKEY, JSON.stringify(updatedList));
  } catch (error) {
    console.error('Error adding/removing item from the list:', error);
  }
};

export const getWatchListFromStorage = async () => {
  try {
    const result = await AsyncStorage.getItem(WatchListKEY);
    if (result !== null) {
      return JSON.parse(result);
    }
    return [];
  } catch (error) {
    console.error('Error while getting watchList from local Storage', error);
    return [];
  }
};
