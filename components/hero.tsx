import Link from "next/link";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-primary font-mono text-sm">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Mounith D.
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground leading-tight text-balance">
            I build full-stack applications.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            I'm a B.Tech IT student at{" "}
            <Link href="https://www.kongu.edu/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Kongu Engineering College
            </Link>
            {" "}specializing in Full Stack Development, Artificial Intelligence, and Cloud Computing. 
            Passionate about solving real-world problems through innovative web applications.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-4">
            <Link
              href="https://github.com/Mounith2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/mounith-dharmarajan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:mounithd7@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 border-2 border-primary rounded-md transform rotate-6" />
            <div className="absolute inset-0 bg-muted rounded-md flex items-center justify-center">
             <img src="/PK_04146.JPG" alt="MD"className="w-60 h-60 opacity-80"/>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
