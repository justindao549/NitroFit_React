import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ClassesPage from './pages/ClassesPage';
import PricingPage from './pages/PricingPage';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<HomePage />
			<AboutPage />
			<ClassesPage />
			<PricingPage />
			<Footer />
			{/* <Routes>
				<Route path="/" element={<HomePage />} end />
			</Routes> */}
		</div>
	);
}

export default App;
