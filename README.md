This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## 📚 What I Learned doing this project

While working on this project, I discovered an important best practice when using **Mongoose** with environments like **Next.js**.

In development, Next.js reloads and re-imports files multiple times due to hot reloading or when API routes are called.
If you register the same model more than once like this:

```js
const Product = mongoose.model('Products', ProductSchema);
``````

## 🐛 The Error

When working with **Mongoose** in environments like **Next.js**, you might eventually run into the following error:


This happens because Next.js reloads and re-imports files multiple times in development, which causes the same model to be registered more than once.

---

## ✅ The Solution

Instead of always creating the model, I check if it already exists and reuse it:

```js
const Product = mongoose.models.Products || mongoose.model('Products', ProductSchema);

