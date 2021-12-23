import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const router = useRouter();
  const [stateValue, setStateValue] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setStateValue(e.target.value);
  }

  function handleSearch() {
    if (stateValue) {
      router.push({
        pathname: "/search",
        query: { search: stateValue },
      });
      setStateValue("");
    }
  }

  return (
    <>
      <Modal show={props.open} onHide={props.close}>
        <Modal.Body className={styles.modal_body}>
          <Form className={styles.form}>
            <Form.Control
              value={stateValue}
              onChange={handleChange}
              type="text"
              placeholder="Tìm kiếm game..."
            />
            <Button
              variant="danger"
              onClick={() => {
                handleSearch();
              }}
              className={styles.form_btn}
            >
              <BsSearch />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
