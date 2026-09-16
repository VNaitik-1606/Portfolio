import { RetroLoader, RetroError } from "./Status";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString(undefined, {
    month: "short",
    year: "numeric",
  });
}

export default function Certifications({ certifications, loading, error }) {
  return (
    <section id="certifications">
      <h2 className="section-heading">Certifications</h2>
      {loading && <RetroLoader label="Loading certifications" />}
      {error && <RetroError message={error} />}
      {certifications && (
        <div className="badge-grid">
          {certifications.map((cert) => (
            <a
              key={cert._id}
              className="badge"
              href={cert.credentialUrl || undefined}
              target={cert.credentialUrl ? "_blank" : undefined}
              rel={cert.credentialUrl ? "noreferrer" : undefined}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="badge__icon" />
              <p className="badge__title">{cert.title}</p>
              <p className="badge__issuer">
                {cert.issuer}
                {cert.issueDate ? ` · ${formatDate(cert.issueDate)}` : ""}
              </p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
