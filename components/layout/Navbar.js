import Image from "next/image";
import HeaderStyles from "./Navbar.module.css";
import Logo from "../../public/Group1.png";
// import Logo from "../../public/Assets/Group313";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

export default function NavBar() {
  return (
    <>
      <div className="shadow-lg">
        <Navbar className={HeaderStyles.Navbar} collapseOnSelect expand="sm">
          {/* <Container className={HeaderStyles.Header}> */}
          <Navbar.Brand href="#home" className={HeaderStyles.brandd}>
            <Image
              src="/logo.svg"
              alt="Wakanda business Logo"
              width={272}
              height={56}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={HeaderStyles.flexend}
          >
            <Nav className={HeaderStyles.innernavdiv}>
              <Nav.Link
                href="#deets"
                className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink} ${HeaderStyles.navadjust}`}
              >
                About Us
                {/* <hr className={HeaderStyles.active}></hr> */}
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink} ${HeaderStyles.navadjust}`}
              >
                Our Offers
              </Nav.Link>
              <Nav.Link
                href="##"
                className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink}`}
              >
                {" "}
                Pricing
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink}`}
              >
                FAQs
              </Nav.Link>
              <Nav.Link
                href="#"
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
              >
                SIGN UP
              </Button>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    </>
  );
}
