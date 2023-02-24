import { NativeBaseProvider } from "native-base";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Routes } from './src/routes';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
   background: 'white',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <NativeBaseProvider>
    
          <Routes />
      
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

