import React, { useContext} from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import GET_POST_BY_ID from "../_queries/getPostByID";
import { useQuery } from '@apollo/react-hooks';
import { COLOR_BLACK, COLOR_PRIMARY, COLOR_WHITE, COLOR_TEXT } from '../constants/colors';
import {h2, h3, h4} from '../constants/fontSize';
import { setFavorite,removeFavorite, AppContext } from '../_contexts/app.context';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton.component';

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    heading: {
        color: COLOR_TEXT,
        paddingVertical: 10,
        fontSize: h2,
        fontWeight: '600'
    }, date: {
        color: COLOR_TEXT,
        fontSize: h4,
        fontWeight: '400'
    },
    description: {
        paddingVertical: 10,
        color: COLOR_TEXT,
        fontSize: h2,
        fontWeight: '400',
        lineHeight: 20
    }, profileImage: {
        marginVertical: 20,
       height: 50,
        width: 50,
        borderRadius: 25,
        borderColor: COLOR_TEXT,
        borderWidth: 1
    }
})

function RenderPost({id, isFavorite, onSetFavorite}) {
    const { loading, error, data } = useQuery(GET_POST_BY_ID, {
        variables: { id },
    });

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;
    const {post} = data;
    const {user, title, date, desc} = post;
    const {profilePicture, firstname} = user;
    return <View>
        <Text style={styles.heading}>
    {title}
        </Text>
        <View style={styles.button}>
        <Text style={styles.date}>
        {date}
        </Text>
        <FavoriteButton isFavorite={isFavorite} onSetFavorite={onSetFavorite} id={id}/>
        </View>
        <Text style={styles.description}>
        {desc}
        </Text>
        <View>
        <Text style={styles.date}>
        {'Posted by: '}
        </Text>
            <Image style={styles.profileImage} source={{uri: profilePicture}}/>
    <Text style={styles.heading}>
        {firstname}
        </Text>
        </View>

        </View>
}


export default function DetailsScreen({ navigation, route }) {
    const [{favoriteList}, dispatch] = useContext(AppContext)
    const { postId } = route.params;

    const isFavorite = favoriteList.includes(postId);
    const onSetFavorite = (id) => {
        favoriteList.includes(id) ? dispatch(removeFavorite(id)): dispatch(setFavorite(id))
    }
    return (
       <View style={styles.container}>
        <RenderPost id={postId} isFavorite={isFavorite} onSetFavorite={onSetFavorite}/>
        </View>
)
}
