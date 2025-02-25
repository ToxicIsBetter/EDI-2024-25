// Toggle navbar style on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navUl.classList.toggle("active");
  });
}

// Initialize Chart.js for the Budget Allocation chart
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("budgetChart").getContext("2d");
  const budgetChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Software Development",
        "AI Infrastructure",
        "Data Acquisition",
        "Marketing & Branding",
        "Legal & Compliance",
        "Talent Acquisition & Training",
        "Office & Equipment"
      ],
      datasets: [{
        label: "Budget (USD)",
        data: [50000, 20000, 5000, 10000, 5000, 20000, 5000],
        backgroundColor: "rgba(0, 191, 255, 0.7)",
        borderColor: "#00bfff",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#ccc"
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)"
          }
        },
        x: {
          ticks: {
            color: "#ccc"
          },
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: "#ccc"
          }
        }
      }
    }
  });
});
