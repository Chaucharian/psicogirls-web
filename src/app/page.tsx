import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
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
        {/* <Testimonials /> */}
        <AvailabilityForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
