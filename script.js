$(document).ready(function () {
  const destinations = [
    {
      name: "Bali, Indonesia",
      type: "beach",
      budget: 1200,
      duration: 7,
      description: "A tropical paradise with stunning beaches and vibrant culture."
    },
    {
      name: "Swiss Alps",
      type: "adventure",
      budget: 2000,
      duration: 10,
      description: "A perfect spot for skiing, hiking, and alpine beauty."
    },
    {
      name: "Kyoto, Japan",
      type: "cultural",
      budget: 1500,
      duration: 5,
      description: "Traditional temples, cherry blossoms, and rich heritage."
    }
  ];

  $("#preferenceForm").on("submit", function (e) {
    e.preventDefault();

    const budget = parseInt($("#budget").val());
    const duration = parseInt($("#duration").val());
    const experience = $("#experience").val();

    const filtered = destinations.filter(d =>
      d.budget <= budget && d.duration <= duration && d.type === experience
    );

    const container = $("#recommendations");
    container.empty();

    if (filtered.length === 0) {
      container.append('<div class="col-12"><p>No matching destinations found.</p></div>');
    } else {
      filtered.forEach(d => {
        container.append(`
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${d.name}</h5>
                <p class="card-text">${d.description}</p>
                <button class="btn btn-outline-info review-btn">View Reviews</button>
              </div>
            </div>
          </div>
        `);
      });
    }
  });
});
// Show/hide sections when navbar items are clicked
$("#nav-home").click(function () {
  $("#home-section").show();
  $("#services-section").hide();
});

$("#nav-services").click(function () {
  $("#services-section").show();
  $("#home-section").hide();
});