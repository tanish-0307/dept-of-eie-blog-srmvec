import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image?: string;
}

const BlogCard = ({ id, title, excerpt, author, date, category, image }: BlogCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-elegant)] border">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-accent/10 text-accent-foreground text-sm font-medium rounded-full">
            {category}
          </span>
        </div>
        
        <h3 className="font-serif font-bold text-2xl mb-3 text-card-foreground group-hover:text-primary transition-colors">
          <Link to={`/post/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
          </div>
          
          <Button variant="ghost" size="sm" asChild className="group/btn">
            <Link to={`/post/${id}`}>
              Read More 
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
