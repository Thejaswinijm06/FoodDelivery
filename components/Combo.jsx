import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For heart icons

const RecommendedCombo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Recommended Combo</Text>
      <View style={styles.comboContainer}>
        
        <View style={styles.comboCard}>
          <Image
            source={require('../assets/images/Group 31.png')} // Local image reference
            style={styles.comboImage}
          />
           <TouchableOpacity style={styles.heartIcon}>
            <Icon name="heart-o" size={20} color="#F79F1A" />
            </TouchableOpacity>
          <Text style={styles.comboTitle}>Honey lime combo</Text>
          <Text style={styles.comboPrice}>₦ 2,000</Text>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.comboCard}>
          <Image
            source={require('../assets/images/Group 32.png')}
            style={styles.comboImage}
          />

          
            <Icon name="heart-o" size={20} color="#F79F1A" style={styles.heartIcon} />
          
          <Text style={styles.comboTitle}>Berry mango combo</Text>
          <Text style={styles.comboPrice}>₦ 8,000</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    height: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '600',
    fontWeight: 'bold',
    color: '#2C2C2C',
    marginBottom: 20,
    textAlign: 'left',
  },
  comboContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  comboCard: {
    backgroundColor: '#FFF8F0',
    borderRadius: 20,
    width: 160,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,

    //position: 'relative',
  },
  comboImage: {
    width: 100,
    height: 120,
    borderRadius: 60,
  },
  heartIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },

  comboTitle: {
    fontSize: 14,
    
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  comboPrice: {
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
  addText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecommendedCombo;