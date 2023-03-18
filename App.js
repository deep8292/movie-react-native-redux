import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './src/store';

import { Ionicons } from '@expo/vector-icons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MovieList from './src/screens/movieList';
import SearchMovie from './src/screens/searchMovies';

export default function App() {

  const Tab = createBottomTabNavigator();
  const HomeStack = createNativeStackNavigator();
  const SearchStack = createNativeStackNavigator();

  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen 
          name='Home Screen' 
          options={{title: 'Home'}} 
          component={MovieList} />
      </HomeStack.Navigator>
    );
  }

  const SearchStackScreen = () => {
    return (
      <SearchStack.Navigator>
        <SearchStack.Screen name='Search Screen' options={{title: 'Search'}} component={SearchMovie} />
      </SearchStack.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}} >
          <Tab.Screen name='Home' component={HomeStackScreen} options={{tabBarIcon: ({ color }) => (
              <Ionicons name="ios-home-outline" size={24} color={color} />
            ) 
          }} />
          <Tab.Screen name='Search' component={SearchStackScreen} options={{tabBarIcon: ({ color }) => (
              <Ionicons name="search" size={24} color={color} />
            ) 
          }}/>
        </Tab.Navigator>
      </NavigationContainer>      
      <StatusBar style="auto" />
    </Provider>
  );
}

