import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from './components/UI/NavBar/NavBar';
import { Form } from './components/UI/Form/Form';
import { useState } from 'react';

export default function App() {
  const [isLoged, setIsLoged] = useState(false);
  return (
    isLoged ?
        (<>
          <NavBar isLoged={isLoged} setIsLoged={setIsLoged}/>
        </>):
      (<>
        <NavBar isLogin={isLoged}/>
        <Form setIsLoged={setIsLoged}/>
      </>)  
  );
}
