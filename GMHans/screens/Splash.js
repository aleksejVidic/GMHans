import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Animated } from 'react-native'
import React, {useRef, useEffect} from 'react'
import Lottie from 'lottie-react-native'
import {ScaledSheet} from "react-native-size-matters"
import { useNavigation } from "@react-navigation/native"
export default function Splash() {

    const navigation = useNavigation();
    const lottieAnimation = useRef(null);
    const animation = useRef(new Animated.Value(0)).current;

    const toOnboardingScreen = () => {
        navigation.replace("Onboarding");
    }
    useEffect(() => {
        lottieAnimation.current?.play();
        Animated.timing(animation, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start();
        return () => {
            lottieAnimation.current?.pause();
        }
    }, [])
  return (
    <SafeAreaView
        style={styles.container}
    >
        <StatusBar />
        <View style={{
            alignItems: "center",
            position: "relative",
        }}>
            <Lottie 
                source={require("../assets/Animation - 1722194536837.json")}
                speed={1}
                onAnimationFinish={toOnboardingScreen}
                style={styles.lottie}
                ref={lottieAnimation}
                loop={false}
            />
            <Animated.Image 
                source={require("../assets/50441ae2-251e-4e9f-899a-cd0d3e5d48cc.png")}
                resizeMode='contain'
                style={[styles.logo, {
                    opacity: animation
                }]}
            />
        </View>
    </SafeAreaView>
  )
}

const styles = ScaledSheet.create({
    container: {
        backgroundColor: "#22292f",
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    lottie: {
        width: "200@s",
        height: "200@vs",
        marginBottom: "100@vs"

    },
    logo: {
        width: "100@s",
        height: "100@vs",
        position: "absolute",
        top: "150@vs"
        
    }
})