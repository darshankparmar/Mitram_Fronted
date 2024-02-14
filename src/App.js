/** @format */

import React, { useEffect, useState } from "react";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import Fusion2k19 from "./events/Fusion2k19/Fusion2k19";
import Fusion2k21 from "./events/Fusion2k21/Fusion2k21";
import Antrix2k19 from "./events/Antrixx2k19/Antrix2k19";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";
import About from "./pages/About/About";
import Privacy from "./components/Privacy/Privacy";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import CheckOut from "pages/CheckOut/checkout";
import QRCodeList from "components/QRCode/QRCodeList";
import ConfirmationPage from "pages/ConfirmationPage/ConfirmationPage";
import QRScannerForConf from "pages/ConfirmationPage/QRScannerForConf/QRScannerForConf";
import QRCheck from "pages/QRCheck/QRCheck";
import Details from "pages/Details/Details";
import { PrivateRoute } from "components/PrivateRoute";
import { authenticationService } from "services";
import ListOfUsers from "pages/ListOfParticipants/ListOfUsers";
import ListOfParticipants from "pages/ListOfParticipants/ListOfParticipants";
import Pickup from "pages/Pickup/Pickup";
import Location from "pages/Pickup/Location";

// google analytics
import ReactGA from "react-ga";
import CheckoutCash from "pages/CheckOut/checkoutCash";
import SoldPassList from "pages/SoldPassList/SoldPassList";
const TRACKING_ID = "UA-240847696-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
		authenticationService.currentUser.subscribe((x) => {
			setCurrentUser(x);
			// console.log(x && x.role);
		});
	}, [currentUser]);

	return (
		<Router>
			<CustomNavbar user={currentUser} />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					exact
					path="/register"
					element={<Registration user={currentUser} />}
				/>
				<Route exact path="/contact-us" element={<ContactUs />} />
				<Route exact path="/fusion2k19" element={<Fusion2k19 />} />
				<Route exact path="/antrixx2k19" element={<Antrix2k19 />} />
				<Route exact path="/fusin2k21" element={<Fusion2k21 />} />
				<Route exact path="/login" element={<Login />} />
				{/* <Route exact path="/signup" element={<SignUp />} /> */}
				<Route exact path="/about" element={<About />} />
				<Route exact path="/privacy" element={<Privacy />} />
				<Route exact path="/qrcheck" element={<QRCheck />} />
				<Route exact path="/detail" element={<Details user={currentUser} />} />
				<Route
					exact
					path="/soldpasslist"
					element={
						<PrivateRoute>
							<SoldPassList user={currentUser} />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/pickup"
					element={
						<PrivateRoute>
							<Pickup />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/pickup/:locationId"
					element={
						<PrivateRoute>
							<Location />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/analytics"
					element={
						<PrivateRoute>
							<ListOfUsers />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/user-info"
					element={
						<PrivateRoute>
							<ListOfParticipants />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/terms-and-condition"
					element={<TermsAndConditions />}
				/>
				<Route exact path="/checkout-cash" element={<CheckoutCash />} />
				<Route
					exact
					path="/pass-allo"
					element={
						<PrivateRoute role="Admin">
							<QRScannerForConf />
						</PrivateRoute>
					}
				/>
				<Route exact path="/checkout" element={<CheckOut />} />
				<Route
					exact
					path="/qrcode"
					element={
						<PrivateRoute role="Admin">
							<QRCodeList />
						</PrivateRoute>
					}
				/>
				<Route
					exact
					path="/confirmation"
					element={
						<PrivateRoute role="Admin">
							<ConfirmationPage />
						</PrivateRoute>
					}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
