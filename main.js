const navbarBtn = document.querySelector('.navbar-btn');
const iconBtn = document.querySelector('#icon-btn');
const popupMenu = document.createElement('div');

// Set up the popup menu
popupMenu.className = 'popup-menu';
popupMenu.innerHTML = `
    <ul class="none-style menu-mobile">
        <li>
            <a href="#work">
                Portfolio
            </a>
        </li>
        <li>
            <a href="#About">
                About
            </a>
        </li>
        <li>
            <a href="#Contact">
                Contact
            </a>
        </li>
    </ul>

`;
document.body.appendChild(popupMenu);

// setup scroll click mobile version

// Add click event listener to the button
navbarBtn.addEventListener('click', () => {
  navbarBtn.classList.toggle('navbar-btn-close');
  iconBtn.classList.toggle('fa-xmark');
  popupMenu.classList.toggle('show');
});
