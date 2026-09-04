# 🧪 Evaluación de Calidad y Testing - Hito 2 (`despensalo.cl`)

Repositorio oficial que contiene las evidencias, planes de prueba y scripts de automatización correspondientes al **Hito 2** de aseguramiento de calidad (QA) para la plataforma web [despensalo.cl](https://despensalo.cl/).

---

## 🚀 Acerca del Proyecto
Este proyecto implementa una estrategia integral de testing para validar la estabilidad, la correcta gestión de inventario y la experiencia de usuario de la plataforma. El proceso abarca desde pruebas manuales estructuradas hasta la automatización de flujos de extremo a extremo (E2E).

## 🛠️ Tecnologías y Herramientas Utilizadas
* **Cypress:** Framework principal para la automatización de pruebas E2E.
* **JavaScript:** Lenguaje de scripting para los test cases.
* **Microsoft Excel / Google Sheets:** Gestión de Casos de Prueba, Matriz de Defectos y Testing Exploratorio.
* **Git & GitHub:** Control de versiones y repositorio de evidencias.

---

## 📂 Estructura del Repositorio

```text
├── cypress/
│   ├── e2e/
│   │   └── despensalo.cy.js    # Scripts de pruebas automatizadas (Flujo, Inventario y Datos Parametrizados)
│   ├── fixtures/               # Datos de prueba simulados
│   └── support/                # Configuración y comandos globales
├── .gitignore                  # Archivos excluidos del control de versiones (node_modules, etc.)
└── README.md                   # Documentación principal del proyecto
