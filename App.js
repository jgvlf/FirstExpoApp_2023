import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from './components/UI/NavBar/NavBar';
import { Form } from './components/UI/Form/Form';

export default function App() {
  return (
    <>
      <NavBar/>
      <Form/>
    </>
  );
}
