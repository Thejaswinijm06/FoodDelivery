import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For search icon
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // For filter icon

const SearchBar = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search" size={18} color="#333333" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search for fruit salad combos"
          placeholderTextColor="#B6B6C0"
        />
      </View>

      {/* Filter Button */}
      <TouchableOpacity style={styles.filterButton}>
        <FontAwesome5 name="sliders-h" size={20} color="#2C2C2C" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor : '#FFFFFF'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F7F9',
    borderRadius: 15,
    paddingHorizontal: 10,
    flex: 1,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
    color: '#333333',
  
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
  },
  filterButton: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    elevation: 3, // Adds a shadow effect
  },
});

export default SearchBar;
