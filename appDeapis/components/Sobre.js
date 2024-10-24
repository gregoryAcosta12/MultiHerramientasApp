// components/Sobre.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Sobre = () => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>Acerca de mí</Text>
      <Text style={styles.contactInfo}>
        Nombre: Gregory Acosta
      </Text>
      <Text style={styles.contactInfo}>
        Email: costagregory258@gmail.com
      </Text>
      <Text style={styles.contactInfo}>
        Teléfono: 8292908871
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0A0F19', // Fondo oscuro
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#00ccff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ccff',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactInfo: {
    fontSize: 18,
    color: '#fff', // Texto blanco para mejor visibilidad
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Sobre;

