
const projects = [
  {
    name: "Meu Portfólio",
    description:
      "Meu espaço profissional para apresentar minhas habilidades, trajetória e projetos.",

    image: "assets/portfolio.png",

    technologies: ["HTML", "CSS", "JavaScript"],

    demo: "https://taineves1205.github.io",

    github: "https://github.com/Taineves1205"
  },

  {
    name: "Projeto Front-end",
    description:
      "Interface web desenvolvida para praticar estruturação e estilização de páginas.",

    image: "assets/projeto2.png",

    technologies: ["HTML", "CSS"],

    demo: "#",

    github: "https://github.com/Taineves1205"
  },

  {
    name: "Projeto Inteligência Artificial",
    description:
      "Experimentos com interfaces e aplicações envolvendo Inteligência Artificial.",

    image: "assets/projeto3.png",

    technologies: ["JavaScript", "IA"],

    demo: "#",

    github: "https://github.com/Taineves1205"
  }
];

const projectList = document.querySelector("#project-list");

function renderProjects() {

  projectList.innerHTML = projects.map(project => `

    <article class="project-card">

      <div class="project-image">
        <img
          src="${project.image}"
          alt="Imagem do projeto ${project.name}"
          loading="lazy"
          onerror="this.style.display='none'"
        >
      </div>

      <div class="project-content">

        <h4>${project.name}</h4>

        <p>${project.description}</p>

        <div class="technologies">
          ${project.technologies.map(tech =>
            `<span>${tech}</span>`
          ).join("")}
        </div>

        <div class="project-buttons">

          <a href="${project.demo}"
             target="_blank"
             rel="noopener noreferrer"
             class="btn-demo">
            Ver projeto ↗
          </a>

          <a href="${project.github}"
             target="_blank"
             rel="noopener noreferrer"
             class="btn-github">
            Código GitHub
          </a>

        </div>

      </div>

    </article>

  `).join("");

}

renderProjects();

