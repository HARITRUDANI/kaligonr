import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_COUNTRY = "SE";

export const config = {
  matcher: "/secret-page",
};

export function middleware(request: NextRequest) {
  const country = (request.geo && request.geo.country) || "US";


  if (country === BLOCKED_COUNTRY) {
    request.nextUrl.pathname = "/login";
  } else {
    request.nextUrl.pathname = `/secret-page`;
  }

  return NextResponse.rewrite(request.nextUrl);
}
