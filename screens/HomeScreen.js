import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'
import { StyleSheet } from 'react-native'


class HomeScreen extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <Swiper cards={HomeScreenPics}
                    renderCard={Card}
                    infinite //looping cards infinitely
                    backgroundColor="white"
                    cardHorizontalMargin={0}
                    stackSize={2} //number of cards shown in background
                />
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
});

export default HomeScreen