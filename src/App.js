import './App.css';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import Fusion2k19 from './events/Fusion2k19/Fusion2k19';
import Fusion2k21 from './events/Fusion2k21/Fusion2k21';
import Antrix2k19 from './events/Antrixx2k19/Antrix2k19';
import Login from './pages/Auth/Login/Login';
import SignUp from './pages/Auth/SignUp/SignUp';
import About from './pages/About/About';

function App() {
  return (
		<Router>
			<CustomNavbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/register" element={<Registration />} />
				<Route exact path="/contact-us" element={<ContactUs />} />
				<Route exact path="/fusion2k19" element={<Fusion2k19 />} />
				<Route exact path="/antrixx2k19" element={<Antrix2k19 />} />
				<Route exact path="/fusin2k21" element={<Fusion2k21 />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/signup" element={<SignUp />} />
				<Route exact path="/about" element={<About />} />
			</Routes>
			<Footer />
		</Router>
	);
}


export default App;
