function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}


function openContact() {
  document.getElementById("contactPopup").classList.add("active");
  document.getElementById("contactOverlay").classList.add("active");
}

function closeContact() {
  document.getElementById("contactPopup").classList.remove("active");
  document.getElementById("contactOverlay").classList.remove("active");
}

function showTab(tabId, button) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-btn");

  contents.forEach(content => content.classList.remove("active"));
  buttons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  button.classList.add("active");
}

const projectData = {
  school360: {
    title: "School360°",
    overview:
      "School360° is a web-based student performance monitoring system developed to help schools analyse student academic performance and provide actionable insights for teachers, parents and administrators.",

    technologies:
      "CodeIgniter 4, PHP, MySQL, HTML, CSS, JavaScript",

    features: [
      "Multi-role modules (Headmaster, Teacher, Parent)",
      "TOPSIS-based student performance analysis",
      "Rule-based performance evaluation",
      "Interactive dashboard and reports",
      "Automated alerts and notifications",
    ],

    outcome:
      "Successfully provided performance monitoring and decision-support features to help schools track student progress."
  },

  ioniq: {
    title: "IONIQ",
    overview:
      "IONIQ is a web-based management system that helps student to overcome their procastination.",

    technologies:
      "CodeIgniter 4, PHP, MySQL, HTML, CSS, JavaScript",

    features: [
      "Planner, Pomodoro, Emotion Tracker",
      "Can shop school items",
      "Progress monitoring dashboard"
    ],

    outcome:
      "Enabled students to better understand their study habit in a correct way."
  }
};

function openProject(projectId) {
  const popup = document.getElementById("projectPopup");
  const details = document.getElementById("projectDetails");

  const project = projectData[projectId];

  details.innerHTML = `
    <h2>${project.title}</h2>

    <h3>Project Overview</h3>
    <p>${project.overview}</p>

    <h3>Technologies Used</h3>
    <p>${project.technologies}</p>

    <h3>Key Features</h3>
    <ul>
      ${project.features.map(feature => `<li>${feature}</li>`).join("")}
    </ul>

    <h3>Project Outcome</h3>
    <p>${project.outcome}</p>
  `;

  popup.style.display = "flex";
}

function closeProject() {
  document.getElementById("projectPopup").style.display = "none";
}

