# 💸 Finext

![Next.js](https://img.shields.io/badge/Next.js-v14-blue)
![Hono](https://img.shields.io/badge/Hono-API-green)
![Clerk](https://img.shields.io/badge/Clerk-Auth-orange)
![Neon](https://img.shields.io/badge/Neon-DB-red)
![Drizzle](https://img.shields.io/badge/Drizzle-ORM-yellow)
![Bun](https://img.shields.io/badge/Bun-JS-purple)

Welcome to **Finext** - the leading SaaS solution for all your financial recording and management needs. With cutting-edge technology and a user-friendly interface, we help you manage your finances more easily and efficiently. built with a modern tech stack, designed to provide the best performance and user experience. This project is powered by Next.js, Hono, Clerk, Neon, Drizzle, and Bun.

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) with App Router and TypeScript
- **Backend**: [Hono](https://hono.dev/) for API handling
- **Authentication**: [Clerk](https://clerk.dev/)
- **Database**: Serverless PostgreSQL by [Neon](https://neon.tech/)
- **ORM**: [Drizzle](https://github.com/drizzle-team/drizzle-orm)
- **Runtime**: [Bun](https://bun.sh/)

## 🔧 Getting Started

### Prerequisites

- Node.js (v16+)
- Bun (v0.1.2+)
- PostgreSQL Database (Serverless by Neon)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/zakydfls/finext.git
   cd finext
   ```

2. **Install dependencies:**

   Using Bun:

   ```bash
   bun install
   ```

3. **Setup environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your clerk publishable key
   CLERK_PUBLISHABLE_KEY=your clerk publishable key
   CLERK_SECRET_KEY=your clerk secret key

   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. **Run the development server:**

   ```bash
   bun dev
   ```

   Your app should now be running on [http://localhost:3000](http://localhost:3000).

## 🛠️ Building and Deployment

### Build

To build the application for production, run:

```bash
bun build
```

### Deploy

Deploy the application using your preferred deployment method. Ensure that your environment variables are correctly set up on the server.

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Hono Documentation](https://hono.dev/docs)
- [Clerk Documentation](https://clerk.dev/docs)
- [Neon Documentation](https://neon.tech/docs)
- [Drizzle Documentation](https://github.com/drizzle-team/drizzle-orm)
- [Bun Documentation](https://bun.sh/docs)

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or enhancements.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👥 Contact

For any inquiries, please contact [zakydaffeka26@gmail.com](mailto:zakydaffeka26@gmail.com).

---

Thank you for checking out **Finext**! Hope you enjoy using it. 🚀

---
