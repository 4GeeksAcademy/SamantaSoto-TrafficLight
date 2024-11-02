import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setLight] = useState("");


	return (
		<div className="justify-content-center">
			<div className="trafficLightTop bg-dark"></div>
			<div className="trafficLightBody bg-dark row g-1 justify-content-center p-2 rounded-2">
				<div className={`rounded-circle bg-danger bg-gradient ${light == "red" ? "selected" : ""}`} onClick={() => {
					setLight("red");
				}}></div>
				<div className={`"yellow rounded-circle bg-warning bg-gradient ${light == "yellow" ? "selected" : ""}`} onClick={() => {
					setLight("yellow");
				}}></div>
				<div className={`green rounded-circle bg-success bg-gradient ${light == "green" ? "selected" : ""}`} onClick={() => {
					setLight("green");
				}}></div>
			</div>
		</div>
	);
};

export default Home;
