import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

interface WeatherCardProps {
  country: string;
  city: string;
  weather: string;
  temperature: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  country,
  city,
  weather,
  temperature,
}) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>
        {country}
      </Text>
      <Text style={styles.cardTitle2}>
        {city}
      </Text>
      <View style={styles.cardInfo}>
        <Text style={styles.cardWeather}>{weather}</Text>
        <Text style={styles.cardTemperature}>{temperature}°C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#6151C3",
    padding: 20, 
    borderRadius: 30, 
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%', 
    maxWidth: 338,
  },
  cardTitle: {
    fontSize: width > 338 ? 15 : 12, 
    marginBottom: 5,
    color: "white",
  },

  cardTitle2: {
    fontSize: width > 338 ? 21 : 16,
    marginBottom: 5,
    fontWeight: "bold",
    color: "white",
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardWeather: {
    fontSize: width > 338 ? 16 : 12, 
    marginTop: 20,
    color: "white",
  },
  cardTemperature: {
    fontSize: width > 338 ? 24 : 18, 
    color: "white",
  },
});

export default WeatherCard;