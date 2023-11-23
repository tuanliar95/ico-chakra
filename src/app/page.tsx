'use client';
declare var window: any;
import { ConnectWallet, WalletInfo } from '@/components';
import { setWalletInfo, setWeb3Provider } from '@/reduxs/accounts/account.slices';
import { useAppDispatch, useAppSelector } from '@/reduxs/hooks';
import { Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import { ethers, formatEther } from 'ethers';
import Link from 'next/link';
import { ReactNode } from 'react';
import { menus } from './constants';
// import { useAppSelector } from '@/reduxs/hooks';

interface IProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IProps) {
  const dispatch = useAppDispatch();
  const { wallet } = useAppSelector((state: any) => state.account);

  // const wallet = null;
  const onConnectMetamask = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      console.log("🚀 ~ file: page.tsx:25 ~ onConnectMetamask ~ provider:", provider)
      // await provider.send('eth_requestAccounts', []);
      const signer = await provider.getSigner();
      console.log("🚀 ~ file: page.tsx:27 ~ onConnectMetamask ~ signer:", signer)
      const address = await signer.getAddress();
      const bigBalance = await provider.getBalance('ethers.eth');
      const bnbBalance = Number.parseFloat(formatEther(bigBalance));
      dispatch(setWalletInfo({ address, bnb: bnbBalance }));
      dispatch(setWeb3Provider(provider));
    }
  };

  return (
    <Flex
      w={{ base: 'full', lg: '70%' }}
      flexDirection="column"
      margin="50px auto"
    >
      <Flex w="full" alignItems="center" justifyContent="center">
        <Heading size="lg" fontWeight="bold">
          Trainee
        </Heading>
        <Spacer />
        {menus.map((menu: any) => (
          <Link href={menu.url} key={menu.url}>
            <Text mx="20px" fontSize="20px" textDecoration="underline">
              {menu.name}
            </Text>
          </Link>
        ))}

        {!wallet && (
          <ConnectWallet
          onClick={onConnectMetamask}
          />
        )}
        {wallet && (
          <WalletInfo address={wallet?.address} amount={wallet?.bnb || 0} />
        )}
      </Flex>
      <Flex w="full" flexDirection="column" py="50px">
        {children}
      </Flex>
    </Flex>
  );
}
