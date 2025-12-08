# TRX Platform

A modern Next.js application with authentication and onboarding flows.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **Authentication**: Complete login and signup screens with beautiful UI
- **Onboarding Flow**: Multi-step onboarding process for new users
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **App Router**: Uses Next.js 13+ App Router for optimal performance

## 📁 Project Structure

```
trx-platform/
├── app/
│   ├── (auth)/              # Auth routes group
│   │   ├── login/           # Login page
│   │   │   └── page.tsx
│   │   ├── signup/          # Signup page
│   │   │   └── page.tsx
│   │   └── layout.tsx       # Auth layout
│   ├── onboarding/          # Onboarding flow
│   │   └── page.tsx
│   ├── components/          # Shared components
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── public/                  # Static assets
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd trx-platform
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## 📱 Pages Overview

### Home Page (`/`)
- Landing page with platform features
- Call-to-action buttons for signup and login
- Statistics and feature highlights

### Login Page (`/login`)
- Email and password authentication
- "Remember me" option
- Forgot password link
- Link to signup page
- Redirects to onboarding after successful login

### Signup Page (`/signup`)
- Full name, email, and password fields
- Password confirmation
- Terms and conditions checkbox
- Link to login page
- Redirects to onboarding after successful signup

### Onboarding Flow (`/onboarding`)
- **Step 1**: Role selection (Developer, Designer, Manager, Entrepreneur)
- **Step 2**: Interest selection (Crypto, Blockchain, DeFi, NFTs, Trading, Analytics)
- **Step 3**: Notification preferences
- Progress indicator
- Skip option available

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful gradient backgrounds for visual appeal
- **Smooth Transitions**: Animations and transitions for better UX
- **Loading States**: Loading indicators for async operations
- **Form Validation**: Client-side form validation
- **Responsive Grid Layouts**: Optimized for all screen sizes
- **Dark Mode**: Automatic theme switching based on system preferences

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚧 Next Steps

To complete the implementation, you might want to add:

1. **Backend Integration**
   - Connect to authentication API
   - Add state management (Redux, Zustand, or Context API)
   - Implement protected routes

2. **Database**
   - Set up user database
   - Store onboarding preferences
   - Session management

3. **Additional Features**
   - Password reset functionality
   - Email verification
   - Social authentication (Google, GitHub, etc.)
   - User dashboard after onboarding

4. **Testing**
   - Unit tests with Jest
   - Integration tests
   - E2E tests with Playwright or Cypress

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using Next.js
