import React from 'react';
import colors from '../assets/colors/colors'
import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

export default Home = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView >
                <View style={styles.headerWrapper}>
                    <Text>Home Page</Text>
                </View>
            </SafeAreaView>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerWrapper: {}
})