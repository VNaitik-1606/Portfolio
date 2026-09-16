import { RetroLoader, RetroError } from "./Status";

export default function Hero({ profile, loading, error }) {
  return (
    <section id="home" className="hero">
      {loading && <RetroLoader label="Loading profile" />}
      {error && <RetroError message={error} />}
      {profile && (
        <>
          <div className="hero__avatar-frame">
            {profile.avatarUrl ? (
              <img src={profile.avatarUrl} alt={profile.name} />
            ) : (
              "PHOTO"
            )}
          </div>
          <div className="hero__text">
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <p className="hero__intro">{profile.intro}</p>
            {profile.resumeUrl && (
              <a
                className="cta-button"
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
              >
                ▸ Download CV
              </a>
            )}
          </div>
        </>
      )}
    </section>
  );
}
