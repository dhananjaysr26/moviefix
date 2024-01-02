import React from 'react';
import MovieCard from './MovieCard';
import {StyleSheet, View} from 'react-native';

interface RenderTwoColumnProps {
  index: number;
  item: any;
  section: any;
}

const RenderTwoColumn: React.FC<RenderTwoColumnProps> = ({
  index,
  item,
  section,
}: any) => {
  if (index % 2 === 0) {
    const nextItem = section.data[index + 1];
    // console.log(item.title, nextItem.title);
    return (
      <View style={styles.cardContainer}>
        <MovieCard item={item} key={item?.title} />
        {nextItem && <MovieCard item={nextItem} key={nextItem?.title} />}
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default RenderTwoColumn;
