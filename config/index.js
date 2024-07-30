import { clusterApiUrl } from '@solana/web3.js'

export const config = {
    rpc: {
        devnet: clusterApiUrl('devnet'),
        mainnet: 'https://api.mainnet-beta.solana.com',
    },
}

export const active_network = config.rpc.mainnet