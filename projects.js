const projects = [
  {
    name: "Vuzol",
    repository: "https://github.com/Oleksii1221/Vuzol_Pb",
    description: "Публічний сайт для інструмента роботи з вузлами та схемами.",
    language: "HTML",
    status: "Завершено",
  },
  {
    name: "KEP Schedule",
    repository: "https://github.com/Oleksii1221/KEP_Schedule_PB",
    description: "Сайт розкладу з окремими каналами завантажень для студентського застосунку.",
    language: "HTML",
    status: "Завершено",
  },
  {
    name: "Kokos",
    repository: "https://github.com/Oleksii1221/Kokos",
    website: "https://oleksii1221.github.io/Kokos/",
    description: "Telegram-бот, що перетворює TikTok і YouTube Shorts на нативні відеовідповіді.",
    language: "Python",
    status: "В роботі",
  },
  {
    name: "KicoAudioEditor",
    repository: "https://github.com/Oleksii1221/KicoAudioEditor",
    website: "https://oleksii1221.github.io/KicoAudioEditor/",
    description: "Нативний редактор метаданих аудіо для Windows і Linux.",
    language: "Python",
    status: "Завершено",
  },
  {
    name: "PIDron",
    repository: "https://github.com/Oleksii1221/PIDron",
    website: "https://oleksii1221.github.io/PIDron/",
    description: "Локальна desktop-станція для симуляції дронів та налаштування PID.",
    language: "JavaScript",
    status: "В роботі",
  },
  {
    name: "Є-Рука",
    repository: "https://github.com/Oleksii1221/Ye-ruka",
    website: "https://oleksii1221.github.io/Ye-ruka/",
    description: "Застосунок для керування роботизованою кистю через камеру, жести, рукавицю та ESP32.",
    language: "Python",
    status: "Завершено",
    image: "https://raw.githubusercontent.com/Oleksii1221/Ye-ruka/master/docs/INTERFACE_PREVIEW.png",
  },
  {
    name: "MusicByKico",
    repository: "https://github.com/Oleksii1221/MusicByKico",
    description: "Персональний музичний проєкт та інструменти для роботи зі звуком.",
    language: "Python",
    status: "Завершено",
  },
  {
    name: "Thermometer",
    repository: "https://github.com/Oleksii1221/Thermometer-",
    description: "Проєкт для вимірювання та відображення температурних даних.",
    language: "Python",
    status: "Завершено",
  },
  {
    name: "MEDUZA",
    repository: "https://github.com/Oleksii1221/MEDUZA",
    description: "C++ проєкт із власною логікою та взаємодією з пристроями.",
    language: "C++",
    status: "Завершено",
  },
  {
    name: "ESP NOW Testing",
    repository: "https://github.com/Oleksii1221/ESP_NOW_TESTING",
    description: "Експерименти з бездротовим обміном між ESP-пристроями через ESP-NOW.",
    language: "Embedded",
    status: "Завершено",
  },
  {
    name: "Hodivnytsya",
    repository: "https://github.com/Oleksii1221/Hodivnytsya",
    description: "C++ проєкт із власною прикладною логікою та інтерфейсом.",
    language: "C++",
    status: "Завершено",
  },
];

const grid = document.querySelector("#projects");
const template = document.querySelector("#project-template");
document.querySelector("#project-count").textContent = `${projects.length} проєктів`;

const themeButtons = document.querySelectorAll("[data-theme-value]");
const setTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  themeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.themeValue === theme));
  });
};

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeValue));
});
setTheme(document.documentElement.dataset.theme);

for (const project of projects) {
  const card = template.content.cloneNode(true);
  const article = card.querySelector("article");
  const repositoryLink = card.querySelector(".card-link");
  const image = card.querySelector(".project-image");
  const liveLink = card.querySelector(".live-link");

  repositoryLink.href = project.repository;
  repositoryLink.setAttribute("aria-label", `Відкрити репозиторій ${project.name}`);
  image.src = project.image || `https://opengraph.githubassets.com/portfolio-card/Oleksii1221/${project.repository.split("/").pop()}`;
  image.alt = `Прев'ю проєкту ${project.name}`;
  image.addEventListener("error", () => image.classList.add("image-unavailable"), { once: true });
  card.querySelector(".status").textContent = project.status;
  card.querySelector(".status").classList.toggle("is-active", project.status === "В роботі");
  card.querySelector("h3").textContent = project.name;
  card.querySelector(".project-description").textContent = project.description;
  card.querySelector(".project-role").textContent = "Автор і розробник";
  card.querySelector(".project-language").textContent = project.language;

  if (project.website) {
    liveLink.hidden = false;
    liveLink.href = project.website;
    liveLink.setAttribute("aria-label", `Відкрити сайт проєкту ${project.name}`);
  }

  grid.appendChild(card);
}
