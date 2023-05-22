import { Text, Box, HStack, VStack } from "@chakra-ui/react";
import { AiFillApple, AiFillHome, AiFillProfile, AiFillContacts } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <Box w="full" display={"flex"} justifyContent={"center"}>
        <VStack w="sm">
          {/* 헤더 */}
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w="inherit" h="120px" bg={"gray"} position={"fixed"} top={0} zIndex={9}>
            <AiFillApple size={32} color="black" />
          </Box>

          {/* 본문 */}
          {children}

          {/* 푸터 */}
          <Box w="inherit" h="120px" bg={"blackAlpha.200"} position={"fixed"} bottom={0}>
            <HStack h="inherit" justifyContent={"space-between"} alignItems={"center"}>
              <Link to="/">
                <VStack w="full">
                  <AiFillHome />
                  <Text>홈</Text>
                </VStack>
              </Link>

              <Link to="/Profile">
                <VStack w="full">
                  <AiFillProfile />
                  <Text>프로필</Text>
                </VStack>
              </Link>

              <Link to="/Contact">
                <VStack w="full">
                  <AiFillContacts />
                  <Text>연락처</Text>
                </VStack>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}
