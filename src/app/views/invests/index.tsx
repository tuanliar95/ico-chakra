import { ConnectWallet } from "@/components";
import { Flex } from "@chakra-ui/layout";
import React from "react";

export default function InvestView() {
  return (
    <Flex
      w={{ base: "full", lg: "70%" }}
      flexDirection="column"
      margin="50px auto"
      bg={"red"}
    >
      <ConnectWallet/>
    </Flex>
  );
}
