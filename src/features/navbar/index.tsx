import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
interface Props {}

const NavBar: React.FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((e) => !e);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white shadow'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          Axie Infinity
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Axie
                </DropdownToggle>
                <DropdownMenu right>
                  {" "}
                  <DropdownItem>
                    <NavLink to='/axies'>All Axies</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to='/axies/add'>Add Axie</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Scholars
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to='/scholars'>All Scholars</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />{" "}
                  <DropdownItem>
                    <NavLink to='/scholars/add'>Add Scholar</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Teams
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink to='/teams'>Teams</NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink to='/teams/add'>Add Team</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
