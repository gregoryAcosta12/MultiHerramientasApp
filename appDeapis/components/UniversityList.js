import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, Linking, StyleSheet } from 'react-native';

const UniversityScreen = () => {
  const [pais, setPais] = useState('');
  const [universidades, setUniversidades] = useState([]);

  const obtenerUniversidades = async () => {
    try {
      const respuesta = await fetch(`http://universities.hipolabs.com/search?country=${pais}`);
      const datos = await respuesta.json();
      setUniversidades(datos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre del país"
        value={pais}
        onChangeText={setPais}
      />
      <Button title="Obtener Universidades" onPress={obtenerUniversidades} />
      <FlatList
        data={universidades}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.universityContainer}>
            <Text style={styles.universityText}>Nombre: {item.name}</Text>
            <Text style={styles.universityText}>Dominio: {item.domains[0]}</Text>
            <Text
              style={styles.link}
              onPress={() => Linking.openURL(item.web_pages[0])}
            >
              Visitar sitio web
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#0A0F19', // Fondo oscuro
  },
  input: {
    borderWidth: 1,
    borderColor: 'blue', // Color del borde del input
    padding: 10,
    marginBottom: 10,
    width: '80%',
    alignSelf: 'center',
    color: 'blue', // Color del texto del input
  },
  universityContainer: {
    marginBottom: 15,
  },
  universityText: {
    color: 'blue', // Color del texto de las universidades
  },
  link: {
    color: 'blue', // Color de los enlaces
    textDecorationLine: 'underline',
  },
});

export default UniversityScreen;
