import { lazy } from "react";
import { Analytics } from "@vercel/analytics/react";

import HeroComponent from "../Components/HeroComponent";




const Home = () => {
	return (
		<div>
			<HeroComponent />
			
			

			<Analytics />
		</div>
	);
};

export default Home;