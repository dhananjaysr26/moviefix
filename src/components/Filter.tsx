import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface GENRE {
  id: number;
  name: string;
}
interface FilterProps {
  genres: GENRE[];
}

const Filter: React.FC<FilterProps> = ({genres}) => {
  const active = 'All';
  return (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {genres.map((genre: GENRE, index: number) => (
          <TouchableOpacity
            key={genre.id}
            style={[
              styles.filterItem,
              active === genre.name && styles.active,
              index === 0 && styles.firstList,
            ]}>
            <Text style={styles.filterText}>{genre.name}</Text>
          </TouchableOpacity>
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
