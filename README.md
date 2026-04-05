# ProManage | Product Management Assessment

A modern, responsive Product Management System built as a Full Stack Intern Assessment. This application allows users to manage their product catalog with full CRUD functionality, persistence via Local Storage, and a premium UI/UX experience.

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)
- **State Management**: React Hooks with [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.stevenly.me/)

## Key Features

- **CRUD Operations**: Add, View, Edit, and Delete products seamlessly.
- **Data Persistence**: Uses Local Storage to keep your data across browser refreshes.
- **Search & Filter**: Real-time product filtering based on name and description.
- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Dark Mode**: Supports system preference and manual theme switching.
- **Premium UI**: Glassmorphism, animated transitions, and curated color palettes.
- **Form Validation**: Robust client-side validation using Zod schemas.

## Setup Instructions

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the project folder):
   ```bash
   cd Product Management/frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Assumptions & Improvements

- **Local Storage**: As requested, the app uses Local Storage. In a production environment, this would be replaced with a robust backend service (e.g., Node.js/Express with PostgreSQL or MongoDB).
- **Image Handling**: Current implementation uses URL strings for images. A production version would feature actual image uploads to a cloud provider like AWS S3 or Cloudinary.
- **Auth**: The current assessment does not require authentication; however, a user-based management system could be added in the future.
- **Testing**: While manual verification was performed, automated unit and E2E tests (using Jest/Playwright) would be a great addition for long-term stability.

