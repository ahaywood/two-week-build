import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  console.log({ formData });
  console.log("yolo")

  return new Response("Successfully submitted form", { status: 200 });
};