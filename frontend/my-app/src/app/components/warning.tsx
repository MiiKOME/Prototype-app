"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

export default function Warning() {
  return (
    <Box textAlign="center" py={20} px={6}>
      <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        测试版本，不代表最终品质
      </Heading>
      <Text color={"gray.500"}>因为写这个看起来很帅所以写了</Text>
    </Box>
  );
}
