import React, { useState } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
	StatusBar,
	Image,
	TouchableWithoutFeedback,
} from 'react-native';

const App = () => {
	const dice1 = require('./img/dice1.png');
	const dice2 = require('./img/dice2.png');
	const dice3 = require('./img/dice3.png');
	const dice4 = require('./img/dice4.png');
	const dice5 = require('./img/dice5.png');
	const dice6 = require('./img/dice6.png');
	const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

	const [dice, setDice] = useState(dice5);

	const randomDice = () => {
		const getRandomDice = dices[Math.floor(Math.random() * dices.length)];
		setDice(getRandomDice);
	};

	const selectDice = () => {
		randomDice();
		for (let j = 100; j < 1000; j = j + 100) {
			setTimeout(randomDice, j);
		}
	};

	return (
		<>
			<StatusBar barStyle='dark-content' />
			<TouchableWithoutFeedback onPress={() => selectDice()}>
				<SafeAreaView style={styles.MainContainer}>
					<View>
						<Image source={dice}></Image>
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</>
	);
};

const styles = StyleSheet.create({
	MainContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FF1E56',
	},
});

export default App;
