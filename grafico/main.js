// 'Carol García - Home Sentry',
// 'Juan Miguel Caicedo - HS Colombia',
// 'Claudia Rubio - Forto',
// 'Carlos Eduardo Silva - Goby Filters',
// 'Daniela Espinosa - Nahbu Travel',
// 'Lina María Aristizábal - Aportapp',
google.charts.load("current", { packages: ["bar"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Proceso", "Carol García - Home Sentry", "Juan Miguel Caicedo - HS Colombia", 
    "Claudia Rubio - Forto", "Carlos Eduardo Silva - Goby Filters", "Daniela Espinosa - Nahbu Travel", 
    "Lina María Aristizábal - Aportapp", "Andrea Benavides - Centro Veterinario PRANA"],
    ["Incrementar las ventas", 1, 0, 0, 1, 0, 1, 1],
    ["Administración de órdenes de compra", 0, 1, 0, 0, 0, 1, 0],
    ["Programas de fidelización de clientes", 0, 0, 1, 1, 1, 1, 0],
    ["Optimización de inventario", 1, 1, 0, 0, 0, 1, 1],
    ["Generación de alertas en cadena de suministro", 0, 1, 0, 0, 1, 1, 0],
  ]);

  var options = {
    bars: "horizontal", // Required for Material Bar Charts.
    height: 500,
    backgroundColor: '#e9ecef',
    fontName: 'Open Sans',
    colors: ["#1b9e77", "#16b558", "#15ab29", "#16b5b2", "#1586ab", "#1a6ead", "#14A6C4"],
  };

  var chart = new google.charts.Bar(document.getElementById("chart_div"));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  var btns = document.getElementById("btn-group");

  btns.onclick = function (e) {
    if (e.target.tagName === "BUTTON") {
      options.hAxis.format = e.target.id === "none" ? "" : e.target.id;
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  };
}


