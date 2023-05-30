import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const cookie = req.cookies.get("token")?.value;
    if (!cookie && req.nextUrl.pathname !== "/") {
        return NextResponse.redirect(new URL("/", req.url));
    } else if (cookie && req.nextUrl.pathname === "/") {
        return NextResponse.redirect(new URL("/tools", req.url));
    }
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};