const projects = [
  {
    name: "Vuzol",
    repository: "https://github.com/Oleksii1221/Vuzol_Pb",
    description: "Екосистема для телефону та ПК, де можна переглядати 3D-моделі через простий інструмент замість громіздких інструкцій. Підходить для виробництва, навчання, сервісу й показу збірок.",
    language: "3D / Mobile / PC",
    status: "Завершено",
    tone: "violet",
    mark: "VZ",
    image: "https://raw.githubusercontent.com/Oleksii1221/Vuzol_Pb/master/assets/hero-devices.png",
  },
  {
    name: "KEP Schedule",
    repository: "https://github.com/Oleksii1221/KEP_Schedule_PB",
    description: "Екосистема для розкладу Коледжу електронних приладів: Android APK, Telegram-бот, канали оновлень і зручний доступ для студентів без ручного пошуку пар.",
    language: "APK / Telegram",
    status: "Завершено",
    tone: "orange",
    mark: "KEP",
  },
  {
    name: "Kokos",
    repository: "https://github.com/Oleksii1221/Kokos",
    website: "https://oleksii1221.github.io/Kokos/",
    description: "Self-hosted Telegram-бот для чатів: знаходить TikTok і YouTube Shorts, завантажує відео через yt-dlp/ffmpeg, кешує file_id і веде статистику.",
    language: "Telegram bot",
    status: "В роботі",
    tone: "teal",
    mark: "K",
    image: "https://raw.githubusercontent.com/Oleksii1221/Kokos/master/assets/kokoclip-logo.png",
  },
  {
    name: "KicoAudioEditor",
    repository: "https://github.com/Oleksii1221/KicoAudioEditor",
    website: "https://oleksii1221.github.io/KicoAudioEditor/",
    description: "Desktop-редактор аудіометаданих: теги, обкладинки, lyrics/comments, batch-правки, JSON backup і зручне прибирання музичної бібліотеки.",
    language: "Desktop app",
    status: "Завершено",
    tone: "pink",
    mark: "KAE",
    image: "https://raw.githubusercontent.com/Oleksii1221/KicoAudioEditor/master/docs/assets/kae_mascot.png",
  },
  {
    name: "PIDron",
    repository: "https://github.com/Oleksii1221/PIDron",
    website: "https://oleksii1221.github.io/PIDron/",
    description: "Калькулятор PID для дрона: вводиш характеристики збірки, отримуєш P/I/D/feedforward і за потреби прошиваєш їх у польотник без ручного налаштування.",
    language: "PID calculator",
    status: "В роботі",
    tone: "blue",
    mark: "PID",
    image: "https://raw.githubusercontent.com/Oleksii1221/PIDron/master/assets/icon.png",
  },
  {
    name: "Є-Рука",
    repository: "https://github.com/Oleksii1221/Ye-ruka",
    website: "https://oleksii1221.github.io/Ye-ruka/",
    description: "Застосунок для ESP32-роборуки: MediaPipe-жести з камери, сенсорна рукавиця, 7 сервоприводів, прошивання контролера й аварійна зупинка.",
    language: "Robotics",
    status: "Завершено",
    tone: "red",
    mark: "ER",
    image: "https://raw.githubusercontent.com/Oleksii1221/Ye-ruka/master/docs/INTERFACE_PREVIEW.png",
  },
  {
    name: "MusicByKico",
    repository: "https://github.com/Oleksii1221/MusicByKico",
    description: "Discord-бот для програвання музики в голосових каналах: YouTube-посилання або пошук, плейлисти, черга, autoplay і slash-команди.",
    language: "Discord bot",
    status: "Завершено",
    tone: "yellow",
    mark: "MBK",
  },
  {
    name: "Thermometer",
    repository: "https://github.com/Oleksii1221/Thermometer-",
    description: "ESP32 + DS18B20 система моніторингу температури з Telegram-ботом для запитів, порогів і критичних сповіщень.",
    language: "ESP32 / Telegram",
    status: "Завершено",
    tone: "green",
    mark: "TMP",
  },
  {
    name: "MEDUZA",
    repository: "https://github.com/Oleksii1221/MEDUZA",
    description: "Проєкт з ESP32, MPU6050 та ESP-NOW обміном: передавач/приймач для експериментів з рухом, сенсорами й керуванням пристроями.",
    language: "ESP32 / MPU6050",
    status: "Завершено",
    tone: "violet",
    mark: "MDZ",
  },
  {
    name: "ESP NOW Testing",
    repository: "https://github.com/Oleksii1221/ESP_NOW_TESTING",
    description: "Тестовий стенд Sender/Receiver для перевірки бездротового обміну між ESP-пристроями через ESP-NOW перед інтеграцією в більші проєкти.",
    language: "ESP-NOW",
    status: "Завершено",
    tone: "teal",
    mark: "ESP",
  },
  {
    name: "Hodivnytsya",
    repository: "https://github.com/Oleksii1221/Hodivnytsya",
    description: "Arduino-годівниця для домашніх улюбленців: HC-SR04 визначає наближення, сервопривід відкриває заслонку, а схема показує підключення.",
    language: "Arduino",
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
    liveLink.setAttribute("aria-label", `Відкрити сторінку проєкту ${project.name}`);
  }

  grid.appendChild(card);
}
