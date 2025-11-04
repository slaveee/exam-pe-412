import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

type Props = {
  selectedCity: string;
  onChangeCity: (city: string) => void;
};

const cities = ["Astana", "Moscow", "New York", "London", "Tokyo"];

const CitySelector: React.FC<Props> = ({ selectedCity, onChangeCity }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Выберите город:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {cities.map((city) => (
          <TouchableOpacity
            key={city}
            style={[
              styles.cityButton,
              city === selectedCity ? styles.selectedCity : null,
            ]}
            onPress={() => onChangeCity(city)}
          >
            <Text
              style={[
                styles.cityText,
                city === selectedCity ? styles.selectedCityText : null,
              ]}
            >
              {city}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 20, height: 114 },
  label: { fontSize: 14, marginBottom: 8, color: "#333" },
  scrollContainer: { paddingHorizontal: 5 },
  cityButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 15,
    backgroundColor: "#e0e0e0",
    marginHorizontal: 4,
  },
  selectedCity: {
    backgroundColor: "#007aff",
  },
  cityText: {
    fontSize: 12,
    color: "#333",
  },
  selectedCityText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CitySelector;
