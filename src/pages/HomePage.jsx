import CTA from "../components/CTA";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

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
