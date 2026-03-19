import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-4 py-4 xl:flex-row xl:justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={30}
              priority
              className="w-[120px] xl:w-[160px]"
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;