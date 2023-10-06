export { default } from "next-auth/middleware";
//Logic for protected routes
export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  //   matcher: ["/users/:id*"],
  matcher: ["/dashboard/:path*"],
};
