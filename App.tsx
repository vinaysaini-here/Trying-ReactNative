import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ScrollableCards from './components/ScrollableCards'
import FancyCards from './components/FancyCards'

const App = () => {
  return (

    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ScrollableCards/>
      <FancyCards/>
      <FancyCards/>
      <FancyCards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App