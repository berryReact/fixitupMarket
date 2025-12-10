import Logo from "./Logo";

function Header() {
  return (
    <header className="p-4 sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-xl items-center justify-center sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
        <div className="w-32 sm:w-40">
          <Logo />
        </div>
      </div>
    </header>
  );
}

export default Header;
