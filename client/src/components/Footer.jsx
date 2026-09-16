export default function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="footer__text">
        <h3>Let's build something.</h3>
        <p>
          Scan the code to check out my GitHub, or use the contact form above
          — I read every message.
        </p>
      </div>
      {profile?.githubQrUrl && (
        <div className="footer__qr">
          <img src={profile.githubQrUrl} alt="QR code linking to GitHub profile" />
          <p className="footer__qr-label">GitHub</p>
        </div>
      )}
    </footer>
  );
}
