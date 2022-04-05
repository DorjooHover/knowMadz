import React, { useState, useEffect } from 'react';
import Navbar from './components/Nav';
import Header from './components/Header';
import Experience from './components/Experience';
import Banner from './components/Banner';
import Event from './components/Event';
import Team from './components/Team';
import Involve from './components/Involve';
import Footer from './components/Footer';

// Loader
import PropagateLoader from 'react-spinners/PropagateLoader';

const App = () => {
	const [loading, setLoading] = useState(false);
	let [color, setColor] = useState(
		'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
	);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 7000);
	}, []);
	return (
		<div className="App">
			{loading ? (
				<div className="loader">
					<PropagateLoader
						size={10}
						color={color}
						loading={loading}
					/>
				</div>
			) : (
				<>
					<Navbar />
					<Header />
					<Experience />
					<Banner />
					<Event />
					<Team />
					<Involve />
					<Footer />
				</>
			)}
		</div>
	);
};

export default App;
