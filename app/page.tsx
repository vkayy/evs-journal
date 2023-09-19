import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  const navItems = [
    { key: "home", path: "#home", text: "home" },
    { key: "about us", path: "#about-us", text: "about us" },
    { key: "mailing list", path: "#mailing-list", text: "mailing list" },
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
    </>
  );
}
