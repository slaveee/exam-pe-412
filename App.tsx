// App.tsx
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, ActivityIndicator, Text } from "react-native";
import CitySelector from "./components/CitySelector";
import WeatherView from "./components/WeatherView";
import { getWeatherData, WeatherData } from "./api";

const App = () => {
  const [city, setCity] = useState("Astana");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getWeatherData(city);
      if (data) setWeather(data);
    } catch (err: any) {
      console.error(err);
      setError("Ошибка загрузки данных о погоде");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather();
  }, [city]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContainer}>
        <CitySelector selectedCity={city} onChangeCity={setCity} />
        {loading && <ActivityIndicator size="large" color="#007aff" />}
        {error && <Text style={styles.error}>{error}</Text>}
        {!loading && !error && weather && <WeatherView weather={weather} />}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#8db6a5ff" },
  centeredContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  error: { color: "red", fontSize: 16, marginTop: 20 },
});

export default App;
