import Logo from "@/app/_components/Logo";
import DynamicNav from "./DynamicNav";

function Header() {
  return (
    <header className="border-b border-primary-900 lg:px-8 lg:py-5 px-4 py-2 ">
      <div className="flex justify-between items-center lg:max-w-7xl  lg:mx-auto transition-all overflow-hidden">
        <Logo />
        <DynamicNav />
      </div>
    </header>
  );
}

export default Header;
