import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			particles_value: 80
		};
	}

	render() {
		if (window.screen.width > 1400) {
			this.state.particles_value = 130;
		}
		else if (window.screen.width > 1100 && window.screen.width < 1400) {
			this.state.particles_value = 100;
		}
		else if (window.screen.width > 800 && window.screen.width < 1100) {
			this.state.particles_value = 90;
		}
		else {
			this.state.particles_value = 75;
		}
		console.log(window.screen.width);
		return (
			<div className="App">
				<div className="home">
					<Particles
						params={{
							"particles": {
								"line_linked": {
									"enable": true,
									"color": "#ffffff",
									"opacity": 0.8,
									"width": 1,
								},
								"number": {
									"value": this.state.particles_value,
									"density": {
										"enable": true,
										"value_area": 800
									}
								},
								"shape": {
									"polygon": {
										"nb_sides": 5
									},
								},
								"opacity": {
									"value": 0.5,
									"random": false,
									"anim": {
										"enable": false,
										"speed": 4,
										"opacity_min": 0.1,
										"sync": false
									}
								},
								"size": {
									"value": 3,
									"random": true,
									"anim": {
										"enable": false,
										"speed": 80,
										"size_min": 0.1,
										"sync": false
									}
								},
								"move": {
									"enable": true,
									"speed": 5,
									"direction": "none",
									"random": false,
									"straight": false,
									"out_mode": "out",
									"bounce": true,
								}
							},
							"interactivity": {
								"detect_on": "canvas",
								"events": {
									"onhover": {
										"enable": true,
										"mode": "repulse"
									},
									"resize": true
								},
								"modes": {
									"repulse": {
										"distance": 130,
										"duration": 0.4
									},
								},
								"retina_detect": true
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
								<li><a target="_blank" rel="noopener noreferrer" href="https://instagram.com/kaush.ikk"><i class="fa fa-instagram"></i></a></li>
								<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/kaushikbhat07"><i class="fa fa-github"></i></a></li>
								<li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kaushikbhat7/"><i class="fa fa-linkedin"></i></a></li>
								<li><a target="_blank" rel="noopener noreferrer" href="https://wa.me/8746085201?text=Hello%20Kaushik%21"><i class="fa fa-whatsapp"></i></a></li>
								<li><a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1aOJ90h1l99RmGYQx27VuyZAVFXxVE6oA/view?usp=sharing"><i class="fa fa-briefcase"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
