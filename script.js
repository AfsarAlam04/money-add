// script.js
const API_BASE = "https://rectangular-ballistic-tractor.glitch.me";

// Example: Fetch apps from backend
async function loadApps() {
  const response = await fetch(`${API_BASE}/apps`);
  const apps = await response.json();
  // Populate dropdowns
}
