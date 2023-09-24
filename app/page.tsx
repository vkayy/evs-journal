import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Page() {

  return (
    <>
      <main className="main">
        <Hero></Hero>
        <About></About>
      </main>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
