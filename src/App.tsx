import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Signatures from '@/components/Signatures';
import MenuSection from '@/components/MenuSection';
import Experience from '@/components/Experience';
import ReservationForm from '@/components/ReservationForm';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Signatures />
        <MenuSection />
        <Experience />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
