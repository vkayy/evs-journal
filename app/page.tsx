import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Page() {
  const navItems = [
    { key: "home", path: "#home", text: "home" },
    { key: "about us", path: "#about-us", text: "about us" },
    { key: "socials", path: "#socials", text: "socials" },
  ];

  return (
    <>
      <header className="header page__header header_glass">
        <Navbar navItems={navItems}></Navbar>
      </header>
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
