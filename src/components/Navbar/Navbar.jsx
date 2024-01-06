import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <div className="lg:px-28 md:px-12 px-4  flex  font-roboto justify-between border h-24 items-center">
      <div>
        <h3 className=" font-extrabold text-2xl">pti.</h3>
      </div>
      <div className="flex md:gap-2 gap-1 items-center">
        <div className="xl:w-inputWidth md:w-96 sm:w-72 xs:w-64 w-44  h-10 border relative ">
          <input
            className="outline-none w-full h-full px-8 rounded-lg text-sm"
            type="text"
            name=""
            id=""
            placeholder="Search Audiobook"
          />
          <SearchIcon
            className="text-icon absolute top-0 left-1 bottom-0 m-auto"
            style={{ fontSize: "25px" }}
          />
        </div>
        <div>
          <NavMenu />
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer bg-icon">
          <PersonOutlineIcon className="text-white hover:text-slate-300 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
