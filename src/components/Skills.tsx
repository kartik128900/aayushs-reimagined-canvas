
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const programmingSkills = [
    { name: "JavaScript", level: 85 },
    { name: "Java", level: 80 },
    { name: "C", level: 75 }
  ];
  
  const webSkills = [
    { name: "CSS", level: 85 },
    { name: "HTML5", level: 90 },
    { name: "Git, Github", level: 80 }
  ];
  
  const databaseSkills = [
    { name: "MySQL", level: 80 },
    { name: "MariaDB", level: 75 },
    { name: "PL/SQL", level: 70 },
    { name: "NoSQL", level: 65 }
  ];
  
  const toolsSkills = [
    { name: "IntelliJ IDEA", level: 85 },
    { name: "Visual Studio", level: 80 },
    { name: "Power BI", level: 75 },
    { name: "Tableau", level: 70 }
  ];
  
  const SkillCategory = ({ title, skills }) => (
    <div>
      <h3 className="text-lg font-bold text-navy mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-700">{skill.name}</span>
              <span className="text-blue-600">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2 bg-gray-200" indicatorClassName="bg-blue-600" />
          </div>
        ))}
      </div>
    </div>
  );
  
  return (
    <section id="skills" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card">
            <CardContent className="p-6">
              <SkillCategory title="Programming Languages" skills={programmingSkills} />
            </CardContent>
          </Card>
          
          <Card className="card">
            <CardContent className="p-6">
              <SkillCategory title="Web Development" skills={webSkills} />
            </CardContent>
          </Card>
          
          <Card className="card">
            <CardContent className="p-6">
              <SkillCategory title="Database Technologies" skills={databaseSkills} />
            </CardContent>
          </Card>
          
          <Card className="card">
            <CardContent className="p-6">
              <SkillCategory title="Software Development Tools" skills={toolsSkills} />
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold text-navy mb-6">Certifications</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card">
              <CardContent className="p-6">
                <h4 className="font-bold text-navy mb-2">Amazon Aurora MySQL and Amazon RDS MySQL</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Fully managed relational database service by AWS, designed for high performance, availability, and reliability.
                  Amazon Aurora MySQL offers up to five times the throughput of standard MySQL with features like multi-region
                  replication and serverless options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card">
              <CardContent className="p-6">
                <h4 className="font-bold text-navy mb-2">Hack With Mountainia 5.0</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Achieved certification for active participation in Hack With Mountainia 5.0, a 30-hour hybrid hackathon, a premier
                  hackathon fostering innovation and collaboration among tech enthusiasts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card">
              <CardContent className="p-6">
                <h4 className="font-bold text-navy mb-2">Data Visualization using PowerBI and Tableau</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Certified in Power BI and Tableau. Showcasing proficiency in creating interactive dashboards and reports. 
                  Enabling data-driven decision making and delivering visually compelling analytics solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
