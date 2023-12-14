import Link from "next/link";
import Image from "next/image";
const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/search.svg", alt: "search" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center-center gap-1">
          <Image
            src="/assets/icons/dataxlogo.png"
            width={100}
            height={100}
            alt="logo"
          />

          <p className="nav-logo">
            Price <span className="text-primary">Wise</span>
          </p>
          <div className="flex items-center gap 5"></div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
