import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from "react-native-swiper"

import { ScaledSheet } from 'react-native-size-matters'
import SwiperElements from '../components/Onboarding/SwiperElements'
export default function Onboarding() {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper>
        <SwiperElements lottieSource="../assets/Animation - 1722453748208.json" text="You get in situation where this happen?" />
      </Swiper>
      <Pressable style={styles.homeBtn}>
        <Text style={styles.btnText}>
            Continue
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#22292f",
  },
  homeBtn: {
    width: "80%",
    paddingHorizontal: "50@s",
    paddingVertical: "15@vs",
    borderRadius: "10@ms",
    backgroundColor: "white",
    marginBottom: "40@vs"
  },
  btnText: {
    fontSize: "20@ms",
    color: "#22292f",
    textAlign: "center",
    fontWeight: "bold",
  }
})