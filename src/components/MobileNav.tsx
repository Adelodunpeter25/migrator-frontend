import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, FileText, Mail, Info } from "lucide-react";

const MobileNav = memo(() => {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/docs", icon: FileText, label: "Docs" },
    { path: "/about", icon: Info, label: "About" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/40 pb-safe">
      <div className="flex items-center justify-around px-2 py-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${isActive ? "fill-primary/20" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});

MobileNav.displayName = "MobileNav";

export default MobileNav;
