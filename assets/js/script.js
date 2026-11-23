(() => {
  "use strict";

  //Alternancia entre tema claro e escuro

  const themetoggle=document.querySelector("#theme-toggle");
  const themeicon=document. querySelector("#theme-icon");
  const themelabel=document. querySelector("#theme-label");
  
  const root = document. documentElement;

  function applytheme(theme) {
    const islight = theme ==="light";

    if (islight) {
      root.dataset.theme = "light";
    } else {
      delete root.dataset.theme;
    }

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", islight ? "#f3f5fa" : "#090f20");
    }

    if (themetoggle && themeicon && themelabel) {
      themeicon.textContent = islight ? "☾" : "☼";
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
  const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
  const mobileNavQuery = window.matchMedia("(max-width: 900px)");

  function setMenuOpen(isOpen) {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    navigation.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  }

  function closeMenu(restoreFocus = false) {
    if (!menuButton || !navigation) return;
    setMenuOpen(false);
    if (restoreFocus) menuButton.focus();
  }

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      setMenuOpen(!isOpen);
      if (!isOpen && mobileNavQuery.matches) {
        const firstLink = navigation.querySelector('a[href^="#"]');
        if (firstLink) firstLink.focus();
      }
    });

    navLinks.forEach((link) => link.addEventListener("click", () => closeMenu()));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
        closeMenu(true);
      }
    });

    document.addEventListener("pointerdown", (event) => {
      if (
        menuButton.getAttribute("aria-expanded") === "true" &&
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (!mobileNavQuery.matches) closeMenu();
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
          if (active) {
            link.setAttribute("aria-current", "location");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));
  }


  // Catálogo de projetos: para adicionar um card, basta incluir um objeto nesta lista.
  const PROJECTS = [
    {
      id: "barbearia",
      name: "Barbearia Paulista",
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
      name: "Igreja Presbiteriana Renovada do Brasil — Tijucas/SC",
      category: "Organização Religiosa",
      status: "Projeto prático",
      description: "Página para apresentar a Organização religiosa, destacar o trabalho e facilitar o contato com os fiéis.",
      image: "assets/images/Captura de tela IPRB_2026-10-21.png",
      imageAlt: "Prévia do site para IPRB-Tijucas-SC",
      url: "https://eliveltonsantos0793.github.io/IPRB-WEB/",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: "Consultor de imóveis",
      name: "Corretor de imóveis autônomo",
      category: "Corretor de imóveis",
      status: "Projeto prático",
      description: "Página para apresentar oportunidades de negócios, destacar o trabalho e facilitar o contato com clientes.",
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
  const galleryShell = document.querySelector(".project-gallery-shell");
  const motionToggle = document.querySelector("#projects-motion-toggle");
  const projectTotal = document.querySelector("#project-total");
  const selectionBar = document.querySelector("#project-selection-bar");
  const selectionCount = document.querySelector("#project-selection-count");
  const selectionNames = document.querySelector("#project-selection-names");
  const selectionWhatsApp = document.querySelector("#project-selection-whatsapp");
  const clearSelectionButton = document.querySelector("#project-selection-clear");
  const selectedProjects = new Set();
  const contactWhatsApp = "5548999301549";
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let touchResumeTimer;

  // Escapa conteúdo dinâmico antes de inseri-lo em templates HTML.
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  // Links externos da galeria aceitam somente HTTPS.
  function safeExternalURL(value) {
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : "";
    } catch (error) {
      return "";
    }
  }

  // Imagens dinâmicas devem apontar para a pasta local de imagens do projeto.
  function safeAssetPath(value) {
    const path = String(value ?? "");
    if (!path.startsWith("assets/images/") || path.includes("..") || path.includes("\\\\") || path.includes(":")) {
      return "";
    }
    return path;
  }

  function projectCardMarkup(project, index, isDuplicate = false) {
    const tabIndex = isDuplicate ? ' tabindex="-1"' : "";
    const projectName = escapeHTML(project.name);
    const projectUrl = safeExternalURL(project.url);
    const imagePath = safeAssetPath(project.image);
    const imageMarkup = imagePath
      ? `<img src="${escapeHTML(imagePath)}" alt="${escapeHTML(project.imageAlt)}" loading="lazy" decoding="async">`
      : '<span class="project-image-fallback">Imagem indisponível</span>';
    const projectLink = projectUrl ? escapeHTML(projectUrl) : "#";

    return `
      <article class="project-card${project.featured ? " project-featured" : ""}" data-project-id="${escapeHTML(project.id)}" data-project-name="${projectName}">
        <a class="project-image" href="${projectLink}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${projectName}"${tabIndex}>
          ${imageMarkup}
          <span class="image-overlay">Ver projeto ↗</span>
        </a>
        <div class="project-meta"><span>${String(index + 1).padStart(2, "0")} / ${escapeHTML(project.category)}</span><span class="project-status">${escapeHTML(project.status)}</span></div>
        <h3>${projectName}</h3>
        <p>${escapeHTML(project.description)}</p>
        <div class="project-footer">
          <div class="project-tags">${project.tags.map((tag) => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
          <div class="project-card-actions">
            <a class="project-open" href="${projectLink}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${projectName}"${tabIndex}>↗</a>
            <button class="project-select" type="button" data-select-project aria-pressed="false"${tabIndex}>+ Selecionar</button>
          </div>
        </div>
      </article>
    `;
  }
  function renderProjects() {
    if (!gallery) return;
    const cards = PROJECTS.map((project, index) => projectCardMarkup(project, index)).join("");
    const duplicateCards = PROJECTS.map((project, index) => projectCardMarkup(project, index, true)).join("");
    gallery.innerHTML = `
      <div class="project-track">
        <div class="project-gallery-group">${cards}</div>
        <div class="project-gallery-group" aria-hidden="true">${duplicateCards}</div>
      </div>
    `;

    if (projectTotal) projectTotal.textContent = String(PROJECTS.length);
    syncProjectCards();
  }

  function syncProjectCards() {
    if (!gallery) return;
    gallery.querySelectorAll("[data-project-id]").forEach((card) => {
      const selected = selectedProjects.has(card.dataset.projectId);
      card.classList.toggle("is-selected", selected);
      const button = card.querySelector("[data-select-project]");
      if (button) {
        button.textContent = selected ? "✓ Selecionado" : "+ Selecionar";
        button.setAttribute("aria-pressed", String(selected));
      }
    });
  }

  function updateProjectSelection() {
    const selected = PROJECTS.filter((project) => selectedProjects.has(project.id));
    const count = selected.length;
    if (selectionBar) selectionBar.hidden = count === 0;
    if (selectionCount) {
      selectionCount.textContent = `${count} ${count === 1 ? "projeto selecionado" : "projetos selecionados"}`;
    }
    if (selectionNames) {
      selectionNames.textContent = count
        ? selected.map((project) => project.name).join(" + ")
        : "Selecione projetos para conversar sobre eles.";
    }
    if (!count) {
      if (selectionWhatsApp) selectionWhatsApp.href = "#contato";
      return;
    }
    const message = `Olá, Elivelton! Visitei seu portfólio e gostaria de conversar sobre estes projetos:\n${selected.map((project) => `• ${project.name}`).join("\n")}\nPodemos conversar sobre uma solução semelhante?`;
    if (selectionWhatsApp) {
      selectionWhatsApp.href = `https://wa.me/${contactWhatsApp}?text=${encodeURIComponent(message)}`;
    }
  }

  if (gallery) {
    gallery.addEventListener("click", (event) => {
      const button = event.target.closest("[data-select-project]");
      if (!button) return;
      const card = button.closest("[data-project-id]");
      if (!card) return;
      const id = card.dataset.projectId;
      if (selectedProjects.has(id)) selectedProjects.delete(id);
      else selectedProjects.add(id);
      syncProjectCards();
      updateProjectSelection();
    });

    gallery.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "touch") return;
      gallery.classList.add("is-interacting");
      window.clearTimeout(touchResumeTimer);
    });

    const resumeAfterTouch = () => {
      if (!gallery.classList.contains("is-interacting")) return;
      window.clearTimeout(touchResumeTimer);
      touchResumeTimer = window.setTimeout(() => {
        gallery.scrollLeft = 0;
        gallery.classList.remove("is-interacting");
      }, 4500);
    };

    gallery.addEventListener("pointerup", resumeAfterTouch);
    gallery.addEventListener("pointercancel", resumeAfterTouch);
  }

  if (motionToggle && galleryShell) {
    motionToggle.addEventListener("click", () => {
      const paused = galleryShell.classList.toggle("is-paused");
      motionToggle.setAttribute("aria-pressed", String(paused));
      motionToggle.textContent = paused ? "Retomar movimento" : "Pausar movimento";
      motionToggle.setAttribute(
        "aria-label",
        paused ? "Retomar movimento automático da galeria" : "Pausar movimento automático da galeria"
      );
    });
  }

  if (galleryShell && reducedMotionQuery.matches) {
    galleryShell.classList.add("is-reduced-motion");
  }

  if (reducedMotionQuery.addEventListener) {
    reducedMotionQuery.addEventListener("change", (event) => {
      if (!galleryShell) return;
      galleryShell.classList.toggle("is-reduced-motion", event.matches);
    });
  }

  if (clearSelectionButton) {
    clearSelectionButton.addEventListener("click", () => {
      selectedProjects.clear();
      syncProjectCards();
      updateProjectSelection();
    });
  }

  // Faixa de empresas parceiras. Sem empresas cadastradas, não exibe marcas fictícias.
  const partnerMarquee = document.querySelector("#partner-marquee");
  if (partnerMarquee && PARTNER_COMPANIES.length) {
    const items = PARTNER_COMPANIES.map((company) => {
      const companyName = escapeHTML(company.name);
      const logoPath = safeAssetPath(company.logo);
      const logo = logoPath
        ? `<img src="${escapeHTML(logoPath)}" alt="Logo ${companyName}" loading="lazy" decoding="async">`
        : `<span class="partner-name">${companyName}</span>`;
      const companyUrl = safeExternalURL(company.url);
      const content = companyUrl
        ? `<a href="${escapeHTML(companyUrl)}" target="_blank" rel="noopener noreferrer">${logo}</a>`
        : logo;
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
