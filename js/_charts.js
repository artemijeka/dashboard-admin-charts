export function charts() {
  document.addEventListener('DOMContentLoaded', function () {



    var sources = document.getElementById('charts__sources').getContext('2d');
    var charts__sources = new Chart(sources, {
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
        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: false,
        // scales: {
        //   y: {
        //     beginAtZero: true
        //   }
        // }
      }
    });


    var earnings = document.getElementById('charts__earnings').getContext('2d');
    var charts__earnings = new Chart(earnings, {
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
        // Boolean - whether or not the chart should be responsive and resize when the browser does.
        responsive: true,
        // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
        maintainAspectRatio: false,
        // scales: {
        //     y: {
        //         beginAtZero: true
        //     }
        // }
      }
    });



  });
}