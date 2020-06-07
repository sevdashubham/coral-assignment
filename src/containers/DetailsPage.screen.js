import React from 'react'
import { StyleSheet, View } from 'react-native'
import GET_POST_BY_ID from "../_queries/getPostByID";
import { useQuery } from '@apollo/react-hooks';

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

export default function DetailsScreen({ navigation }) {

    return (
       <View/>
)
}
