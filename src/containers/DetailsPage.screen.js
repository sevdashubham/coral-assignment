import React, { useContext} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import GET_POST_BY_ID from "../_queries/getPostByID";
import { useQuery } from '@apollo/react-hooks';
import { setFavorite,removeFavorite, AppContext } from '../_contexts/app.context';

const styles = StyleSheet.create({
    header: {
        marginTop: 100,
    },

    button: {
        marginTop: 50,
    },

    textMargin: {
        marginTop: 20,
    },
})

function RenderPost({id, isFavorite, onSetFavorite}) {
    const { loading, error, data } = useQuery(GET_POST_BY_ID, {
        variables: { id },
    });

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;
    console.log(data);
    const {post} = data;
    return <View>
        <Text>
        `${post.title}: ${post.date}`
        </Text>
    <Button onPress={() => onSetFavorite(id)} title={isFavorite? "Liked": "Like"}/>
        </View>
}


export default function DetailsScreen({ navigation, route }) {
    const [{favoriteList}, dispatch] = useContext(AppContext)
    const { postId } = route.params;

    const onSetFavorite = (id) => {
        favoriteList.includes(id) ? dispatch(removeFavorite(id)): dispatch(setFavorite(id))
    }
    return (
       <View>
        <RenderPost id={postId} isFavorite={favoriteList.includes(postId)} onSetFavorite={onSetFavorite}/>
        </View>
)
}
