import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest";

// Create an API that serves zero functions and receives events.
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    // Add your Inngest functions here
  ],
});
