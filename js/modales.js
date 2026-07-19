/* ===== modales.js — Modal open / close & content injection ===== */
(function () {
  const profileModal = document.getElementById("profileModal");
  const evidenceModal = document.getElementById("evidenceModal");

  const profileModalImg = document.getElementById("profileModalImg");
  const profileModalName = document.getElementById("profileModalName");
  const profileModalRole = document.getElementById("profileModalRole");
  const profileModalBio = document.getElementById("profileModalBio");

  const evidenceModalTitle = document.getElementById("evidenceModalTitle");
  const evidenceModalDate = document.getElementById("evidenceModalDate");
  const sliderTrack = document.getElementById("sliderTrack");
  const videoFrame = document.getElementById("videoFrame");
  const sliderPrev = document.getElementById("sliderPrev");
  const sliderNext = document.getElementById("sliderNext");

  let sliderIndex = 0;
  let currentPhotos = [];

  function openModal(modal) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    // Stop video playback on close
    if (modal === evidenceModal) videoFrame.innerHTML = "";
  }

  // Close buttons (all [data-close])
  document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".modal");
      closeModal(modal);
    });
  });

  // Click outside the box closes
  [profileModal, evidenceModal].forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  // Escape closes any open modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal(profileModal);
      closeModal(evidenceModal);
    }
  });

  // ===== Profile modals =====
  document.querySelectorAll(".profile-card").forEach((card) => {
    card.addEventListener("click", () => {
      const i = parseInt(card.dataset.member, 10);
      const m = TEAM_MEMBERS[i];
      if (!m) return;
      profileModalImg.src = m.photo;
      profileModalImg.alt = m.name + " portrait";
      profileModalName.textContent = m.name;
      profileModalRole.textContent = m.role;
      profileModalBio.textContent = m.bio;
      openModal(profileModal);
    });
  });

  // ===== Evidence modals =====
  function renderSlider() {
    if (currentPhotos.length === 0) return;
    sliderTrack.innerHTML = "";
    const img = document.createElement("img");
    img.src = currentPhotos[sliderIndex];
    img.alt = "Class photo " + (sliderIndex + 1);
    sliderTrack.appendChild(img);
  }

  sliderPrev.addEventListener("click", () => {
    sliderIndex = (sliderIndex - 1 + currentPhotos.length) % currentPhotos.length;
    renderSlider();
  });

  sliderNext.addEventListener("click", () => {
    sliderIndex = (sliderIndex + 1) % currentPhotos.length;
    renderSlider();
  });

  document.querySelectorAll(".evidence-card").forEach((card) => {
    card.addEventListener("click", () => {
      const i = parseInt(card.dataset.evidence, 10);
      const ev = EVIDENCE[i];
      if (!ev) return;
      evidenceModalTitle.textContent = ev.title;
      evidenceModalDate.textContent = ev.date;
      currentPhotos = ev.photos;
      sliderIndex = 0;
      renderSlider();
      videoFrame.innerHTML =
        '<iframe src="' + ev.video + '" title="Class video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      openModal(evidenceModal);
    });
  });
})();
