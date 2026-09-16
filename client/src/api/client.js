const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || `Request failed with status ${res.status}`);
  }

  return data;
}

export const api = {
  getProfile: () => request("/profile"),
  getProjects: () => request("/projects"),
  getSkills: () => request("/skills"),
  getCertifications: () => request("/certifications"),
  sendMessage: (payload) =>
    request("/contact", { method: "POST", body: JSON.stringify(payload) }),
};
