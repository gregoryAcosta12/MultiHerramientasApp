import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PantallaInicio = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://www.creativefabrica.com/wp-content/uploads/2022/10/18/spanner-Graphics-42156320-1.jpg' }} // Nueva imagen
        style={styles.logo}
      />

      <Text style={styles.title}>
        Aplicación Multi-Herramienta
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PrediccionGenero')}>
        <Icon name="male-female" size={24} color="#fff" />
        <Text style={styles.buttonText}>Predecir Género</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PrediccionEdad')}>
        <Icon name="calendar" size={24} color="#fff" />
        <Text style={styles.buttonText}>Predecir Edad</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListaUniversidades')}>
        <Icon name="school" size={24} color="#fff" />
        <Text style={styles.buttonText}>Obtener Universidades</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClimaRD')}>
        <Icon name="cloud" size={24} color="#fff" />
        <Text style={styles.buttonText}>Consultar Clima</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sobre')}>
        <Icon name="information-circle" size={24} color="#fff" />
        <Text style={styles.buttonText}>Acerca de</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WordPressNews')}>
        <Icon name="newspaper" size={24} color="#fff" />
        <Text style={styles.buttonText}>Noticias de WordPress</Text>
      </TouchableOpacity>

      <View style={styles.spacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0A0F19',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#00ccff',
    shadowColor: '#00ccff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ccff',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: '#00ccff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00ccff',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    justifyContent: 'center',
    shadowColor: '#00ccff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
  spacer: {
    height: 20,
  },
});

export default PantallaInicio;
