import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons'; // Usamos este paquete para los íconos

const ClimaRD = () => {
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '40a6713bc2fbc7e1bab2bed2f4325edc';
  const CIUDAD = 'Santo Domingo';

  const obtenerClima = async () => {
    try {
      const respuesta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${CIUDAD}&units=metric&appid=${API_KEY}&lang=es`
      );
      setClima(respuesta.data);
      setLoading(false);
    } catch (err) {
      setError('Error obteniendo el clima');
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerClima();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Cargando...</Text> {/* Texto simple en lugar de una animación */}
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!clima) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No se encontraron datos del clima.</Text>
      </View>
    );
  }

  const { main, weather } = clima;

  if (!main || !weather) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Datos incompletos del clima.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Icon name="location-outline" size={28} color="#00ffcc" /> Clima en {CIUDAD}
      </Text>
      <Image
        style={styles.icon}
        source={{
          uri: `http://openweathermap.org/img/wn/${weather[0]?.icon || '01d'}@4x.png`,
        }}
      />
      <Text style={styles.temperature}>
        <Icon name="thermometer-outline" size={28} color="#00ffcc" /> {main?.temp || '--'}°C
      </Text>
      <Text style={styles.description}>
        {weather[0]?.description || 'Sin descripción disponible'}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Icon name="water-outline" size={20} color="#00ffcc" /> Humedad: {main?.humidity || '--'}%
        </Text>
        <Text style={styles.infoText}>
          <Icon name="speedometer-outline" size={20} color="#00ffcc" /> Presión: {main?.pressure || '--'} hPa
        </Text>
        <Text style={styles.infoText}>
          <Icon name="arrow-up-outline" size={20} color="#00ffcc" /> Máx: {main?.temp_max || '--'}°C
        </Text>
        <Text style={styles.infoText}>
          <Icon name="arrow-down-outline" size={20} color="#00ffcc" /> Mín: {main?.temp_min || '--'}°C
        </Text>
      </View>
      <TouchableOpacity style={styles.refreshButton} onPress={() => obtenerClima()}>
        <Text style={styles.refreshButtonText}>
          <Icon name="refresh-outline" size={20} color="#fff" /> Actualizar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F19', // Fondo oscuro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ffcc',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#cccccc',
    marginVertical: 10,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#00ffcc',
    marginVertical: 20,
  },
  icon: {
    width: 150,
    height: 150,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  infoText: {
    fontSize: 16,
    color: '#cccccc',
    marginVertical: 5,
  },
  errorText: {
    color: '#ff3333',
    fontSize: 18,
  },
  loadingText: { // Estilo para el nuevo texto de carga
    color: '#cccccc',
    fontSize: 18,
  },
  refreshButton: {
    backgroundColor: '#00ffcc',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  refreshButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ClimaRD;
