# Scrum Quiz - EXIN Agile Scrum Foundation

Interactive practice exam for the EXIN Agile Scrum Foundation (ASF) certification. Trilingual (German, Spanish, English) with randomized questions and answers, detailed explanations, and dark/light mode.

## Features

- 40 multiple-choice questions based on the official EXIN ASF sample exam
- Three languages: Deutsch, Español, English — switchable at any time
- Randomized question order and answer order on every attempt
- Immediate feedback with explanations for correct and incorrect answers
- Two modes: Quick (10 questions) and Full (40 questions)
- Dark/Light theme toggle
- Responsive design (mobile + desktop)
- Static site — no backend required

## Tech Stack

- [Astro](https://astro.build/) — Static site generator
- [Preact](https://preactjs.com/) — Lightweight UI components
- [Tailwind CSS v4](https://tailwindcss.com/) — Styling

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Landing.tsx    # Home page with mode selector
│   ├── Navbar.tsx     # Shared navigation bar
│   └── Quiz.tsx       # Quiz logic and UI
├── data/
│   └── questions.ts   # All 40 questions in 3 languages
├── pages/
│   ├── index.astro    # Landing page route (/)
│   └── quiz/
│       └── [mode].astro  # Quiz routes (/quiz/10, /quiz/40)
└── styles/
    └── global.css     # Tailwind imports + dark mode config
```

## Passing Criteria

Same as the official exam: 65% correct answers (26/40 for full mode, 7/10 for quick mode).

## License

Educational use. Questions based on the EXIN Agile Scrum Foundation sample exam (Ausgabe 202402).
