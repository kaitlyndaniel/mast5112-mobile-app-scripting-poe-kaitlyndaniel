import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EditMenu = ({ menuItems, setMenuItems }) => {
  const [newItem, setNewItem] = useState({ name: '', description: '', price: '', category: 'Starters' });

  const handleAddItem = () => {
    setMenuItems([...menuItems, { ...newItem, price: parseFloat(newItem.price) }]);
    setNewItem({ name: '', description: '', price: '', category: 'Starters' });
  };

  const handleDeleteItem = (name) => {
    setMenuItems(menuItems.filter(item => item.name !== name));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Menu</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={newItem.name}
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={newItem.description}
        onChangeText={(text) => setNewItem({ ...newItem, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={newItem.price}
        onChangeText={(text) => setNewItem({ ...newItem, price: text })}
      />
       <Text style={styles.title}>Pick Course</Text>
       
       <View style={styles.pickerContainer}>
  <Picker
    selectedValue={newItem.category}
    onValueChange={(value) => setNewItem({ ...newItem, category: value })}
    style={styles.picker}
  >
    <Picker.Item label="Starters" value="Starters" />
    <Picker.Item label="Mains" value="Mains" />
    <Picker.Item label="Desserts" value="Desserts" />
    <Picker.Item label="Drinks" value="Drinks" />
  </Picker>
</View>

      <Button title="Add Item" onPress={handleAddItem} />
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.category}</Text>
            <Text>{item.description}</Text>
            <Text>Price: ${item.price}</Text>
            <Button title="Delete" onPress={() => handleDeleteItem(item.name)} />
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
     backgroundColor:'#1F7764',
     },
  title: {
     fontSize: 24, 
     fontWeight: 'bold', 
     textAlign: 'center',
      marginBottom: 20, 
    },
  input: {
     borderColor: '#ccc',
      borderWidth: 1, 
      padding: 8,
       marginVertical: 5,
     },
  item: { 
    padding: 10,
     borderBottomWidth: 1,
      borderBottomColor: '#ccc',
     },

        pickerContainer: {
          backgroundColor: '#2A9D8F', 
          borderRadius: 8,          
          marginVertical: 5,         
          padding: 5,                
        },
        picker: {
          color: '#ffffff',          
        },
      
      
});

export default EditMenu;
