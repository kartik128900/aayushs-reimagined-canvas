
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="section-container">
        <div className="max-w-3xl">
          <div className="mb-6">
            <h2 className="text-lg md:text-xl text-blue-600 font-medium mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
              Kartik Jain
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-600 mt-4">
              Software Engineer
            </h3>
          </div>
          
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl">
            I am a software engineer with a passion for building innovative software products. My expertise in full-stack engineering enables teams to champion end-to-end software development life cycle (SDLC) & deliver compelling business value to stakeholders.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            
            <div className="flex gap-3">
              <a 
                href="https://github.com/kartik128900"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub Profile</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/kartik-jain-b9e219200/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-300 rounded-full hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="p-2 rounded-full bg-white/80 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
