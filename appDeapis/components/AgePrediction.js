import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const PrediccionEdad = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(null);
  const [mensaje, setMensaje] = useState('');
  const [colorFondo, setColorFondo] = useState('#0A0F19'); // Fondo oscuro

  const predecirEdad = async () => {
    try {
      const respuesta = await fetch(`https://api.agify.io/?name=${nombre}`);
      const datos = await respuesta.json();
      setEdad(datos.age);
      if (datos.age < 18) {
        setMensaje('Eres joven');
      } else if (datos.age < 60) {
        setMensaje('Eres adulto');
      } else {
        setMensaje('Eres anciano');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colorFondo }]}>
      <Text style={styles.title}>PREDICCIÓN</Text>
      <Text style={styles.subtitle}>de edad</Text>

      {/* Icono de edad en el centro */}
      <View style={styles.iconContainer}>
        <Image
          style={styles.ageIcon}
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3870/3870730.png' }} // Cambia esta URL a la del icono deseado
        />
      </View>

      {/* Entrada de texto para el nombre */}
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu nombre"
        placeholderTextColor="#8a8a8a"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Botón para predecir la edad */}
      <TouchableOpacity style={styles.predictButton} onPress={predecirEdad}>
        <Text style={styles.predictButtonText}>PREDECIR EDAD</Text>
      </TouchableOpacity>

      {/* Resultado de la predicción */}
      {edad !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Tu edad es {edad}. {mensaje}
          </Text>
        </View>
      )}
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
    color: '#00ffcc',
    textAlign: 'center',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ffcc',
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ageIcon: {
    width: 80, // Ajustado
    height: 80, // Ajustado
    tintColor: '#00ffcc',
  },
  input: {
    borderWidth: 2,
    borderColor: '#00ffcc',
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
    backgroundColor: '#00ffcc',
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
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PrediccionEdad;
