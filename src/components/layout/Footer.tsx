import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutionsLinks = [
    { name: "Data Center Solutions", href: "/solutions/data-center" },
    { name: "Cloud Solutions", href: "/solutions/cloud" },
    { name: "Enterprise Data Protection", href: "/solutions/data-protection" },
    { name: "Networking Security", href: "/solutions/networking-security" },
    { name: "EDR / XDR / NDR", href: "/solutions/edr-xdr-ndr" },
  ];

  const technologyLinks = [
    { name: "Identity Management", href: "/technologies/identity-management" },
    { name: "Threat Intelligence", href: "/technologies/threat-intelligence" },
    { name: "Security Operations Centre", href: "/technologies/soc" },
    { name: "Network Operations Center", href: "/technologies/noc" },
    { name: "Hybrid IT Management", href: "/technologies/hybrid-it" },
  ];

  return (
    <>
      {/* Footer CTA Strip */}
      <section className="bg-gradient-to-r from-nutmeg-wood to-primary section-padding">
        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Need zero-downtime migrations?
              </h2>
              <p className="text-lg text-white/90">Let's plan it together.</p>
            </div>
            <Button asChild className="bg-white text-nutmeg-wood hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-mine-shaft text-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img src={logo} alt="Lion Heart Computer System" className="h-12 w-auto" />
              <p className="text-sorrell-brown text-sm leading-relaxed">
                Protect the heart of your business: data, applications, and uptime. 
                Enterprise IT solutions with a UAE-first focus.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sorrell-brown">Dubai, U.A.E</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sorrell-brown">+971 55 558 9672</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sorrell-brown">naim@lionheartuae.com</span>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                {solutionsLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sorrell-brown hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Technologies</h3>
              <ul className="space-y-2">
                {technologyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sorrell-brown hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">Address</h4>
                  <p className="text-sorrell-brown text-sm leading-relaxed">
                    Bank Melli Iran Building, 2nd Floor<br />
                    Office No. 11, Khaled Bin Waleed Street<br />
                    P.O. Box 99927, Dubai, U.A.E
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Business Hours</h4>
                  <p className="text-sorrell-brown text-sm">
                    Sunday–Thursday, 9 AM–6 PM GST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-leather/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-sm">
              <Link to="/about" className="text-sorrell-brown hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sorrell-brown hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/vendors" className="text-sorrell-brown hover:text-primary transition-colors">
                Partners
              </Link>
            </div>
            <p className="text-sorrell-brown text-sm">
              © {currentYear} Lion Heart Computer System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;