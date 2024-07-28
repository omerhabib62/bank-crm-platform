import LogoDark from "../../assets/images/logos/google.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    (<Link href="/">

      <Image src={LogoDark} alt="logo" style={{ width: '50px', height: 'auto' }} />

    </Link>)
  );
};

export default Logo;
