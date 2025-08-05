import CTA from "../components/CTA";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import "./css/HomePage.css";

function HomePage() {
  return (
    <div id="home-container">
      <NavigationBar />
      <CTA />
      <Footer />
    </div>
  );
}

export default HomePage;
