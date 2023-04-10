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
const scrollClickFunction = (scrollClick) => {
  if (scrollClick) {
    const links = Array.from(scrollClick);
    links.forEach((link) => {
      link.addEventListener('click', () => {
        navbarBtn.classList.remove('navbar-btn-close');
        iconBtn.classList.remove('fa-xmark');
        popupMenu.classList.remove('show');
      });
    });
  }
};

// Add click event listener to the button
navbarBtn.addEventListener('click', () => {
  navbarBtn.classList.toggle('navbar-btn-close');
  iconBtn.classList.toggle('fa-xmark');
  popupMenu.classList.toggle('show');
  const scrollClick = document.querySelectorAll('.menu-mobile li a');
  scrollClickFunction(scrollClick);
});
