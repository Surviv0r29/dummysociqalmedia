import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Text from "../atoms/Text";
import FriendListItem from "../molecules/FriendListItem";
import Header from "../molecules/Header";
interface FreindlistProps {
    freinds: string[];
}

const FreindList : React.FC<FreindlistProps> = ({freinds})=>{
    return <ScrollView style={styles.container}>
    <Header
       
        iconShown={false}
      />
      <Text style={styles.sectionHeader}>Friends</Text>
      {freinds.map((frirend, index) => (
        <FriendListItem name={frirend} profileImage={"https://www.whatsappimages.in/wp-content/uploads/2022/03/New-Best-Joker-WhatsApp-DP-Pics-Images.jpg"}/>
      ))}
    </ScrollView>
}
const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
      },
      container:{
        flex: 1,
        padding: 16,
      },
      
})
export default FreindList;