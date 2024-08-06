import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native'
import { ScaledSheet } from 'react-native-size-matters'
export default function SwiperElements({lottieSource, text}) {
  return (
    <View style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }}>
      <Lottie 
        source={require("../../assets/Animation - 1722453748208.json")}
        style={styles.lottie}
        loop={true}
        autoPlay
        speed={1.75}
       />
       <Text style={styles.txt}>
            {text}
        </Text>
    </View>
  )
}

const styles = ScaledSheet.create({
   lottie: {
    width: "300@s",
    height: "300@vs",
   },
   txt: {
    fontSize: '30@ms',
    color: "white",
    maxWidth: "300@s",
    textAlign: "center",
    marginTop: "10@vs"
   }
})