import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    console.log("=========auth=========" + JSON.stringify(auth));
    /* if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      const orgselection = new URL(path, req.url);
      return NextResponse.redirect(orgselection);
    }

    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelection = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelection);
    } */
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
