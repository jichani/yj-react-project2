import { Text, Box, HStack, VStack } from "@chakra-ui/react";
import { AiFillHome, AiFillProfile, AiFillContacts, AiOutlineArrowLeft } from "react-icons/ai";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

const GNB = [
  { title: "홈", href: "/", icon: AiFillHome },
  { title: "프로필", href: "/profile", icon: AiFillProfile },
  { title: "연락처", href: "/contact", icon: AiFillContacts },
];

export default function Layout({ children, canGoBack, title }) {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location.pathname);

  const handleClick = () => {
    // console.log("실행되나?");
    navigate("/");
    // 뒤로가기는 navigate(-1);
  };

  return (
    <>
      <Box w="full" display={"flex"} justifyContent={"center"}>
        <VStack w="sm">
          {/* 헤더 */}
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w="inherit" h="120px" bg={"yellow.400"} position={"fixed"} top={0} zIndex={9}>
            {canGoBack ? (
              <>
                <Box onClick={handleClick} position="absolute" left="20px" cursor="pointer">
                  <AiOutlineArrowLeft color="black" size="20px" />
                </Box>
                <Text color="black">{title}</Text>
              </>
            ) : (
              <RiKakaoTalkFill size={32} color="black" />
            )}
          </Box>

          {/* 본문 */}
          {children}

          {/* 푸터 */}

          {canGoBack ? null : (
            <Box w="inherit" h="120px" bg={"yellow.400"} position={"fixed"} bottom={0} zIndex={9}>
              <HStack h="inherit" justifyContent={"space-between"} alignItems={"center"}>
                {GNB.map((item) => (
                  <Box w="full">
                    <Link to={item.href}>
                      <VStack w="full">
                        <item.icon color={location.pathname === item.href ? "white" : "black"} />
                        <Text color={location.pathname === item.href ? "white" : "black"}>{item.title}</Text>
                      </VStack>
                    </Link>
                  </Box>
                ))}
              </HStack>
            </Box>
          )}
        </VStack>
      </Box>
    </>
  );
}
