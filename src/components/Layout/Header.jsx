import { useState } from "react";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ onShowCart, cartIsShow }) => {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <header className="header">
      <h1>Trend Mağaza</h1>
      <input onChange={(e) => setSearchTerm(e.target.value)} className="header-search" type="text" placeholder="Ara..." />
      <HeaderCartButton onShowCart={onShowCart} cartIsShow={cartIsShow} />
    </header>
  );
};

export default Header;
