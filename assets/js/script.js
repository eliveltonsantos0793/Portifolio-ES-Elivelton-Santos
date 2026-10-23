(() => {
  "use strict";

  //Alternancia entre tema claro e escuro

  const themetoggle = document.querySelector("#theme-toggle");
  const themeicon = document. querySelector("#theme-icon");
  const themelabel = document. querySelector("#theme-label");
  
  const root = document. documentElement;

  function applytheme(theme) {
    const islight = theme ==="light";

    if (islight) {
      root.dataset.theme = "light";
    } else {
      delete root.dataset.theme;
    }

    if (themetoggle && themeicon && themelabel) {
      themeicon.textContent = islight ? "🌙​" : "🌞​";
      themelabel.textContent = islight ? "tema escuro" : "tema claro";

      themetoggle.setAttribute(
        "aria-label",
        islight ? "ativar tema escuro" : "ativar tema claro"
      );

      themetoggle.setAttribute("aria-pressed", String(islight));
    } 
  }

  let savedtheme = null;

  try {
    savedtheme = localStorage.getItem("portifolio-theme");
  } catch (error) {
    //O site continua funcionando se o armazenamento estiver indisponivel
  }

  const initialtheme =
  savedtheme === "light" || savedtheme === "dark"
      ? savedtheme
      : "dark";

  applytheme(initialtheme);
  
  if (themetoggle) {
    themetoggle.addEventListener("click", () => {
      const currentTheme =
      root.dataset.theme === "light" ? "light" : "dark";
      const newTheme = currentTheme === "light" ? "dark" : "light";
      applytheme(newTheme);

      try {
        localStorage.setItem("portifolio-theme", newTheme);
      } catch (error) {
        //A alternncia continua funcionando nesta visita
      }
    });
  }



  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");

  function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
      navigation.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  // Ano atualizado automaticamente no rodapé.
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Animações discretas ao entrar na área visível; respeita preferência de movimento reduzido.
  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Destaca o item de navegação correspondente à seção atual.
  const sections = document.querySelectorAll("main section[id]");
  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", active);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));
  }


  // Catálogo de projetos: para adicionar um card, basta incluir um objeto nesta lista.
  const PROJECTS = [
    {
      id: "barbearia",
      name: "Barbearia ",
      category: "barbearia",
      status: "Projeto prático",
      description: "Apresentação de serviços com experiência visual moderna e contato pelo WhatsApp.",
      image: "assets/images/barbearia-paulista.png.png",
      imageAlt: "Prévia do site da Barbearia Paulista",
      url: "https://eliveltonsantos0793.github.io/barbearia-paulista-css-html-js-puro-/",
      tags: ["HTML", "CSS", "JavaScript"],
      featured: true
    },
    {
      id: "painel-barbearia",
      name: "Painel para Barbearia",
      category: "adm-barbearia",
      status: "Estudo prático",
      description: "Projeto de interface para organizar informações e apoiar a rotina de um negócio.",
      image: "assets/images/painel barbearia.png",
      imageAlt: "Prévia do painel para barbearia",
      url: "https://eliveltonsantos0793.github.io/adm-barbearia-vitrine/",
      tags: ["UI", "CSS", "Responsivo"]
    },
    {
      id: "nail-designer",
      name: "Website Nail Designer",
      category: "profissional nail designer",
      status: "Projeto prático",
      description: "Página para apresentar serviços, destacar o trabalho e facilitar o contato de clientes.",
      image: "assets/images/web-site-nail-desingner.png",
      imageAlt: "Prévia do site para nail designer",
      url: "https://eliveltonsantos0793.github.io/maclicia-website/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "IPRB-Tijucas",
      name: "website-Igreja Presbiteriana Renovada do Brasil | Tijucas-SC",
      category: "Organização Religiosa",
      status: "Projeto prático",
      description: "Página para apresentar a Organização religioza, destacar o trabalho e facilitar o contato com os fiéis.",
      image: "assets/images/Captura de tela IPRB_2026-10-21.png",
      imageAlt: "Prévia do site para IPRB-Tijucas-SC",
      url: "https://eliveltonsantos0793.github.io/IPRB-WEB/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "Consultor de imóveis",
      name: "Corretor de imóveis-autonomo",
      category: "Corretor de imóveis",
      status: "Projeto prático",
      description: "Página para apresentar oprtunidades de negócios, destacar o trabalho e facilitar o contato com clientes.",
      image: "assets/images/print-web-site-corretor.png",
      imageAlt: "Prévia do site para Corretores",
      url: "https://eliveltonsantos0793.github.io/Portif-lio_Imobiliario_Alex/",
      tags: ["HTML", "CSS", "JavaScript"]
    }

  ];

  // Adicione aqui somente empresas que autorizaram a divulgação da parceria.
  // Exemplo: { name: "Nome da empresa", logo: "assets/images/logo-empresa.png", url: "https://empresa.com.br" }
  const PARTNER_COMPANIES = [];

  const gallery = document.querySelector("#project-gallery");
  const projectTotal = document.querySelector("#project-total");
  const selectionBar = document.querySelector("#project-selection-bar");
  const selectionCount = document.querySelector("#project-selection-count");
  const selectionNames = document.querySelector("#project-selection-names");
  const selectionWhatsApp = document.querySelector("#project-selection-whatsapp");
  const clearSelectionButton = document.querySelector("#project-selection-clear");
  const selectedProjects = new Set();
  const contactWhatsApp = "5548996696014";

  function renderProjects() {
    if (!gallery) return;
    gallery.innerHTML = PROJECTS.map((project, index) => `
      <article class="project-card${project.featured ? " project-featured" : ""}" data-project-id="${project.id}" data-project-name="${project.name}">
        <a class="project-image" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${project.name}">
          <img src="${project.image}" alt="${project.imageAlt}" loading="lazy">
          <span class="image-overlay">Ver projeto ↗</span>
        </a>
        <div class="project-meta"><span>${String(index + 1).padStart(2, "0")} / ${project.category}</span><span class="project-status">${project.status}</span></div>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-footer">
          <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          <div class="project-card-actions">
            <a class="project-open" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${project.name}">↗</a>
            <button class="project-select" type="button" data-select-project aria-pressed="false">+ Selecionar</button>
          </div>
        </div>
      </article>
    `).join("");

    if (projectTotal) projectTotal.textContent = String(PROJECTS.length);
    gallery.querySelectorAll("[data-select-project]").forEach((button) => {
      button.addEventListener("click", () => {
        const card = button.closest("[data-project-id]");
        const id = card.dataset.projectId;
        if (selectedProjects.has(id)) {
          selectedProjects.delete(id);
          button.textContent = "+ Selecionar";
          button.setAttribute("aria-pressed", "false");
          card.classList.remove("is-selected");
        } else {
          selectedProjects.add(id);
          button.textContent = "✓ Selecionado";
          button.setAttribute("aria-pressed", "true");
          card.classList.add("is-selected");
        }
        updateProjectSelection();
      });
    });
  }

  function updateProjectSelection() {
    const selected = PROJECTS.filter((project) => selectedProjects.has(project.id));
    const count = selected.length;
    if (selectionBar) selectionBar.hidden = count === 0;
    if (!count) return;
    if (selectionCount) selectionCount.textContent = `${count} ${count === 1 ? "projeto selecionado" : "projetos selecionados"}`;
    if (selectionNames) selectionNames.textContent = selected.map((project) => project.name).join(" + ");
    const message = `Olá, Elivelton! Visitei seu portfólio e gostaria de conversar sobre estes projetos:\n${selected.map((project) => `• ${project.name}`).join("\n")}\nPodemos conversar sobre uma solução semelhante?`;
    if (selectionWhatsApp) selectionWhatsApp.href = `https://wa.me/${contactWhatsApp}?text=${encodeURIComponent(message)}`;
  }

  if (clearSelectionButton) {
    clearSelectionButton.addEventListener("click", () => {
      selectedProjects.clear();
      if (gallery) gallery.querySelectorAll("[data-project-id]").forEach((card) => {
        card.classList.remove("is-selected");
        const button = card.querySelector("[data-select-project]");
        if (button) {
          button.textContent = "+ Selecionar";
          button.setAttribute("aria-pressed", "false");
        }
      });
      updateProjectSelection();
    });
  }

  // Rolagem horizontal dentro da galeria, sem aumentar o comprimento da página.
  const scrollLeftButton = document.querySelector("#projects-scroll-left");
  const scrollRightButton = document.querySelector("#projects-scroll-right");
  function scrollGallery(direction) {
    if (!gallery) return;
    gallery.scrollBy({ left: direction * Math.max(280, gallery.clientWidth * 0.8), behavior: "smooth" });
  }
  if (scrollLeftButton) scrollLeftButton.addEventListener("click", () => scrollGallery(-1));
  if (scrollRightButton) scrollRightButton.addEventListener("click", () => scrollGallery(1));

  // Faixa de empresas parceiras. Sem empresas cadastradas, não exibe marcas fictícias.
  const partnerMarquee = document.querySelector("#partner-marquee");
  if (partnerMarquee && PARTNER_COMPANIES.length) {
    const items = PARTNER_COMPANIES.map((company) => {
      const logo = company.logo ? `<img src="${company.logo}" alt="Logo ${company.name}" loading="lazy">` : `<span class="partner-name">${company.name}</span>`;
      const content = company.url ? `<a href="${company.url}" target="_blank" rel="noopener noreferrer">${logo}</a>` : logo;
      return `<div class="partner-item">${content}</div>`;
    }).join("");
    partnerMarquee.innerHTML = `<div class="partner-track">${items}${items}</div>`;
    partnerMarquee.classList.add("has-partners");
  }

  // A galeria é montada mesmo quando algum recurso visual opcional do navegador não existe.
  try {
    renderProjects();
  } catch (error) {
    console.error("Não foi possível montar a galeria de projetos:", error);
    if (projectTotal) projectTotal.textContent = "0";
  }
})();
