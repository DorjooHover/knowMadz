import React, { useEffect } from 'react';
import './banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import CircleRGB from '../../assets/circleRgb.svg';
const Banner = () => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			offset: 100,
		});
	}, []);
	return (
		<section id="banner">
			{/* <div className="banner__bg">
				<img src={CircleRGB} alt="" />
			</div> */}
			<div className="container">
				<div className="banner__content">
					<h2 className="medium__header">
						<p
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay="200"
						>
							Бид таньд Монголын тогтсон нэг амьдралын хэв
							маягаас гаргаж
							<span className="yellow__p"> ӨНГӨРСӨН</span>
							өө тэмдэглэн
						</p>
						<p
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay="300"
						>
							<span className="orange__p"> ИРЭЭДҮЙ</span>
							дээ төвлөрч,
							<span className="blossom__p"> ӨНӨӨДӨР</span>
							төө амьдрах үүд хаалгыг нээж өгнө.
						</p>
						<p
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay="400"
						></p>
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Banner;
