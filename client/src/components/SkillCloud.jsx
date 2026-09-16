import { RetroLoader, RetroError } from "./Status";

export default function SkillCloud({ skills, loading, error }) {
  return (
    <section id="skills">
      <h2 className="section-heading">Skills</h2>
      {loading && <RetroLoader label="Loading skills" />}
      {error && <RetroError message={error} />}
      {skills && (
        <div className="skill-cloud">
          {skills.map((skill, i) => {
            const size = 56 + Math.round((skill.level / 100) * 40); // 56–96px
            return (
              <div
                key={skill._id}
                className="skill-bubble"
                style={{
                  "--size": `${size}px`,
                  animationDelay: `${(i % 5) * 0.3}s`,
                }}
                title={`${skill.name} — ${skill.level}/100`}
              >
                {skill.name}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
