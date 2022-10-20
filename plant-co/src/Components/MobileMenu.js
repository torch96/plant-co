import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function MobileMenu() {
  const navigate = useNavigate();

  return (
    <div className="nav-item mobile-menu">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem
            onClick={() => {
              navigate("/explore");
            }}
          >
            Explore Species
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/about");
            }}
          >
            About Us
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default MobileMenu;
