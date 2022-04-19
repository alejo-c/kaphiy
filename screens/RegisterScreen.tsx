import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import Copyright from '../components/Copyright';
import { Text, View } from '../components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';
import React from 'react';

import '../config/firebase';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'Register'>) {
	const [value, setValue] = React.useState({
		email: '',
		password: '',
		error: ''
	})

	async function register() {
		if (value.email === '' || value.password === '') {
			setValue({
				...value,
				error: 'email and password are mandatory.'
			})
			// return;
		}
		try {
			await createUserWithEmailAndPassword(auth, value.email, value.password);
			navigation.navigate('Root');
		} catch (error: any) {
			setValue({
				...value,
				error: error.message,
			})
		}
		// setValue({
		// 	...value,
		// 	error: ''
		// })
	}

	return (
		<View style={styles.container}>
			<ScrollView
				style={styles.scrollview}
				contentContainerStyle={styles.contentContainer}
			>
				<TouchableOpacity
					style={styles.returnButton}
					onPress={() => navigation.navigate('Signin')}
				>
					<Text
						style={styles.buttonText}
					><Icon name="chevron-left" /></Text>
				</TouchableOpacity>

				<Logo />

				<Text style={styles.title}>Registro</Text>
				<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

				{!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

				<View>
					<View style={styles.vertical}>
						<Text style={styles.italic}>Usuario:     </Text>
						<TextInput
							style={styles.input}
							placeholder='Correo Electrónico'
							placeholderTextColor='gray'
							selectionColor='white'
							value={value.email}
							onChangeText={(text) => setValue({ ...value, email: text })}
						/>
					</View>
					<View style={styles.vertical}>
						<Text style={styles.italic}>Contraseñ:</Text>
						<TextInput
							style={styles.input}
							placeholder='Contraseña'
							placeholderTextColor='gray'
							secureTextEntry={true}
							value={value.password}
							onChangeText={(text) => setValue({ ...value, password: text })}
						/>
					</View>
				</View>

				<View style={styles.horizontalGroup}>
					<View>
						<Text style={styles.italic}>Nombres:</Text>
						<TextInput
							style={styles.input}
							placeholder='Nombres'
							placeholderTextColor='gray'
							selectionColor='white'
						// value={value.firstnames}
						// onChangeText={(text) => setValue({ ...value, firstnames: text })}
						/>
					</View>
					<View>
						<Text style={styles.italic}>Apellidos:</Text>
						<TextInput
							style={styles.input}
							placeholder='Apellidos'
							placeholderTextColor='gray'
							secureTextEntry={true}
						// value={value.lastnames}
						// onChangeText={(text) => setValue({ ...value, lastnames: text })}
						/>
					</View>
				</View>

				<TouchableOpacity
					style={[styles.primaryButton, styles.widest]}
					onPress={register}
				>
					<Text
						style={[styles.buttonText, styles.italic]}
					>Registrar</Text>
				</TouchableOpacity>

				<Copyright />
			</ScrollView>
		</View>
	);
}

function Icon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
}) {
	return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollview: {
		width: '100%',
	},
	contentContainer: {
		width: '100%',
		alignItems: 'center',
		paddingBottom: 50,
	},
	title: {
		fontSize: 33,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 15,
		height: 1,
		width: '80%',
	},
	returnButton: {
		backgroundColor: '#8FB339',
		borderRadius: 15,
		padding: 15,
		alignSelf: 'flex-start',
		marginLeft: 10,
		marginTop: 30,
	},
	primaryButton: {
		alignItems: 'center',
		backgroundColor: '#8FB339',
		borderRadius: 100,
		padding: 20,
		marginTop: 40,
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	italic: {
		fontStyle: 'italic',
		fontSize: 20,
	},
	widest: {
		width: 200,
	},
	input: {
		backgroundColor: '#280907',
		width: 210,
		color: '#fff',
		padding: 20,
		borderRadius: 10,
		fontSize: 20,
		marginHorizontal: 5,
	},
	vertical: {
		marginTop: 15,
	},
	horizontalGroup: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10,
		marginHorizontal: 5,
	},
	error: {
		marginTop: 10,
		padding: 10,
		color: '#fff',
		backgroundColor: '#D54826FF',
	}
});
