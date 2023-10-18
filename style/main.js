// Kalles Js cod for the navbar dropdown menu

const togglebtn = document.querySelector('.toggle-btn');
const togglebtnIcon = document.querySelector('.toggle-btn i');
const droppdmenu = document.querySelector('.droppd_menu');
let isOpen = false; // You need to define the isOpen variable.

togglebtn.onclick = function () {
    droppdmenu.classList.toggle('open');

    isOpen = !isOpen; // Toggle the value of isOpen

    togglebtnIcon.className = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};


// //

document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
	document.getElementById("demo").innerHTML = Date();
}







