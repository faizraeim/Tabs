
document.addEventListener("DOMContentLoaded", function () {
  // Get all tab links and tab contents
  const tabLinks = document.querySelectorAll(".tabs nav a");
  const tabContents = document.querySelectorAll("#fTab, #sTab, #tTab, #foTab");

  // Hide all tab contents except the first
  tabContents.forEach((tab, idx) => {
    tab.style.display = idx === 0 ? "block" : "none";
  });

  tabLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      // Hide all tab contents
      tabContents.forEach(tab => tab.style.display = "none");
      // Show the selected tab content
      const targetId = this.getAttribute("href");
      const targetTab = document.querySelector(targetId);
      if (targetTab) targetTab.style.display = "block";
    });
  });
});


