import { Logo } from "@/components/Icons/Logo";
import { HeaderLink } from "@/components/HeaderLink";
import { theme } from "@/lib/theme";
import { links } from "@/lib/data";

export function Header() {
  return (
    <header className="container relative z-10 mx-auto flex h-20 w-full items-center justify-between p-4 text-jsconf-yellow">
      <a href="/">
        <Logo color={theme?.colors?.jsconfYellow} size="36" />
      </a>
      <div className="flex items-center gap-6">
        {links.map((link) => <HeaderLink key={link.id} link={link} />)}
      </div>
    </header>
  );
}
