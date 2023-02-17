import React from "react";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import Navbar from "./Navbar.jsx";
//create your first component
const Home = () => {
	function generateCards(){
		let cardArr = []
		for (let i = 0; i < 4; i++){
			cardArr.push(<Cards></Cards>)
		}
		return cardArr
	}
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="container">
        <Jumbotron></Jumbotron>
		<div className="d-flex justify-content-between">{generateCards()}</div>
      </div>
	  <Footer></Footer>
    </div>
  );
};

export default Home;
