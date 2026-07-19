/* ===== theme-switcher.js — Toggle neon color system ===== */
(function () {
  const themeBtn = document.getElementById("themeBtn");
  const THEMES = ["", "theme-cyan"]; // "" = purple (default), "theme-cyan" = cyan
  let index = 0;

  themeBtn.addEventListener("click", () => {
    index = (index + 1) % THEMES.length;
    // Clean previous themes
    THEMES.forEach((t) => {
      if (t) document.body.classList.remove(t);
    });
    // Apply current
    if (THEMES[index]) document.body.classList.add(THEMES[index]);

    console.log(
      "%cNeon theme switched → " + (THEMES[index] || "purple"),
      "color:#bc13fe;font-weight:bold;"
    );
  });
})();
