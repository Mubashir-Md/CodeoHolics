import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Moon, Sun } from "lucide-react"; // using lucide-react for icons
import LogoImage from "../assets/codeoholics.jpg";
import { ThemeContext } from "../contexts/ThemeContextProvider";

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const navigate = useNavigate();

  const tabs = [
    "Home",
    "Events",
  ];
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = (tab) => {
    if (tab === "Home") navigate("/");
    else navigate(`/${tab.toLowerCase()}`);
    setActiveTab(tab);
  };
  console.log(activeTab);
  return (
    <NavbarContainer>
      <Logo onClick={() => navigate("/")}>
        <img src={LogoImage} alt="Logo" />
      </Logo>
      <RightSection isDarkMode={isDarkMode}>
        <Menu isOpen={isMenuOpen}>
          {tabs.map((tab) => (
            <MenuItem key={tab} onClick={() => handleClick(tab)}>
              {tab}
            </MenuItem>
          ))}
        <ToggleButton onClick={toggleDarkMode}>
          {isDarkMode ? <SunIcon color="#fff" /> : <MoonIcon color="#000" />}
        </ToggleButton>
        </Menu>
      </RightSection>
    </NavbarContainer>
  );
};

export default NavBar;

const NavbarContainer = styled.nav`
  background-color: transparent;
  padding: 10px 20px;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 5px;
  display: flex;
  align-items: center;
  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.navColor || "#000"};
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0 0 0;
  padding: 10px;
`;

const MenuItem = styled.li`
  margin: 15px;
  padding: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  @media (max-width: 700px) {
    margin: 10px 0;
    width: 100%;
  }
`;


const SunIcon = styled(Sun)`
  width: 24px;
  height: 24px;
`;

const MoonIcon = styled(Moon)`
  width: 24px;
  height: 24px;
`;
