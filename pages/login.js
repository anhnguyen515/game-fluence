import React from "react";
import Head from "next/head";

import LoginForm from "/components/login/LoginForm";
import { useState } from "react";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Đăng nhập</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <LoginForm />
    </>
  );
}
