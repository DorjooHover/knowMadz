import React from 'react';
import './event.css';

const Event = () => {
	return (
		<section id="event">
			<div className="event__bg"></div>
			<div className="container">
				<div className="event__content">
					{/* <p className="main__p upper">WELCOME HOME EVENT</p> */}
					<h1 className="big__header">WELCOME HOME EVENT</h1>
					<p className="main__p bold">
						EVERY SATURDAY 13:00-16:00
					</p>
					<p className="main__p mg">
						KNWMDZ Nation -н гэр бүл, хамт олонтой нэгдэж буй
						шинэ гишүүдээ хүлээн авах уг үйл ажиллагаа нь
						таньд НҮҮДЭЛЧИД бид бусдаас юугаар ондоо, соёл,
						арга барил, сэтгэлгээ, алсын хараа, зорилго, хэв
						маягийн хувьд ямар өөр ертөнцөд аж төрдөг талаар
						нэгдсэн ойлголтыг өгөх үйл ажиллагаа юм.
					</p>
					<a href="#" className="btn">
						БҮРТГҮҮЛЭХ
					</a>
				</div>
			</div>
		</section>
	);
};

export default Event;
