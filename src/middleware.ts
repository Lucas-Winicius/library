import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get("user_secret")?.value;

  if (request.nextUrl.pathname.startsWith("/dashboard") && !userToken) {
    return NextResponse.redirect(new URL("/account", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
