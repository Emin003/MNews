jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // JavaScript Chart
  var doughnutData = [{
      value: 1,
      color: "#1abc9c"
    },
    {
      value: 99,
      color: "#00FF10"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // Bootstrap Chart
  var doughnutData = [{
    value: 70,
    color: "#1abc9c"
  },
  {
    value: 30,
    color: "#00FF10"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);

  // WordPress Chart
  var doughnutData = [{
    value: 5,
    color: "#1abc9c"
  },
  {
    value: 95,
    color: "#00FF10"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 50,
    color: "#1abc9c"
  },
  {
    value: 50,
    color: "#00FF10"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);

  // WIX Chart
  var doughnutData = [{
    value: 30,
    color: "#1abc9c"
  },
  {
    value: 70,
    color: "#00FF10"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("wix").getContext("2d")).Doughnut(doughnutData);

  // PHP Chart
  var doughnutData = [{
    value: 0,
    color: "#1abc9c"
  },
  {
    value: 100,
    color: "#00FF10"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("PHP").getContext("2d")).Doughnut(doughnutData);
});
