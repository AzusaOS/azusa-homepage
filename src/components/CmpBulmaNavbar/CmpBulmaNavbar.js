import React, { useState } from "react";
import logo from "../../img/Group 66@2x.png";
import { Link } from "react-router-dom";
import { StyledLink } from "../StyledAzusaCmp";

/* BulmaNavbar Component

------------------------Use------------------------------------
List your menu names in the table const ListMenuName
Then list your menu paths in the table const ListMenu Path

Respect the same order in your tables to correctly link names and paths
-----------------------Strucure---------------------------------
1 Navbar (Wrapper)
  1.1 Navbar Brand
    1.1.1 Navbar Logo
    1.1.2 Navbar Burger (appears only on mobile)
  1.2 Navbar Menu
    1.2.1 Navbar Start (Menu placé à gauche/non utilisé)
      1.2.1.1 Navbar Items 
    1.2.2 Navbar End (Menu placé à droite)
      1.2.2.1 Navbar Items
*/

// -------------Component Render -----------------------------------------------------//
function CmpBulmaNavbar() {
  const [isActive, setIsActive] = useState(false);
  let ListMenuName = ["HOME", "PRESENTATION", "NEWS", "CONTACT", "DOWNLOAD"];
  const ListMenuPath = [
    "/home",
    "/presentation",
    "/news",
    "/contact",
    "/download"
  ]; //Respect same order than ListMenuName

  /* --------------------------------------------------------------------------------------
    SetActive method set the "is-active" className to the Navbar Burger and Navbar Menu
    Action :
      - Allow the menu to appear on small devices 
      - Gives a cross (X) appearance to the burger button
  --------------------------------------------------------------------------------------*/
  function setActive() {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  //------------------------Navbar----------------------------------------------------//
  const NavbarWrapper = function({ children }) {
    return (
      <div className="CmpBulmaNavbar">
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main navigation"
        >
          {children}
        </nav>
      </div>
    );
  };

  //------------------------Navbar Brand------------------------------------------------//
  const NavbarBrand = function({ children }) {
    return <div className="navbar-brand">{children}</div>;
  };

  const NavbarLogo = function() {
    return (
      <Link to="/home">
        <img src={logo} alt="" width="250px" height="120px" />
      </Link>
    );
  };

  const NavbarButton = function() {
    return (
      <Link
        role="button"
        className={"navbar-burger burger " + (isActive ? "is-active" : "")} //space important after the last class//
        aria-label="menu"
        aria-expanded="false"
        onClick={() => setActive()}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </Link>
    );
  };

  //------------------------------------------------------------------------------------//

  // --------------- NavBar Menu ------------------------------------------------------//
  const NavbarMenu = function({ children }) {
    return (
      <div
        className={"navbar-menu " + (isActive ? "is-active" : "")} //space important after the last class//
      >
        {children}
      </div>
    );
  };

  const NavbarEnd = function(ListName, ListPath) {
    return (
      <div className="navbar-end">
        {ListMenuName.map((MenuName, i) => (
          <NavbarItem LinkName={ListMenuName[i]} LinkPath={ListMenuPath[i]} />
        ))}
      </div>
    );
  };

  const NavbarItem = function({ LinkName, LinkPath }) {
    return (
      <div className="navbar-item standard">
        <StyledLink to={LinkPath}>{LinkName}</StyledLink>
      </div>
    );
  };

  // ----------------------------------------------------------------------------------//

  return (
    <NavbarWrapper>
      <NavbarBrand>
        <NavbarLogo />
        <NavbarButton />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarEnd ListName={ListMenuName} ListPath={ListMenuPath} />
      </NavbarMenu>
    </NavbarWrapper>
  );
}
export default CmpBulmaNavbar;

// ----------------------------------------------------------------------------------//
