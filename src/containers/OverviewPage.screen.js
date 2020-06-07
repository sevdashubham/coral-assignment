import React, { useContext, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import GET_POSTS from "../_queries/getPosts";
import { setFavorite,removeFavorite, AppContext } from '../_contexts/app.context';
import PostList from '../components/PostList/PostList.component';

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
    },

    button: {
        marginTop: 50,
    },

    textMargin: {
        marginTop: 20,
    },
})

export default function OverviewScreen({ navigation }) {
    const [{favoriteList}, dispatch] = useContext(AppContext)
    let page = 1;


    const { loading, error, data } = useQuery(GET_POSTS, {
        variables: { page },
    });

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;
    const {posts} = data;

    const onSetFavorite = (id) => {
        favoriteList.includes(id) ? dispatch(removeFavorite(id)): dispatch(setFavorite(id))
    }

    const onClick = (id) => {
        navigation.navigate('Details', {
            postId: id
        })
    }

    return (
        <View>
        <PostList data={posts} favoriteList={favoriteList} onSetFavorite={onSetFavorite} onClick={onClick}/>
        </View>
)

}
