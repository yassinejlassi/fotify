import React from "react";
import Header from "../components/header";
import Offers from "../components/offers";
import Discover from "../components/discover";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Acceuil() {
  return (
    <div>
      <Nav />
      <Header />
      <Offers />
      <Discover />
      <Footer />
    </div>
  );
}
