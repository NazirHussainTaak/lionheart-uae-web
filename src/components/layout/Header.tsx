import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const solutionsLinks = [
    { name: "Data Center Solutions", href: "/solutions/data-center" },
    { name: "Cloud Solutions", href: "/solutions/cloud" },
    { name: "Enterprise Data Protection", href: "/solutions/data-protection" },
    { name: "Converged / Hyperconverged Systems", href: "/solutions/converged-systems" },
    { name: "Storage Solutions", href: "/solutions/storage" },
    { name: "Networking Security", href: "/solutions/networking-security" },
    { name: "Application & Data Migration", href: "/solutions/migration" },
    { name: "Business Continuity & DR Consulting", href: "/solutions/bcdr" },
    { name: "Deployment & Maintenance", href: "/solutions/deployment" },
    { name: "EDR / XDR / NDR", href: "/solutions/edr-xdr-ndr" },
  ];

  const technologyLinks = [
    { name: "Identity Management", href: "/technologies/identity-management" },
    { name: "Threat Intelligence Management", href: "/technologies/threat-intelligence" },
    { name: "Security Operations Centre", href: "/technologies/soc" },
    { name: "Network Operations Center", href: "/technologies/noc" },
    { name: "Hybrid IT Management", href: "/technologies/hybrid-it" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-mine-shaft/95 dark:bg-mine-shaft backdrop-blur supports-[backdrop-filter]:bg-mine-shaft/95">
      <div className="container-width">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Lion Heart Computer System" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                   className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-spring-wood hover:bg-primary/20 hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    isActive("/") ? "bg-accent text-accent-foreground" : ""
                  }`}
                >
                  <Link to="/">{t('nav.home')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                   className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-spring-wood hover:bg-primary/20 hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    isActive("/about") ? "bg-accent text-accent-foreground" : ""
                  }`}
                >
                  <Link to="/about">{t('nav.about')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-spring-wood hover:bg-primary/20 hover:text-primary data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
                  {t('nav.solutions')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-background">
                    {solutionsLinks.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground text-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-spring-wood hover:bg-primary/20 hover:text-primary data-[state=open]:bg-accent data-[state=open]:text-accent-foreground">
                  {t('nav.technologies')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-background">
                    {technologyLinks.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-accent focus:text-accent-foreground text-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                   className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-spring-wood hover:bg-primary/20 hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    isActive("/vendors") ? "bg-accent text-accent-foreground" : ""
                  }`}
                >
                  <Link to="/vendors">{t('nav.vendors')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                   className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors text-spring-wood hover:bg-primary/20 hover:text-primary focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    isActive("/contact") ? "bg-accent text-accent-foreground" : ""
                  }`}
                >
                  <Link to="/contact">{t('nav.contact')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button & Theme/Language Switcher - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Button asChild className="btn-hero">
              <Link to="/contact">{t('nav.consultation')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <div className="flex gap-2 mb-4">
                  <LanguageSwitcher />
                </div>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {t('nav.home')}
                </Link>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {t('nav.about')}
                </Link>

                <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors">
                    {t('nav.solutions')}
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pt-2">
                    {solutionsLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-4"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={techOpen} onOpenChange={setTechOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors">
                    {t('nav.technologies')}
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pt-2">
                    {technologyLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-4"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  to="/vendors"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {t('nav.vendors')}
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {t('nav.contact')}
                </Link>

                <Button asChild className="btn-hero w-full mt-6">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    {t('nav.consultation')}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;