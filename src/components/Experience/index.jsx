import React, { useEffect } from 'react';
import './experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Connection from '../../assets/experienceConnection.png';
import Phone from '../../assets/experiencePhone.png';
import Goal from '../../assets/experiencePhoneGoal.png';
import World from '../../assets/experienceWorld.png';
import Change from '../../assets/experienceChange.png';

const Experience = () => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			offset: 250,
		});
	}, []);
	return (
		<section id="experience">
			<div className="container experience__container">
				<div className="section__title" data-aos="fade-up">
					<h1 className="big__header">
						Монголын хамгийн том хувь хүний хөгжлийн онлайн
						платформ
					</h1>
				</div>
				<div className="cards">
					<div
						className="horizontal__card card cyan__card"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay="200"
					>
						<div className="card__left">
							<img
								src={Connection}
								className="card__img"
								alt=""
							/>
						</div>
						<div className="card__right">
							<h2 className="medium__header">
								Дараагийн олон улсын аялал: VIETNAM
							</h2>
							<p className="main__p">
								Жилийн тэгш саруудад 6 удаа дэлхийн
								томоохон хотууд, арлуудаар аялах бизнес
								аялал.
							</p>
						</div>
					</div>
					<div
						className="horizontal__card card blossom__card"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay="200"
					>
						<div className="card__left">
							<img
								src={Phone}
								className="card__img mg"
								alt=""
							/>
						</div>
						<div className="card__right">
							<h2 className="medium__header">
								+150 цагийн сургалтын систем
							</h2>
							<p className="main__p">
								<ul>
									<li>
										Санхүүгийн боловсрол, мөнгөний
										менежмент
									</li>
									<li>
										Бизнес, маркетинг, борлуулалт
									</li>
									<li>
										Хувь хүний хөгжил,
										манлайлал,багийн ажиллагаа
									</li>
									<li>
										Эрүүл хооллолт, органик
										хэрэглээ, зөв амьдралын хэв
										маяг
									</li>
									<li>
										Instagram, YouTube хөгжүүлэлт,
										Контент бүтээлт
									</li>
								</ul>
							</p>
						</div>
					</div>
					<div className="vertical__card-div">
						<div
							className="vertical__card card purple__card"
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay="200"
						>
							<div className="card__top">
								<h2 className="medium__header">
									BOSSTALK: MEN AND WOMEN
								</h2>
								<p className="main__p">
									KNWMDZ NATION -ы эрчүүдэд болон
									эмэгтэйчүүдэд зориулсан шилдэг
									speaker-үүдийн хүчирхэгжүүлэх үйл
									ажиллагаа
								</p>
								<p className="main__p">
									Сар бүр тогтмол зохион байгуулагдаж
									байна.
								</p>
							</div>
							<div className="card__bottom mg">
								<img
									src={Goal}
									className="card__img "
									alt=""
								/>
							</div>
						</div>
						<div
							className="vertical__card card pink__card"
							data-aos="fade-up"
							data-aos-duration="800"
							data-aos-delay="400"
						>
							<div className="card__top">
								<h2 className="medium__header">
									#ZOGSLOOYU PARTY
								</h2>

								<p className="main__p">
									Монголын шинэ үеийн шилдэг уран
									бүтээлч, artist -уудын цуглаан
								</p>
							</div>
							<div className="card__bottom">
								<img
									src={World}
									className="card__img"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div
						className="horizontal__card card green__card"
						data-aos="fade-up"
						data-aos-duration="800"
						data-aos-delay="200"
					>
						<div className="card__left center">
							<img
								src={Change}
								className="card__img wd"
								alt=""
							/>
						</div>
						<div className="card__right">
							<h2 className="medium__header">
								CORE LEADERS RETREAT
							</h2>
							<p className="main__p">
								Жилийн тэгш саруудад Монголын хамгийн
								шилдэг буудал, resort, үзэсгэлэнт
								газруудаар аялах бизнес аялал.
							</p>
							{/* <a href="" className="main__p link">
								Өмнөх аялалуудыг үзэх…
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
