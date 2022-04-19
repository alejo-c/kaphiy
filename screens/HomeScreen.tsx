import { getAuth, signOut } from 'firebase/auth';
import { StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

import { Text, View } from '../components/Themed';
import { useAuthentication } from '../hooks/useAuthentication';
import { RootTabScreenProps } from '../types';

const auth = getAuth();

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	const { user } = useAuthentication();
	if (!user) {
		navigation.navigate('Signin');
	}
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Bienvenido {user?.email}</Text>
			</View>

			{/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

			<View style={styles.component}>
				<Text style={styles.subtitle}>Caracterización de Finca</Text>

				<Text>
					Añada las fotos de sus cultivos para continuar con la carga de datos
				</Text>

				<View accessibilityRole='progressbar'></View>
			</View>
			<Button title="Sign Out" onPress={() => signOut(auth)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		// justifyContent: 'center',
	},
	component: {
		backgroundColor: "#280907",
	},
	title: {
		fontSize: 40,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
	section: {
	},
});
