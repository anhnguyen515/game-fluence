import { Form, Button } from "react-bootstrap";
import styles from "./LoginForm.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user_name")) {
      router.push("/");
    }
  }, []);

  function login() {
    console.log(username, password);
  }

  return (
    <div className={styles.container}>
      <h2>Đăng nhập</h2>
      <Form className={styles.login_form}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Control
            type="text"
            onChange={(e) => setUsername(e.target.vaue)}
            placeholder="Tên đăng nhập"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            onChange={(e) => setPassword(e.target.vaue)}
            placeholder="Mật khẩu"
          />
        </Form.Group>
        <Button variant="danger" onClick={login}>
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
}
