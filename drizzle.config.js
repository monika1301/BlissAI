require("dotenv").config(); 
/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:X4wZ8hgNDfvC@ep-wispy-wildflower-a54rj5ne.us-east-2.aws.neon.tech/BlissAI?sslmode=require",
  },
};
