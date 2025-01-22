"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelector('.navbar-items');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    hamburgerIcon.addEventListener('click', function () {
        menuItems.classList.toggle('show');
        hamburgerIcon.classList.toggle('active');
    });
});