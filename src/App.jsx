// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { Component } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Customer from "./Components/Customer/Customer";

function App() {
  const a = 10;
  const b = 20;
  console.log(a + b);
  alert("Amar kamu itu Hebat!");

  return (
    <>
      <Header />
      <h1>To-do List</h1>
      <ol>
        <li>Mengerjakan tugas front end</li>
        <li>Mempelajari tutorial react js</li>
        <li align="center">Murojaah 1 juz</li>
      </ol>
      <Profile Nama={"Ucup"} Alamat={"Bandung"} Umur={17} />
      <Profile Nama={"Bambang"} Alamat={"Depok"} Umur={22} />
      <br />
      <h1>Our Customer</h1>
      <Customer nama={"Amar"} alamat={"pringsewu"} membership={"Premium"} />
      <Customer nama={"Hisyam"} alamat={"pringsewu"} membership={"Gold"} />
      <Customer nama={"Nadia"} alamat={"pringsewu"} membership={"Platinum"} />
      <br />
      <img src="http://picsum.photos/500/300" alt="Gambar" />
      <Footer nama="Ucup Hidayatullah" />
    </>
  );
}

export default App;
