import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";

const ChatBubble = ({ message, isUser }) => {
  return (
    <Box
      bg={isUser ? "teal" : "gray.300"}
      color={isUser ? "white" : "black"}
      p={3}
      borderRadius="md"
      alignSelf={isUser ? "flex-end" : "flex-start"}
      maxWidth="60%"
      mb={2}
    >
      {message}
    </Box>
  );
};

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {//处理信息发送的函数
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue("");
    }
  };

  return (
    <ChakraProvider>
      <VStack
        spacing={4}
        borderWidth="1px"
        borderRadius="lg"
        p={5}
        maxW="600px"
        h="50vh"
        mx="auto"
        mt={10}
      >
        <Box flex="1" w="100%" overflowY="auto">
          <VStack spacing={3}>
            {messages.map((msg, index) => (
              <ChatBubble key={index} message={msg.text} isUser={msg.isUser} />
            ))}
          </VStack>
        </Box>
        <HStack spacing={3} w="100%">
          <Input
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleSend} color="teal">
            发送
          </Button>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};

export default ChatApp;
