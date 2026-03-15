import Image from "next/image";
import { useRouter } from "next/router";

const TopLeftImg = () => {
  const router = useRouter();
  
  if (router.pathname !== "/") return null;

  return (
    <div className="fixed -left-32 -top-32 opacity-30 pointer-events-none select-none">
      <Image
        src="/top-left-img.png"
        alt="left cover bg"
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
