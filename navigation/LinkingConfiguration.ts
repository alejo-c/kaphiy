/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
	prefixes: [Linking.makeUrl('/')],
	config: {
		screens: {
			Root: {
				screens: {
					// Home: {
					// 	screens: {
					// 		HomeScreen: 'four',
					// 	},
					// },
					// Cultivation: {
					// 	screens: {
					// 		CultivationScreen: 'five',
					// 	},
					// },
					// Finances: {
					// 	screens: {
					// 		FinancesScreen: 'six',
					// 	},
					// },
					// Calendar: {
					// 	screens: {
					// 		CalendarScreen: 'seven',
					// 	},
					// },
					// Profile: {
					// 	screens: {
					// 		ProfileScreen: 'eight',
					// 	},
					// },
					Home: 'Home',
					Cultivation: 'Cultivation',
					Finances: 'Finances',
					Calendar: 'Calendar',
					Profile: 'Profile',
				},
			},
			Signin: 'Signin',
			Login: 'Login',
			Register: 'Register',
			Modal: 'modal',
			NotFound: '*',
		},
	},
};

export default linking;
