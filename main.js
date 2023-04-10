const navbarBtn = document.querySelector('.navbar-btn');
const iconBtn = document.querySelector('#icon-btn');
const popupMenu = document.createElement('div');

const work = document.querySelector('#work');

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

const Projects = [
  {
    name: 'Toxic',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'images/Snapshoot Portfolio.svg',
    technologies: ['html', 'css', 'js'],
    linkLive: 'https://waelelsafty07.github.io/Portfolio/',
    linkSource: 'https://github.com/waelelsafty07/Portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image: 'images/Snapshoot Portfolio (1).svg',
    technologies: ['react', 'html', 'css', 'javascript'],
    linkLive: 'https://waelelsafty07.github.io/Portfolio/',
    linkSource: 'https://github.com/waelelsafty07/Portfolio',
  },
];

const repeatList = (list, text) => {
  const fragment = document.createDocumentFragment();

  list.forEach((item, index) => {
    const li = document.createElement('li');
    if (text === 'info') {
      if (index === 0) li.className = 'db-color none-style';
      else li.className = 'bg-color';
    }

    const liText = document.createTextNode(item);
    li.appendChild(liText);
    fragment.appendChild(li);
  });
  return fragment;
};

const createProject = (project) => {
  const projectDiv = document.createElement('div');
  projectDiv.className = 'project';
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card';
  const cardImageDiv = document.createElement('div');
  cardImageDiv.className = 'card-image';
  const img = document.createElement('img');
  img.src = project.image;
  cardImageDiv.appendChild(img);
  cardDiv.appendChild(cardImageDiv);
  const cardBodyDiv = document.createElement('div');
  cardBodyDiv.className = 'card-body';
  const BodyTitleDiv = document.createElement('div');
  BodyTitleDiv.className = 'card-title';
  const h2 = document.createElement('h2');
  const h2Text = document.createTextNode(project.name);
  h2.appendChild(h2Text);
  BodyTitleDiv.appendChild(h2);
  cardBodyDiv.appendChild(BodyTitleDiv);
  const ClientInfoDiv = document.createElement('div');
  ClientInfoDiv.className = 'card-client-info';
  const ul = document.createElement('ul');
  const itemlist = ['CANOPY', 'Back End Dev', '2015'];
  const lists = repeatList(itemlist, 'info');
  ul.appendChild(lists);
  ClientInfoDiv.appendChild(ul);
  cardBodyDiv.appendChild(ClientInfoDiv);

  const BodyPragrphDiv = document.createElement('div');
  BodyPragrphDiv.className = 'card-pragrph';
  const p = document.createElement('p');
  const pText = document.createTextNode(project.description);
  p.appendChild(pText);
  BodyPragrphDiv.appendChild(p);
  cardBodyDiv.appendChild(BodyPragrphDiv);

  const CardTechDiv = document.createElement('div');
  CardTechDiv.className = 'card-tech';
  const ulTech = document.createElement('ul');
  const listTech = project.technologies;
  const listTechs = repeatList(listTech);
  ulTech.appendChild(listTechs);
  CardTechDiv.appendChild(ulTech);
  cardBodyDiv.appendChild(CardTechDiv);

  const CardBtnDiv = document.createElement('div');
  CardBtnDiv.className = 'card-btn';
  const CardBtn = document.createElement('button');
  const buttonText = document.createTextNode('See project');
  CardBtn.appendChild(buttonText);
  CardBtnDiv.appendChild(CardBtn);
  cardBodyDiv.appendChild(CardBtnDiv);

  cardDiv.appendChild(cardBodyDiv);
  projectDiv.appendChild(cardDiv);
  work.appendChild(projectDiv);
};

Projects.forEach((project) => {
  createProject(project);
});

const cardBtn = document.querySelectorAll('.card-btn button');
const model = document.querySelector('#model');

const modelBtn = document.querySelector('#model-btn');
const cardBtns = Array.from(cardBtn);

const addDetailsToModel = (project) => {
  const titleModel = document.querySelector('#titleModel');
  titleModel.textContent = project.name;
  const imageModel = document.querySelector('#imageModel');
  imageModel.src = project.image;
  const pragrphModel = document.querySelector('#pragrphModel');
  pragrphModel.textContent = project.description;
  const technologies = document.querySelector('#technologies');
  const list = repeatList(project.technologies);
  technologies.innerHTML = '';
  technologies.appendChild(list);
};

cardBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    addDetailsToModel(Projects[index]);
    model.classList.toggle('d-none');
  });
});

modelBtn.addEventListener('click', () => {
  model.classList.add('d-none');
});

document.addEventListener('click', (event) => {
  if (!modelBtn.contains(event.target) && !model.contains(event.target)) {
    popupMenu.classList.remove('d-none');
  }
});
