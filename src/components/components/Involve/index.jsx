import React, { useEffect } from 'react';
import './involve.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Event = () => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			offset: 0,
			delay: 300,
		});
	}, []);
	return (
		<section id="involve">
			<div className="container">
				<div className="content">
					<h1
						className="big__header"
						data-aos="fade-up"
						data-aos-duration="800"
					>
						БИ НЭГДМЭЭР БАЙНА
					</h1>

					<p
						className="main__p"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						KNWMDZ NATION-д гишүүнээр элсэх процесс нь зөвхөн
						дотоод гишүүдээс урилга авсан тохиолдолд л бүртгэл
						үүсгэх замаар үргэлжлэх боломжтой ба та өөрийн
						амьдралын хэв маяг, чанарт эрс өөрчлөлт хийхийг
						хүлээн зөвшөөрч санамж бичигт гарын үсэг зурсанаар
						бидний хамтрал эхэлнэ.
					</p>
					<div className="btn__div">
						<a href="#" className="btn">
							БҮРТГҮҮЛЭХ
						</a>
						<a href="#" className="btn second__btn">
							УРИЛГА АВАХ
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Event;
