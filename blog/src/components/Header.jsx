import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const Header = () => {

const { userName } = useContext(UserContext);

  return (
    <div>
      <h1 className="bg-sky-700">MEDIUM</h1>
        <Link to="/" >HOME</Link>
        <Link to="/Write">WRITE</Link>
        <Link to="/Sign in">SIGN IN</Link>
        <p className="ml-5">{userName}</p>
      </div>
  );
};

export default Header;