import { useFetch } from "./hooks/useFetch";
import { api } from "./api/client";

import GameboyShell from "./components/GameboyShell";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillCloud from "./components/SkillCloud";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Academics from "./components/Academics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { data: profile, loading: profileLoading, error: profileError } = useFetch(
    api.getProfile,
    []
  );
  const { data: projects, loading: projectsLoading, error: projectsError } = useFetch(
    api.getProjects,
    []
  );
  const { data: skills, loading: skillsLoading, error: skillsError } = useFetch(
    api.getSkills,
    []
  );
  const {
    data: certifications,
    loading: certificationsLoading,
    error: certificationsError,
  } = useFetch(api.getCertifications, []);

  return (
    <GameboyShell profile={profile}>
      <Navbar />
      <Hero profile={profile} loading={profileLoading} error={profileError} />
      <SkillCloud skills={skills} loading={skillsLoading} error={skillsError} />
      <Projects projects={projects} loading={projectsLoading} error={projectsError} />
      <Certifications
        certifications={certifications}
        loading={certificationsLoading}
        error={certificationsError}
      />
      <Academics profile={profile} />
      <Contact />
      <Footer profile={profile} />
    </GameboyShell>
  );
}
