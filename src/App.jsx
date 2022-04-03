import React from 'react';
import Navbar from './components/Nav';
import Header from './components/Header';
import Experience from './components/Experience';
import Banner from './components/Banner';
import Event from './components/Event';
import Team from './components/Team';
import Involve from './components/Involve';
import Footer from './components/Footer';

const App = () => {
	return (
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
	);
};

export default App;
