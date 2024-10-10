import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="relative text-lg font-semibold cursor-pointer flex items-center gap-2"
    >
      <img src="/images/logo.png" alt="logo" className="w-8 h-8 object-contain" />
      <p className="flex items-center gap-1 font-bold text-2xl">
        <span className="text-primary">V</span>
        <span className="text-primary">I</span>
        <span className="text-primary">N</span>
        <span>S</span>
        <span>U</span>
        <span>M</span>
      </p>
    </Link>
  );
};

export default Logo;
