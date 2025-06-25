import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs'; // ✅ Import it

function Main() {
  return (
    <main>
      <Hero />
      <Specials />
      <Testimonials />
      <AboutUs /> {/* ✅ Add it here */}
    </main>
  );
}

export default Main;
