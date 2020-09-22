google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Día", "Transacciones"],
    ["Ago. 22", 285434],
    ["Ago. 23", 325028],
    ["Ago. 24", 300429],
    ["Ago. 25", 320047],
    ["Ago. 26", 324513],
    ["Ago. 27", 349009],
    ["Ago. 28", 289608],
    ["Ago. 29", 265680],
    ["Ago. 30", 298800],
    ["Ago. 31", 371691],
    ["Sep. 1", 312045],
    ["Sep. 2", 305389],
    ["Sep. 3", 292923],
    ["Sep. 4", 321132],
    ["Sep. 5", 258797],
    ["Sep. 6", 323182],
    ["Sep. 7", 328306],
    ["Sep. 8", 310690],
    ["Sep. 9", 341825],
    ["Sep. 10", 304149],
    ["Sep. 11", 296767],
    ["Sep. 12", 251774],
    ["Sep. 13", 349764],
    ["Sep. 14", 328814],
    ["Sep. 15", 338696],
    ["Sep. 16", 344820],
    ["Sep. 17", 321101],
    ["Sep. 18", 293197],
    ["Sep. 19", 255602],
    ["Sep. 20", 293648],
  ]);

  var options = {
    backgroundColor: '#e9ecef',
    title:
      "Cantidad de transacciones por día en la blockchain de Bitcoin durante los últimos 30 días",
    curveType: "function",
    legend: { position: "bottom" },
    hAxis: {
      textPosition: "none",
    },
    height: 250,
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
}
