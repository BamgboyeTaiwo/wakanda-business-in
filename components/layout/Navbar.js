import Image from "next/image";
import  HeaderStyles  from "./Navbar.module.css";
import Logo from "../../public/Layer2.png"; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function NavBar() {

  return (
    <>
      <div className={HeaderStyles.Header}>
          <Navbar className={HeaderStyles.Navbar} collapseOnSelect expand="sm"  >
              {/* <Container className={HeaderStyles.Header}> */}
            <Navbar.Brand href="#home">
                <Image className={HeaderStyles.img} src={Logo} alt="Logo" height={40} width={85} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className={HeaderStyles.flexend}>
                <Nav className={HeaderStyles.innernavdiv}>
                    <Nav.Link href="#deets" className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink}`}>About Us</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes" className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink}`}>
                        Our Offers
                    </Nav.Link>
                    <Nav.Link href="www.google.com" className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink}`} > Pricing</Nav.Link>
                    <Nav.Link href="#pricing" className={`${HeaderStyles.marginsides} ${HeaderStyles.navlink}`}>FAQs</Nav.Link>

                </Nav>
                <Nav className={HeaderStyles.endnavdiv}>
                  <Button variant="outline-info" className={`${HeaderStyles.login} ${HeaderStyles.marginsides} ${HeaderStyles.buttonresize} `}>Log IN</Button>
                  <Button className={`${HeaderStyles.signup} ${HeaderStyles.marginsides} ${HeaderStyles.buttonresize}`}>Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
              {/* </Container> */}
          </Navbar>
      </div>
    </>
  );
}
