import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const PrediccionGenero = () => {
  const [nombre, setNombre] = useState('');
  const [genero, setGenero] = useState('');
  const [colorFondo, setColorFondo] = useState('#0A0F19'); // Fondo oscuro

  const predecirGenero = async () => {
    try {
      const respuesta = await fetch(`https://api.genderize.io/?name=${nombre}`);
      const datos = await respuesta.json();
      setGenero(datos.gender);
      setColorFondo(datos.gender === 'male' ? '#00bfff' : '#ff1493'); // Cambiar fondo según género
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colorFondo }]}>
      <Text style={styles.title}>PREDICCIÓN</Text>
      <Text style={styles.subtitle}>de género</Text>

      {/* Icono de género en el centro */}
      <View style={styles.genderCircleContainer}>
        <View style={styles.circle}>
          <Image
            style={styles.genderIcon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/634/634553.png' }}
          />
        </View>
      </View>

      {/* Indicador numérico de probabilidad (simulado) */}
      <View style={styles.probabilityContainer}>
        <Text style={styles.probabilityText}>MASCULINO</Text>
        <Text style={styles.probabilityText}>FEMENINO</Text>
      </View>

      {/* Botones de género */}
      <View style={styles.genderButtonsContainer}>
        <TouchableOpacity style={styles.maleButton}>
          <Text style={styles.genderButtonText}>MASCULINO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.femaleButton}>
          <Text style={styles.genderButtonText}>FEMENINO</Text>
        </TouchableOpacity>
      </View>

      {/* Entrada de texto para el nombre */}
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        placeholderTextColor="#8a8a8a"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Botón para predecir el género */}
      <TouchableOpacity style={styles.predictButton} onPress={predecirGenero}>
        <Text style={styles.predictButtonText}>PREDECIR</Text>
      </TouchableOpacity>

      {/* Resultado de la predicción */}
      {genero ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            {genero === 'male' ? 'MASCULINO' : 'FEMENINO'}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00bfff', // Cambiado a azul claro
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00bfff', // Cambiado a azul claro
    textAlign: 'center',
    marginBottom: 20,
  },
  genderCircleContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: '#00bfff', // Cambiado a azul claro
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderIcon: {
    width: 80,
    height: 80,
    tintColor: '#00bfff', // Cambiado a azul claro
  },
  probabilityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  probabilityText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  genderButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  maleButton: {
    backgroundColor: '#00bfff', // Cambiado a azul claro
    padding: 10,
    borderRadius: 25,
    width: '48%',
    alignItems: 'center',
  },
  femaleButton: {
    backgroundColor: '#ff1493', // Mantener este color
    padding: 10,
    borderRadius: 25,
    width: '48%',
    alignItems: 'center',
  },
  genderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: '#00bfff', // Cambiado a azul claro
    padding: 10,
    marginBottom: 10,
    width: '80%',
    borderRadius: 25,
    color: '#fff',
    backgroundColor: '#1a1a1a',
    fontSize: 16,
    textAlign: 'center',
  },
  predictButton: {
    backgroundColor: '#00bfff', // Cambiado a azul claro
    padding: 10,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  predictButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PrediccionGenero;
