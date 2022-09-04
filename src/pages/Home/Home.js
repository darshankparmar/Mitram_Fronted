/** @format */

import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fusion2k19 from "./Images/Fusion2k19.jpg";
import Antrixx2k19 from "./Images/Antrixx2k19.jpg";
import Fusion2k21 from "./Images/Fusion2k21.png";
import "./Home.css";
import mobileBanner from "./Images/mobileBanner.png";
import desktopBanner from "./Images/desktopBanner.png";

export default function Home() {
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	function getWindowSize() {
		const { innerWidth, innerHeight } = window;
		return { innerWidth, innerHeight };
	}

	return (
		<>
			<div className="banner text-center">
				{/* <h2 className="text-center">Fusion 2k22</h2>
						<h4 className="text-center">Registration Start on 10/09/2022</h4> */}
				<Link to="/register">
					<img
						src={windowSize.innerWidth <= 500 ? mobileBanner : desktopBanner}
						alt="banner"
						width={
							windowSize.innerWidth <= 500
								? "375px"
								: windowSize.innerWidth < 1000
								? "600px"
								: "1000px"
						}
					/>
				</Link>
				{/* <div className="banner-register-button text-center">
					<Link to="/" disabled>
						Register
					</Link>
				</div> */}
			</div>

			<div className="container text-center mt-5">
				<h1
					className="animate-charcter"
					style={{ color: "#820d80", fontStyle: "oblique", fontWeight: 600 }}
				>
					FOR THE STUDENTS,{" "}
				</h1>
				<br />
				<h1
					className="animate-charcter"
					style={{
						color: "rgb(255, 0, 0)",
						fontStyle: "oblique",
						fontWeight: 600,
					}}
				>
					BY THE STUDENTS
				</h1>
			</div>
			{/* All Events */}
			<section className="pt-5 pb-5">
				<div className="container">
					<div className="row">
						<hr />
						<div className="text-center">
							<h2 className="mb-3 font-weight-bold">Events </h2>
						</div>
						{/* <div className="col-6 text-right">
							<a
								className="btn btn-primary mb-3 mr-1"
								href="#carouselExampleIndicators2"
								role="button"
								data-slide="prev"
							>
								<i className="fa fa-arrow-left"></i>
							</a>
							<a
								className="btn btn-primary mb-3 "
								href="#carouselExampleIndicators2"
								role="button"
								data-slide="next"
							>
								<i className="fa fa-arrow-right"></i>
							</a>
						</div> */}
						<div className="col-12">
							<div
								id="carouselExampleIndicators2"
								className="carousel slide"
								data-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<div className="row">
											<div className="col-md-4 mb-5 full-card">
												<Link className="card-link" to="/fusin2k21">
													<div className="card">
														<img
															className="img-fluid"
															alt="100%x280"
															src={Fusion2k21}
														/>
														<div className="card-body">
															<h4 className="card-title">Fusion - 2021</h4>
															<p className="card-text">
																With supporting text below as a natural lead-in
																to additional content.
															</p>
														</div>
													</div>
												</Link>
											</div>
											<div className="col-md-4 mb-5 full-card">
												<Link className="card-link" to="/antrixx2k19">
													<div className="card">
														<img
															className="img-fluid"
															alt="100%x280"
															src={Antrixx2k19}
														/>
														<div className="card-body">
															<h4 className="card-title">Antrixx - 2019</h4>
															<p className="card-text">
																With supporting text below as a natural lead-in
																to additional content.
															</p>
														</div>
													</div>
												</Link>
											</div>
											<div className="col-md-4 mb-5 full-card">
												<Link className="card-link" to="/fusion2k19">
													<div className="card">
														<img
															className="img-fluid"
															alt="100%x280"
															src={Fusion2k19}
														/>
														<div className="card-body">
															<h4 className="card-title">Fusion - 2019</h4>
															<p className="card-text">
																With supporting text below as a natural lead-in
																to additional content.
															</p>
														</div>
													</div>
												</Link>
											</div>
										</div>
									</div>
									{/* <div className="carousel-item">
										<div className="row">
											<div className="col-md-4 mb-3">
												<div className="card">
													<img
														className="img-fluid"
														alt="100%x280"
														src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
													/>
													<div className="card-body">
														<h4 className="card-title">
															Special title treatment
														</h4>
														<p className="card-text">
															With supporting text below as a natural lead-in to
															additional content.
														</p>
													</div>
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<div className="card">
													<img
														className="img-fluid"
														alt="100%x280"
														src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
													/>
													<div className="card-body">
														<h4 className="card-title">
															Special title treatment
														</h4>
														<p className="card-text">
															With supporting text below as a natural lead-in to
															additional content.
														</p>
													</div>
												</div>
											</div>
											<div className="col-md-4 mb-3">
												<div className="card">
													<img
														className="img-fluid"
														alt="100%x280"
														src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
													/>
													<div className="card-body">
														<h4 className="card-title">
															Special title treatment
														</h4>
														<p className="card-text">
															With supporting text below as a natural lead-in to
															additional content.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
