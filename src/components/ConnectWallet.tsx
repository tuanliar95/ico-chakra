import { Button, ButtonProps } from "@chakra-ui/button";
import React from "react";
interface IProps extends ButtonProps {}
export  function ConnectWallet(props: IProps) {
  return (
    <Button variant="primary" {...props}>
      ConnectWallet
    </Button>
  );
}
