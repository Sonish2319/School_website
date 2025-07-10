import Notice from "./Notice";

export default function Navbar() {
    return (
        <>
        <Notice />
      <nav className=" text-black fixed top-[88px] left-[0.99px] z-50 w-[1439px] h-[103px] px-[144px] flex items-center justify-between gap-[92px]">
        {/* Left: Logo and Title */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="VVM Logo" className="h-14 w-14" />
          <h1 className="font-[Acumin Pro] font-semibold text-[18px] leading-[22px] uppercase">
            Vibhuti Vidhya Mandir School
          </h1>
        </div>
  
        {/* Right: Navigation Menu */}
        <ul className="h-[70px] pt-4 pr-8 pb-4 pl-5 flex items-center gap-6">
          {['Home', 'About Us', 'Facilities', 'Admissions', 'Funds', 'Contact Us'].map((item) => (
            <li
              key={item}
              className="h-[38px] px-4 py-2 flex items-center justify-center font-[Acumin Pro] font-medium text-[15px] leading-[22px] uppercase cursor-pointer hover:text-gray-300 whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </>
    );
     
  }