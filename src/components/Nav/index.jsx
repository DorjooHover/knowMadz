import React, { useState } from 'react';
import './nav.css';
import navLogo from '../../assets/Logos/knwmdzLogo.png';
import { BiMenuAltRight } from 'react-icons/bi';
window.addEventListener('scroll', function() {
	var navbar = document.getElementById('nav');
	navbar.classList.toggle('bg', window.scrollY > 0);
});

// let menutoggle = document.querySelector('.nav__links');
// menutoggle.onclick = function() {
// 	menutoggle.classList.toggle('active');
// };

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};
	return (
		<>
			<section id="nav">
				<div className="container">
					<div className="nav__logo">
						<a href="#header">
							<img src={navLogo} alt="" />
						</a>
					</div>
					<div className="nav__lists">
						{/* {toggleMenu && ( */}
						<ul className="lists">
							<li>
								<a href="#experience">Бидний тухай</a>
							</li>
							<li>
								<a href="#event">Эвент</a>
							</li>
							<li>
								<a href="#team">Гишүүд</a>
							</li>
							<li>
								<a
									href="#involve"
									className="btn small__btn"
								>
									Нэгдэх
								</a>
							</li>
						</ul>
						{/* )} */}
						{/* onClick={toggleNav} */}
						<ul className="menu" onClick={toggleNav}>
							<li>
								<BiMenuAltRight className="menuIcon" />
							</li>
						</ul>
					</div>
				</div>
				<div id="hidden">
					{toggleMenu && (
						<ul className="hidden__lists">
							<li>
								<a href="#experience">Бидний тухай</a>
							</li>
							<li>
								<a href="#event">Эвент</a>
							</li>
							<li>
								<a href="#team">Гишүүд</a>
							</li>
							<li>
								<a
									href="#involve"
									className="btn small__btn"
								>
									Нэгдэх
								</a>
							</li>
						</ul>
					)}
				</div>
			</section>
		</>
	);
};

export default Navbar;
