import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ensure this import
import { RootStackParamList } from './App'; // Import your type from App.tsx
import { StackNavigationProp } from '@react-navigation/stack'; // Import type for navigation

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>; // Define the type


const MenuScreen: React.FC = () => {
  const navigation = useNavigation<MenuScreenNavigationProp>(); // Hook to access navigation

  return (


   
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
      
        <Text style={styles.mainTitle}>Main Meal</Text>
        <Text style={styles.itemTitle}>Lechon Kawali......R350</Text>
        <Text style={styles.itemDescription}>
          Our Lechon Kawali is an expert blend of flavors, combining two succulent beef patties, swiss cheese, caramelized onions, and grilled on an artisan seed bun.
        </Text>

        <Text style={styles.itemTitle}>Grilled Liempo......R290</Text>
        <Text style={styles.itemDescription}>
          Our grilled liempo comes with a flavorful beef patty, crunchy pickles, pepper jack cheese, and a sesame bun.
        </Text>

        <Text style={styles.itemTitle}>Beef Buffalo......R250</Text>
        <Text style={styles.itemDescription}>
          Try our Spicy Beef Buffalo, a fiery combination of a beef patty, pepper jack cheese, pickled jalapeños, and a zesty chipotle mayo.
        </Text>
      </View>

      <View style={styles.section}>
      
        <Text style={styles.sectionTitle}>Starter</Text>
        <Text style={styles.itemTitle}>Ayam asam manis........R89</Text>
        <Text style={styles.itemDescription}>With a tangy vinaigrette, topped with juicy grilled chicken.</Text>

        <Text style={styles.itemTitle}>Toasted Bread with eggs.......R101</Text>
        <Text style={styles.itemDescription}>Served with grilled cheese on the side.</Text>

        <Text style={styles.itemTitle}>Telur dan tofu kecap manis......R187</Text>
        <Text style={styles.itemDescription}>Filled with your choice of ingredients like cheese, vegetables, or bacon.</Text>
      </View>

      <View style={styles.section}>
      
        <Text style={styles.sectionTitle}>Desserts</Text>
        <Text style={styles.itemTitle}>Vanilla Cake........R30</Text>
        <Text style={styles.itemTitle}>Blue Berry........R27</Text>
        <Text style={styles.itemTitle}>Chocolate Cake........R37</Text>
        <Text style={styles.itemTitle}>Strawberry........R19</Text>
      </View>

      
      <View style={styles.footer}>
      <Image source={require('./assets/logo.png')} style={styles.icon} />
     <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddDish')} // Ensure this line is correct
      >
        <Text style={styles.buttonText}>Go to Add Dish</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#f3ae42',
    padding: 20,
    borderRadius: 10,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
    alignSelf: 'center',
    },
  },
);

export default MenuScreen;
