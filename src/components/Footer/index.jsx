import React from 'react';

import './footer.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import landingLogo from '../../assets/Logos/landingLogo.png';
import hoverLogo from '../../assets/Logos/whiteHover.png';

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="footer__logo">
					<a href="https://www.thehover.tech" target="_blank">
						<img src={hoverLogo} alt="" />
					</a>
				</div>
				<div className="footer__lists">
					<ul>
						<li>
							<a href="#">Donate</a>
						</li>
						<li>
							<a href="#">Terms of Use</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
					</ul>
				</div>
				<div className="footer__icons">
					<ul>
						<li>
							<a
								href="https://www.instagram.com/theknowmadz/"
								className="icon"
								target="_blank"
							>
								<AiOutlineInstagram />
							</a>
						</li>
						{/* <li>
							<AiOutlineTwitter className="icon" />
						</li> */}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
