# 🐳 Mini Docker Tasks

Цей репозиторій містить два простих Docker-проєкти для тренування:

- `task1-html-app` — простий HTML-сайт на базі Nginx.
- `task2-node-app` — базовий Node.js сервер, що відповідає "Hello from Node in Docker!".

---

## 📁 Структура проєкту

```
.
├── .gitignore
├── task1-html-app
│   ├── Dockerfile
│   └── index.html
├── task2-node-app
│   ├── Dockerfile
│   └── index.js
```

---

## 📦 Task 1: Static HTML (Nginx)

### 🔧 Побудова образу

```bash
cd task1-html-app
docker build -t my-nginx .
```

### ▶️ Запуск контейнера

```bash
docker run -d -p 8080:80 --name html-container my-nginx
```

### 🌐 Перевірка

Відкрий у браузері: [http://localhost:8080](http://localhost:8080)

---

## 🧠 Task 2: Node.js HTTP сервер

### 🔧 Побудова образу

```bash
cd task2-node-app
docker build -t my-node-app .
```

### ▶️ Запуск контейнера

```bash
docker run -d -p 3000:3000 --name backend my-node-app
```

### 🌐 Перевірка

Відкрий у браузері або терміналі:

```bash
curl http://localhost:3000
```

Очікуваний результат:

```
Hello from Node in Docker!
```

---

## 🧹 Docker Cleanup (за потреби)

```bash
docker stop html-container backend
docker rm html-container backend
docker rmi my-nginx my-node-app
```

---

## 📄 .gitignore

Ігноруємо службові файли:

```
.env
.idea
```
