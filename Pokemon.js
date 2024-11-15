import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, SectionList, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/FontAwesome6";

const datasource = [
    { data: [
            { name: 'Bulbasaur', image: require('./img/bulbasaur.png') },
            { name: 'Caterpie', image: require('./img/caterpie.png') }
        ], pokemonType: "Grass", bgcolor: "#92b75d" },
    { data: [
            { name: 'Flareon', image: require('./img/Flareon.png') },
            { name: 'Vulpix', image: require('./img/vulpix.png') }
        ], pokemonType: "Fire", bgcolor: "#e0644c" },
    { data: [
            { name: 'Pidgey', image: require('./img/pidgey.png') },
            { name: 'Rattata', image: require('./img/rattata.png') }
        ], pokemonType: "Normal", bgcolor: "#ccc4c3" },
    { data: [
            { name: 'Poliwag', image: require('./img/poliwag.png') },
            { name: 'Squirtle', image: require('./img/squirtle.png') }
        ], pokemonType: "Water", bgcolor: "#54b4e4"},
];

const renderItem = ({ item }) => (
    <TouchableOpacity>
        <View style={[{ flexDirection: 'row', alignItems: 'center' }, styles.cardStyle]}>
            <Text>{item.name}</Text>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.imageStyle} />
            </View>
        </View>
    </TouchableOpacity>
);

const renderSectionHeader = ({ section }) => (
    <View>
        <Text style={[styles.headerText, { backgroundColor: section.bgcolor }]}>
            {section.pokemonType}
        </Text>
    </View>
);

export default function Pokemon() {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Button
                    title="ADD POKEMON"
                    color="#2296f3"
                />
            </View>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => item.name + index}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    cardStyle: {
        backgroundColor: '#e4e4f4',
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        borderWidth: 1
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        textAlign: 'center',
        color: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        borderBottomWidth: 1,
        marginBottom: 10
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
});





