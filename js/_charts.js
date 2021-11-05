export function charts() {

  // TODO:
  // Правильное перестроение графиков надо сделать при resize viewport!

  var charts__sources = null, 
      charts__earnings = null;

  document.addEventListener('DOMContentLoaded', function () {
    viewCharts();
  });

  window.addEventListener('resize', function () {
    viewCharts();
  });



  function viewCharts() {
    if (charts__sources) {
      charts__sources.destroy();
    }
    var sources = document.getElementById('charts__sources').getContext('2d');
    charts__sources = new Chart(sources, {
      type: 'polarArea',
      data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
          label: 'Traffic Source',
          data: [1200, 1900, 3000],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        // onResize: function (charts__sources, size) {
        //   // charts__sources.options.legend.display = size.height > 128;
        //   // ... do whatever changes you need to have your chart display correctly ...
        //   charts__sources.update();
        // },
        responsive: true,
        // scales: {
        //   y: {
        //     beginAtZero: true
        //   }
        // }
      }
    });



    if (charts__earnings) {
      charts__earnings.destroy();
    }
    var earnings = document.getElementById('charts__earnings').getContext('2d');
    charts__earnings = new Chart(earnings, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Earnings',
          data: [1200, 1900, 3000, 5000, 2000, 3000, 2000, 1050, 1450, 2500, 3250, 4500],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
        }]
      },
      options: {
        // onResize: function (charts__earnings, size) {
        //   // charts__earnings.options.legend.display = size.height > 128;
        //   // ... do whatever changes you need to have your chart display correctly ...
        //   charts__earnings.update();
        // },
        responsive: true,
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
      }
    });
  }
}