import { Link } from "react-router-dom";
import valliammaiLogo from "@/assets/valliammai-logo.jpg";
import srmLogo from "@/assets/srm-logo.png";

const Navbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left Logo - Valliammai */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={valliammaiLogo} 
              alt="Valliammai Engineering College Logo" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform hover:scale-105"
            />
          </Link>

          {/* Center - College and Department Names */}
          <Link to="/" className="flex-1 text-center px-4">
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-tight">
                SRM VALLIAMMAI ENGINEERING COLLEGE
              </span>
              <span className="text-xs sm:text-sm md:text-base text-muted-foreground mt-1">
                Department of Electronics & Instrumentation Engineering
              </span>
            </div>
          </Link>

          {/* Right Logo - SRM */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={srmLogo} 
              alt="SRM Logo" 
              className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
