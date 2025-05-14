
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-4">
              I am a <span className="highlight">software engineer</span> with a passion for building innovative software products. My expertise in <span className="highlight">full-stack engineering</span> enables teams to champion end-to-end software development life cycle (SDLC) & deliver compelling business value to stakeholders.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              I bring tremendous success to organizations with my technical expertise, analytical & strategic thinking. Leadership, and innovation-driven problem-solving.
            </p>
            <p className="text-lg text-gray-700">
              Currently based in <span className="highlight">Pune, Maharashtra, India</span>, I'm always looking for new challenges and opportunities to grow professionally.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <h3 className="text-lg font-semibold text-navy">Experience</h3>
                <p className="text-gray-600">Years of professional work</p>
              </CardContent>
            </Card>
            
            <Card className="card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <h3 className="text-lg font-semibold text-navy">Projects</h3>
                <p className="text-gray-600">Completed</p>
              </CardContent>
            </Card>
            
            <Card className="card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <h3 className="text-lg font-semibold text-navy">Technologies</h3>
                <p className="text-gray-600">Worked with</p>
              </CardContent>
            </Card>
            
            <Card className="card">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">BE</div>
                <h3 className="text-lg font-semibold text-navy">Degree</h3>
                <p className="text-gray-600">Computer Science</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
