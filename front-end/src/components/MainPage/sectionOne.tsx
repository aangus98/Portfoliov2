import React from "react";
import CentralTime from "./clock"; // <-- adjust path
import AvailabilityDot from "./projectAvailability"; // <-- adjust path
import ProjectsPreview from "../Projects/projectCards";
import IconCarousel from "./iconCarousel";
import { techIcons } from "./tools";
import ContactBox from "./contactMe";
import "./css/sectionOne.css";
import Footer from "../footer";
import Age from "./aboutMe";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "experience", label: "Experience" },
  { id: "contactMe", label: "Contact Me" },
  { id: "tools", label: "Tools" },
];

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Layout(): JSX.Element {
  const isAvailable = true; // Set availability status here

  return (
    <div className="page">
      {/* LEFT (static) */}
      <aside className="sidebar">
        <div className="sidebarInner">
          {/* Name + Title */}
          <header className="identity">
            <h1 className="name">Andrew Angus</h1>
            <h2 className="title">Full Stack Developer</h2>
          </header>

          {/* Availability + Clock */}
          <section className="statusBlock" aria-label="Status">
            <div className="statusRow">
              <AvailabilityDot available={isAvailable} />
            </div>
            <div className="statusRow">
              <CentralTime />
            </div>
          </section>

          {/* Bookmarks */}
          <nav className="bookmarks" aria-label="Bookmarks">
            <ul className="bookmarkList">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="bookmarkItem">
                  <button
                    type="button"
                    className="bookmarkBtn"
                    onClick={() => scrollToId(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <section className="socials" aria-label="Social links">
              <Footer />
          </section>
        </div>
      </aside>

      {/* RIGHT (scrollable) */}
      <main className="content" aria-label="Main content">
        <section id="about" className="contentSection">
          <h2 className="sectionTitle">About</h2>
          <p className="sectionText">
              <Age /> 
          </p>
        </section>

        <section id="projects" className="contentSection">
          <h3 className="sectionTitle">Featured Projects</h3>
          <ProjectsPreview />
        </section>

        <section id="blog" className="contentSection">
          <h3 className="sectionTitle">Blog</h3>
          <p className="sectionText">
            Add posts or links here.
          </p>
        </section>
        <section id="experience" className="contentSection">
          <h3 className="sectionTitle">Experience</h3>
          <p className="sectionText">
            Add roles and impact bullets here.
          </p>
        </section>

        <section id="contactMe" className="contentSection">
          <h3 className="sectionTitle">Contact Me</h3>
            <ContactBox />
        </section>
        
        <section id="tools" className="contentSection">
          <h3 className="sectionTitle">Tools</h3>
          <IconCarousel icons={Object.values(techIcons).flat()} />
        </section>
      </main>
    </div>
  );
}
