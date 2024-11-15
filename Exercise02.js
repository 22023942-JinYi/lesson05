import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity, SectionList} from 'react-native';
import React, { useState } from 'react';
import {FlatList} from "react-native";



const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
    title:"Vowels"},
    {data:[
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'z'}
        ],
        title: "Consonants"}
];

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const renderSectionHeader = ({ section: { title } }) => {
    const headerStyle = title === "Vowels" ? styles.vowelHeader : styles.consonantHeader;
    return (
        <Text style={[styles.headerText, headerStyle]}>{title}</Text>
    );
};


export default function Exercise01() {
        return (
        <View style={[styles.textStyle]}>
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader = {renderSectionHeader}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left'
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
        fontWeight: 'bold',
    },
    vowelHeader:{
        backgroundColor: '#88ccec'
    },
    consonantHeader: {
        backgroundColor: '#f8e48c'
    }
})
