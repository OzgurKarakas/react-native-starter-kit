# 🚀 React Native Starter Kit

A modern **React Native boilerplate** with pre-configured navigation, authentication flow, internationalization, styling, and data fetching.  
Perfect for kickstarting your next mobile app without spending hours on setup.

---

## ✨ Features

- 🔐 **Authentication Flow** → Pre-built login/logout system with global context  
- 🌍 **Internationalization (i18n)** → Multi-language support (English, Turkish out-of-the-box)  
- 🎨 **TailwindCSS Styling** → Utility-first styling for fast and consistent UI  
- 🧭 **React Navigation** → Centralized navigation configuration  
- ⚡ **TanStack Query Integration** → Data fetching and caching made simple  
- ♻️ **Reusable Components** → Clean, consistent, and easy-to-use UI components  
- 🛠 **Scalable Project Structure** → Organized folders for easy maintenance and extension  



---

## 🛠️ Tech Stack

⚛️ React Native
 – Core framework

🗂 React Navigation
 – Navigation system

🌍 react-i18next
 – Multi-language support

🎨 NativeWind (TailwindCSS)
 – Styling system

⚡ TanStack Query
 – Data fetching & caching

🔑 Context API – Global state & authentication management

---

## 📂 Project Structure

The project is designed with a clean and scalable architecture in mind.  
Every folder has its own responsibility, making the codebase easy to maintain and extend.  

```bash
src
├── components     # 🧩 Reusable and styled UI components
├── context        # 🌍 Global state & Auth provider
├── i18n           # 🌐 Internationalization (multi-language support)
├── navigation     # 🧭 Centralized navigation configuration
├── screens        # 📱 App screens (Login, Home, etc.)
└── services       # 🔌 API requests & business logic
```
---

## Getting Started

```bash

# Clone the repository
git clone https://github.com/OzgurKarakas/react-native-starter-kit.git
cd react-native-starter-kit

# Install dependencies
npm install

# iOS setup (if building for iOS)
cd ios && pod install && cd ..

# Start Metro bundler
npm start

# Run on device/emulator
npm run android
# or
npm run ios
