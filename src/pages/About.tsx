import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[var(--gradient-hero)] py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              About Our Department
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl">
              Department of Electronics & Instrumentation Engineering at SRM Valliammai Engineering College
            </p>
          </div>
        </section>

        {/* Accreditations Section */}
        <section className="py-12 bg-accent/5 border-y">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <div className="flex flex-col items-center">
                <Award className="h-10 w-10 text-accent mb-2" />
                <p className="font-semibold text-foreground">Autonomous Institution</p>
                <p className="text-sm text-muted-foreground">UGC Approved</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-10 w-10 text-accent mb-2" />
                <p className="font-semibold text-foreground">AICTE Approved</p>
                <p className="text-sm text-muted-foreground">New Delhi</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-10 w-10 text-accent mb-2" />
                <p className="font-semibold text-foreground">ISO 9001:2015</p>
                <p className="text-sm text-muted-foreground">Certified</p>
              </div>
              <div className="flex flex-col items-center">
                <Award className="h-10 w-10 text-accent mb-2" />
                <p className="font-semibold text-foreground">Anna University</p>
                <p className="text-sm text-muted-foreground">Affiliated</p>
              </div>
            </div>
          </div>
        </section>

        {/* College Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                SRM Valliammai Engineering College
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p className="leading-relaxed">
                  SRM Valliammai Engineering College, a Division of SRM Group of Educational Institutions, 
                  is functioning under the auspices of Valliammai Educational Society since 1999. The college 
                  has been granted Autonomous status by UGC, New Delhi and Anna University, Chennai. The institution 
                  is approved by AICTE, New Delhi and is ISO 9001:2015 certified.
                </p>
                <p className="leading-relaxed">
                  Located in the educational hub of Kattankulathur, Chennai, the college offers undergraduate 
                  and postgraduate programs in various engineering disciplines with a focus on holistic development, 
                  research excellence, and industry readiness. The institution follows the noble vision of 
                  "Educate to Excel in Social Transformation."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Department Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Department of Electronics & Instrumentation Engineering
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p className="leading-relaxed">
                  The Department of Electronics & Instrumentation Engineering (EIE) offers comprehensive 
                  programs in measurement systems, process control, industrial automation, and instrumentation 
                  technology. Our curriculum is designed to meet the evolving needs of modern industries and 
                  is regularly updated to incorporate latest technological advancements.
                </p>
                <p className="leading-relaxed">
                  Students gain expertise in sensors and transducers, control systems, SCADA, PLC programming, 
                  embedded systems, process instrumentation, and Industrial IoT. Our state-of-the-art laboratories 
                  are equipped with industry-standard equipment and tools, providing hands-on experience that 
                  prepares students for real-world challenges in automation and control industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-12 text-center">
              What Sets Us Apart
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-foreground">Academic Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rigorous curriculum with focus on both theoretical foundations and practical applications
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-foreground">Expert Faculty</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Highly qualified faculty with extensive industry experience and research credentials
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-foreground">Research Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Active research in IoT, automation, smart sensors, AI/ML, and advanced control systems
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-3 text-foreground">Industry Ready</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strong placement record with top recruiters from automation, manufacturing, and IT industries
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-card p-8 rounded-xl shadow-[var(--shadow-card)] border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a globally recognized center of excellence in Electronics & Instrumentation 
                  Engineering education, producing competent professionals who contribute to technological 
                  advancement and societal development through innovation and ethical practices.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-[var(--shadow-card)] border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education through innovative teaching-learning methods, promote research 
                  and development activities, foster strong industry-academia collaboration, and develop 
                  ethical professionals equipped with technical competence and soft skills to meet global challenges 
                  in instrumentation and automation domains.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
