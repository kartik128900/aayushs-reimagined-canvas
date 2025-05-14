
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "FreshCart",
      description: "I designed and developed a visually appealing and responsive website for instant food delivery using HTML, CSS, and JavaScript to showcase my proficiency in front-end development. This project demonstrates my ability to create engaging and responsive web interfaces.",
      tools: ["HTML", "CSS", "JavaScript", "SQL", "SpringBoot"],
      githubLink: "https://kartik128900.github.io/FreshCart/"
    },
    {
      title: "MediHelp",
      description: "A web application designed to provide comprehensive healthcare information, including hospital details, blood camp schedules, and registration service. It streamlines access to critical resources, ensuring users can make informed decisions quickly and efficiently.",
      tools: ["HTML", "CSS", "DBMS", "PHP"],
      githubLink: "https://kartik128900.github.io/MediHelp/"
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card h-full overflow-hidden flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    View Project
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
