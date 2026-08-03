import { SignJWT, jwtVerify } from "jose";

const COOKIE_NAME = "admin_session";
const EXPIRY_HOURS = 48;

function getSecret(): Uint8Array {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error(
      "ADMIN_SESSION_SECRET must be set and at least 32 characters long."
    );
  }
  return new TextEncoder().encode(secret);
}

export async function signAdminToken(): Promise<string> {
  const secret = getSecret();
  return new SignJWT({ admin: true })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${EXPIRY_HOURS}h`)
    .sign(secret);
}

export async function verifyAdminToken(token: string): Promise<boolean> {
  try {
    const secret = getSecret();
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export { COOKIE_NAME, EXPIRY_HOURS };
