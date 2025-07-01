# 🧠 Orion Forge  
*A Modular AI OS for Builders, Creators, and Visionaries.*

Orion Forge is a self-hosted, modular AI workspace designed to create, evolve, and interact with personalized AI entities. Built to run locally, it supports real-time LLM chat, symbolic memory systems, journaling engines, mod-based expansion, and identity-level customization.

---

## 🚀 Features

- 🧩 **Modular Plugin System**  
  Drop-in mods for journaling, backups, terminal tools, memory explorers, etc.

- 🧠 **AI Identity Engine**  
  Swap between custom AI personas with unique values, tone, and purpose.

- 📓 **Symbolic Memory + Journaling**  
  Track long-form evolution, emotional arcs, and knowledge fragments.

- 🗃️ **GGUF/Offline LLM Support**  
  Easily run local models (e.g., MythoMax, DeepSeek Coder) using `llama.cpp` or `Ollama`.

- 🔐 **Fully Offline + Private**  
  No cloud dependencies. Your AI, your data, your rules.

---

## 📂 File Structure

```bash
/orion-forge
│
├── public/              # Main HTML files, favicon, etc.
├── src/                 # Source code and logic
│   ├── components/      # UI components (sidebar, mod cards, etc.)
│   ├── mods/            # Modular app features
│   ├── styles/          # Tailwind CSS and extras
│   ├── logic/           # Core JS logic (loader, memory, identity)
│   └── main.js          # App bootstrapping
│
├── models/              # GGUF LLMs (ignored by Git)
├── identity/            # AI identity configuration files
├── memory/              # Symbolic memory, journal logs, context
├── .gitignore
├── README.md
