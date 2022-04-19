import { AccessibilityInfo, StyleSheet, Image } from 'react-native';
// import { withSafeAreaInsets } from 'react-native-safe-area-context';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
	return (
		<View style={styles.container} accessibilityLiveRegion='polite'>
			<View>
				<Text style={styles.title}>Bienvenido Usuario</Text>
			</View>

			{/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

			<View style={styles.component}>
				<Text style={styles.subtitle}>Caracterización de Finca</Text>

				<Text>
					Añada las fotos de sus cultivos para continuar con la carga de datos
				</Text>

				<View accessibilityRole='progressbar'></View>
			</View>
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
		fontSize: 50,
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
