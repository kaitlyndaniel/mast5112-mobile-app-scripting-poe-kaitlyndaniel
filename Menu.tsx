import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const Menu = ({ menuItems, course }) => {
  const filteredItems = course ? menuItems.filter(item => item.category === course) : menuItems;
  const totalItems = filteredItems.length;

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./images/logo.jpg')} />
      <Text style={styles.title}>{course || 'All Menu'}</Text>
      <Text style={styles.totalItemsText}>Total Items: {totalItems}</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.name} - {item.category}</Text>
            <Text>{item.description}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 16,
    backgroundColor: '#1F7764',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  totalItemsText: {
    fontSize: 16,
    color: '#37E4D2', 
    marginBottom: 10,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItems: {
    flex: 1,
    padding: 16,
  },
});

export default Menu;
