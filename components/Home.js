import React from 'react';
import colors from '../assets/colors/colors'
import { View, Image, Text, SafeAreaView, StyleSheet, Platform, StatusBar, FlatList } from 'react-native';
import { Feather, AntDesign, Entypo, MaterialCommunityIcons } from 'react-native-vector-icons'
import tournamentsData from '../assets/data/tournamentsData'
import sportsCategoriesData from '../assets/data/sportsCategories';
export default Home = () => {
    const imagex = require('../assets/images/Arsenal_FC.png');
    const renderTournamentsItem = ({ item }) => {
        return (
            <View style={styles.tournamentsItemWrapper}>
                <Text style={styles.itemTitle}>{item.eventTitle}</Text>
                <Image source={item.image} style={styles.imageItem}></Image>
            </View>
        );
    }
    const renderSportsCategoriesItem = ({ item }) => {
        return (
            <View style={[styles.sportsCategoriesItem, {
                marginLeft: item.selected ? 32 : 0,
                backgroundColor: item.selected ? colors.black : colors.gray,
            }]}>
                <MaterialCommunityIcons
                    name={item.sportsIconName}
                    size={20}
                    color={item.selected ? colors.white : colors.textLight}
                />
                <Text style={[styles.sportsName,
                {
                    display: item.selected ? 'flex' : 'none',
                    color: item.selected ? colors.white : colors.textLight
                }]}> {item.sportsName} </Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <SafeAreaView >
                <View style={styles.headerWrapper}>
                    <Text style={styles.greetText}>Hello,</Text>
                    <View style={styles.userWrapper}>
                        <Text style={styles.userNameText}>WADE WARREN</Text>
                        <AntDesign name='plussquare' size={32} color={colors.primary} ></AntDesign>
                    </View>
                    <View style={styles.searchBoxWrapper}>
                        <Feather name='search' size={16} ></Feather>
                        <Text style={styles.searchText}>Search by events, teams</Text>
                    </View>
                </View>
            </SafeAreaView>
            {/* Tournament */}
            <View style={styles.tournamentWrapper}>
                <Text style={styles.tournamentText}>Tournaments</Text>
                <FlatList
                    data={tournamentsData}
                    renderItem={renderTournamentsItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}>
                </FlatList>
            </View>
            {/* Top Events */}
            <View style={styles.eventsWrapper}>
                <Text style={styles.eventText}>Top Events</Text>
                <View style={styles.liveWrapper}>
                    <Text style={styles.liveText}>
                        LIVE
                    </Text>
                    <Entypo name='switch' size={24} color={colors.primary} style={styles.switchIcon}>

                    </Entypo>
                </View>
            </View>
            <View stlye={styles.sportsCategoriesWrapper}>
                <FlatList
                    data={sportsCategoriesData}
                    renderItem={renderSportsCategoriesItem}
                    keyExtractor={(item) => item.id}
                    horizontal={true}>
                </FlatList>
            </View>

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    headerWrapper: {
        marginTop: 40,
        marginHorizontal: 32,
    },
    greetText: {
        fontSize: 18,
    },
    userWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    userNameText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchBoxWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.gray,
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 16,
        paddingHorizontal: 12
    },
    searchText: {
        padding: 12,
        alignItems: 'center',
        fontSize: 12
    },
    tournamentWrapper: {
        marginLeft: 32,
        marginTop: 12,
    },
    tournamentText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    tournamentName: {
        backgroundColor: 'green',
        height: 150,
        width: 150
    },
    tournamentsItemWrapper: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        marginRight: 12,
        width: 270,
        marginTop: 14,
        justifyContent: 'space-between',
        borderRadius: 10
    },
    itemTitle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        color: colors.white,
        maxWidth: 140,
        paddingLeft: 24,
        paddingBottom: 32,
    },
    imageItem: {
        marginTop: -14
    },
    eventsWrapper: {
        flexDirection: 'row',
        marginHorizontal: 32,
        marginTop: 20,
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    eventText: {
        fontSize: 16,
        color: colors.textLight,
        fontWeight: 'bold',
    },
    liveWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    liveText: {
        fontSize: 16,
        marginRight: 8,
        fontWeight: 'bold'
    },
    sportsCategoriesWrapper: {
        marginLeft: 32
    },
    sportsCategoriesItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        marginRight: 12,
        borderRadius: 10
    },
    sportsName: {
        paddingLeft: 6
    }

})