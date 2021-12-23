import { Form } from "react-bootstrap";
import { useState } from "react";
import styles from "./Filter.module.css";
import router from "next/router";

export default function Filter() {
  const [stateValue, setStateValue] = useState("");

  function handleChange(e) {
    e.target.value ? setStateValue(e.target.value) : setStateValue("");
    router.push({
      pathname: "/games",
      query: { name: stateValue },
    });
  }

  console.log(stateValue);

  return (
    <div className={styles.filter_container}>
      <Form.Label className={styles.label}>Sắp xếp theo:</Form.Label>
      <Form.Select
        value={stateValue}
        onChange={handleChange}
        aria-label="Default select example"
        className={styles.select}
      >
        <option value="name">Tên game</option>
        <option value="release_date">Ngày phát hành</option>
      </Form.Select>
    </div>
  );
}
