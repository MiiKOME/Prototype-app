import Link from 'next/link';
import { Flex, Stack, FormControl, FormLabel, Input, Button, Box, useColorModeValue } from "@chakra-ui/react";

export default function ResetPasswordForm() {
  return (
    <Flex
      minH={"20vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <FormControl id="email">
          <FormLabel>用户名</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>

        <FormControl id="password">
          <FormLabel>密码</FormLabel>
          <Input type="password" />
        </FormControl>

        <Stack spacing={6}>
          <Link href="/main" passHref>
            <Box as="a" width="100%">
              <Button
                width="100%"
                bg="teal"
                color="white"
                _hover={{ bg: "teal.500" }}
              >
                登录
              </Button>
            </Box>
          </Link>
        </Stack>
      </Stack>
    </Flex>
  );
}
