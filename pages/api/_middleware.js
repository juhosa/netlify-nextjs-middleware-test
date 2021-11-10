import { NextRequest, NextResponse } from "next/server";

const allowedParams = ["allowed"];

export function middleware(req) {
  const url = req.nextUrl;
  let changed = false;

  url.searchParams.forEach((_, key) => {
    if (!allowedParams.includes(key)) {
      url.searchParams.delete(key);
      changed = true;
    }
  });

  if (changed) {
    return NextResponse.redirect(url);
    // It's also useful to do a rewrite instead of a redirect
    // return NextResponse.rewrite(url)
  }
}