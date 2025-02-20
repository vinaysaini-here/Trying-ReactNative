import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View >
      <Text style = {styles.headingText}>FancyCards</Text>
      <View style = {[styles.card ,styles.cardElevated]}>
        <Image 
        source={{
            uri:"https://images.pexels.com/photos/30146008/pexels-photo-30146008/free-photo-of-traditional-turkish-coffee-brewing-on-hot-coals.jpeg"
        }}  
        style ={styles.cardImage}      
        />
        <View style = {styles.cardBody}>
            <Text style = {styles.cardTitle}>Tea & Coffee</Text>
            <Text style = {styles.cardLabel}>Jaipur Special</Text>
            <Text style = {styles.cardDescription}>Tea and coffee are beloved beverages, offering rich flavors, energizing effects, and comforting daily rituals.</Text>
            <Text style = {styles.cardFooter}>Thanks</Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
   
        fontSize: 24,
        fontFamily:"sans-serif",
        fontWeight : "bold",
        paddingHorizontal: 10
      },
      card : {
        marginTop: 14,
        padding: 8,
        width : "100%",
        // height : "100%",
        borderRadius: 12,
        // backgroundColor: "#FBD28B",
        // elevation: 5,
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
      },
      cardElevated :{
        backgroundColor: "#FBD28B",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
      },
      cardImage: {
        
        height : 180,
        // width: 400
        marginBottom: 10,
      }
      ,
      cardBody : {
        // backgroundColor: "#f5f5f5",
        flex : 1 ,
        flexGrow : 1,
        paddingHorizontal: 16,
        paddingVertical: 8,

      },
      cardTitle : {
        fontSize: 18,
        fontWeight : "bold",
        marginBottom: 4,
      },
      cardLabel : {
        fontSize: 16,
        marginBottom: 4,
      },
      cardDescription : {
        color: "#2F363F",
        fontSize: 14,
        marginBottom: 4,
      },
      cardFooter: {
        fontSize: 16,
        marginBottom: 4,
      },
})