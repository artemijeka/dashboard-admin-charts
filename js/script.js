import { topbar__toggle } from './_topbar__toggle.js';
topbar__toggle();

import { charts } from './_charts.js';
charts();


document.addEventListener('DOMContentLoaded', function () {



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