import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions,} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import WeatherCard from "../components/WeatherCard";
import { useNavigation, NavigationProp } from "@react-navigation/native";

const { width } = Dimensions.get("window");

type RootStackParamList = {
  Search: undefined;
  Weather: undefined;
};

const WeatherPage: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá User,</Text>
          <Text style={styles.greeting}>Descubra o clima</Text>
        </View>
        <TouchableOpacity style={styles.globeIcon}>
          <FontAwesomeIcon icon={faGlobe} size={20} color="#000" />
        </TouchableOpacity>

      </View>
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity
          style={styles.searchButton}
         
        >
          <Text style={styles.searchButtonText}>Pesquise por uma cidade</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Ao redor do mundo</Text>
      <ScrollView
        style={styles.weatherCards}
        contentContainerStyle={styles.weatherCardsContent}
      >
        <WeatherCard
          country="País"
          city="Cidade"
          weather="Clear"
          temperature="x"
        />
        <WeatherCard
          country="País"
          city="Cidade"
          weather="Clear"
          temperature="x"
        />
        <WeatherCard
          country="País"
          city="Cidade"
          weather="clear"
          temperature="x"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    color: "black",
  },
  globeIcon: {
    backgroundColor: "#FFFFFFFF",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "#a0a0a0",
  },
  searchButtonContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  searchButton: {
    backgroundColor: "#6151C3",
    padding: 15,
    borderRadius: 30,
    flex: 1,
    marginVertical: 20,
    width: "80%",
    height: 60, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
  
  title: {
    fontSize: 16,
    marginTop: 60,
    marginBottom: 10,
    color: "black",
    textAlign: "left",
    width: "100%",
  },
  weatherCards: {
    flexDirection: "column",
    flex: 1,
  },
  weatherCardsContent: {},
  cardContainer: {
    backgroundColor: "#6151C3",
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%",
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: "#fff",
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardWeather: {
    fontSize: 16,
    color: "#fff",
  },
  cardTemperature: {
    fontSize: 16,
    color: "#fff",
  },
});

export default WeatherPage;