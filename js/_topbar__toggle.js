export function topbar__toggle() {



  document.addEventListener('DOMContentLoaded', function() { 
    console.log('test');



    let topbar__toggle = document.querySelector('.topbar__toggle');
    let dashboardAdminCharts__navigation = document.querySelector('.dashboard-admin-charts__navigation');
    let dashboardAdminCharts__main = document.querySelector('.dashboard-admin-charts__main');

    topbar__toggle.addEventListener('click', function(e) {
      dashboardAdminCharts__navigation.classList.toggle('--active');
      dashboardAdminCharts__main.classList.toggle('--active');
    });



  });



}