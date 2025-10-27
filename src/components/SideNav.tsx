import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Award, PenSquare } from "lucide-react";

const SideNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="fixed left-4 bottom-4 z-50 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 border rounded-lg shadow-lg p-2">
      <div className="flex flex-col gap-2">
        <Link
          to="/"
          className={`p-3 rounded-lg transition-all flex items-center justify-center group ${
            isActive("/")
              ? "bg-accent text-accent-foreground shadow-sm"
              : "hover:bg-muted text-muted-foreground hover:text-foreground"
          }`}
          title="Home"
        >
          <Home className="h-5 w-5" />
        </Link>
        
        <Link
          to="/blog"
          className={`p-3 rounded-lg transition-all flex items-center justify-center group ${
            isActive("/blog")
              ? "bg-accent text-accent-foreground shadow-sm"
              : "hover:bg-muted text-muted-foreground hover:text-foreground"
          }`}
          title="Blog"
        >
          <BookOpen className="h-5 w-5" />
        </Link>
        
        <Link
          to="/achievements"
          className={`p-3 rounded-lg transition-all flex items-center justify-center group ${
            isActive("/achievements")
              ? "bg-accent text-accent-foreground shadow-sm"
              : "hover:bg-muted text-muted-foreground hover:text-foreground"
          }`}
          title="Achievements"
        >
          <Award className="h-5 w-5" />
        </Link>
        
        <Link
          to="/new-post"
          className={`p-3 rounded-lg transition-all flex items-center justify-center group ${
            isActive("/new-post")
              ? "bg-accent text-accent-foreground shadow-sm"
              : "hover:bg-muted text-muted-foreground hover:text-foreground"
          }`}
          title="Write Post"
        >
          <PenSquare className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
