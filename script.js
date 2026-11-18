
// PROJETOS DO PORTFÓLIO

const projects = [
  {
    name: "Meu primeiro projeto",
    description: "Página desenvolvida utilizando HTML e CSS.",
    technology: "HTML • CSS",
    icon: "🌸",
    link: "https://github.com/Taineves1205"
  },
  {
    name: "Projeto JavaScript",
    description: "Aplicação interativa desenvolvida com JavaScript.",
    technology: "HTML • CSS • JS",
    icon: "💻",
    link: "https://github.com/Taineves1205"
  },
  {
    name: "IA + Front-end",
    description: "Projeto experimental envolvendo Inteligência Artificial.",
    technology: "JavaScript • IA",
    icon: "🤖",
    link: "https://github.com/Taineves1205"
  },
  {
    name: "Meu portfólio",
    description: "Meu espaço pessoal para apresentar minha trajetória.",
    technology: "HTML • CSS • JS",
    icon: "✨",
    link: "https://github.com/Taineves1205"
  }
];

// EXIBIR PROJETOS NA TELA

const projectList = document.querySelector("#project-list");

function renderProjects() {

  projectList.innerHTML = projects.map(project => `

    <article class="project-card">

      <div class="project-icon">
        ${project.icon}
      </div>

      <h4>${project.name}</h4>

      <p>${project.description}</p>

      <small>${project.technology}</small>

      <br><br>

      <a href="${project.link}"
         target="_blank"
         rel="noopener noreferrer">
        Ver projeto →
      </a>

    </article>

  `).join("");

}

renderProjects();
