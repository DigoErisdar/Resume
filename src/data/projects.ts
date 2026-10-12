import type { Project } from "../types/resume.ts";

export const projects = [
  {
    id: "ventra-merch-ir",
    eyebrow: "Проект · международная FMCG-компания",
    title: "Merch IR",
    description:
      "Система для мерчендайзеров международной [term=FMCG]FMCG[/term]-компании: распознавала товары на фотографиях торговых полок, проверяла соответствие целевой выкладке и рассчитывала [term=KPI]KPI[/term].",
    domains: ["fmcg"],
    skills: [
      "functional-nonfunctional-requirements",
      "rest-api",
      "kafka",
      "erd",
      "sequence-diagram",
      "as-is-to-be",
      "postgresql",
      "redis",
      "s3",
      "sql",
      "c4",
      "git",
      "figma",
      "plantuml",
      "jira",
      "confluence",
      "webhooks",
      "polling",
      "postman",
    ],
    roleLabel: "Моя роль",
    responsibility:
      "Собирал и уточнял требования к интеграции с внешней системой клиента, проектировал [term=REST API]API[/term] и сценарии обработки фотографий, готовил техническую документацию и сопровождал разработку и тестирование. Отдельно участвовал в исследовании возможности распознавания на мобильном устройстве без интернета.",
    contributions: [
      "Спроектировал [term=REST API]REST API[/term]-интеграцию внешней системы клиента с Merch IR: приём снимков, обработку через существующий [term=pipeline]pipeline[/term] распознавания, определение товаров, расчёт [term=KPI]KPI[/term] и возврат результатов.",
      "Провёл предпроектное исследование [term=On-Device Recognition]On-Device Recognition[/term] для будущего [term=MVP]MVP[/term]: проанализировал [term=pipeline]pipeline[/term], участвовал в тестах и замерах, сформировал требования к офлайн-распознаванию на мобильном устройстве и декомпозировал работы.",
      "Проектировал логические модели данных: определял сущности, атрибуты, связи и ограничения, фиксировал решения в [term=ERD]ERD[/term].",
      "Готовил [term=ТЗ]ТЗ[/term], [term=ЧТЗ]ЧТЗ[/term], [term=REST API]API[/term]-спецификации, [term=Sequence Diagram]Sequence Diagram[/term], [term=AS-IS / TO-BE]AS-IS / TO-BE[/term]; сопровождал задачи на этапах разработки и тестирования.",
      "Проводил [term=Frontend]frontend[/term] [term=code review]code review[/term]: проверял соответствие требованиям, [term=REST API]API[/term]-контрактам и [term=UX]UX[/term]-сценариям, обработку состояний и ошибок.",
    ],
    result:
      " разработал [term=REST API]API[/term]-контракты для интеграции внешних систем клиентов с Merch IR: передачи фотографий на обработку и получения результатов распознавания.",
    team: [
      {
        roles: ["pm"],
        count: 1,
      },
      {
        roles: ["lead"],
        count: 1,
      },
      {
        roles: ["system"],
        count: 2,
      },
      {
        roles: ["business"],
        count: 2,
      },
      {
        roles: ["ml"],
        count: 2,
      },
      {
        roles: ["frontend"],
        count: 1,
      },
      {
        roles: ["backend"],
        count: 3,
      },
      {
        roles: ["mobile"],
        count: 2,
      },
      {
        roles: ["qa"],
        count: 3,
      },
    ],
  },
  {
    id: "ventra-employee",
    eyebrow: "Проект · внутренний продукт Ventra",
    title: "Единое окно сотрудника",
    description:
      "Проект внутреннего портала Ventra для доступа сотрудников к кадровой информации, корпоративным сервисам и ответам на типовые вопросы в одном интерфейсе. Предусматривал интеграции с [term=1С:ЗУП]1С:ЗУП[/term] и [term=Битрикс24]Битрикс24[/term].",
    domains: ["hrtech", "corporate-services"],
    skills: [
      "1c",
      "bitrix24",
      "redis",
      "s3",
      "sql",
      "postgresql",
      "c4",
      "git",
      "figma",
      "plantuml",
      "n8n",
      "postman",
    ],
    roleLabel: "Моя роль",
    responsibility:
      "В паре с [term=Бизнес-аналитик]бизнес-аналитиком[/term] собирал и уточнял требования у [term=HR]HR[/term] и технической поддержки, прорабатывал системные сценарии, архитектуру и взаимодействие с внешними системами.",
    contributions: [
      "Предложил вариант архитектуры для [term=MVP]MVP[/term] и подготовил предварительную целевую схему для дальнейшего развития платформы.",
      "Проработал интеграции с [term=1С:ЗУП]1С:ЗУП[/term] и [term=Битрикс24]Битрикс24[/term]: описал состав данных, потоки обмена и сценарии взаимодействия систем.",
      "Спроектировал модуль [term=ИИ-ассистента]ИИ-ассистента[/term] для ответов на типовые вопросы сотрудников с целью снизить нагрузку на первую линию технической поддержки.",
    ],
    team: [
      {
        roles: ["lead"],
        count: 1,
      },
      {
        roles: ["system"],
        count: 1,
      },
      {
        roles: ["business"],
        count: 1,
      },
      {
        roles: ["backend"],
        count: 1,
      },
      {
        roles: ["onec"],
        count: 1,
      },
    ],
  },
  {
    id: "lamoda-project",
    eyebrow: "Проект",
    title: "Платформа управления ценообразованием",
    description:
      "[term=B2B]B2B[/term]-платформа управления ценообразованием: формирование, контроль и мониторинг цен.",
    domains: ["e-commerce", "pricing"],
    skills: [
      "functional-nonfunctional-requirements",
      "rest-api",
      "kafka",
      "sql",
      "postgresql",
      "erd",
      "sequence-diagram",
      "state-diagram",
      "vue",
      "nuxt",
      "typescript",
      "swagger",
      "postman",
      "redis",
      "s3",
      "bpmn",
      "html",
      "css",
      "pinia",
      "jest",
      "vite",
      "git",
      "figma",
      "plantuml",
      "jira",
      "confluence",
      "activity-diagram",
      "grpc",
    ],
    roleLabel: "Зона ответственности",
    responsibility:
      "Совмещал [term=Frontend]frontend[/term]-разработку с системным анализом: от технического анализа входных требований и постановки задач до реализации административных интерфейсов.",
    contributions: [
      "Разрабатывал страницы, дашборды и административные интерфейсы на [term=Vue 3]Vue 3[/term] и [term=Nuxt]Nuxt[/term].",
      "Прорабатывал [term=REST API]API[/term]-контракты, структуры данных, сценарии, пограничные случаи и критерии приёмки совместно с [term=Backend]backend[/term]-разработчиком.",
      "Описывал потоки данных между [term=Pricing]pricing[/term]-платформой и системами других команд; участвовал в переносе процессов на единую платформу и проектировании контрольных механизмов.",
    ],
    team: [
      {
        roles: ["lead"],
        count: 2,
      },
      {
        roles: ["qa"],
        count: 4,
      },
      {
        roles: ["pm", "business"],
        count: 2,
      },
      {
        roles: ["frontend"],
        count: 1,
      },
      {
        roles: ["frontend", "system"],
        count: 1,
      },
      {
        roles: ["backend"],
        count: 4,
      },
      {
        roles: ["tester"],
        count: 4,
      },
      {
        roles: ["ml"],
        count: 2,
      },
    ],
  },
  {
    id: "rostelecom-project",
    eyebrow: "Проект",
    title: "B2B-личный кабинет",
    description:
      "[term=B2B]B2B[/term]-личный кабинет для корпоративных клиентов на микрофронтенд-архитектуре.",
    domains: ["telecom", "b2b-services"],
    skills: [
      "rest-api",
      "vue",
      "javascript",
      "micro-frontends",
      "sequence-diagram",
      "plantuml",
      "postman",
      "xml",
      "html",
      "css",
      "pinia",
      "jest",
      "vite",
      "storybook",
      "git",
      "figma",
      "jira",
      "confluence",
    ],
    roleLabel: "Зона ответственности",
    responsibility:
      "Разрабатывал интерфейсные компоненты, анализировал архитектуру [term=Frontend]frontend[/term]-системы, документировал взаимодействия и участвовал в адаптации разработчиков.",
    contributions: [
      "Проанализировал архитектуру [term=Design System]Design System[/term] и подготовил план миграции с [term=React]React[/term] на [term=Vue 3]Vue 3[/term].",
      "Описывал взаимодействия [term=Micro Frontends]микрофронтендов[/term] с помощью [term=Sequence Diagram]Sequence Diagram[/term] в [term=PlantUML]PlantUML[/term].",
      "Разрабатывал [term=UI]UI[/term]-компоненты на [term=Vue.js]Vue[/term] и [term=JavaScript]JavaScript[/term], включая виртуализированные таблицы и редактор изображений.",
    ],
    result:
      " полностью перенёс дизайн-систему с [term=React]React[/term] на [term=Vue 3]Vue 3[/term].",
    team: [
      {
        roles: ["pm"],
        count: 2,
      },
      {
        roles: ["lead"],
        count: 1,
      },
      {
        roles: ["system"],
        count: 4,
      },
      {
        roles: ["business"],
        count: 4,
      },
      {
        roles: ["frontend"],
        count: 3,
      },
      {
        roles: ["backend"],
        count: 6,
      },
      {
        roles: ["tester"],
        count: 6,
      },
    ],
  },
  {
    id: "memorial-project",
    eyebrow: "Проект",
    title: "Мемориал ",
    description:
      "Платформа поиска захоронений и управления процессами оцифровки.",
    domains: ["municipal-services", "funeral-services"],
    skills: [
      "requirements-gathering",
      "functional-nonfunctional-requirements",
      "rest-api",
      "websocket",
      "python",
      "postgresql",
      "bpmn",
      "user-story",
      "git",
      "obsidian",
      "redis",
      "sql",
      "html",
      "css",
      "pinia",
      "jest",
      "vite",
      "celery",
      "pytest",
      "geojson",
      "openstreetmap",
      "figma",
      "plantuml",
      "jwt",
      "postman",
    ],
    roleLabel: "Зона ответственности",
    responsibility:
      "Участвовал в полном цикле развития монолитного приложения: требования, архитектура, бизнес-логика, разработка, распределение задач и документация.",
    contributions: [
      "Спроектировал решения для масштабирования системы и базы данных, [term=REST API]REST API[/term] и [term=WebSocket]WebSocket[/term]-взаимодействие для [term=real-time]real-time[/term] обновлений.",
      "[link=https://github.com/DigoErisdar/Controller]Разработал [term=Python]Python[/term]-модуль для работы с базой данных и перепроектировал процесс оцифровки. [/link]",
      "Проводил интервью со [term=стейкхолдерами]стейкхолдерами[/term], формировал [term=ФТ]ФТ[/term] и [term=НФТ]НФТ[/term], описывал процессы и сценарии в [term=BPMN]BPMN[/term] и [term=User Stories]User Stories[/term].",
      "При обсуждении перехода с [term=OpenStreetMap]OpenStreetMap[/term] на [term=Яндекс Карты]Яндекс Карты[/term] предложил сохранить текущую картографическую основу и добавить редактор поверх неё, чтобы избежать переработки существующих карт. Разработал добавление и редактирование точек и рисование фигур с сохранением геометрии в формате [term=GeoJSON]GeoJSON[/term] в базе данных.",
    ],
    result:
      " спроектировал и разработал платформу, на которой сейчас представлены более 500 кладбищ. Благодаря системе город смог за два месяца выполнить годовой план по цифровизации кладбищ.",
    team: [
      {
        roles: ["lead"],
        count: 1,
      },
      {
        roles: ["frontend", "backend"],
        count: 1,
      },
      {
        roles: ["system"],
        count: 1,
      },
      {
        roles: ["backend"],
        count: 1,
      },
    ],
  },
  {
    id: "placestart-project",
    eyebrow: "Проекты веб-студии",
    title: "Интернет-магазины для малого и среднего бизнеса",
    description:
      "Разработка [term=E-commerce]e-commerce[/term]-решений и модульной основы для их запуска.",
    domains: ["e-commerce", "small-medium-business"],
    skills: [
      "requirements-gathering",
      "functional-nonfunctional-requirements",
      "rest-api",
      "vue",
      "javascript",
      "python",
      "django",
      "drf",
      "postgresql",
      "figma",
      "1c",
      "seo",
      "redis",
      "sql",
      "html",
      "css",
      "pinia",
      "jest",
      "vite",
      "celery",
      "pytest",
      "git",
      "jwt",
      "postman",
    ],
    roleLabel: "Зона ответственности",
    responsibility:
      "Самостоятельно вёл полный цикл разработки интернет-магазинов: от преобразования требований в технические задачи до [term=Backend]backend[/term]-, [term=Frontend]frontend[/term]-разработки и запуска.",
    contributions: [
      "Разрабатывал магазины на [term=DRF]DRF[/term] и [term=Vue.js]Vue[/term] за один-два месяца.",
      "Настроил обмен данными с [term=1С]1С[/term], добился визуального соответствия макетам [term=Figma]Figma[/term] до 95% и оптимизировал [term=SEO]SEO[/term].",
    ],
    result:
      " разработал на [term=Python]Python[/term] и [term=Django]Django[/term] готовую [term=Backend]backend[/term]-основу с базовой функциональностью полноценного интернет-магазина. На её основе команда разворачивала новые магазины и дорабатывала их под требования заказчиков.",
    team: [
      {
        roles: ["frontend", "backend", "qa"],
        count: 1,
      },
      {
        roles: ["designer"],
        count: 1,
      },
      {
        roles: ["lead"],
        count: 1,
      },
    ],
  },
] satisfies Project[];
