import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono mb-4">04. What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          I'm currently looking for internship and job opportunities where I can apply my skills 
          in Full Stack Development and AI. Whether you have a question, an opportunity, or just 
          want to connect, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Thottiyam, Trichy</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <span>+91 6383835739</span>
          </div>
        </div>

        <Link
          href="mailto:mounithd7@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors font-mono"
        >
          <Mail className="h-5 w-5" />
          Say Hello
        </Link>
      </div>
    </section>
  );
}
