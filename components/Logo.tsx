import { Image, StyleSheet } from 'react-native';
import { View } from './Themed';

export default function Logo() {
	return (
		<Image
			style={styles.logo}
			source={require('../assets/images/logo.png')}
		/>
	);
}

const styles = StyleSheet.create({
	logo: {
		marginLeft: 24,
		width: 190,
		height: 152,
		marginTop: 55,
	},
});