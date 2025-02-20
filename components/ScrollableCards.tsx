import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollableCards() {
  return (
    <View>
      <Text style = {styles.headingText}>ScrollableCards</Text>
      <ScrollView horizontal={true} style = {styles.container}>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Hello</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Vinay</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>is</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Trying</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>React</Text>
        </View>
        <View style={[styles.card , styles.cardElevated]}>
            <Text>Native</Text>
        </View>
      </ScrollView>
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
      container: {
        padding: 6,
        margin :6
      },
      card:{
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 6,
      },
      cardElevated: {  
        backgroundColor: "#CAD",
        elevation: 4,
        shadowOffset :{
            width: 1,
            height : 1
        },
        shadowColor: "red",
        shadowOpacity: 0.9,
  

      },
})