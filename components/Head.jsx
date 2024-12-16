import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerContainerInner}>
            
                {/* Menu Icon */}
                <TouchableOpacity>
                <Image
                        source={require('@/assets/images/Group 4.png')} // Replace with your basket icon URI
                        style={styles.icon}
                    />
                    </TouchableOpacity>

                {/* Basket Icon */}
                <TouchableOpacity >
                    <Image
                        source={require('@/assets/images/Group 25.png')} // Replace with your basket icon URI
                        style={styles.basketIcon}
                    />
                </TouchableOpacity>
            </View>


            {/* Greeting Text */}
            <View style={styles.textContainer}>
                <Text style={styles.greeting}>
                    Hello Kante, <Text style={styles.boldText}>What fruit salad combo do you want today?</Text>
                </Text>
            </View>


        </View> 
    );
}

const styles = StyleSheet.create({
    headerContainer: {
    backgroundColor: '#FFFFFF', 
        paddingHorizontal: 10,
        paddingTop: 0,
        paddingBottom : 0,
    },
    headerContainerInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    menuIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuLine: {
        width: 20,
        height: 3,
        
        marginVertical: 2,
        borderRadius: 2,
    },
    textContainer: {
        width: "80%",
        marginHorizontal: 'auto',
        marginVertical: 20
    },
    greeting: {
        fontSize: 16,
    },
    boldText: {
    },
    basketIcon: {
        width: 60,
        height: 60,
    },
    basketText: {
        fontSize: 12,
        marginTop: 5,
    },
    icon: {
        width: 20,
        height: 10
    }
});