import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import KakaoMap from "./KakaoMap";

export default function Detail() {
  return (
    <Layout canGoBack title="Detail Page">
      <VStack py="110px" bg="gray.400" w="full" spacing={8}>
        <Box>
          <Image src="https://cdn.pixabay.com/photo/2016/11/23/18/27/hummingbird-1854225_640.jpg"></Image>
        </Box>
        <VStack w="full" alignItems="flex-start" px={4} spacing={1}>
          <Text color={"black"} fontSize={20} fontWeight={700}>
            벌새
          </Text>
          <Text color={"black"}>가장 날개짓이 빠른 새</Text>
        </VStack>
        <Box w="95%" h="2px" bg="gray.3 00" />
        <VStack w="full" alignItems="flex-start" px={4} spacing={1}>
          <Text color={"black"} fontSize={20} fontWeight={700}>
            몸길이
          </Text>
          <Text color={"black"}>6.5 ∼ 21.5 cm</Text>
        </VStack>
        <VStack w="full" alignItems="flex-start" px={4} spacing={1}>
          <Text color={"black"} fontSize={20} fontWeight={700}>
            날개짓
          </Text>
          <Text color={"black"}>50 ~ 80 / sec</Text>
        </VStack>
        <VStack w="full" alignItems="flex-start" px={4} spacing={1}>
          <Text color={"black"} fontSize={20} fontWeight={700}>
            체중
          </Text>
          <Text color={"black"}>2 ~ 24 g</Text>
        </VStack>
        <KakaoMap />
      </VStack>
    </Layout>
  );
}
