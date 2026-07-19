/* ===== sidebar.js — Open / close left navigation ===== */
(function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("sidebarClose");
  const edgeTrigger = document.getElementById("edgeTrigger");
  const links = document.querySelectorAll(".sidebar-link");

  function open() {
    sidebar.classList.add("is-open");
    overlay.classList.add("is-visible");
  }

  function close() {
    sidebar.classList.remove("is-open");
    overlay.classList.remove("is-visible");
  }

  menuBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);

  // Hover on the left edge opens the panel
  edgeTrigger.addEventListener("mouseenter", open);

  // Close with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // SPA navigation: show only the active section, replace the previous one
  const sections = document.querySelectorAll(".section");

  function showSection(id) {
    sections.forEach((s) => s.classList.toggle("is-active", s.id === id));
    links.forEach((l) => l.classList.toggle("is-active", l.dataset.section === id));
  }

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // evita el salto por ancla/scroll
      const id = link.dataset.section;
      showSection(id);
      close(); // cierra el sidebar automáticamente
    });
  });

  // Vista inicial al cargar la página
  showSection("home");
  })();