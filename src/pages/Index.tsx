import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import SideNav from "@/components/SideNav";
import GallerySectionCard from "@/components/GallerySectionCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles, Award, Users, Microscope } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import collegeBuilding from "@/assets/college-building.jpg";
import { getBlogPosts, getGallerySections, addImageToSection, removeImageFromSection, updateSectionName, GallerySection } from "@/utils/storage";
import type { BlogPost } from "@/utils/storage";

const Index = () => {
  const location = useLocation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [gallerySections, setGallerySections] = useState<GallerySection[]>([]);

  useEffect(() => {
    // Refresh blog posts and gallery whenever the route changes
    setBlogPosts(getBlogPosts());
    setGallerySections(getGallerySections());
  }, [location]);

  const handleImageAdd = (sectionId: string, image: { src: string; alt: string; caption: string }) => {
    addImageToSection(sectionId, image);
    setGallerySections(getGallerySections());
  };

  const handleImageRemove = (sectionId: string, imageIndex: number) => {
    removeImageFromSection(sectionId, imageIndex);
    setGallerySections(getGallerySections());
  };

  const handleNameEdit = (sectionId: string, newName: string) => {
    updateSectionName(sectionId, newName);
    setGallerySections(getGallerySections());
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <SideNav />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-90" />
        <img 
          src={heroBanner} 
          alt="EIE Department Hero"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="text-accent font-semibold text-lg">Welcome to</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in drop-shadow-lg">
              Department of Electronics & Instrumentation Engineering
            </h1>
            <p className="text-xl text-foreground/90 mb-8 leading-relaxed animate-fade-in font-medium">
              SRM Valliammai Engineering College
            </p>
            <p className="text-base text-foreground/75 mb-8 leading-relaxed animate-fade-in max-w-2xl">
              Explore insights, research, and innovations in measurement, control systems, process instrumentation, and industrial automation.
            </p>
            <Button size="lg" variant="secondary" className="shadow-lg animate-fade-in">
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Insights & Research
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Stay updated with cutting-edge research, innovations, and technological developments from the Department of Electronics & Instrumentation Engineering
            </p>
          </div>
          
          {blogPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="bg-muted/30 rounded-xl p-12 text-center">
              <p className="text-muted-foreground text-lg">
                No blog posts yet. Create your first post using the Write Post button in the navigation.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About the College Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              About SRM Valliammai Engineering College
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SRM VALLIAMMAI ENGINEERING COLLEGE, a Division of SRM Group of Educational Institutions for privileged Learning, is functioning under the auspices of Valliammai Educational Society (which provides quality education in the various fields for more than 3 decades) with the noble vision of, "Educate to excel in social Transformation" since 09.09.1999.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  UGC, New Delhi & Anna University, Chennai have granted Autonomous status. Approved by AICTE, New Delhi and affiliated to Anna University, Chennai, Tamil Nadu. The College offering 2 programmes namely Engineering & Technology and Management. In this 9 Under Graduate courses and 7 Post Graduate courses are offered by SRMVEC.
                </p>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 bg-background p-3 rounded-lg border">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">UGC Granted Autonomous Status from AY 2019-20</span>
                  </div>
                  <div className="flex items-start gap-3 bg-background p-3 rounded-lg border">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">All courses are Permanently Affiliated by Anna University, Chennai</span>
                  </div>
                  <div className="flex items-start gap-3 bg-background p-3 rounded-lg border">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">Department of CIVIL, CSE, ECE, EEE, EIE, MECH & IT are Accredited by NBA, New Delhi</span>
                  </div>
                  <div className="flex items-start gap-3 bg-background p-3 rounded-lg border">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">Accredited by NAAC with highest "A" Grade</span>
                  </div>
                  <div className="flex items-start gap-3 bg-background p-3 rounded-lg border">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm text-foreground">2(f) & 12(B) Status by UGC, New Delhi</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src={collegeBuilding} 
                alt="SRM Valliammai Engineering College Building" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Campus Gallery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our state-of-the-art facilities, vibrant campus life, and memorable moments through these galleries
            </p>
          </div>
          
          <div className="space-y-8">
            {gallerySections.map((section) => (
              <GallerySectionCard
                key={section.id}
                sectionId={section.id}
                sectionName={section.name}
                images={section.images}
                onImageAdd={handleImageAdd}
                onImageRemove={handleImageRemove}
                onNameEdit={handleNameEdit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About the Department Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              About the Department
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Excellence in Electronics & Instrumentation Engineering Education
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Department of Electronics and Instrumentation Engineering has been functioning since 2002, with a commitment to imparting quality education to undergraduate and postgraduate students in the field of Electronics and Instrumentation Engineering. The curriculum is designed in accordance with Anna University regulations and is periodically updated by the Board of Studies to keep pace with technological advancements.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                The department is supported by a team of highly qualified and experienced faculty members who are actively engaged in both teaching and research across various domains of electronics and instrumentation. In addition to academic excellence, the faculty members have made significant contributions to the institution's upgradation activities, including accreditations and quality initiatives such as NBA, NAAC, and ISO.
              </p>

              <div className="bg-background p-6 rounded-lg border mb-6">
                <h3 className="font-serif font-bold text-xl mb-4 text-foreground">Accreditations & Recognition</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Permanent Affiliation Status from Anna University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>NBA Accreditation (2015-2021)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Recognized as Research Centre by Anna University, Chennai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Teaching Awards in Engineering by Education Matters & Staffordshire University, UK</span>
                  </li>
                </ul>
              </div>

              <h3 className="font-serif font-bold text-xl mb-4 text-foreground">Well-Equipped Laboratories</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-background p-4 rounded-lg border">
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Electronic Circuits and Devices Lab</li>
                    <li>• Industrial Instrumentation Lab</li>
                    <li>• Measurements and Instrumentation Lab</li>
                    <li>• Virtual Instrumentation Lab</li>
                  </ul>
                </div>
                <div className="bg-background p-4 rounded-lg border">
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Process Control Lab</li>
                    <li>• Transducer Lab</li>
                    <li>• Industrial Automation Lab</li>
                    <li>• Instrumentation System Design Lab</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-serif font-bold text-xl mb-4 text-foreground">Programmes Offered</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-background p-6 rounded-lg border">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Undergraduate</h4>
                  <p className="text-muted-foreground">B.E – Electronics and Instrumentation Engineering (EIE)</p>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Postgraduate</h4>
                  <p className="text-muted-foreground">M.E – Control and Instrumentation Engineering (C&I)</p>
                </div>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border border-accent/20 mb-6">
                <h3 className="font-serif font-bold text-xl mb-4 text-foreground">Awards & Achievements</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>🏆 Best Department Award for highest pass percentage (2007-08 & 2015-16)</li>
                  <li>🏆 Highest placement rate in the college</li>
                  <li>🏆 Nearly 90% placement in leading companies (TCS, Infosys, Accenture, HCL, L&T, IGATE, Mahindra Satyam)</li>
                </ul>
              </div>

              <h3 className="font-serif font-bold text-xl mb-4 text-foreground">Highlights of the Department</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-background p-6 rounded-lg border">
                  <Microscope className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Advanced Research Facilities</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Robotics Laboratory (Centre of Excellence)</li>
                    <li>• DST-FIST Sponsored Calibration Laboratory</li>
                    <li>• AICTE-MODROBS Fieldbus & DCS Workstation (₹18,82,000)</li>
                  </ul>
                </div>
                <div className="bg-background p-6 rounded-lg border">
                  <Users className="h-8 w-8 text-accent mb-3" />
                  <h4 className="font-semibold text-lg mb-2 text-foreground">Faculty Excellence</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• 13 Teaching Faculty Members</li>
                    <li>• 8 Ph.D. Holders</li>
                    <li>• 5 Pursuing Ph.D.</li>
                    <li>• 3 Professors, 1 Associate Professor, 10 Assistant Professors</li>
                  </ul>
                </div>
              </div>

              <h3 className="font-serif font-bold text-xl mb-4 text-foreground">Student Development Initiatives</h3>
              <div className="bg-background p-6 rounded-lg border mb-6">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Weekly Placement Training and Tests to enhance employability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Weekly Internal Seminars conducted by faculty members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Organization of National Symposia, Seminars, Workshops, and Special Lectures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Industrial Visits arranged every semester for practical industry exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>Mentoring system with 1:15 faculty-student ratio for personalized guidance</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                The main objective of the institution and the department is to provide quality technical education and nurture skilled, responsible, and professional graduates. The first-year curriculum builds a strong foundation in basic engineering and hands-on skills. As students progress, they gain specialized knowledge in Electronics and Instrumentation Engineering. Classroom learning is enriched with practical lab work, projects, and technical training. In addition to technical knowledge, students are also taught universal values and professional ethics.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The department maintains strong ties with industry to ensure effective placement and career growth for students. It has earned a good reputation through its academic excellence, successful placements, and active participation in symposia, workshops, and conferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Index;
