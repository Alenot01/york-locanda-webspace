
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
