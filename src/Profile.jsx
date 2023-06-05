import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
  return (
    <Layout>
      <VStack as={"form"} bg="gray.400" py="140px" minH={"100vh"} w="full" px={4} spacing={6} justifyContent={"center"}>
        <VStack spacing={4}>
          <Avatar
            size="2xl"
            bg="white"
            src="https://images.unsplash.com/photo-1520552159191-e28a1d9f0d7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVCJUIyJThDJUVDJTgzJTg4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            name="새 벌"
          />
          <Text fontSize="xl" fontWeight={600}>
            벌새
          </Text>
          <Text fontSize={14}>트위터가 되기를 꿈꾸는 벌새</Text>
        </VStack>
        <HStack w="80%" spacing={4}>
          <Box border="1px" rounded="xl" px={"20px"} py={"1"} w="120px" align={"center"} color={"blue"}>
            Contact
          </Box>
          <Box border="1px" rounded="xl" px={"20px"} py={"1"} w="120px" align={"center"} color={"blue"}>
            Follow
          </Box>
        </HStack>
      </VStack>
    </Layout>
  );
}
