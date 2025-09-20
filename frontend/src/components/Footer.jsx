// src/components/Footer.jsx
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-white to-yellow-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-green-500" />
              <span className="font-bold text-lg">गो रक्षक Foundation</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Dedicated to rescuing, rehabilitating, and providing sanctuary for cows in need.
              Every life matters.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-meadow transition-colors">
                About Us
              </Link>
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-meadow transition-colors">
                Shop
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-meadow transition-colors">
                Contact
              </Link>
              <Link to="/feedback" className="text-sm text-muted-foreground hover:text-meadow transition-colors">
                Feedback
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>9016412020</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>help@gaurakshakfoundation.org</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>rajkot, Gujrat, India</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Mission</h3>
            <p className="text-sm text-muted-foreground">
              To provide a safe haven for rescued cows and educate the community about
              compassionate animal care.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Gau Rakshak Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
