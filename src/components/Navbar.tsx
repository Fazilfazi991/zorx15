import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  label: string;
  href?: string;
  isRoute?: boolean;
  children?: NavItem[];
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About Us", href: "/about", isRoute: true },
  {
    label: "Services",
    children: [
      { label: "Web Dev", href: "/web-development", isRoute: true },
      { label: "SEO", href: "/services/seo", isRoute: true },
      { label: "Social Media", href: "/services/social-media", isRoute: true },
      { label: "Google Ads", href: "/services/google-ads", isRoute: true },
      { label: "Performance", href: "/services/performance-marketing", isRoute: true },
      { label: "Video", href: "/services/video-production", isRoute: true },
      { label: "AI", href: "/services/ai-automation", isRoute: true },
    ]
  },
  { label: "Blogs", href: "/blogs", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="ZORX Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.children ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-emerald-500 font-medium transition-colors duration-200 outline-none">
                    {link.label} <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.label} asChild>
                        <Link to={child.href || "#"} className="w-full cursor-pointer">
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href || "#"}
                    className="text-foreground hover:text-emerald-500 font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-foreground hover:text-emerald-500 font-medium transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                )
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border py-4 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.label} className="px-4">
                  {link.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(link.label)}
                        className="flex items-center justify-between w-full text-foreground hover:text-emerald-500 font-medium transition-colors duration-200 py-2"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === link.label && (
                        <div className="pl-4 flex flex-col gap-2 mt-2 border-l-2 border-primary/20">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href || "#"}
                              className="text-foreground/80 hover:text-emerald-500 py-2 block transition-colors duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    link.isRoute ? (
                      <Link
                        to={link.href || "#"}
                        className="text-foreground hover:text-emerald-500 font-medium transition-colors duration-200 py-2 block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-foreground hover:text-emerald-500 font-medium transition-colors duration-200 py-2 block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              ))}
              <div className="px-4 pt-4 border-t border-border">
                <Button variant="hero" size="default" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
