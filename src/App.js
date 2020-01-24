import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MainContainer from "./components/main-container/main-container.comp";
import SaladBowlImg from './assets/salad-bowl.png';

function App() {
	return (
			<div className="App">
				<MainContainer />
				<div className="salad-bowl left" style={{ backgroundImage: `url(${SaladBowlImg})` }}/>
				<div className="salad-bowl right" style={{ backgroundImage: `url(${SaladBowlImg})` }}/>
			</div>
	);
}

export default App;
