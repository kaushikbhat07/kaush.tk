import React from 'react';
import Particles from 'react-particles-js';
//import './App.css';
import './Test.css';

function App() {
	return (
		<div className="App">
			<div className="home">
				<Particles
					params={{
						"particles": {
							"line_linked": {
								"color": "#FFFFFF"
							},
							"number": {
								"value": 70
							},
							"size": {
								"value": 2
							}
						},
						"interactivity": {
							"events": {
								"onhover": {
									"enable": true,
									"mode": "repulse"
								}
							}
						}
					}}
				/>
			</div>
			<div className="title">
				<p className="text-green">Hi, I am</p>
				<h1>Kaushik <span className="text-green">Bhat</span></h1>
			</div>
			<div className="social-parent">
				<div className="social-links">
					<div class="social-container">
						<ul class="social-icons">
							<li><a href="#"><i class="fa fa-instagram"></i></a></li>
							<li><a href="#"><i class="fa fa-github"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-briefcase"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
