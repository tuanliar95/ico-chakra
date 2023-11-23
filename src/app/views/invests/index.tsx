import { ConnectWallet } from '@/components';
import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { useSelector } from 'react-redux';

export default function InvestView() {
  // const accc = useSelector((state: any) => state.account);
  // console.log('🚀 ~ file: page.tsx:19 ~ MainLayout ~ accc:', accc);
  return (
    <Flex
      w={{ base: 'full', lg: '70%' }}
      flexDirection="column"
      margin="50px auto"
      bg={'red'}
    >
      <ConnectWallet />
    </Flex>
  );
}
