import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useGenreContext} from '../../provider/MoviesProvider';

interface GENRE {
  id: number;
  name: string;
}
interface FilterProps {
  genres: GENRE[];
}

const FilterItem = ({
  genre,
  isSelected,
  onPress,
  additionalStyles = {},
}: {
  genre: GENRE;
  isSelected: boolean;
  onPress: (genre: GENRE) => void;
  additionalStyles?: any;
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(genre)}
      key={genre.id}
      style={[
        styles.filterItem,
        isSelected && styles.active,
        additionalStyles,
      ]}>
      <Text style={styles.filterText}>{genre.name}</Text>
    </TouchableOpacity>
  );
};

const Filter: React.FC<FilterProps> = ({genres}) => {
  const {selectedGenre, setSelectedGenre} = useGenreContext();
  const handleOnPressFilter = (genre: GENRE) => {
    setSelectedGenre(genre);
  };

  return (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FilterItem
          key={0}
          onPress={handleOnPressFilter}
          isSelected={selectedGenre?.id === 0}
          genre={{id: 0, name: 'All'}}
          additionalStyles={styles.firstList}
        />
        {genres.map((genre: GENRE) => (
          <FilterItem
            key={genre.id}
            onPress={handleOnPressFilter}
            isSelected={genre.id === selectedGenre?.id}
            genre={genre}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  filterContainer: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  filterItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: '#f0283c',
    marginLeft: 5,
    // marginRight: 10,
  },
  filterText: {
    color: '#f3f4f6',
    fontSize: 16,
  },
  active: {
    backgroundColor: '#484848',
  },
  firstList: {
    marginLeft: 20,
  },
});
