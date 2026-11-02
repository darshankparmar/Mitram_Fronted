/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import MitramLogo from "./Images/Mitram_LOGO.png";
import Fusion2k19 from "./Images/Fusion2k19.jpg";
import Antrixx2k19 from "./Images/Antrixx2k19.jpg";
import Fusion2k21 from "./Images/Fusion2k21.png";
import Fusion2k23 from "./Images/Fusion2k23.webp";
import Fusion5 from "./Images/Fusion5.jpg";
import Fusion6 from "./Images/Fusion6.jpg";

const stats = [
	{ value: "2019", label: "Founded in Nadiad" },
	{ value: "6", label: "Events hosted" },
	{ value: "500+", label: "Footfall per event" },
	{ value: "1", label: "Big family of friends" },
];

const pillars = [
	{
		icon: "fa-hands-helping",
		title: "Inclusive",
		text: "Events designed so everyone feels welcome — students, families and friends alike.",
	},
	{
		icon: "fa-tag",
		title: "Affordable",
		text: "Great experiences shouldn't cost a fortune. We keep our passes within every student's reach.",
	},
	{
		icon: "fa-star",
		title: "Unforgettable",
		text: "Music, garba, food and photo booths — nights that people keep talking about for a year.",
	},
];

const events = [
	{ img: Fusion6, name: "Fusion 6.0", type: "Garba & DJ Night", year: "2025" },
	{ img: Fusion5, name: "Fusion 5.0", type: "Garba & DJ Night", year: "2024" },
	{ img: Fusion2k23, name: "Fusion 2023", type: "Garba & DJ Night", year: "2023" },
	{ img: Fusion2k21, name: "Fusion 2021", type: "Garba & DJ Night", year: "2021" },
	{ img: Antrixx2k19, name: "Antrixx 2019", type: "New Year Party", year: "2019" },
	{ img: Fusion2k19, name: "Fusion 2019", type: "Our first event", year: "2019" },
];

export default function Home() {
	return (
		<div className="mh componentHeight">
			{/* Hero */}
			<section className="mh-hero">
				<div className="mh-hero-glow" aria-hidden="true" />
				<div className="mh-container mh-hero-inner">
					<span className="mh-eyebrow">Nadiad · Since 2019</span>
					<img className="mh-hero-logo" src={MitramLogo} alt="Mitram Group" />
					<h1 className="mh-hero-title">
						For the students, <em>by the students.</em>
					</h1>
					<p className="mh-hero-text">
						Mitram Group is a youth collective from Nadiad creating inclusive,
						affordable and unforgettable experiences — from Garba &amp; DJ
						nights to New Year celebrations.
					</p>
					<div className="mh-actions">
						<Link to="/about" className="mh-btn mh-btn-primary">
							Our Story
						</Link>
						<Link to="/contact-us" className="mh-btn mh-btn-ghost">
							Get in Touch
						</Link>
					</div>
					<Link to="/qrcheck" className="mh-verify">
						<i className="fas fa-qrcode" /> Already have a pass? Verify it
					</Link>
				</div>
			</section>

			{/* Stats */}
			<section className="mh-stats">
				<div className="mh-container mh-stats-grid">
					{stats.map((s) => (
						<div className="mh-stat" key={s.label}>
							<div className="mh-stat-value">{s.value}</div>
							<div className="mh-stat-label">{s.label}</div>
						</div>
					))}
				</div>
			</section>

			{/* About */}
			<section className="mh-section">
				<div className="mh-container">
					<div className="mh-section-head">
						<span className="mh-kicker">Who we are</span>
						<h2 className="mh-heading">
							Started as an idea. Grew into a community.
						</h2>
						<p className="mh-lead">
							Mitram began in a small office in Nadiad in September 2019 with
							one clear vision — to organise better events for the people of
							our city. Within just 20 days we hosted our first night, and
							we've been bringing people together ever since.
						</p>
					</div>
					<div className="mh-pillars">
						{pillars.map((p) => (
							<div className="mh-pillar" key={p.title}>
								<div className="mh-pillar-icon">
									<i className={`fas ${p.icon}`} />
								</div>
								<h3>{p.title}</h3>
								<p>{p.text}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Events */}
			<section className="mh-section mh-section-alt">
				<div className="mh-container">
					<div className="mh-section-head">
						<span className="mh-kicker">Our journey</span>
						<h2 className="mh-heading">Every event, a memory.</h2>
					</div>
					<div className="mh-events">
						{events.map((e) => (
							<figure className="mh-event" key={e.name}>
								<div
									className="mh-event-frame"
									style={{ "--poster": `url(${e.img})` }}
								>
									<img src={e.img} alt={`${e.name} poster`} loading="lazy" />
								</div>
								<figcaption>
									<span className="mh-event-year">{e.year}</span>
									<strong>{e.name}</strong>
									<span>{e.type}</span>
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</section>

			{/* Video */}
			<section className="mh-section">
				<div className="mh-container mh-video-wrap">
					<div className="mh-section-head">
						<span className="mh-kicker">Relive the vibe</span>
						<h2 className="mh-heading">See what a Mitram night feels like.</h2>
					</div>
					<div className="mh-video">
						<iframe
							src="https://www.youtube.com/embed/561Rin81lgM"
							title="Fusion 2k21 || Mitram"
							allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="mh-cta">
				<div className="mh-container mh-cta-inner">
					<div>
						<h2>Be part of the next one.</h2>
						<p>
							Follow us on Instagram to be the first to know about upcoming
							events and pass releases.
						</p>
					</div>
					<a
						href="https://www.instagram.com/mitramgroup/"
						target="_blank"
						rel="noreferrer"
						className="mh-btn mh-btn-light"
					>
						<i className="fab fa-instagram" /> @mitramgroup
					</a>
				</div>
			</section>
		</div>
	);
}
