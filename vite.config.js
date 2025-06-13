import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/coursera-practice-learn-react-conference_expense_planner/", //name of github repo
  plugins: [react()],
});
