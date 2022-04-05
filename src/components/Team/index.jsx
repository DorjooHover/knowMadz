import React, { useRef, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import madz1 from '../../assets/teamIMG/img1.jpeg';
import madz2 from '../../assets/teamIMG/img2.jpeg';
import madz3 from '../../assets/teamIMG/img3.jpeg';
import madz4 from '../../assets/teamIMG/img4.jpeg';
import madz5 from '../../assets/teamIMG/img5.jpeg';
import madz6 from '../../assets/teamIMG/img6.jpeg';
import madz7 from '../../assets/teamIMG/img7.jpg';
import madz8 from '../../assets/teamIMG/img8.jpg';
import madz9 from '../../assets/teamIMG/img9.jpg';
import madz10 from '../../assets/teamIMG/img10.jpg';
import madz11 from '../../assets/teamIMG/img11.jpg';
import madz12 from '../../assets/teamIMG/img12.jpg';
import madz13 from '../../assets/teamIMG/img13.jpg';
import madz14 from '../../assets/teamIMG/img14.jpg';
import './team.css';
import Marquee from 'react-fast-marquee';

// import { Splide, SplideSlide } from '@splidejs/react-splide';

// const splide = new Splide('.splide', {
// 	type: 'loop',
// 	drag: 'free',
// 	focus: 'center',
// 	perPage: 3,
// 	autoScroll: {
// 		speed: 2,
// 	},
// });

// splide.mount();

const data = [
	{
		top: madz1,
		bottom: madz2,
	},
	{
		top: madz3,
		bottom: madz4,
	},
	{
		top: madz5,
		bottom: madz6,
	},

	{
		top: madz7,
		bottom: madz8,
	},
	{
		top: madz8,
		bottom: madz9,
	},
	{
		top: madz10,
		bottom: madz11,
	},
	{
		top: madz12,
		bottom: madz13,
	},
	// {
	// 	top: madz14,
	// 	bottom: madz13,
	// },
];

// function UpDown(props) {
// 	console.log(props);
// 	if (props.index % 2 == 0) {
// 		return (
// 			<div key={props.index} className="slide__page">
// 				<img src={props.top} alt="" className="image" />
// 				<img
// 					src={props.bottom}
// 					alt=""
// 					className="image top__image"
// 				/>
// 			</div>
// 		);
// 	} else {
// 		return (
// 			<div key={props.index} className="slide__page-bottom">
// 				<img src={props.top} alt="" className="image" />
// 				<img src={props.bottom} alt="" className="image" />
// 			</div>
// 		);
// 	}
// }

const Event = () => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			offset: 400,
			delay: 300,
		});
	}, []);
	return (
		<section id="team">
			<div className="container">
				<div
					className="content"
					data-aos="fade-up"
					data-aos-duration="800"
				>
					<h1
						className="big__header"
						data-aos="fade-up"
						data-aos-duration="800"
					>
						KNWMDZ: CLUB MEMBERS
					</h1>

					<p className="main__p">
						Энэ бүрэлдэхүүнд зөвхөн PV4000 түвшнээс дээш
						амжилт үзүүлсэн, олон улсын бизнес аялалд KNWMDZ
						-н гишүүдтэй хамт явж олон улсаас бизнес хийх ур
						чадвартай гэдгээ бодитоор батлан харуулж чадсан
						цөөн тооны хүмүүсийг л гишүүнээр авдаг бөгөөд
						гишүүд KNWMDZ NATION -ы цаашдийн бодлого
						төлөвлөлт, зорилго, төлөвлөгөөг хэрэгжүүлдэг
						үндсэн гишүүд юм.
					</p>
					<a href="#" className="btn">
						CLUB MEMBERS -Н ТАЛААР
					</a>
				</div>
			</div>
			<Marquee speed={200}>
				<div className="marquee-wrapper top">
					<img src={madz1} alt="" />
					<img src={madz2} alt="" />
				</div>
				<div className="marquee-wrapper">
					<img src={madz3} alt="" />
					<img src={madz4} alt="" />
				</div>
				<div className="marquee-wrapper top">
					<img src={madz5} alt="" />
					<img src={madz6} alt="" />
				</div>
			</Marquee>

			{/* <marquee direction="right" loop="0">
				{data.map(({ top, bottom }, index) => {
					return (
						<UpDown top={top} bottom={bottom} index={index} />
					);
				})}
			</marquee> */}
		</section>
	);
};

export default Event;
