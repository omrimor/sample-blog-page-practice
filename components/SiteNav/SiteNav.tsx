import { Logo } from "./Logo";
import { Icons } from "../icons";

type NavItem = {
  label: string;
  to: string;
  asButton?: boolean;
};

const navItems: NavItem[] = [
  { label: "product", to: "/products" },
  { label: "use cases", to: "/use-cases" },
  { label: "resources", to: "/resources" },
  { label: "company", to: "/company" },
  {
    label: "sign up for free",
    to: "/login",
    asButton: true,
  },
];

/**
 * Global site navigation. This component is used on every page.
 */
export const SiteNav: React.FC = () => {
  return (
    <div className="bg-white md:px-6 mb-24 rounded-3xl h-16 md:h-20 flex justify-between sm:container sm:mx-auto max-w-md mx-auto xl:max-w-6xl px-4">
      <a href="/" className="flex items-center h-16 md:h-20">
        <Logo />
      </a>
      <Icons.Menu className="w-8 block md:hidden h-16 md:h-20" />
      <nav className="h-16 md:h-20 hidden md:flex justify-between items-center gap-6">
        {navItems.map((item) => (
          <a
            key={item.label.replace(" ", "-")}
            className={`capitalize ${
              item.asButton
                ? "bg-brandPrimary-200 text-white py-3 px-4 rounded-2xl font-medium"
                : "text-slate-800"
            }`}
            href={item.to}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
