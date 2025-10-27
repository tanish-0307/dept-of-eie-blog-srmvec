import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideNav from "@/components/SideNav";
import BlogCard from "@/components/BlogCard";
import { BookOpen } from "lucide-react";
import { getBlogPosts, BlogPost } from "@/utils/storage";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setBlogPosts(getBlogPosts());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <SideNav />
      
      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="h-8 w-8 text-accent" />
              <h1 className="font-serif text-4xl font-bold text-foreground">
                Blog & Articles
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Insights, research, and updates from the Department of Electronics & Instrumentation Engineering
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
              <p className="text-muted-foreground text-lg mb-4">
                No blog posts yet.
              </p>
              <p className="text-muted-foreground">
                This section will showcase research papers, technical articles, student projects, and departmental updates.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
