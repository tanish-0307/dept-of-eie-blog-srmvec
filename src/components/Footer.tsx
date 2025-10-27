import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">SRM Valliammai Engineering College</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-3">
              Department of Electronics & Instrumentation Engineering
            </p>
            <div className="space-y-1 text-sm text-primary-foreground/70">
              <p>✓ Autonomous Institution - UGC Approved</p>
              <p>✓ AICTE Approved</p>
              <p>✓ ISO 9001:2015 Certified</p>
              <p>✓ Anna University Affiliated</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">Contact</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>SRM Nagar, Kattankulathur - 603203, Chennai, Tamil Nadu, India</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p>+91 44 2745 4747</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <p>eie@srmvalliammai.ac.in</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="https://srmvalliammai.ac.in" className="hover:text-accent transition-colors">College Website</a></li>
              <li><a href="https://srmvalliammai.ac.in/be-electronics-and-instrumentation-engineering/" className="hover:text-accent transition-colors">EIE Department</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Publications</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/70 text-sm">
            &copy; {new Date().getFullYear()} SRM Valliammai Engineering College - Department of Electronics & Instrumentation Engineering. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            An Autonomous Institution | AICTE Approved | ISO 9001:2015 Certified
          </p>
          <p className="text-primary-foreground/50 text-xs mt-3 font-medium">
            Website developed by TANISH B.E.EIE (2nd year)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
