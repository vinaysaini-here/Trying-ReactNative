import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Profile Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Recent Projects</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/30146008/pexels-photo-30146008/free-photo-of-traditional-turkish-coffee-brewing-on-hot-coals.jpeg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContainer}>
          <Text style={styles.cardLabel} numberOfLines={2}>
            Recent Projects Build by me in MERN Stack
          </Text>
          <View style={styles.Footer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://buybookonline.onrender.com/')
              }>
              <Text style={styles.actionButton}>BuyBookOnline</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openWebsite('https://chatbox-l4rc.onrender.com/')}>
              <Text style={styles.actionButton}>ChatBox</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: '100%',
    height: 350,
    borderRadius: 6,
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  cardElevated: {
    backgroundColor: '#dcdcdc',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {
    width: '100%',
    height: 180,
    borderRadius: 6,
  },
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#dcdcdc',
    borderRadius: 6,
  },
  cardLabel: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  Footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  actionButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginVertical: 10,
  },
});
