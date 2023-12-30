import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

interface FilterProps {
  genres: string[];
}

const Filter: React.FC<FilterProps> = ({genres}) => {
  const active = 'All';
  return (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {genres.map((genre, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.filterItem, active === genre && styles.active]}>
            <Text style={styles.filterText}>{genre}</Text>
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
    borderRadius: 12,
    backgroundColor: '#f0283c',
    marginLeft: 20,
    // marginRight: 10,
  },
  filterText: {
    color: '#f3f4f6',
    fontSize: 16,
  },
  active: {
    backgroundColor: '#484848',
  },
});
