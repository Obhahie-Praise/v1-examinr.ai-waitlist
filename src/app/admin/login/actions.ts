"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signAdminToken, COOKIE_NAME, EXPIRY_HOURS } from "@/lib/admin-auth";

export async function loginAdmin(formData: FormData) {
  const password = formData.get("password");

  if (typeof password !== "string" || !password) {
    return { error: "Password is required." };
  }

  const correctPassword = process.env.ADMIN_PASSWORD;

  if (!correctPassword) {
    return { error: "Admin password is not configured." };
  }

  if (password !== correctPassword) {
    return { error: "Incorrect password." };
  }

  const token = await signAdminToken();

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: EXPIRY_HOURS * 60 * 60,
    path: "/",
  });

  redirect("/admin");
}
