import { createRoot } from "react-dom/client";
import emailjs from '@emailjs/browser';
import App from "./App";
import "./index.css";

// Log environment variables to debug
console.log("Environment variables status:", {
  serviceId: !!import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: !!import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: !!import.meta.env.VITE_EMAILJS_PUBLIC_KEY
});

// Initialize EmailJS with your public key
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (publicKey) {
  console.log("Initializing EmailJS with public key");
  emailjs.init(publicKey);
} else {
  console.error("EmailJS public key is not available!");
}

createRoot(document.getElementById("root")!).render(<App />);
