import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link>
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link href="/games">
                  <a>ALL GAMES</a>
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="PLATFORMS" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href="/platforms/windows">
                    <a>PC (WINDOWS)</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/platforms/browser">
                    <a>BROWSER (WEB)</a>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item>
              <NavDropdown title="GENRES" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href="#">
                    <a>MMO</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>MMORPG</NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/genres/shooter">
                    <a>SHOOTER</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/genres/strategy">
                    <a>STRATEGY</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>MOBA</NavDropdown.Item>
                <NavDropdown.Item>CARD GAMES</NavDropdown.Item>
                <NavDropdown.Item>RACING</NavDropdown.Item>
                <NavDropdown.Item>SPORTS</NavDropdown.Item>
                <NavDropdown.Item>SOCIAL</NavDropdown.Item>
                <NavDropdown.Item>FIGHTING</NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link>Login / Signup</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
