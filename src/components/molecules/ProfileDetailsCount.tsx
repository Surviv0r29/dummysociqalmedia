import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../atoms/Text';
import Icon from 'react-native-vector-icons/FontAwesome';

interface DetailCountprops {
  iconame: string;
  name: string;
  onPress?: ()=>void;
}

const DetailsCount: React.FC<DetailCountprops> = ({iconame, name,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{flexDirection: 'row',marginEnd:10,marginBottom:14}}>
      <Icon name={iconame} size={16} style={styles.icon} color="black" />
      <Text style={styles.icontext}>{name}</Text>
    </View>
    </TouchableOpacity>
    
  );
};
const styles = StyleSheet.create({
  icontext: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'black',
  },
  icon: {
    bottom: -11,
    right: 4,
  },
});
export default DetailsCount;
