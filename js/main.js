google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ["Problema", "Frecuencia", "Intensidad", "Prioridad"],
    ["Costos Ocultos", 2, 3, 5],
    ["Información fragmentada", 3, 2, 5],
    ["Tiempos de abastecimiento", 2, 3, 5],
    ["Tiempos de reacción lentos", 2, 3, 5],
    ["Dependen de data externa", 5, 0, 5],
    ["Consultan muchos archivos", 4, 4, 8],
    ["Poco acceso a inventario", 4, 4, 8],
    ["Concentración en otras áreas", 5, 5, 10],
    ["Muchos procesos manuales", 5, 5, 10],
  ]);

  var options = {
    title: "Principales dolores identificados por los entrevistados",
    chartArea: { width: "50%" },
    isStacked: true,
    fontName: "Open Sans",
    hAxis: {
      title: "",
      minValue: 0,
    },
    vAxis: {
      title: "",
    },
  };
  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);
}
