const projects = [
  {
    name: "Vuzol",
    repository: "https://github.com/Oleksii1221/Vuzol_Pb",
    description: "Інструмент для роботи з вузлами, схемами та візуальними матеріалами проєкту.",
    language: "HTML",
    status: "Завершено",
    tone: "violet",
    mark: "VZ",
    image: "https://raw.githubusercontent.com/Oleksii1221/Vuzol_Pb/master/assets/hero-devices.png",
  },
  {
    name: "KEP Schedule",
    repository: "https://github.com/Oleksii1221/KEP_Schedule_PB",
    description: "Екосистема для зручного перегляду розкладу Коледжу електронних приладів: APK, Telegram-бот і канали оновлень.",
    language: "HTML",
    status: "Завершено",
    tone: "orange",
    mark: "KEP",
  },
  {
    name: "Kokos",
    repository: "https://github.com/Oleksii1221/Kokos",
    website: "https://oleksii1221.github.io/Kokos/",
    description: "Telegram-бот для чатів, що перетворює TikTok і YouTube Shorts на нативні відеовідповіді.",
    language: "Python",
    status: "В роботі",
    tone: "teal",
    mark: "K",
    image: "https://raw.githubusercontent.com/Oleksii1221/Kokos/master/assets/kokoclip-logo.png",
  },
  {
    name: "KicoAudioEditor",
    repository: "https://github.com/Oleksii1221/KicoAudioEditor",
    website: "https://oleksii1221.github.io/KicoAudioEditor/",
    description: "Desktop-застосунок для редагування аудіометаданих на Windows і Linux.",
    language: "Python",
    status: "Завершено",
    tone: "pink",
    mark: "KAE",
    image: "https://raw.githubusercontent.com/Oleksii1221/KicoAudioEditor/master/docs/assets/kae_mascot.png",
  },
  {
    name: "PIDron",
    repository: "https://github.com/Oleksii1221/PIDron",
    website: "https://oleksii1221.github.io/PIDron/",
    description: "Локальна станція для симуляції дронів, роботи з Betaflight/INAV та налаштування PID.",
    language: "JavaScript",
    status: "В роботі",
    tone: "blue",
    mark: "PID",
    image: "https://raw.githubusercontent.com/Oleksii1221/PIDron/master/assets/icon.png",
  },
  {
    name: "Є-Рука",
    repository: "https://github.com/Oleksii1221/Ye-ruka",
    website: "https://oleksii1221.github.io/Ye-ruka/",
    description: "Застосунок для керування роботизованою кистю через камеру, жести, рукавицю та ESP32.",
    language: "Python",
    status: "Завершено",
    tone: "red",
    mark: "ER",
    image: "https://raw.githubusercontent.com/Oleksii1221/Ye-ruka/master/docs/INTERFACE_PREVIEW.png",
  },
  {
    name: "MusicByKico",
    repository: "https://github.com/Oleksii1221/MusicByKico",
    description: "Персональний музичний проєкт з інструментами для організації та обробки звуку.",
    language: "Python",
    status: "Завершено",
    tone: "yellow",
    mark: "MBK",
  },
  {
    name: "Thermometer",
    repository: "https://github.com/Oleksii1221/Thermometer-",
    description: "Апаратно-програмний проєкт для вимірювання, обробки та відображення температури.",
    language: "Python",
    status: "Завершено",
    tone: "green",
    mark: "TMP",
  },
  {
    name: "MEDUZA",
    repository: "https://github.com/Oleksii1221/MEDUZA",
    description: "C++ проєкт з прикладною логікою, керуванням станами та взаємодією з пристроями.",
    language: "C++",
    status: "Завершено",
    tone: "violet",
    mark: "MDZ",
  },
  {
    name: "ESP NOW Testing",
    repository: "https://github.com/Oleksii1221/ESP_NOW_TESTING",
    description: "Тестовий стенд для бездротового обміну даними між ESP-пристроями через ESP-NOW.",
    language: "Embedded",
    status: "Завершено",
    tone: "teal",
    mark: "ESP",
  },
  {
    name: "Hodivnytsya",
    repository: "https://github.com/Oleksii1221/Hodivnytsya",
    description: "Проєкт автоматизованої годівниці з C++ логікою, електронікою та схемою підключення.",
    language: "C++",
    status: "Завершено",
    tone: "orange",
    mark: "HDV",
    image: "https://raw.githubusercontent.com/Oleksii1221/Hodivnytsya/master/Connection%20diagram.png",
  },
];

const grid = document.querySelector("#projects");
const template = document.querySelector("#project-template");
document.querySelector("#project-count").textContent = `${projects.length} проєктів`;

for (const project of projects) {
  const card = template.content.cloneNode(true);
  const article = card.querySelector("article");
  const repositoryLink = card.querySelector(".card-link");
  const image = card.querySelector(".project-image");
  const mark = card.querySelector(".project-mark");
  const liveLink = card.querySelector(".live-link");

  article.classList.add(`tone-${project.tone}`);
  repositoryLink.href = project.repository;
  repositoryLink.setAttribute("aria-label", `Відкрити репозиторій ${project.name}`);
  image.src = project.image || `https://opengraph.githubassets.com/portfolio-card/Oleksii1221/${project.repository.split("/").pop()}`;
  image.alt = `Прев'ю проєкту ${project.name}`;
  image.addEventListener("error", () => image.classList.add("image-unavailable"), { once: true });
  mark.textContent = project.mark || project.name.slice(0, 3).toUpperCase();
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
