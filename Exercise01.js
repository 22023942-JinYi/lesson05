import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {FlatList} from "react-native";

const datasource = [
    {key: 'a'},
    {key: 'b'},
    {key: 'c'},
    {key: 'd'},
    {key: 'e'},
    {key: 'f'},
    {key: 'g'},
    {key: 'h'},
    {key: 'i'},
    {key: 'j'},
    {key: 'k'},
    {key: 'l'},
    {key: 'm'},
    {key: 'n'},
    {key: 'o'},
    {key: 'p'},
    {key: 'q'},
    {key: 'r'},
    {key: 's'},
    {key: 't'},
    {key: 'u'},
    {key: 'v'},
    {key: 'w'},
    {key: 'x'},
    {key: 'z'},
]

const renderItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

export default function Exercise01() {
    return (
            <View style={[styles.opacityStyle, styles.textStyle]}>
                <FlatList data={datasource} renderItem={renderItem} />
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
    }
})
