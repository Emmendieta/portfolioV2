mi-proyecto/
│
├── backend/              # API/servidor
│   ├── src/
│   │   ├── routes/       # Rutas del API (endpoints REST)
│   │   ├── controllers/  # Lógica de negocio
│   │   ├── models/       # Conexión a DB (ORM o consultas)
│   │   └── app.js        # Configuración principal
│   ├── package.json
│   └── ...
│
├── frontend/             # ReactJS
│   ├── src/
│   │   ├── components/   # Componentes reutilizables
│   │   ├── pages/        # Vistas (Home, Login, Dashboard, etc.)
│   │   ├── services/     # Funciones para llamar al backend (fetch/axios)
│   │   └── App.jsx
│   ├── package.json
│   └── ...
│
└── README.md

