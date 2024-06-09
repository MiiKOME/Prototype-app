// app/page.tsx
"use client";

import Head from "../components/head";
import Nav from "../components/NaviBar/navi";
import ChatBubble from '../components/chatBox'
import Warning from'../components/warning'

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Spacer,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";
export default function Page() {
  

  return (
    <>
      <Nav />
      <Head />
      <Divider />
      <ChatBubble />
      <Warning />
    </>
  );
}
