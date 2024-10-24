// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import PantallaInicio from './components/PantallaInicio';
import PrediccionGenero from './components/GenderPrediction';
import PrediccionEdad from './components/AgePrediction';
import ListaUniversidades from './components/UniversityList';
import ClimaRD from './components/ClimaRD';
import Sobre from './components/Sobre'; // Importar la nueva pantalla Sobre
import WordPressNews from './components/WordPressNews'; // Importar la nueva pantalla WordPressNews

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={PantallaInicio} 
          options={{ 
            title: 'Inicio', 
            headerStyle: { backgroundColor: '#0A0F19' },
            headerTintColor: '#00ccff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Icon name="home" size={24} color="#00ccff" style={{ marginLeft: 10 }} />
            ),
          }} 
        />
        <Stack.Screen 
          name="PrediccionGenero" 
          component={PrediccionGenero} 
          options={{ 
            title: 'Predicción de Género', 
            headerStyle: { backgroundColor: '#0A0F19' },
            headerTintColor: '#00ccff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Icon name="male-female" size={24} color="#00ccff" style={{ marginLeft: 10 }} />
            ),
          }} 
        />
        <Stack.Screen 
          name="PrediccionEdad" 
          component={PrediccionEdad} 
          options={{ 
            title: 'Predicción de Edad', 
            headerStyle: { backgroundColor: '#0A0F19' },
            headerTintColor: '#00ccff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Icon name="calendar" size={24} color="#00ccff" style={{ marginLeft: 10 }} />
            ),
          }} 
        />
        <Stack.Screen 
          name="ListaUniversidades" 
          component={ListaUniversidades} 
          options={{ 
            title: 'Lista de Universidades', 
            headerStyle: { backgroundColor: '#0A0F19' },
            headerTintColor: '#00ccff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Icon name="school" size={24} color="#00ccff" style={{ marginLeft: 10 }} />
            ),
          }} 
        />
        <Stack.Screen 
          name="ClimaRD" 
          component={ClimaRD} 
          options={{ 
            title: 'Clima RD', 
            headerStyle: { backgroundColor: '#0A0F19' },
            headerTintColor: '#00ccff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () => (
              <Icon name="cloud" size={24} color="#00ccff" style={{ marginLeft: 10 }} />
            ),
          }} 
        />
        <Stack.Screen 
          name="Sobre" 
          component={Sobre} 
          options={{ 
            title: 'Sobre Mí', 
            headerStyle: { backgroundColor: '#0A0F19' },
            headerTintColor: '#00ccff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen 
          name="WordPressNews" 
          component={WordPressNews} 
          options={{ 
            title: 'Noticias de WordPress', 
            headerStyle: { backgroundColor: '#0A0F19' },
            headerTintColor: '#00ccff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
