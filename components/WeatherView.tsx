import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WeatherData } from "../api";

type Props = {
  weather: WeatherData | null;
};

const WeatherView: React.FC<Props> = ({ weather }) => {
  if (!weather) return null;

  const currentTime = new Date(weather.dt * 1000).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{weather.name}</Text>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
      <Text style={styles.condition}>{weather.weather[0].description}</Text>
      <Text style={styles.time}>Время обновления: {currentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 100, width: "90%", alignItems: "center" },
  city: { fontSize: 28, fontWeight: "bold", color: "#333" },
  temp: { fontSize: 48, fontWeight: "bold", color: "#007aff", marginVertical: 5 },
  condition: { fontSize: 20, color: "#555", marginBottom: 10 },
  time: { fontSize: 16, color: "#333" },
});

export default WeatherView;
