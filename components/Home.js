import React from 'react';
import colors from '../assets/colors/colors'
import { View, ScrollView, Image, Text, SafeAreaView, StyleSheet, Platform, StatusBar, FlatList } from 'react-native';
import { Feather, AntDesign, FontAwesome, Entypo, MaterialCommunityIcons } from 'react-native-vector-icons'
import tournamentsData from '../assets/data/tournamentsData'
import sportsCategoriesData from '../assets/data/sportsCategories';
import tournamentEventData from '../assets/data/tournamentEventData';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default Home = () => {
    const imagex = require('../assets/images/Arsenal_FC.png');
    const renderTournamentsItem = ({ item }) => {
        return (
            <View style={[styles.tournamentsItemWrapper, {
                backgroundColor: item.id % 2 == 0 ? 'black' : colors.primary
            }]}>
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
            <ScrollView contentInsetAdjustmentBehavior='automatic'>
                <SafeAreaView >
                    <View style={styles.headerWrapper}>
                        <Text style={styles.greetText}>Hello,</Text>
                        <View style={styles.userWrapper}>
                            <Text style={styles.userNameText}>Ryan Mercurio</Text>
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
                {/* Tournament Events */}
                {tournamentEventData.map((item) => (
                    <View key={item.id} style={[styles.tournamentEventCard, {
                        marginTop: item.id == 1 ? 24 : 16
                    }]}>
                        <View style={styles.teamOne}>
                            <Image source={item.teamLogo1} style={styles.teamLogo}></Image>
                            <Text style={styles.teamName}>{item.teamName1}</Text>

                            <View style={styles.oddsBox}>
                                <Text style={styles.oddsText}>1.8</Text>
                            </View>

                        </View>
                        <View style={styles.scoreBoard}>
                            <Text style={styles.eventNameText}>{item.eventName}</Text>
                            <Text style={styles.scores}>1:2</Text>
                            <View style={styles.timer}>
                                <FontAwesome name='circle' size={8} color={colors.primary}></FontAwesome>
                                <Text style={styles.time}>49:30</Text>
                            </View>
                            <View style={styles.oddsBox}>
                                <Text style={styles.oddsText}>1.8</Text>
                            </View>
                        </View>
                        <View style={styles.teamOne}>
                            <Image source={item.teamLogo2} style={styles.teamLogo} ></Image>
                            <Text style={styles.teamName} > {item.teamName2}</Text>
                            <View style={styles.oddsBox}>
                                <Text style={styles.oddsText}>1.8</Text>
                            </View>
                        </View>
                    </View>
                ))
                }


            </ScrollView>

        </View >
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
    },
    tournamentEventCard: {
        flexDirection: 'row',
        backgroundColor: colors.gray,
        marginHorizontal: 32,
        shadowColor: color.gray,
        borderRadius: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    teamOne: {
        alignItems: 'center'
    },
    teamLogo: {
        //marginLeft: 34,
    },
    teamName: {
        marginTop: 7,
    },
    oddsBox: {
        marginTop: 13,
        //marginBottom: 16,
        backgroundColor: colors.backgroundGray,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderRadius: 10,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
        width: 83,
        alignItems: 'center'

    },
    oddsText: {
        marginVertical: 10,
    },
    scoreBoard: {
        alignItems: 'center'
    },
    eventNameText: {
        fontSize: 10,
        color: colors.black,
    },
    scores: {
        marginTop: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    timer: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        fontSize: 10,
        marginLeft: 5
    },


})