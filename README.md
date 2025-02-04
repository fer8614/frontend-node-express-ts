# BankEnd - PERN Stack - Product Manager

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Screenshots](#screenshots)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Description
This is the frontend for a PERN (PostgreSQL, Express, React, Node.js) project named Product Manager, which is responsible for managing a product database. Developed with React and TypeScript, it offers a modern and responsive user interface with features such as authentication, data management, and real-time updates.

## Features
- User Authentication (Login/Register)
- Responsive Design with Tailwind CSS
- Dark/Light Theme Support
- Protected Routes
- Form Validation
- Toast Notifications
- Loading States
- Error Handling
- API Integration with Axios
- TypeScript Type Safety
- State Management with Context API
- Custom Hooks
- Reusable Components

## Technologies
- React 18
- TypeScript
- Tailwind CSS
- Axios
- React Router DOM
- React Hook Form
- React Icons
- React Hot Toast
- Context API
- Vite
- ESLint
- Prettier

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Backend service running (PERN Stack Backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fer8614/frontend-node-express-ts.git
```

2. Navigate to client directory:
```bash
cd client
```

3. Install dependencies:
```bash/
npm install
```

4. Create `.env` file:
```env.local
VITE_API_URL=http://localhost:4000
```

## Usage

Development mode:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

Run linting:
```bash
npm run lint
```

## Directory Structure
```
client/
├── src/
│   ├── components/         # Reusable UI components
│   ├── context/           # React Context providers
│   ├── hooks/             # Custom React hooks
│   ├── interfaces/        # TypeScript interfaces
│   ├── layouts/           # Layout components
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── public/                # Static assets
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Screenshots

### Login Page
![image alt](https://github.com/fer8614/frontend-node-express-ts/blob/6f4b30f872c081ab9183a9905d4c3db03099bb40/product-manager.png)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vite](https://vitejs.dev/)

---

## Additional Features

### Authentication Flow
```typescript
// Example of protected route
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
```

### API Integration
```typescript
// Example of API service
const userService = {
  login: async (credentials: LoginCredentials) => {
    const response = await axios.post('/auth/login', credentials);
    return response.data;
  },
  // ... other methods
};
```

### Custom Hooks
```typescript
// Example of custom hook
const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  
  const login = async (credentials: LoginCredentials) => {
    // Implementation
  };

  return { user, login };
};
```

### Component Example
```typescript
// Example of reusable component
const Button = ({ 
  children, 
  variant = 'primary', 
  ...props 
}: ButtonProps) => {
  return (
    <button 
      className={`btn ${variant}`} 
      {...props}
    >
      {children}
    </button>
  );
};
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
