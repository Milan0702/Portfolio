import { useState, useRef, useEffect } from "react";
import { isValidEmail } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import data from "@/data/index";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const { toast } = useToast();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { contactInfo, socials } = data;
  
  useEffect(() => {
    const headings = document.querySelectorAll('.heading-animate');
    
    const handleScroll = () => {
      // Animate headings when they come into view
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const isVisible = (rect.top < window.innerHeight * 0.8);
        
        if (isVisible) {
          heading.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 500);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Map form field names to state property names
    const fieldToStateProp: Record<string, keyof FormData> = {
      from_name: 'name',
      from_email: 'email',
      subject: 'subject',
      message: 'message'
    };
    
    const stateProp = fieldToStateProp[name] || name as keyof FormData;
    setFormData(prev => ({ ...prev, [stateProp]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (formRef.current) {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        
        console.log("EmailJS configuration:", {
          serviceId: !!serviceId,
          templateId: !!templateId,
          publicKey: !!publicKey
        });
        
        if (!serviceId || !templateId || !publicKey) {
          throw new Error("EmailJS configuration is incomplete");
        }
        
        // Send email using EmailJS with form reference
        const response = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        
        if (response.status === 200) {
          toast({
            title: "Message Sent!",
            description: "Your message has been sent to Milan. He will get back to you shortly via the email you provided.",
          });
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
        } else {
          throw new Error("Failed to send message");
        }
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300" style={{ backgroundColor: 'var(--secondary-bg)' }}>
      <div className="max-w-7xl mx-auto ">
        <ScrollReveal direction="up" className="text-center mb-12">
          <h2 ref={headingRef} className="heading-animate text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-highlight">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: "200ms" }}>
            Interested in working together? Feel free to contact me for any project or collaboration.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="custom-card p-6 shadow-lg order-2 lg:order-1 animate-fade-in-left opacity-0" 
            style={{ 
              animationDelay: "300ms",
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)'
            }}>
            <h3 className="heading-animate text-2xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>Send a Message</h3>
            
            <form ref={formRef} id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="animate-fade-in-up opacity-0 " style={{ animationDelay: "400ms" }}>
                <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-color)' }}>Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="from_name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="form-input"
                />
              </div>
              
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "500ms" }}>
                <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-color)' }}>Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="from_email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="form-input"
                />
                <p className="text-xs text-gray-500 mt-1">I'll use this to reply back to you! :D</p>
              </div>
              
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "600ms" }}>
                <label htmlFor="subject" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-color)' }}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of your message"
                  className="form-input"
                />
              </div>
              
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: "700ms" }}>
                <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: 'var(--text-color)' }}>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="form-input resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full px-6 py-3 font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70 animate-fade-in-up opacity-0"
                style={{ animationDelay: "800ms" }}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                {!isSubmitting && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="custom-card p-6 shadow-lg mb-6 animate-fade-in-right opacity-0" 
              style={{ 
                animationDelay: "300ms",
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)'
              }}>
              <h3 className="heading-animate text-2xl font-bold mb-6" style={{ color: 'var(--text-color)' }}>Contact Information</h3>
              
              <p className="mb-4 text-sm" style={{ color: 'var(--text-color-light)' }}>
                Fill out the contact form to send me a direct message. Messages are delivered straight to my inbox, and I'll respond to your email address as soon as possible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start animate-fade-in-right opacity-0" style={{ animationDelay: "400ms" }}>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center mr-4 animate-pulse">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--text-color)' }}>Email</h4>
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition duration-300" style={{ color: 'var(--text-color-light)' }}>
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start animate-fade-in-right opacity-0" style={{ animationDelay: "500ms" }}>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center mr-4 animate-pulse">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--text-color)' }}>Phone</h4>
                    <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="hover:text-primary transition duration-300" style={{ color: 'var(--text-color-light)' }}>
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start animate-fade-in-right opacity-0" style={{ animationDelay: "600ms" }}>
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center mr-4 animate-pulse">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1" style={{ color: 'var(--text-color)' }}>Location</h4>
                    <p style={{ color: 'var(--text-color-light)' }}>{contactInfo.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 animate-fade-in-right opacity-0" style={{ animationDelay: "700ms" }}>
                <h4 className="text-lg font-medium mb-3" style={{ color: 'var(--text-color)' }}>Social Profiles</h4>
                <div className="flex space-x-4">
                  {socials.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      className="h-10 w-10 rounded-full flex items-center justify-center hover:text-white transition duration-300"
                      style={{ 
                        backgroundColor: 'var(--input-bg)',
                        color: 'var(--primary)',
                        border: '1px solid var(--card-border)',
                        animationDelay: `${750 + (index * 50)}ms`
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="custom-card shadow-lg overflow-hidden h-64 animate-fade-in-right opacity-0 relative group" 
              style={{ 
                animationDelay: "800ms",
                border: '1px solid var(--card-border)',
                backgroundColor: 'var(--card-bg)',
                backgroundImage: 'radial-gradient(circle at 50% 50%, var(--primary) 0%, transparent 50%)',
                backgroundSize: '200% 200%',
                backgroundPosition: '100% 100%',
                transition: 'all 0.5s ease-in-out'
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6 transform transition-transform duration-500 group-hover:scale-105">
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-float" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Let's Build Together
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                 Building innovative and scalable solutions—let's connect!


                </p>
                <div className="flex space-x-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span>
                  <span className="h-2 w-2 rounded-full bg-secondary animate-ping" style={{ animationDelay: "0.2s" }}></span>
                  <span className="h-2 w-2 rounded-full bg-primary animate-ping" style={{ animationDelay: "0.4s" }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
