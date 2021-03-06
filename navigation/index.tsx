/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SigninScreen from '../screens/SigninScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import CultivationScreen from '../screens/CultivationScreen';
import FinancesScreen from '../screens/FinancesScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import { useAuthentication } from '../hooks/useAuthentication';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	const { user } = useAuthentication();

	return user ? (
		<Stack.Navigator>
			<Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{
				title: 'Oops!',
				headerStyle: {
					backgroundColor: '#4B5842',
				},
			}} />
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	) : (
		<Stack.Navigator
			initialRouteName="Signin">
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{
				title: 'Oops!',
				headerStyle: {
					backgroundColor: '#4B5842',
				},
			}} />
			<BottomTab.Screen
				name="Signin"
				component={SigninScreen}
				options={{
					title: 'Signin',
					tabBarStyle: { display: 'none' },
					headerShown: false,
				}}
			/>
			<BottomTab.Screen
				name="Login"
				component={LoginScreen}
				options={{
					title: 'Login',
					tabBarStyle: { display: 'none' },
					headerShown: false,
				}}
			/>
			<BottomTab.Screen
				name="Register"
				component={RegisterScreen}
				options={{
					title: 'Register',
					tabBarStyle: { display: 'none' },
					headerShown: false,
				}}
			/>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerStyle: {
					backgroundColor: '#4B5842',
				},
				tabBarActiveTintColor: Colors[colorScheme].tint,
				tabBarStyle: {
					height: 60,
				},
				tabBarLabelStyle: {
					fontSize: 13,
				},
				tabBarActiveBackgroundColor: '#280907',
				tabBarInactiveBackgroundColor: '#280907',
			}}

		>

			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={({ navigation }: RootTabScreenProps<'Home'>) => ({
					title: 'Inicio',
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Modal')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}>
							<FontAwesome
								name="info-circle"
								size={25}
								color={Colors[colorScheme].text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name="Cultivation"
				component={CultivationScreen}
				options={{
					title: 'Cultivo',
					tabBarIcon: ({ color }) => <TabBarIcon name="th" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Finances"
				component={FinancesScreen}
				options={{
					title: 'Finanzas',
					tabBarIcon: ({ color }) => <TabBarIcon name="dollar" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Calendar"
				component={CalendarScreen}
				options={{
					title: 'Calendario Floral',
					tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					title: 'Perfil',
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
					headerShown: false,
				}}
			/>
		</BottomTab.Navigator>
	);
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
