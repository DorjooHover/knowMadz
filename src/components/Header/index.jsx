import React, { useState } from 'react';
import './header.css';
import landingLogo from '../../assets/Logos/landingLogo.png';
import { motion } from 'framer-motion';

const onTap = {
	scale: 0.9,
};
const onHover = {
	scale: 1.5,
	transition: {
		delay: 0,
	},
};
const Header = () => {
	const popUp50 = {
		before: {
			scale: 0,
			opacity: 0,
		},
		after: {
			scale: 1,
			opacity: 1,
			transition: { delay: 3 },
		},
	};

	const popUp70 = {
		before: {
			scale: 0,
			opacity: 0,
		},
		after: {
			scale: 1,
			opacity: 1,
			transition: { delay: 2.75 },
		},
	};
	const popUp80 = {
		before: {
			scale: 0,
			opacity: 0,
		},
		after: {
			scale: 1,
			opacity: 1,
			transition: { delay: 2.5 },
		},
	};
	const popUp100 = {
		before: {
			scale: 0,
			opacity: 0,
		},
		after: {
			scale: 1,
			opacity: 1,
			transition: { delay: 2.3 },
		},
	};
	const popUp110 = {
		before: {
			scale: 0,
			opacity: 0,
		},
		after: {
			scale: 1,
			opacity: 1,
			transition: { delay: 2.1 },
		},
	};
	const popUp130 = {
		before: {
			scale: 0,
			opacity: 0,
		},
		after: {
			scale: 1,
			opacity: 1,
			transition: { delay: 1.9 },
		},
	};
	const popUp160 = {
		before: {
			scale: 0,
			opacity: 0,
		},
		after: {
			scale: 1,
			opacity: 1,
			transition: { delay: 0.95 },
		},
	};
	const popUp195 = {
		before: {
			scale: 0,
			opacity: 0,
		},
		after: {
			scale: 1,
			opacity: 1,
			transition: { delay: 0.7 },
		},
	};

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
				<motion.img
					src="./madz/1.png"
					className="bubble bubble__hover sz-50 sh-none"
					alt=""
					variants={popUp50}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				<motion.img
					src="./madz/2.png"
					className="bubble bubble__hover sz-50 sh-none-1"
					alt=""
					variants={popUp50}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				<motion.img
					src="./madz/3.png"
					className="bubble bubble__hover sz-50 sh-none-2"
					alt=""
					variants={popUp50}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* ================            END OF 50px*      ===================*/}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================        SIZE 70px BUBBLES     ================== */}
				{/* Top left */}
				<motion.img
					src="./madz/4.png"
					className="bubble bubble__hover sz-70 sh-yellow"
					alt=""
					variants={popUp70}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Left */}
				<motion.img
					src="./madz/5.png"
					className="bubble bubble__hover sz-70 sh-none"
					alt=""
					variants={popUp70}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Middle bottom Left */}
				<motion.img
					src="./madz/6.png"
					className="bubble bubble__hover sz-70 sh-green"
					alt=""
					variants={popUp70}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Middle bottom Left */}
				<motion.img
					src="./madz/7.png"
					className="bubble bubble__hover sz-70 sh-pink"
					alt=""
					variants={popUp70}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Middle bottom right */}
				<motion.img
					src="./madz/8.png"
					className="bubble bubble__hover sz-70 sh-purple"
					alt=""
					variants={popUp70}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Right */}
				<motion.img
					src="./madz/9.png"
					className="bubble bubble__hover sz-70 sh-blue"
					alt=""
					variants={popUp70}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* ================      END OF Size 70px Bubless  ================== */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================       SIZE 80px BUBBLES         ================= */}
				{/* Middle bottom Left */}
				<motion.img
					src="./madz/10.png"
					className="bubble bubble__hover sz-80 sh-none"
					alt=""
					variants={popUp80}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Middle bottom right */}
				<motion.img
					src="./madz/11.png"
					className="bubble bubble__hover sz-80 sh-orange"
					alt=""
					variants={popUp80}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* ==================        END OF 80px                ===============*/}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================       SIZE 100px BUBBLES   ==================      */}
				{/* Top left */}
				<motion.img
					src="./madz/12.png"
					className="bubble bubble__hover sz-100 sh-cyan"
					alt=""
					variants={popUp100}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Top Right */}
				<motion.img
					src="./madz/13.png"
					className="bubble bubble__hover sz-100 sh-none"
					alt=""
					variants={popUp100}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Top Right */}
				<motion.img
					src="./madz/14.png"
					className="bubble bubble__hover sz-100 sh-green"
					alt=""
					variants={popUp100}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* ================      END OF Size 100px Bubless    ================ */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================     SIZE 110px BUBBLES     ==================      */}
				{/* Left */}
				<motion.img
					src="./madz/15.png"
					className="bubble bubble__hover sz-110 sh-red"
					alt=""
					variants={popUp110}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Right */}
				<motion.img
					src="./madz/16.png"
					className="bubble bubble__hover sz-110 sh-green"
					alt=""
					variants={popUp110}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* ================ 	END OF Size 110px Bubless	 ================ */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================	 SIZE 130px BUBBLESs	 =================     */}
				{/* Top Left */}
				<motion.img
					src="./madz/17.png"
					className="bubble bubble__hover sz-130 sh-green"
					alt=""
					variants={popUp130}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Middle bottom Left */}
				<motion.img
					src="./madz/18.png"
					className="bubble bubble__hover sz-130 sh-purple"
					alt=""
					variants={popUp130}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Middle bottom Right */}
				<motion.img
					src="./madz/19.png"
					className="bubble bubble__hover sz-130 sh-cyan"
					alt=""
					variants={popUp130}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Bottom */}
				<motion.img
					src="./madz/20.png"
					className="bubble bubble__hover sz-130 sh-yellow"
					alt=""
					variants={popUp130}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Right */}
				<motion.img
					src="./madz/21.png"
					className="bubble bubble__hover sz-130 sh-orange"
					alt=""
					variants={popUp130}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* ================ 	END OF Size 130px Bubless	 ================ */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================ 	SIZE 160px BUBBLESs 	==================     */}
				{/* Middle bottom Left Medium */}
				<motion.img
					src="./madz/22.png"
					className="bubble bubble__hover sz-160 sh-pink"
					alt=""
					variants={popUp160}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Middle bottom Right Medium */}
				<motion.img
					src="./madz/23.png"
					className="bubble bubble__hover sz-160 sh-green"
					alt=""
					variants={popUp160}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* ================ 	END OF Size 160px Bubless 	================ */}

				{/*                          ========                           */}
				{/*                          ========                           */}
				{/*                          ========                           */}

				{/* ================ 	SIZE 195px BUBBLESs 	==================    */}
				{/* Left Large */}
				<motion.img
					src="./madz/24.png"
					className="bubble bubble__hover sz-195 sh-yellow"
					alt=""
					variants={popUp195}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* Right Large */}
				<motion.img
					src="./madz/25.png"
					className="bubble bubble__hover sz-195 sh-purple"
					alt=""
					variants={popUp195}
					initial="before"
					animate="after"
					whileTap={onTap}
					whileHover={onHover}
				/>
				{/* ================ 	END OF Size 195px Bubless 	=================*/}
			</div>
		</section>
	);
};

export default Header;
