import "./App.css";
import Card from "./components/Card/Card";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
 
    <>
      <Navbar />
      <Content nama={"Ucup"} membership={"Platinum"} />
      <Content nama={"Bambang"} membership={"Gold"} />
      <Content nama={"Budi"} membership={"Silver"} />
      <br />
      <h2 style={{ textAlign: "center" }}>Yuk berlangganan premium</h2>
      <div className="card-wrapper">
        <Card
          title="Free"
          price={0}
          benefit1="Gratis tanpa biaya langganan"
          benefit2="Bisa melihat katalog & update terbaru"
          benefit3="Akses dasar ke fitur utama"
          benefit4="Dukungan komunitas"
        />
        <Card
          title="Gold"
          price={100000}
          isPopular={true}
          benefit1="Prioritas layanan pelanggan"
          benefit2="Akses premium terpilih"
          benefit3="Promo dan diskon khusus member"
          benefit4="Dukungan komunitas diutamakan"
        />
        <Card
          title="Platinum"
          price={200000}
          benefit1="Akses penuh keseluruh fitur premium"
          benefit2="Prioritas tertinggi suport dan layanan"
          benefit3="Penawaran ekslusif & early access"
          benefit4="Promo & diskon khusus member"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
