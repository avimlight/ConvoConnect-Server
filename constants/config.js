const corsOptions = {
  origin: [
    "http://localhost:5173",    // Local development URL
    "http://localhost:4173",    // Another possible local development URL
    "https://convo-connect-client-314ytr0p5-avinashs-projects-1ead76f9.vercel.app", // Specific deployment URL
    process.env.CLIENT_URL,     // Make sure this environment variable is correctly set
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,  // Allow credentials (cookies, authorization headers, etc.) for cross-origin requests
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
