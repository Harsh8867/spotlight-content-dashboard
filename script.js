const categories = [
  {
    name: "Foundation",
    count: 12,
    description: "Intro · Roadmap · Terminology",
    color: "#16d9ff",
    icon: "foundation",
    url: "https://gmrgroup.sharepoint.com/sites/LearningGMR/SitePages/AI-Foundations.aspx"
  },
  {
    name: "Engineering",
    count: 18,
    description: "LLMs · RAG · System Design",
    color: "#9d4cff",
    icon: "engineering",
    url: "https://gmrgroup.sharepoint.com/sites/LearningGMR/SitePages/AI-Engineering.aspx"
  },
  {
    name: "Tools & Interactions",
    count: 13,
    description: "Prompting · GenAI · Libraries",
    color: "#2ee98a",
    icon: "tools",
    url: "https://gmrgroup.sharepoint.com/sites/LearningGMR/SitePages/AI-Tools-%26-Interactions.aspx"
  },
  {
    name: "Use Cases",
    count: 9,
    description: "Aviation · Energy · Sports",
    color: "#ff6242",
    icon: "usecases",
    url: "https://gmrgroup.sharepoint.com/sites/LearningGMR/SitePages/AI-Use-Cases.aspx"
  },
  {
    name: "Governance",
    count: 11,
    description: "Responsible AI · Policy · Risk",
    color: "#ffc72c",
    icon: "governance",
    url: "https://gmrgroup.sharepoint.com/sites/LearningGMR/SitePages/AI-Governance.aspx"
  },
  {
    name: "Strategy & Change",
    count: 8,
    description: "Leadership · AI Capability Building",
    color: "#ff3e9d",
    icon: "strategy",
    url: "https://gmrgroup.sharepoint.com/sites/LearningGMR/SitePages/AI-Strategy-%26-Change.aspx"
  }
];

const icons = {
  foundation: `
    <svg class="icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="13" height="13" rx="2" fill="currentColor"/>
      <rect x="24" y="8" width="13" height="13" rx="2" fill="currentColor" opacity=".8"/>
      <rect x="8" y="24" width="13" height="13" rx="2" fill="currentColor" opacity=".8"/>
      <rect x="24" y="24" width="13" height="13" rx="2" fill="currentColor"/>
    </svg>`,
  engineering: `
    <svg class="icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 6l3.2 5.3 6.1-.5-.2 6.1 5.4 2.9-3.2 5.2 3.2 5.2-5.4 2.9.2 6.1-6.1-.5L24 44l-3.2-5.3-6.1.5.2-6.1-5.4-2.9 3.2-5.2-3.2-5.2 5.4-2.9-.2-6.1 6.1.5L24 6z" fill="currentColor"/>
      <circle cx="24" cy="25" r="6.5" fill="#121922"/>
    </svg>`,
  tools: `
    <svg class="icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M29.8 7.6a11 11 0 0 0-1.7 14.2L13.7 36.2a4.7 4.7 0 1 0 6.7 6.7l14.4-14.4A11 11 0 0 0 42.4 6.9l-7 7-4.8-4.8 7-7a11 11 0 0 0-7.8.5z" fill="currentColor"/>
      <circle cx="15.8" cy="38.2" r="2.2" fill="#121922"/>
    </svg>`,
  usecases: `
    <svg class="icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M7 31l10.2-3.3L31.8 8.4c1.7-2.5 5.2-3.1 7.6-1.4 2.4 1.7 3 5.1 1.4 7.5L26.7 34.9 23 45l-5-8-11-2z" fill="currentColor"/>
      <path d="M31 21l7 7" stroke="#121922" stroke-width="3" stroke-linecap="round"/>
      <circle cx="14" cy="34" r="2" fill="#121922"/>
    </svg>`,
  governance: `
    <svg class="icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 5l15 5v12.2c0 10.2-6.4 16.9-15 20.8-8.6-3.9-15-10.6-15-20.8V10l15-5z" fill="currentColor"/>
      <path d="M24 11v25.5c5.4-2.8 9.2-7.1 9.2-14.5v-7.8L24 11z" fill="#fff" opacity=".32"/>
    </svg>`,
  strategy: `
    <svg class="icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M8 31.8l4.8-15.6L33.2 7c2.6-1.1 5.5.2 6.6 2.8l2.1 5.1-15.7 20.2L8 31.8z" fill="currentColor"/>
      <circle cx="31.8" cy="15.2" r="3.5" fill="#121922"/>
      <path d="M16 34l-5.4 8.4 10-4.2" fill="currentColor"/>
    </svg>`
};

const grid = document.getElementById("categoryGrid");

categories.forEach((category) => {
  const card = document.createElement("div");
  card.className = "category-card";
  card.style.setProperty("--accent", category.color);
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `${category.name}: ${category.count} items`);

  card.innerHTML = `
    <div class="icon-wrap">${icons[category.icon]}</div>
    <div class="count"><span class="count-value">1</span><span>+</span></div>
    <div class="category-name">${category.name}</div>
    <div class="description">${category.description}</div>
  `;

  // Placeholder until the SharePoint destination URLs are supplied.
  // Replace category.url above with the relevant URL when ready.
  const activate = () => {
    if (category.url && category.url !== "#") {
      window.open(category.url, "_blank", "noopener,noreferrer");
    }
  };

  card.addEventListener("click", activate);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activate();
    }
  });

  grid.appendChild(card);
});


function animateCount(element, target, duration = 1400) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || target <= 1) {
    element.textContent = target;
    return;
  }

  const start = 1;
  const startTime = performance.now();

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const tick = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = easeOutCubic(progress);
    const value = Math.round(start + (target - start) * eased);

    element.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = target;
    }
  };

  requestAnimationFrame(tick);
}

document.querySelectorAll(".category-card").forEach((card, index) => {
  const valueElement = card.querySelector(".count-value");
  const target = categories[index].count;

  animateCount(valueElement, target, 1400 + index * 100);
});
