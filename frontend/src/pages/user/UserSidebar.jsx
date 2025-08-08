import { Link } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdOutlineAddBox } from "react-icons/md";
import { AiFillFileExcel } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";

const UserSidebar = () => {
  return (
    <div className="bg-secondary text-white p-4" style={{ width: "250px", minHeight: "100vh" }}>
      <nav>
        <ul className="nav flex-column gap-3">

          <li className="nav-item">
            <Link to="/user/userhome" className="btn btn-info w-100 d-flex align-items-center">
              <MdOutlineAddBox className="me-2 fs-4" />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user/request-form" className="btn btn-info w-100 d-flex align-items-center">
              <BiShow className="me-2 fs-4" />
              Make Request
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-excel" className="btn btn-info w-100 d-flex align-items-center">
              <AiFillFileExcel className="me-2 fs-4" />
              Request History
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;
