# Stock Market App

A modern full-stack stock market application built with Next.js, TypeScript, and a comprehensive tech stack.

## 🚀 Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Database**: MongoDB with Mongoose
- **Authentication**: BetterAuth
- **Background Jobs**: Inngest
- **Code Review**: Code Rabbit
- **Language**: TypeScript

## ✨ Features

- 📊 Real-time stock market dashboard
- 🔐 Secure authentication with BetterAuth
- 🎨 Modern UI with Shadcn/ui components
- 📱 Responsive design with Tailwind CSS
- 🔄 Background job processing with Inngest
- 🗄️ MongoDB database integration
- 🛡️ Type-safe development with TypeScript

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd project-ben-stock-market
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

4. Update the `.env.local` file with your configuration:

```env
MONGODB_URI=mongodb://localhost:27017/stock-market-app
BETTER_AUTH_SECRET=your-secret-key-here
BETTER_AUTH_URL=http://localhost:3000
INNGEST_EVENT_KEY=your-inngest-event-key
INNGEST_SIGNING_KEY=your-inngest-signing-key
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── inngest/       # Inngest webhook
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   ├── layout/           # Layout components
│   └── ui/               # Shadcn/ui components
└── lib/                  # Utility functions
    ├── auth.ts           # BetterAuth configuration
    ├── inngest.ts       # Inngest client
    └── mongodb.ts        # Database connection
```

## 🔧 Configuration

### MongoDB Setup

1. Install MongoDB locally or use MongoDB Atlas
2. Update the `MONGODB_URI` in your `.env.local` file

### BetterAuth Setup

1. Configure your authentication providers in `src/lib/auth.ts`
2. Set up your `BETTER_AUTH_SECRET` in the environment variables

### Inngest Setup

1. Create an Inngest account and get your event key
2. Update the Inngest configuration in your environment variables

## 🚀 Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

### Vercel Deployment

1. Connect your repository to Vercel
2. Set up your environment variables in the Vercel dashboard
3. Deploy!

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue in the repository.
