// import { topbar__toggle } from './_topbar__toggle.js';
// topbar__toggle();

// import { charts } from './_charts.js';
// charts();



document.addEventListener('DOMContentLoaded', function () {



  let topbar__toggle = document.querySelector('.topbar__toggle');
  let dashboardAdminCharts__navigation = document.querySelector('.dashboard-admin-charts__navigation');
  let dashboardAdminCharts__main = document.querySelector('.dashboard-admin-charts__main');

  topbar__toggle.addEventListener('click', function(e) {
    dashboardAdminCharts__navigation.classList.toggle('--active');
    dashboardAdminCharts__main.classList.toggle('--active');
  });



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



  let navigation__itemList = document.querySelectorAll('.navigation__item');

  navigation__itemList.forEach(function (navigation__item) {
    navigation__item.addEventListener('mouseover', activateThisItem);
  });

  function activateThisItem(e) {
    navigation__itemList.forEach(function (navigation__item2) {
      navigation__item2.classList.remove('--active');
    });
    e.target.classList.add('--active');
  }



});