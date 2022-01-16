import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.day}>
            <Text style={styles.temperature}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temperature}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temperature}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.temperature}>27</Text>
            <Text style={styles.description}>Sunny</Text>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'whitesmoke',
  },
  weather: {
    flex: 3,
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temperature: {
    marginTop: 70,
    fontSize: 200,
    fontWeight: 'bold',
    color: 'whitesmoke',
  },
  description: {
    marginTop: -30,
    fontSize: 60,
    color: 'whitesmoke',
  },
});
