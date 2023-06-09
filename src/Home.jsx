import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const newItem = [
  {
    text: "팔공산 투어",
    backgroundImage:
      "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    text: "사막 투어",
    backgroundImage:
      "https://images.unsplash.com/photo-1682688759157-57988e10ffa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8JUVDJTgyJUFDJUVCJUE3JTg5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    text: "선인장 투어",
    backgroundImage:
      "https://images.unsplash.com/photo-1539571711714-62cd2534f96e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTgyJUFDJUVCJUE3JTg5JTJCJUVBJUJEJTgzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    text: "꽃 투어",
    backgroundImage:
      "https://images.unsplash.com/photo-1541174710317-c464dc175229?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVDJTgyJUFDJUVCJUE3JTg5JTJCJUVBJUJEJTgzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
];

const dataTour = [{ text: "6월 이벤트" }, { text: "7월 이벤트" }, { text: "8월 이벤트" }];

export default function Home() {
  return (
    <>
      <Layout>
        <VStack spacing={16} bg="gray.400" w="inherit" py={"140px"} px={4} alignItems={"flex-start"}>
          {/* 최신상품 컨테이너 */}
          <VStack w={"full"} alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={24}>
              최신상품
            </Text>
            <Grid gap={2} gridTemplateColumns={"repeat(2, 1fr)"} w={"full"}>
              {newItem.map((item, i) => (
                <GridItem
                  key={i}
                  h={"200px"}
                  border={"1px"}
                  rounded={"md"}
                  borderColor={"gray.300"}
                  backgroundImage={`url(${item.backgroundImage})`}
                  backgroundSize={"cover"}
                  backgroundPosition={"center center"}
                  position={"relative"}
                  overflow="hidden"
                >
                  <Link to="/detail">
                    <Box position={"absolute"} top={0} left={0} width={"full"} height={"full"} bg={"rgba(0,0,0,0.5)"}></Box>
                    <Text color={"white"} bottom={0} position={"absolute"} align={"center"} w={"full"} py={4} fontWeight={600}>
                      {item.text}
                    </Text>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </VStack>

          {/* 이벤트 컨테이너 */}
          <VStack w="full" alignItems={"flex-start"}>
            <Text fontWeight={600} fontSize={24}>
              이벤트
            </Text>
            <Grid gap={4} w={"full"}>
              {dataTour.map((item, i) => (
                <GridItem
                  key={i}
                  rounded={"lg"}
                  w="full"
                  h={"120px"}
                  backgroundImage={
                    "https://images.unsplash.com/photo-1684183619810-df64a76e365f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                  }
                  backgroundSize={"cover"}
                  backgroundPosition={"center center"}
                  position={"relative"}
                >
                  <Link to="/detail">
                    <Box
                      w="full"
                      align="center"
                      position={"absolute"}
                      top={0}
                      left={0}
                      h="full"
                      bgGradient={"linear(to-b, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.9))"}
                    >
                      <Text
                        w="full"
                        align="center"
                        position={"absolute"}
                        top={"50%"}
                        left={"50%"}
                        transform={"translate(-50%, -50%)"}
                        fontSize="20"
                        fontWeight={900}
                        color={"black"}
                      >
                        {" "}
                        {item.text}
                      </Text>
                    </Box>
                  </Link>
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </VStack>
      </Layout>
    </>
  );
}
