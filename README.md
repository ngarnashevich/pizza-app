# 🍕 Pizza App

A web application for browsing and ordering pizza with categories, filtering, sorting, pagination, and multilingual support.

## 🛠 Tech Stack

- React 19
- TypeScript
- Redux Toolkit
- React Router v6
- Fetch API
- React Hooks
- Prettier
- CSS Modules / SCSS
- React Content Loader
- React Pagination
- Lodash Debounce
- i18next
- JSON Server
- Vite

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/ngarnashevich/pizza-app.git
```

Navigate to the project directory:

```bash
cd pizza-app
```

Install dependencies:

```bash
npm install
```

## 🗄 JSON Server

The application uses `json-server` as a local API.

Install it as a development dependency:

```bash
npm install -D json-server
```

Check the installation:

```bash
npx json-server --version
```

## 📦 Database Setup

The data for JSON Server is stored in the file:

```text
data/items.json
```

Before starting the API, create the following file:

```text
db.json
```

and copy the data from `data/items.json` into it.

For macOS / Linux:

```bash
cp data/items.json db.json
```

For Windows:

```cmd
copy data\items.json db.json
```

Project structure:

```text
pizza-app/
├── data/
│   └── items.json
├── db.json
├── src/
├── public/
├── .env
├── .env.example
├── package.json
└── ...
```

## ⚙️ Environment Variables

The API URL should not be hardcoded directly into components. It is stored in `.env`.

Create a file in the project root:

```text
.env
```

Example:

```env
VITE_API_URL=http://localhost:3000
```

The repository also contains the following file:

```text
.env.example
```

Use it as a template:

```env
VITE_API_URL=http://localhost:3000
```

The `.env` file should not be committed to Git, so it is included in `.gitignore`.

> For Vite, environment variables used in frontend code must start with `VITE_`.

## ▶️ Running JSON Server

After creating `db.json`, start the server:

```bash
npx json-server db.json
```

By default, the API will be available at:

```text
http://localhost:3000
```

For example:

```text
http://localhost:3000/items
```

## 💻 Running the Project

In a separate terminal, start the React/Vite development server:

```bash
npm run dev
```

Then open the URL provided by Vite, usually:

```text
http://localhost:5173
```

For local development, two processes need to be running:

### Terminal 1 — JSON Server

```bash
npx json-server db.json
```

### Terminal 2 — React

```bash
npm run dev
```

## 🌍 Multilingual Support

The application uses `i18next` and `react-i18next` for multilingual support.

The current structure allows new languages to be added without changing the core application logic.

Example:

```text
src/
└── locales/
    ├── uk.json
    └── en.json
```
