import React from "react";
import Card from "./card.jsx";
import Navbar from "./card.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container text-center m-1">
			<Navbar/>

			<Card url = "https://images.hola.com/imagenes/mascotas/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg?tx=w_744"/>
			<Card url = "https://areajugones.sport.es/wp-content/uploads/2022/02/gintama-orden-1080x609.jpg.webp"/>
			<Card url = "https://c.tenor.com/OVAC8LQNpt8AAAAC/goku-kid-goku.gif"/>
			<Card url = "https://i.pinimg.com/736x/17/93/39/1793396f6cbc17bdb6fa05caee1af60b.jpg"/>


			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
