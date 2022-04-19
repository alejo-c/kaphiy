import { StyleSheet, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import Copyright from '../components/Copyright';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from 'react';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'Signin'>) {
	return (
		<View style={styles.container}>
			<Logo />

			<Text style={styles.title}>
				<Text>App para </Text>
				<Text style={styles.colored}>
					Caracterización de Finca
				</Text>
				<Text> y </Text>
				<Text style={styles.colored}>
					Finanzas
				</Text>
			</Text>

			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

			{/* Ingreso */}
			<TouchableOpacity
				style={styles.primaryButton}
				onPress={() => navigation.navigate('Login')}
			>
				<Text
					style={[styles.buttonText, styles.italic]}
				>Ingresar con usuario Toldopamba</Text>
			</TouchableOpacity>

			{/* Registro */}
			<TouchableOpacity
				style={[styles.secondaryButton, styles.widest]}
				onPress={() => navigation.navigate('Register')}
			>
				<Text
					style={styles.buttonText}
				>Registro</Text>
			</TouchableOpacity>

			{/* Contacto */}
			<TouchableOpacity
				style={styles.secondaryButton}
				onPress={() => navigation.navigate('Login')}
			>
				<Text
					style={styles.buttonText}
				>Contacto con Departamento de TI</Text>
			</TouchableOpacity>
			
			<Copyright />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		// justifyContent: 'center',
	},
	primaryButton: {
		backgroundColor: '#8FB339',
		borderRadius: 100,
		padding: 20,
		marginVertical: 40,
	},
	secondaryButton: {
		alignItems: 'center',
		backgroundColor: '#280907',
		borderRadius: 100,
		padding: 20,
		marginVertical: 7,
	},
	buttonText: {
		fontSize: 20,
	},
	italic: {
		fontStyle: 'italic'
	},
	widest: {
		width: 200,
	},
	paddingTop: {
		paddingTop: 30,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		fontStyle: 'italic',
		paddingHorizontal: 25,
		marginTop: 30,
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	colored: {
		color: '#280907',
	},
});
