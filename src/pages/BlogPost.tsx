import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { toast } from "sonner";
import heroBanner from "@/assets/hero-banner.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BlogPost = () => {
  const { id } = useParams();

  // Sample gallery images - in real implementation, these would come from the blog post data
  const galleryImages = [
    heroBanner,
    heroBanner,
    heroBanner,
  ];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full">
                  Research
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                Advances in Process Control Systems
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Dr. Rajesh Kumar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>March 15, 2024</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-[var(--shadow-elegant)]">
              <img 
                src={heroBanner}
                alt="Process Control Systems"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Image Gallery Carousel */}
            {galleryImages.length > 0 && (
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Image Gallery</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    {galleryImages.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                          <img
                            src={image}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-muted-foreground mb-6">
                Process control systems are the backbone of modern industrial automation, ensuring 
                efficiency, safety, and quality in manufacturing operations. This article explores 
                the latest technological advances shaping the future of process control.
              </p>

              <h2 className="font-serif text-3xl font-bold text-primary mt-8 mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The field of process control has undergone significant transformation with the advent 
                of digital technologies, artificial intelligence, and the Internet of Things. Modern 
                control systems are more intelligent, adaptive, and interconnected than ever before.
              </p>

              <h2 className="font-serif text-3xl font-bold text-primary mt-8 mb-4">
                Key Developments
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Recent advancements include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                <li>Advanced PID tuning algorithms using machine learning</li>
                <li>Model Predictive Control (MPC) for complex multivariable systems</li>
                <li>Integration of AI for predictive maintenance and anomaly detection</li>
                <li>Cloud-based SCADA systems for remote monitoring and control</li>
                <li>Digital twin technology for process optimization</li>
              </ul>

              <h2 className="font-serif text-3xl font-bold text-primary mt-8 mb-4">
                Industry 4.0 Integration
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The convergence of operational technology (OT) and information technology (IT) is 
                enabling unprecedented levels of automation and data-driven decision making. Smart 
                sensors, edge computing, and real-time analytics are transforming how process control 
                systems operate in the era of Industry 4.0.
              </p>

              <h2 className="font-serif text-3xl font-bold text-primary mt-8 mb-4">
                Future Outlook
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As we look ahead, process control systems will become increasingly autonomous, 
                self-optimizing, and integrated with enterprise-level systems. The role of 
                instrumentation engineers will evolve to focus more on system design, data analysis, 
                and strategic decision-making.
              </p>

              <div className="bg-muted/50 border-l-4 border-accent p-6 rounded-r-lg mt-8">
                <p className="text-muted-foreground italic">
                  "The future of process control lies not just in automation, but in intelligent 
                  systems that can learn, adapt, and optimize themselves in real-time."
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Dr. Rajesh Kumar</p>
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-card rounded-xl border shadow-[var(--shadow-card)]">
              <h3 className="font-serif font-bold text-xl mb-3">About the Author</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Rajesh Kumar is a Professor in the Department of Electronics and Instrumentation 
                Engineering at SRM Valliammai Engineering College. He specializes in process control, 
                automation systems, and industrial IoT applications.
              </p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
