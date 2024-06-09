"use client";

import { Box, Divider, Flex, Spacer } from "@chakra-ui/react";
import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import DrawerExample from "./Drawer";

import {
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

interface Props {
  children: React.ReactNode;
}

const NavLink = ({ children }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Nav(props: { userID?: string }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bgColor = useColorModeValue("gray.100", "gray.900");

  const handleRefreshClick = () => {
    window.location.reload();
  }; //one click refresh

  return (
    <>
      <Box bg={bgColor} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Button onClick={() => {}} bg={bgColor}>
              <Text
                as={"span"}
                color={"teal"}
                fontWeight={1000}
                fontSize={"3xl"}
              >
                原型ver.001
              </Text>
            </Button>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <DrawerExample />

              <Button onClick={toggleColorMode} bg={bgColor}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>没想好放什么</MenuItem>
                  <MenuDivider />
                  <MenuItem>账号设置</MenuItem>
                  <MenuItem>登出</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
