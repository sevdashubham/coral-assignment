import React from 'react'
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

function RenderPosts() {
    let page = 1;
    React.useReducer
    const { loading, error, data } = useQuery(GET_POSTS, {
        variables: { page },
    });

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error :(</Text>;
    console.log(data);
    return data.posts.map(({ title, date }) => (
        <View>
        <Text>
        `${title}: ${date}`
        </Text>
        </View>
    ));
}

export default function OverviewScreen({ navigation }) {

    return (
        <View>
        <RenderPosts/>
        <Button
    title="Go to Details"
    onPress={() => navigation.navigate('Details')}
    />
        </View>
)
}
