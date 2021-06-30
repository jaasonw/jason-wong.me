import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex position="absolute" flexDirection="row-reverse" width="100%">
      Github
      Linkedin
      Resume
    </Flex>
  );
}
