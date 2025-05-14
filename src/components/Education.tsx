
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationItems = [
    {
      institution: "D. Y. Patil Institute of Technology",
      degree: "BE in Computer Science And Engineering",
      period: "2021 - 2025",
      location: "Pune"
    },
    {
      institution: "Sophia Senior Secondary School",
      degree: "HSC in CBSE",
      period: "2020",
      location: "Kota",
      percentage: "75/100"
    },
    {
      institution: "Sophia Senior Secondary School",
      degree: "SSC in CBSE",
      period: "2018",
      location: "Kota",
      percentage: "75/100"
    }
  ];

  return (
    <section id="education" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-8">
          {educationItems.map((edu, index) => (
            <Card key={index} className="card relative">
              <div className="absolute top-6 left-6 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="absolute top-6 left-[18px] h-full w-0.5 bg-blue-200"></div>
              
              <CardContent className="p-6 pl-12">
                <div className="flex flex-wrap justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-navy">{edu.institution}</h3>
                    <p className="text-blue-600">{edu.degree}</p>
                    <p className="text-gray-600 mt-1">{edu.location}</p>
                    {edu.percentage && <p className="text-gray-600">Percentage: {edu.percentage}</p>}
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
