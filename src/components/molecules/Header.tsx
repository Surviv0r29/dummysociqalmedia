import React from "react";
import { View, StyleSheet, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
import Text from "../atoms/Text";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface HeaderActionsProps {
    onEditPress?: () => void;
    onSettingsPress?: () => void;
    iconShown:boolean
  }
  
  const Header: React.FC<HeaderActionsProps> = ({ onEditPress,onSettingsPress,iconShown=true}) => {
    const navigaton = useNavigation()
    return (
      <View style={styles.buttonContainer}>
        {!iconShown&&<TouchableOpacity onPress={()=>{
            navigaton.goBack()
        }}><Icon name={"long-arrow-left"} size={24}  color="black" /></TouchableOpacity> }
        <View style={[styles.headertext,{ left:!iconShown?Dimensions.get("screen").width *0.01:Dimensions.get("screen").width *0.34}]}>
            <Text style={{ 
                fontSize: 20,
                fontWeight: 'bold',
                color:"black",
             }}>Socioflake</Text>
        </View>
       {iconShown?<View style={styles.action}> 
        <Icon name={"pencil"} size={24}  color="black" /> 
        <Icon name={"gear"} size={24} style={{ marginLeft:10 }} color="black" /> 
        </View>:<View/>}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    action:{
        flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf:"flex-end"
    },
    headertext: {
        alignSelf:"center",
       
    },

    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    //   marginTop: 8,
    
    paddingVertical:10
    },
  });
  
  export default Header;



