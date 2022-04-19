import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { Text } from './Themed';

export default function Logo() {
	return (
		<Text
			style={styles.footnote}
		>
			<Icon name="copyright" /> Toldopamba S.A.S 2022
		</Text>
	);
}

function Icon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
}) {
	return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
	footnote: {
		marginTop: 80,
		fontSize: 16,
	},
});