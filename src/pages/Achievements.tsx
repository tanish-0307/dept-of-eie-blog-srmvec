import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";
import { Award } from "lucide-react";

const Achievements = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <SideNav />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-accent" />
              <h1 className="font-serif text-4xl font-bold text-foreground">
                Achievements
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Celebrating excellence and success stories from our department
            </p>
          </div>
          
          <div className="bg-muted/30 rounded-xl p-12 text-center">
            <p className="text-muted-foreground text-lg mb-4">
              Achievement details will be added here.
            </p>
            <p className="text-muted-foreground">
              This section will highlight student achievements, faculty recognition, awards, placements, and departmental milestones.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Achievements;
