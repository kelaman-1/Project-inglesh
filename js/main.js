/* ===== main.js — Site initializer & data ===== */

// Team members data
const TEAM_MEMBERS = [
  {
    name: "Alex Carter",
    role: "Team Leader",
    photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Alex coordinates the team, organizes the schedule, and makes sure every deliverable is on time. He enjoys planning and keeping the group focused on the goal."
  },
  {
    name: "Jordan Lee",
    role: "Research & Content",
    photo: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Jordan is in charge of gathering sources, writing the content, and verifying the information. Curious by nature, Jordan loves turning complex topics into clear explanations."
  },
  {
    name: "Sam Rivera",
    role: "Design & Media",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Sam handles the visual side: layout, photos, and video editing. Sam believes a clean design makes every project easier to understand and more enjoyable to explore."
  }
];

// Class evidence data
const EVIDENCE = [
  {
    title: "Session 1 — Kickoff",
    date: "March 04, 2025",
    photos: [
      "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Session 2 — Research Methods",
    date: "March 11, 2025",
    photos: [
      "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Session 3 — Pitch Day",
    date: "March 18, 2025",
    photos: [
      "https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Session 4 — Prototyping Lab",
    date: "March 25, 2025",
    photos: [
      "https://images.pexels.com/photos/5212656/pexels-photo-5212656.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// Boot log
function bootLog() {
  console.log("%cNEON LEARNING PORTFOLIO", "color:#bc13fe;font-size:18px;font-weight:bold;text-shadow:0 0 8px #bc13fe;");
  console.log("%cSystem initialized successfully.", "color:#00f3ff;");
  console.log("%cModules loaded: main, sidebar, modals, theme-switcher", "color:#b9b9c4;");
}

document.addEventListener("DOMContentLoaded", () => {
  bootLog();
});
