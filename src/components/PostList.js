import React, { useReducer } from 'react'
import PT from 'prop-types'
import { View, StyleSheet, FlatList, Text, Button, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    container: {},
})

export default function PostList({data, favoriteList, onSetFavorite, onClick}) {
    const renderItem = ({ item, index }) => {
        const isFavorite = favoriteList.includes(item.id);
        const {id} = item;
        return (
            <TouchableOpacity onPress={() => onClick(id)}>
            <Text>{item.title}</Text>
        <Button onPress={() => onSetFavorite(id)} title={isFavorite? "Liked": "Like"}/>
        </TouchableOpacity>
    )
    }

    return (
        <View style={[styles.container]}>
<FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
)
}
