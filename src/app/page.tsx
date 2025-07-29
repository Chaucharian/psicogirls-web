import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import OnlineInfo from '@/components/OnlineInfo';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import AvailabilityForm from '@/components/AvailabilityForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <OnlineInfo /> */}
        <Team />
        <Testimonials />
        <AvailabilityForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
