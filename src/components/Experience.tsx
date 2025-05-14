
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Engineer",
      company: "Prodigy Infotech",
      period: "Dec '23 - Jan '24",
      description: [
        "Develop solutions that directly impact business efficiency with focused on crafting inventive solutions for businesses.",
        "Through their internship program, they offer hands-on learning via live projects and real-world experiences in aiming to develop potential tech skills."
      ]
    },
    {
      title: "Java Developer",
      company: "Techno Hacks",
      period: "May '23 - Jun '23",
      description: [
        "The main goals of Techno Hacks are to provide chances for leadership growth, academic achievement, and student engagement in common interests.",
        "Each level has a different set of tasks and a different level. We provide challenging opportunities and real-world projects through this internship."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card overflow-hidden border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-navy">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 inline-block h-1.5 w-1.5 bg-blue-600 rounded-full"></span>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
