# 🍕 Pizza App

Вебзастосунок для перегляду та замовлення піци з категоріями, фільтрацією, сортуванням, пагінацією та мультимовністю.

## 🛠 Стек

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

## 🚀 Встановлення

Клонуйте репозиторій:

```bash
git clone https://github.com/ngarnashevich/pizza-app.git
```

Перейдіть у папку проєкту:

```bash
cd pizza-app
```

Встановіть залежності:

```bash
npm install
```

## 🗄 JSON Server

Для роботи з локальним API використовується `json-server`.

Встановіть його як dev-залежність:

```bash
npm install -D json-server
```

Перевірити встановлення:

```bash
npx json-server --version
```

## 📦 Створення бази даних

Дані для JSON Server зберігаються у файлі:

```text
data/items.json
```

Перед запуском API потрібно створити файл:

```text
db.json
```

та перенести в нього дані з `data/items.json`.

Для macOS / Linux:

```bash
cp data/items.json db.json
```

Для Windows:

```cmd
copy data\items.json db.json
```

Структура проєкту:

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

URL API не потрібно прописувати безпосередньо в компонентах. Він зберігається в `.env`.

Створіть у корені проєкту файл:

```text
.env
```

Приклад:

```env
VITE_API_URL=http://localhost:3000
```

Також у репозиторії є файл:

```text
.env.example
```

Його потрібно використовувати як шаблон:

```env
VITE_API_URL=http://localhost:3000
```

`.env` не повинен потрапляти в Git, тому він доданий до `.gitignore`.

> Для Vite змінні, які використовуються у frontend-коді, повинні починатися з `VITE_`.

## ▶️ Запуск JSON Server

Після створення `db.json` запустіть сервер:

```bash
npx json-server db.json
```

За замовчуванням API буде доступне за адресою:

```text
http://localhost:3000
```

Наприклад:

```text
http://localhost:3000/items
```

## 💻 Запуск проєкту

В окремому терміналі запустіть React/Vite:

```bash
npm run dev
```

Після цього відкрийте адресу, яку покаже Vite, зазвичай:

```text
http://localhost:5173
```

Таким чином, для локальної розробки потрібно запустити два процеси:

### Terminal 1 — JSON Server

```bash
npx json-server db.json
```

### Terminal 2 — React

```bash
npm run dev
```

## 🌍 Мультимовність

Для мультимовності використовується `i18next` та `react-i18next`.

Поточна структура дозволяє додавати нові мови без зміни основної логіки застосунку.

Приклад:

```text
src/
└── locales/
    ├── uk.json
    └── en.json
```
