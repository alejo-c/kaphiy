import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import Logo from '../components/Logo';
import Copyright from '../components/Copyright';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { FontAwesome } from '@expo/vector-icons';
import { FontDisplay } from 'expo-font';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'Login'>) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.returnButton}
				onPress={() => navigation.navigate('Signin')}
			>
				<Text
					style={styles.buttonText}
				><Icon name="chevron-left" /></Text>
			</TouchableOpacity>

			<Logo />

			<Text style={styles.title}>Ingreso</Text>
			<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

			<View>
				<View style={styles.group}>
					<Text style={styles.italic}>Usuario:</Text>
					<TextInput
						style={styles.input}
						placeholder='@Usuario'
						placeholderTextColor='gray'
						selectionColor='white'
					/>
				</View>
				<View style={styles.group}>
					<Text style={styles.italic}>Contraseña:</Text>
					<TextInput
						style={styles.input}
						placeholder='Contraseña'
						placeholderTextColor='gray'
						secureTextEntry={true}
					/>
				</View>
			</View>

			<TouchableOpacity
				style={[styles.primaryButton, styles.widest]}
				onPress={() => navigation.navigate('Root')}
			>
				<Text
					style={[styles.buttonText, styles.italic]}
				>Ingresar</Text>
			</TouchableOpacity>

			<Copyright />
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
		alignItems: 'center',
		// justifyContent: 'center',
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
		width: 300,
		color: '#fff',
		padding: 20,
		borderRadius: 10,
		fontSize: 20,
	},
	group: {
		marginTop: 25,
	},
});
