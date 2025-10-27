import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getBlogPostById, BlogPost as BlogPostType } from "@/utils/storage";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    if (id) {
      const blogPost = getBlogPostById(id);
      setPost(blogPost || null);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
            <Button asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
                  {post.category}
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </header>

            {/* Featured Image */}
            {post.image && (
              <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-[var(--shadow-elegant)]">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Image Gallery Carousel */}
            {post.galleryImages && post.galleryImages.length > 0 && (
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">Image Gallery</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    {post.galleryImages.map((image, index) => (
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
              <div className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-card rounded-xl border shadow-[var(--shadow-card)]">
              <h3 className="font-serif font-bold text-xl mb-3">About the Author</h3>
              <p className="text-muted-foreground leading-relaxed">
                {post.author} is a member of the Department of Electronics and Instrumentation 
                Engineering at SRM Valliammai Engineering College.
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
