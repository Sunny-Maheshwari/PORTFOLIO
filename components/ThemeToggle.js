"use client";

export default function ThemeToggle() {
  function toggle() {
    const r = document.documentElement;
    const current = r.getAttribute("data-theme");
    const dark = current === "dark" || (!current && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = dark ? "light" : "dark";
    r.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  }
  return (
    <button className="tbtn" type="button" onClick={toggle} aria-label="Switch colour theme">
      Theme
    </button>
  );
}
