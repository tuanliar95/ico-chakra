import { ConnectWallet } from "@/components";
import { Flex, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";

export default function InvestView() {
  return (
    <Flex
      w={{ base: "full", lg: "70%" }}
      margin="50px auto"
      flexDirection="row"
      justifyContent='space-between'
    >
      <Heading size="lg" fontWeight="bold">
        Blockchain traine
      </Heading>
      <ConnectWallet style={{ background: "blue", color: "white" }} />
    </Flex>
  );
}
