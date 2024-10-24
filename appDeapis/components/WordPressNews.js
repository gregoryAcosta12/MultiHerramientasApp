import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const WordPressNews = ({ navigation }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulando datos de noticias ficticias
  const fakeNews = [
    {
      id: 1,
      title: 'Descubren una nueva especie de rana en la selva amazónica',
      body: 'Científicos han encontrado una nueva especie de rana en la selva amazónica, que se caracteriza por su color brillante y su canto melodioso. Este descubrimiento subraya la importancia de conservar los ecosistemas naturales.',
    },
    {
      id: 2,
      title: 'Avances en la tecnología de energía solar',
      body: 'Investigadores han desarrollado un nuevo tipo de panel solar que es más eficiente y menos costoso de producir. Esta innovación podría revolucionar el mercado de la energía renovable y acelerar la transición hacia fuentes de energía sostenibles.',
    },
    {
      id: 3,
      title: 'La importancia de la lectura en la era digital',
      body: 'Un estudio reciente revela que la lectura regular mejora la concentración y la empatía en los jóvenes. A pesar de la creciente popularidad de los dispositivos digitales, los libros siguen siendo una herramienta fundamental para el desarrollo personal.',
    },
  ];

  useEffect(() => {
    // Simulando carga de noticias
    const loadNews = () => {
      setNews(fakeNews);
      setLoading(false);
    };

    loadNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <Text style={styles.loadingText}>Cargando...</Text> {/* Reemplazado con un simple texto */}
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noticias de WordPress</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => alert(`Lee más sobre: ${item.title}`)}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemBody}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backButtonText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Cambiado a flex: 1 para ocupar todo el espacio disponible
    padding: 20,
    backgroundColor: '#0A0F19',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: { // Estilo para el nuevo texto de carga
    color: '#ffffff',
    fontSize: 18,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A0F19',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00ccff',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#1B1F28',
    borderRadius: 10,
    marginVertical: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00ccff',
  },
  itemBody: {
    fontSize: 14,
    color: '#ffffff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00ccff',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    justifyContent: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default WordPressNews;
