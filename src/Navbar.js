import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    ) 
}
const styles = StyleSheet.create({
    navbar: {
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A19D',
    },
    text: {
        marginTop:5,
        fontSize: 20,
        color: '#fff',
    }
})