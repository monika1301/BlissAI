"use client"
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define the public routes
const publicRoutes = ["/"];

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    if (isProtectedRoute(req)) auth().protect();
  }
});

// Check if the route is public
const isPublicRoute = createRouteMatcher(publicRoutes);

// Check if the route is protected
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",


]);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


















// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect();
// });

// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/"]);

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // Define the public routes
// const publicRoutes = ["/"];

// export default clerkMiddleware((auth, req) => {
//   if (!isPublicRoute(req)) {
//     if (isProtectedRoute(req)) auth().protect();
//   }
// });

// // Check if the route is public
// const isPublicRoute = createRouteMatcher(publicRoutes);

// // Check if the route is protected
// const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/"]);

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
