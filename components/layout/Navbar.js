import Image from "next/image";
import HeaderStyles from "./Navbar.module.css";
import Logo from "../../public/Group1.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { FaUserAlt } from 'react-icons/fa';

export default function NavBar() {
  return (
    <>
      <div className="shadow-lg  h-22 bg-white z-20 relative ">
        <Navbar className={HeaderStyles.Navbar} collapseOnSelect expand="sm">
          {/* <Container className={HeaderStyles.Header}> */}
          <Link href="/">
            <Navbar.Brand href="#home" className={HeaderStyles.brandd}>
              <Image
                src="/logo.svg"
                alt="Wakanda business Logo"
                width={272}
                height={56}
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={HeaderStyles.flexend}
          >
            <Nav className={HeaderStyles.innernavdiv}>
              <Nav.Link
                href="#Features"
                className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink} ${HeaderStyles.navadjust}`}
              >
                Features
                {/* <hr className={HeaderStyles.active}></hr> */}
              </Nav.Link>
              {/* <Nav.Link
                eventKey={2}
                href="#memes"
                className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink} ${HeaderStyles.navadjust}`}
              >
                Our Offers
              </Nav.Link> */}
              <Nav.Link
                href="#PricingComponent"
                className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink}`}
              >
                Pricing
              </Nav.Link>
              <Nav.Link
                href="FAQs"
                className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink}`}
              >
                FAQs
              </Nav.Link>
              <Nav.Link
                href="#Contacts"
                className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink}`}
              >
                Contacts
              </Nav.Link>
            </Nav>
            <Nav className={HeaderStyles.endnavdiv}>
              <Button
                className={`${HeaderStyles.login} ${HeaderStyles.marginsides} ${HeaderStyles.buttonresize} `}
              >
                LOG IN
              </Button>
              <Button
                className={`${HeaderStyles.signup} ${HeaderStyles.marginsides} ${HeaderStyles.buttonresize}`}
                href="/signin"
              >
                GET STARTED
              </Button>
            <Button    href="/Profile">
            <FaUserAlt 
              className="opacity-50 cursor-pointer hover:opacity-100"
             
              size={40}
            />
            </Button>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    </>
  );
}
