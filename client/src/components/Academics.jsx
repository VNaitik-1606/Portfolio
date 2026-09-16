export default function Academics({ profile }) {
  if (!profile?.academics?.length) return null;

  return (
    <section id="academics">
      <h2 className="section-heading">Academic Details</h2>
      {profile.academics.map((entry, i) => (
        <div className="academic-entry" key={i}>
          <p className="academic-entry__inst">{entry.institution}</p>
          <p className="academic-entry__meta">
            {entry.degree}
            {entry.detail ? ` · ${entry.detail}` : ""}
            {entry.startYear ? ` · ${entry.startYear}–${entry.endYear || "present"}` : ""}
          </p>
        </div>
      ))}
    </section>
  );
}
