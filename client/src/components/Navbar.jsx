const LINKS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certs" },
  { id: "academics", label: "Scholar" },
];

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="nav">
      <div className="nav__links">
        {LINKS.map((link) => (
          <button
            key={link.id}
            className="nav__link"
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>
      <button className="nav__contact-btn" onClick={() => scrollTo("contact")}>
        Contact
      </button>
    </nav>
  );
}
