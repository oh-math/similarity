/* eslint-disable no-unused-vars*/

import type { Session, User } from "next-auth";
import type { DefaultJWT, JWT } from "next-auth/jwt";

type UserId = string;

declare module 'next-auth/jwt' {
  interface JWT {
    sub: UserId;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
    };
  }
}
