"use client";

import {
	DynamicContextProvider,
	DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
	createConfig,
	WagmiProvider,
} from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { baseSepolia } from 'viem/chains';

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const config = createConfig({
	chains: [baseSepolia],
	multiInjectedProviderDiscovery: false,
	transports: {
		[baseSepolia.id]: http(),
	},
});

const queryClient = new QueryClient();

export default function Navbar() {
	return (

		<DynamicContextProvider
			settings={{
				// Find your environment id at https://app.dynamic.xyz/dashboard/developer
				environmentId: "7d23ed64-8dd0-424d-948e-c9cb6bfc046b",

				walletConnectors: [EthereumWalletConnectors],
			}}
		>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<DynamicWagmiConnector>
						<DynamicWidget />
					</DynamicWagmiConnector>
				</QueryClientProvider>
			</WagmiProvider>
		</DynamicContextProvider>
	);
};
