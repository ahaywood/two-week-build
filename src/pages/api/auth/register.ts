import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const username = formData.get("username")?.toString();
  const location = formData.get("location")?.toString();
  const website = formData.get("website")?.toString();
  const github = formData.get("github")?.toString();
  const twitter = formData.get("twitter")?.toString();
  const avatar = formData.get("avatar")?.toString(); // TODO: Handle file upload

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) return new Response(error.message, { status: 500 });

  // take the email and user id and add data to the user table
  const userResult = await supabase.from("users").insert({ location, website, github, twitter, avatar, username, auth_id: data?.user?.id })
  if (userResult.error) return new Response(userResult.error.message, { status: 500 });

  return redirect("/waiting");
};