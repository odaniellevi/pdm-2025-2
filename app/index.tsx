import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text } from "react-native";

export default function IndexNeymar() {

  return (
    <LinearGradient
      colors={["#000000ff", "#a30000ff", "#000000ff"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >

      <Stack.Screen
      options={{
        title: "Perfil",
      }}
     />
      
      <Image style={styles.image} source={require("../assets/images/daniel.png")} />
      <Text style={styles.title}>Daniel Levi</Text>
      <Text style={styles.text}>
        Me chamo Daniel, tenho 19 anos e sou estudante do curso tecnólogo de Sistemas para Internet na Universidade Católica de Pernambuco.
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#760404ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#ffffffff",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },
});
