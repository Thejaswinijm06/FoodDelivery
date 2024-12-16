import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const DATA = [
  { id: '1', name: 'Quinoa fruit salad', price: '₦ 10,000', image: require('../assets/images/Group 20.png') },
  { id: '2', name: 'Tropical fruit salad', price: '₦ 10,000', image: require('../assets/images/Group 21.png') },
  { id: '3', name: 'Melon fruit salad', price: '₦ 10,000', image: require('../assets/images/Group 20.png') },
];

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hottest</Text>
        <Text style={styles.subHeaderText}>Popular</Text>
        <Text style={styles.subHeaderText}>New combo</Text>
        <Text style={styles.subHeaderText}>Top</Text>
      </View>

      {/* Scrollable Card Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {DATA.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 10,
    // alignItems:"center",
    // justifyContent:"center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 20,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#A8A8A8',
    marginRight: 20,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: '#FFF8F0',
    borderRadius: 20,
    width: 140,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    gap:10,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#FF8A00',
    fontWeight: '600',
    marginVertical: 5,
  },
  addButton: {
    backgroundColor: '#FF8A00',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;