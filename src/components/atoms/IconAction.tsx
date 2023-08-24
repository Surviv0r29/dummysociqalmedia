import React from 'react';
import { TouchableOpacity, Text,StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
interface IconActionProps {
  iconName: string;
  text: string;
  onPress: () => void;
}

const IconAction: React.FC<IconActionProps> = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={iconName} size={24} color="black" /> 
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    text: {
      fontSize: 16,
      marginLeft: 4,
      color: 'black',
    },
  });
export default IconAction;
