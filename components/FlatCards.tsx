import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style = {styles.headingText}>FlatCards</Text>
      <View style = {styles.Container}>
        <View style={[styles.Card , styles.Card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.Card , styles.Card2]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.Card , styles.Card3]}>
          <Text>Blue</Text>
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
  Container : {
    flexDirection: "row",
    padding: 8,
  },
  Card : {
    width: 95,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 6,
  },
  Card1 : {
    backgroundColor: "#EF5354",
   
  },
  Card2: {
    backgroundColor: "#7CEC9F",
  },
  Card3: {
    backgroundColor:"#25CCF7"
  },

})