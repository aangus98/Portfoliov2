import React from "react";
import CentralTime from "./clock"; // <-- adjust path
import AvailabilityDot from "./projectAvailability"; // <-- adjust path
import ProjectsPreview from "../Projects/projectCards";
import IconCarousel from "./iconCarousel";
import { techIcons } from "./tools";
import ContactBox from "./contactMe";
import "./css/sectionOne.css";
import Footer from "../footer";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "tools", label: "Tools" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contactMe", label: "Contact Me" },
  { id: "blog", label: "Blog" },
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
          <h3 className="sectionTitle">About</h3>
          <p className="sectionText">
              Placeholder text about Andrew Angus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

        <section id="contactMe" className="contentSection">
          <h3 className="sectionTitle">Contact Me</h3>
          <p className="sectionText">
            <ContactBox />
          </p>
        </section>

        <section id="experience" className="contentSection">
          <h3 className="sectionTitle">Experience</h3>
          <p className="sectionText">
            Add roles and impact bullets here.
          </p>
        </section>
        
        <section id="tools" className="contentSection">
          <h3 className="sectionTitle">Tools</h3>
          <IconCarousel icons={Object.values(techIcons).flat()} visibleCount={4} autoScroll={true} interval={3000} />
        </section>
      </main>
    </div>
  );
}
