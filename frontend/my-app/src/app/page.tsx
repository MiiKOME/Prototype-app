// app/page.tsx
"use client";

import Head from "./components/head";
import Warning from "./components/warning";
import Login from "./components/login";
import { Divider } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Head />
      <Divider />
      <Login />
      <Warning />
    </>
  );
}
