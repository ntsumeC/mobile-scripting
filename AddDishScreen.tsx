import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AddDishScreen: React.FC = () => {
  const [dishName, setDishName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [course, setCourse] = useState<string>('');

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.icon} />
      <Text style={styles.label}>Name of the dish</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter dish name"
        value={dishName}
        onChangeText={setDishName}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />

<Text style={styles.label}>Price</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Course</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter course"
        value={course}
        onChangeText={setCourse}
      />
  <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.courseButton}>
          <Text style={styles.buttonText}>Starter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.courseButton}>
          <Text style={styles.buttonText}>Dessert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.courseButton}>
          <Text style={styles.buttonText}>MainMeal</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Dish</Text>
      </TouchableOpacity>
      

      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  button:{
    width: 20,
    height: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  courseButton: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
  homeIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default AddDishScreen;