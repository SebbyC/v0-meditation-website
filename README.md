# Meditation Haven 🧘‍♀️

A modern, responsive meditation and mindfulness web application built with Next.js, designed to help users find inner peace through guided meditations and mindfulness practices.

## 🌟 Features

- **Meditation Timer**: Customizable timer with adjustable duration (1-60 minutes), play/pause/reset controls, and bell notification
- **Guided Meditation Library**: Curated collection of meditations categorized by experience level (Beginner, Intermediate, Advanced)
- **Audio Player**: Built-in audio player with progress tracking, volume control, and seeking capabilities
- **Dark/Light Theme**: Toggle between dark and light modes with system theme detection
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: Built with Radix UI components ensuring accessibility standards

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15.2.4 with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Theme Management**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/meditation-website.git
cd meditation-website
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
meditation-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── meditations/       # Meditation library page
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # Reusable UI components (45+ components)
│   ├── audio-player.tsx  # Audio player component
│   ├── meditation-timer.tsx # Timer component
│   ├── site-header.tsx   # Navigation header
│   └── site-footer.tsx   # Footer component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/              # Global styles
```

## 🎯 Core Components

### Meditation Timer
Located in `components/meditation-timer.tsx`, features:
- Duration slider (1-60 minutes)
- Start/Pause/Reset functionality
- Visual countdown display
- Audio notification on completion

### Audio Player
Located in `components/audio-player.tsx`, includes:
- Play/Pause controls
- Progress bar with seeking
- Volume control with mute option
- Time display (current/total)

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Adding New Meditations

To add new guided meditations, edit the `meditations` array in `app/meditations/page.tsx`:

```typescript
const meditations = [
  {
    id: "new-meditation",
    title: "Your Meditation Title",
    description: "Description of the meditation",
    duration: "15 min",
    category: "beginner", // or "intermediate", "advanced"
    imageUrl: "/path-to-image.jpg"
  }
];
```

## 🎨 Customization

### Theme Colors
The application uses a teal color scheme. To customize colors, modify the Tailwind configuration in `tailwind.config.ts`.

### Adding New UI Components
The project includes 45+ pre-built UI components from shadcn/ui. To add new components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Community

This project was developed with inspiration and support from the **Pensacola AI Builders Meetup Group**! 

🌟 Special thanks to [Inna Fay](https://www.linkedin.com/in/inna-fay-life-coach-98bb051a/), Life Coach and community member, for her insights on mindfulness and meditation practices.

Join us at the [Pensacola AI & Artificial Intelligence in Business Meetup](https://www.meetup.com/pensacola-ai-artificial-intelligence-in-business/) to connect with fellow developers and AI enthusiasts in the Pensacola area!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) by Vercel
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Developed during Pensacola AI Builders Meetup sessions

---

Made with ❤️ by the Pensacola tech community