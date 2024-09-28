import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="bg-teal-500 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          Migii
        </Link>

        {/*<ul className="flex space-x-5">*/}
        {/*  <li className="flex items-center">*/}
        {/*    <Link to="/practice" className="hover:text-slate-700">*/}
        {/*      <FontAwesomeIcon*/}
        {/*        icon={faHome}*/}
        {/*        className="block sm:hidden text-2xl"*/}
        {/*      />*/}
        {/*      <span className="hidden sm:block">Luyện tập</span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li className="flex items-center">*/}
        {/*    <Link to="/exam" className="hover:text-slate-700">*/}
        {/*      <FontAwesomeIcon*/}
        {/*        icon={faClock}*/}
        {/*        className="block sm:hidden text-2xl"*/}
        {/*      />*/}
        {/*      <span className="hidden sm:block">Thi</span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li className="flex items-center">*/}
        {/*    <Link to="/roadmap" className="hover:text-slate-700">*/}
        {/*      <FontAwesomeIcon*/}
        {/*        icon={faLocationDot}*/}
        {/*        className="block sm:hidden text-2xl"*/}
        {/*      />*/}
        {/*      <span className="hidden sm:block">Lộ trình</span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li className="flex items-center">*/}
        {/*    <Link to="/upgrade" className="hover:text-slate-700">*/}
        {/*      <FontAwesomeIcon*/}
        {/*        icon={faCircleUp}*/}
        {/*        className="block sm:hidden text-2xl"*/}
        {/*      />*/}
        {/*      <span className="hidden sm:block">Nâng cấp</span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*  <li className="flex items-center">*/}
        {/*    <Link to="/setting" className="hover:text-slate-700">*/}
        {/*      <FontAwesomeIcon*/}
        {/*        icon={faGear}*/}
        {/*        className="block sm:hidden text-2xl"*/}
        {/*      />*/}
        {/*      <span className="hidden sm:block">Cài đặt</span>*/}
        {/*    </Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
    </nav>
  );
};

export default Sidebar;
