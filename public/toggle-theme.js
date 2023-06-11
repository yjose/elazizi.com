function getPreferTheme() {
  const primaryColorScheme = "dark"; // "light" | "dark"

  // Get theme data from local storage
  const currentTheme = localStorage.getItem("theme");

  // return theme value in local storage if it is set
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setPreference(theme) {
  localStorage.setItem("theme", theme);
  reflectPreference();
}

function reflectPreference() {
  const themeValue = getPreferTheme();
  document.firstElementChild.setAttribute("data-theme", themeValue);

  document.querySelector("#theme-btn")?.setAttribute("aria-label", themeValue);
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  console.log("window.onload");
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document.querySelector("#theme-btn")?.addEventListener("click", () => {
    const themeValue = getPreferTheme();
    const theme = themeValue === "light" ? "dark" : "light";
    setPreference(theme);
  });
};

// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    const themeValue = isDark ? "dark" : "light";
    setPreference(themeValue);
  });
