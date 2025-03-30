import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Define contact message schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Get application routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const contactData = contactSchema.parse(req.body);
      
      // In a real application, you would store this in a database
      // or send an email. For now, we'll just log it.
      console.log("Contact form submission:", contactData);
      
      // Return a success response
      res.status(200).json({ 
        success: true,
        message: "Message received! We'll get back to you soon."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      }
      
      res.status(500).json({ 
        success: false,
        message: "Something went wrong. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
