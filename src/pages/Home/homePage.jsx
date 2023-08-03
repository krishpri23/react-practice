import HeroSection from "../../components/home/hero";
import HowItWorks from "../../components/home/howItWorks";
import Register from "../../components/home/register";

import "/src/styles/Home/homePage.css";

function HomePage() {
  return (
    <main className="home">
      <HeroSection />
      {/* <HowItWorks />
      <Register /> */}
    </main>
  );
}

export default HomePage;
