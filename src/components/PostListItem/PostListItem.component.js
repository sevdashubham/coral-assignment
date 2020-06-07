import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import FavoriteButton from '../FavoriteButton/FavoriteButton.component';
import { COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE, COLOR_TEXT } from '../../constants/colors';
import {h2, h4} from '../../constants/fontSize';
const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: (width/2 - 20),
        marginVertical: 10,
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: COLOR_WHITE,
        borderRadius: 4,
        shadowColor: COLOR_BLACK,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        shadowOpacity: 0.2
    },
    label: {
        marginTop: 10,
        color: COLOR_TEXT,
        fontSize: h2,
        fontWeight: '600'
    },
    labelTime: {
        color: COLOR_TEXT,
        paddingVertical: 10,
        fontSize: h4,
        fontWeight: '400'
    }, image: {
        height: height/6
    }
})


export default function PostListItem({item, onSetFavorite, isFavorite}) {
    const {id} = item;
    return (
        <View style={styles.container}>
        <View>
        <Image style={styles.image}
    source={{
        uri: item.image
    }}/>
<Text style={styles.label}>{item.title}</Text>
        <Text style={styles.labelTime}>{item.date}</Text>
        </View>
    <FavoriteButton isFavorite={isFavorite} onSetFavorite={onSetFavorite} id={id}/>
    </View>
    )
}
