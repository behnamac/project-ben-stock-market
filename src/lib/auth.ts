// Temporarily commented out to fix build issues
// import { betterAuth } from "better-auth";
// import { mongooseAdapter } from "better-auth/adapters/mongoose";
// import connectDB from "./mongodb";

// export const auth = betterAuth({
//   database: mongooseAdapter(connectDB, {
//     modelName: "User",
//   }),
//   emailAndPassword: {
//     enabled: true,
//     requireEmailVerification: true,
//   },
//   socialProviders: {
//     google: {
//       clientId: process.env.GOOGLE_CLIENT_ID || "",
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
//     },
//   },
//   session: {
//     expiresIn: 60 * 60 * 24 * 7, // 7 days
//     updateAge: 60 * 60 * 24, // 1 day
//   },
//   user: {
//     additionalFields: {
//       firstName: {
//         type: "string",
//         required: false,
//       },
//       lastName: {
//         type: "string",
//         required: false,
//       },
//       avatar: {
//         type: "string",
//         required: false,
//       },
//     },
//   },
// });

// export type Session = typeof auth.$Infer.Session;
// export type User = typeof auth.$Infer.User;

// Temporary mock types for build
export type Session = {
  user: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
  };
};

export type User = {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
};
