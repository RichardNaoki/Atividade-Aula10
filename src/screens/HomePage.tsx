import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get('window');

const HomePage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.indicatorContainer}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
        <Text style={styles.title}>
          Veja como está o tempo ao redor do mundo
          <Text style={styles.earthEmoji}>🌎</Text>
        </Text>
        <Text style={styles.subtitle}>Comece agora gratuitamente</Text>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Weather" as never)}
          >
            <Text style={styles.buttonText}>Vamos lá</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>
            Já tem uma conta? <Text style={styles.loginLink}>Log in</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6151C3",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 20,
    width: '90%', 
    maxWidth: 350, 
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minHeight: 10,
    maxHeight: 300,
    justifyContent: "space-between",
  },
  title: {
    fontSize: width > 350 ? 18 : 14, 
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    textAlign: "center",
  },
  earthEmoji: {
    fontSize: width > 350 ? 16 : 13,
    fontStyle: "normal",
    marginBottom: 16,
  },
  subtitle: {
    color: "#888",
    marginBottom: 60,
    fontSize: width > 350 ? 14 : 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#6151C3",
    padding: 16,
    borderRadius: 30,
    marginBottom: 5,
    width: "100%",
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "normal",
    fontSize: width > 350 ? 16 : 13, 
    textAlign: "center",
  },
  loginText: {
    color: "#888",
    marginBottom: 50,
    fontSize: width > 350 ? 14 : 10,
    textAlign: "center",
  },
  loginLink: {
    color: "#6151C3",
    fontSize: width > 350 ? 14 : 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
    padding: 2,
  },
  activeDot: {
    backgroundColor: "#6151C3",
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  bottomContainer: {
    alignItems: "center",
    width: "100%",
  },
});

export default HomePage;