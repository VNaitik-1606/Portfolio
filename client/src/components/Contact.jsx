import { useState } from "react";
import { api } from "../api/client";

const EMPTY = { name: "", email: "", subject: "", body: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState(null); // "sending" | "sent" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await api.sendMessage(form);
      setStatus("sent");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact">
      <h2 className="section-heading">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Message</label>
          <textarea
            id="body"
            name="body"
            value={form.body}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "▸ Send Message"}
        </button>

        {status === "sent" && (
          <p className="form-status form-status--success">
            Message sent — thanks for reaching out!
          </p>
        )}
        {status === "error" && (
          <p className="form-status form-status--error">Couldn't send: {errorMsg}</p>
        )}
      </form>
    </section>
  );
}
