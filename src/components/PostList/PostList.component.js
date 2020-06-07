import React, { useReducer } from 'react'
import PT from 'prop-types'
import { View, StyleSheet, FlatList, Text, Button, TouchableOpacity } from 'react-native';
import {useSpring, animated} from 'react-spring';
import PostListItem from '../PostListItem/PostListItem.component';

const AnimatedView = animated(View)

const styles = StyleSheet.create({
    container: {},
})

export default function PostList({data, favoriteList, onSetFavorite, onClick}) {
    
    const renderItem = ({ item, index }) => {
        const isFavorite = favoriteList.includes(item.id);
        const {id} = item;
        return (
            <TouchableOpacity onPress={() => onClick(id)}>
            <PostListItem item={item} onSetFavorite={onSetFavorite} isFavorite={isFavorite}/>
        </TouchableOpacity>
    )}

    const props = useSpring({opacity: 1, from: {opacity: 0}})

    return (
        <AnimatedView style={props}>
        <FlatList numColumns={2} data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </AnimatedView>
)
}
