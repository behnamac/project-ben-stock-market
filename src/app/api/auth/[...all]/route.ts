// Temporarily commented out to fix build issues
// import { auth } from "@/lib/auth";

// export const { GET, POST } = auth.handler;

// Temporary mock handlers
export const GET = () => {
  return new Response("Auth not implemented", { status: 501 });
};

export const POST = () => {
  return new Response("Auth not implemented", { status: 501 });
};
