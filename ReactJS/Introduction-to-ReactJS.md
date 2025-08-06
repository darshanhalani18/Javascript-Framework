# ReactJS
---

## ✪ Why React?

- **Make easy to manage & build complex frontend**\
  React helps simplify building and maintaining complex user interfaces by breaking them into reusable components and efficiently managing updates.

- **Phantom or Ghost Error Messages**\
  React was developed by Facebook to solve problems like **phantom error messages**.\
  For example:

  > On Facebook, sometimes the chat icon shows a notification count (like 2 messages), but when you open the chat, the messages are already read — yet the count doesn’t update.\
  > This happens because the **UI (DOM)** and **data (state)** are not properly synced.\
  > React fixes this by managing a **Virtual DOM**, which keeps the UI in sync with the app's state automatically.

---

## 📚 Library vs Framework

- **React is a Library**\
  React focuses **only on the view layer** of the application (UI), and it's flexible — you can choose how to handle routing, state, etc.

| React (Library)        | Angular (Framework)          |
| ---------------------- | ---------------------------- |
| Flexible & lightweight | Opinionated & feature-packed |
| Pick your own tools    | All-in-one solution          |

- **React DOM vs React Native**
  - `react-dom`: Used for **web development**
  - `react-native`: Used for **mobile app development**

---

## ♻️ Component Reusability

React promotes reusability. You can build UI as independent components and reuse them across the app, making code cleaner and maintenance easier.

---

## 📂 SPA - Single Page Application

- React apps are SPAs by default.
- In SPA, the **page is not reloaded**; only components are updated, leading to:
  - Faster navigation
  - Better user experience
  - Fewer server requests

---

## 📖 React Documentation

📌 Official Docs: [https://react.dev](https://react.dev)

Always refer to the official docs for best practices and updates.

---

## 🚀 Creating a React App

### 1. Using `create-react-app`

**Command:**

```bash
npx create-react-app your_app_name
```

**Notes:**

- `npx` = Node Package Executer → runs packages without installing globally.
- `create-react-app` = A bulky utility that sets up everything for you (Webpack, Babel, etc.).
- Downside: Heavier setup, slower to start.

**To run the app:**

```bash
npm start
```

OR

```bash
npm run start
```

---

### 2. Using Vite (⚡ Faster & Lightweight)

**Vite** is a modern build tool that provides:

- Instant server start
- Lightning-fast HMR (Hot Module Replacement)
- Optimized builds

**Command:**

```bash
npm create vite@latest
```

## 🔗 React Core Libraries

| Library        | Description                                     |
| -------------- | ----------------------------------------------- |
| `react`        | Core library that provides the foundation       |
| `react-dom`    | Provides DOM-specific methods                   |
| `react-native` | For building mobile apps using React principles |

---

## 🌐 Virtual DOM

- React creates a **Virtual DOM**, which is a lightweight JS copy of the real DOM.
- It compares the virtual DOM with the real DOM using **diffing** and updates only what’s changed.

**This improves performance drastically.**
---
