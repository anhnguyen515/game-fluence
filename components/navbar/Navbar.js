import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "../searchbar/SearchBar";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  function handleClick() {
    if (showModal == false) setShowModal(true);
    else setShowModal(false);
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link href="/">
                    <a>TRANG CHỦ</a>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link href="/games">
                    <a>TẤT CẢ GAME</a>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <NavDropdown title="THỂ LOẠI" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link href="/categories/hanh_dong">
                      <a>HÀNH ĐỘNG</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/categories/ban_sung">
                      <a>BẮN SÚNG</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/categories/phieu_luu">
                      <a>PHIÊU LƯU</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/categories/sinh_ton">
                      <a>SINH TỒN</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/categories/the_thao">
                      <a>THỂ THAO</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/categories/doi_khang">
                      <a>ĐỐI KHÁNG</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/categories/chien_thuat">
                      <a>CHIẾN THUẬT</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/categories/kinh_di">
                      <a>KINH DỊ</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/categories/nhap_vai">
                      <a>NHẬP VAI</a>
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link href="/categories/mo_phong">
                      <a>MÔ PHỎNG</a>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link href="/games/offline">
                    <a>GAME OFFLINE</a>
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link href="/games/online">
                    <a>GAME ONLINE</a>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              {/* <Nav.Item>
                <Nav.Link>
                  <Link href="/login">
                    <a>Đăng nhập</a>
                  </Link>
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link>
                  <BsSearch onClick={handleClick} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SearchBar open={showModal} close={handleClick} />
    </>
  );
}
