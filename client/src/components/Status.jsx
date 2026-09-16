export function RetroLoader({ label = "Loading" }) {
  return <div className="retro-loader">{label}</div>;
}

export function RetroError({ message }) {
  return (
    <div className="form-status form-status--error">
      Couldn't load this section: {message}
    </div>
  );
}
