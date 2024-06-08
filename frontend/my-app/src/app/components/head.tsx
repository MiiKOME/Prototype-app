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
} from "@chakra-ui/react";

export default function Head() {
    return(
        <Container maxW={"4xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 20 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            聊天机器人
            <br />
            <Text as={"span"} color={"teal"}>
              原型ver.001
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            "生乃一条无尽危路，唯有死在尽头停驻。"----萨维奈岛童谣
          </Text>
          
        </Stack>
      </Container>
    )
}
