import React from 'react';
import './header.css';
import landingLogo from '../../assets/Logos/landingLogo.png';
const Header = () => {
	return (
		<section id="header">
			<div className="header__container">
				<div className="header__logo">
					<img src={landingLogo} alt="" />
				</div>

				<h1 className="big__header">Суралц Хөгж Хуваалц</h1>
				<p className="main__p">
					Мэдлэг төвтэй, дэлхийн сэтгэлгээтэй, эрүүл амьдралын
					хэв маягтай, энэрэнгүй капиталист, үйлчлэгч манлайлагч
					залуусын нэгдэл
				</p>
				<a href="#footer" className="btn">
					Нэгдэх
				</a>
			</div>
			<div className="images__wrapper">
				{/* ================         SIZE 50px BUBBLES    ================== */}
				<img
					src="./madz/1.png"
					className="bubble sz-50 sh-none"
					alt=""
				/>
				<img
					src="./madz/2.png"
					className="bubble sz-50 sh-none-1"
					alt=""
				/>
				<img
					src="./madz/3.png"
					className="bubble sz-50 sh-none-2"
					alt=""
				/>
				{/* ================            END OF 50px*      ===================*/}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================        SIZE 70px BUBBLES     ================== */}
				{/* Top left */}
				<img
					src="./madz/4.png"
					className="bubble sz-70 sh-yellow"
					alt=""
				/>
				{/* Left */}
				<img
					src="./madz/5.png"
					className="bubble sz-70 sh-none"
					alt=""
				/>
				{/* Middle bottom Left */}
				<img
					src="./madz/6.png"
					className="bubble sz-70 sh-green"
					alt=""
				/>
				{/* Middle bottom Left */}
				<img
					src="./madz/7.png"
					className="bubble sz-70 sh-pink"
					alt=""
				/>
				{/* Middle bottom right */}
				<img
					src="./madz/8.png"
					className="bubble sz-70 sh-purple"
					alt=""
				/>
				{/* Right */}
				<img
					src="./madz/9.png"
					className="bubble sz-70 sh-blue"
					alt=""
				/>
				{/* ================      END OF Size 70px Bubless  ================== */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================       SIZE 80px BUBBLES         ================= */}
				{/* Middle bottom Left */}
				<img
					src="./madz/10.png"
					className="bubble sz-80 sh-none"
					alt=""
				/>
				{/* Middle bottom right */}
				<img
					src="./madz/11.png"
					className="bubble sz-80 sh-orange"
					alt=""
				/>
				{/* ==================        END OF 80px                ===============*/}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================       SIZE 100px BUBBLES   ==================      */}
				{/* Top left */}
				<img
					src="./madz/12.png"
					className="bubble sz-100 sh-cyan"
					alt=""
				/>
				{/* Top Right */}
				<img
					src="./madz/13.png"
					className="bubble sz-100 sh-none"
					alt=""
				/>
				{/* Top Right */}
				<img
					src="./madz/14.png"
					className="bubble sz-100 sh-green"
					alt=""
				/>
				{/* ================      END OF Size 100px Bubless    ================ */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================     SIZE 110px BUBBLES     ==================      */}
				{/* Left */}
				<img
					src="./madz/15.png"
					className="bubble sz-110 sh-red"
					alt=""
				/>
				{/* Right */}
				<img
					src="./madz/16.png"
					className="bubble sz-110 sh-green"
					alt=""
				/>
				{/* ================ 	END OF Size 110px Bubless	 ================ */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================	 SIZE 130px BUBBLESs	 =================     */}
				{/* Top Left */}
				<img
					src="./madz/17.png"
					className="bubble sz-130 sh-green"
					alt=""
				/>
				{/* Middle bottom Left */}
				<img
					src="./madz/18.png"
					className="bubble sz-130 sh-purple"
					alt=""
				/>
				{/* Middle bottom Right */}
				<img
					src="./madz/19.png"
					className="bubble sz-130 sh-cyan"
					alt=""
				/>
				{/* Bottom */}
				<img
					src="./madz/20.png"
					className="bubble sz-130 sh-yellow"
					alt=""
				/>
				{/* Right */}
				<img
					src="./madz/21.png"
					className="bubble sz-130 sh-orange"
					alt=""
				/>
				{/* ================ 	END OF Size 130px Bubless	 ================ */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================ 	SIZE 160px BUBBLESs 	==================     */}
				{/* Middle bottom Left Medium */}
				<img
					src="./madz/22.png"
					className="bubble sz-160 sh-pink"
					alt=""
				/>
				{/* Middle bottom Right Medium */}
				<img
					src="./madz/23.png"
					className="bubble sz-160 sh-green"
					alt=""
				/>
				{/* ================ 	END OF Size 160px Bubless 	================ */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================ 	SIZE 195px BUBBLESs 	==================    */}
				{/* Left Large */}
				<img
					src="./madz/24.png"
					className="bubble sz-195 sh-yellow"
					alt=""
				/>
				{/* Right Large */}
				<img
					src="./madz/25.png"
					className="bubble sz-195 sh-purple"
					alt=""
				/>
				{/* ================ 	END OF Size 195px Bubless 	=================*/}
			</div>
		</section>
	);
};

export default Header;
