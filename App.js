import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

// Screens
import { Home, Details } from './src/screens';

// Creating Stack Navigation
const Stack = createNativeStackNavigator();

// Theme for Navigation
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

export default function App() {
    // Loading Font
    const [loaded] = useFonts({
        InterBold: require('./src/assets/fonts/Inter-Bold.ttf'),
        InterSemiBold: require('./src/assets/fonts/Inter-SemiBold.ttf'),
        InterMedium: require('./src/assets/fonts/Inter-Medium.ttf'),
        InterRegular: require('./src/assets/fonts/Inter-Regular.ttf'),
        InterLight: require('./src/assets/fonts/Inter-Light.ttf'),
    });

    // If font not loaded returning null
    if (!loaded) return null;

    // Main
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
