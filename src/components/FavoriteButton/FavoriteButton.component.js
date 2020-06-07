import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { COLOR_BLACK, COLOR_PRIMARY, COLOR_PRIMARY_DARK, COLOR_WHITE, COLOR_TEXT } from '../../constants/colors';
const {width, height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: (width/4 - 20),
        marginVertical: 10,
        padding: 10,
        backgroundColor: COLOR_WHITE,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLOR_PRIMARY_DARK
    },
    label: {
        color: COLOR_TEXT
    },
})

const AnimatedView = animated(View)

function FavoriteButton({isFavorite, onSetFavorite, id}) {
    const [state, toggle] = useState(isFavorite)
    const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
    return (
        <TouchableOpacity onPress={() => {toggle(!state); onSetFavorite(id)}} style={[styles.container, {backgroundColor: isFavorite? COLOR_PRIMARY: COLOR_WHITE}]}>
<AnimatedView
    style={{
        opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] })
    }}>
    <Text style={styles.label}>{isFavorite? "Liked": "Like"}</Text>
    </AnimatedView>
    </TouchableOpacity>
)
}

export default FavoriteButton
