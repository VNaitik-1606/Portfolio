const SECTION_ORDER = ["home", "skills", "projects", "certifications", "academics", "contact"];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function currentSectionIndex() {
  let current = 0;
  for (let i = 0; i < SECTION_ORDER.length; i++) {
    const el = document.getElementById(SECTION_ORDER[i]);
    if (el && el.getBoundingClientRect().top <= 120) {
      current = i;
    }
  }
  return current;
}

export default function GameboyShell({ children, profile }) {
  const handleDpad = (direction) => {
    const idx = currentSectionIndex();
    if (direction === "down" && idx < SECTION_ORDER.length - 1) {
      scrollToSection(SECTION_ORDER[idx + 1]);
    } else if (direction === "up" && idx > 0) {
      scrollToSection(SECTION_ORDER[idx - 1]);
    }
  };

  const handleA = () => {
    if (profile?.resumeUrl) window.open(profile.resumeUrl, "_blank");
  };

  const handleB = () => {
    if (profile?.githubUrl) window.open(profile.githubUrl, "_blank");
  };

  return (
    <div className="console">
      <div className="console__brand-row">
        <span className="console__brand">
          <span className="console__led" />
          PORTFOLIO™
        </span>
        <span className="console__brand">DEV BOY</span>
      </div>

      <div className="screen-bezel">
        <div className="screen" id="screen-scroll">
          {children}
        </div>
      </div>

      <div className="console__deck">
        <div className="dpad" role="group" aria-label="Section navigation">
          <button className="dpad__up" aria-label="Previous section" onClick={() => handleDpad("up")}>
            ▲
          </button>
          <button className="dpad__left" aria-label="Previous section" onClick={() => handleDpad("up")}>
            ◂
          </button>
          <div className="dpad__center" />
          <button className="dpad__right" aria-label="Next section" onClick={() => handleDpad("down")}>
            ▸
          </button>
          <button className="dpad__down" aria-label="Next section" onClick={() => handleDpad("down")}>
            ▼
          </button>
        </div>

        <div className="console__center-buttons">
          <button className="pill-button" onClick={() => scrollToSection("home")}>
            START
          </button>
          <button className="pill-button" onClick={() => scrollToSection("contact")}>
            SELECT
          </button>
        </div>

        <div className="ab-buttons">
          <button className="round-button" onClick={handleB} title="Open GitHub">
            B
          </button>
          <button className="round-button" onClick={handleA} title="Download CV">
            A
          </button>
        </div>
      </div>
    </div>
  );
}
