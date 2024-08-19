import * as anchor from '@project-serum/anchor';
import { PublicKey } from '@solana/web3.js';

export interface OpenAuction {
    owner: PublicKey,
    mint: PublicKey,
    tokenAmount: anchor.BN,

    startTime: anchor.BN,
    endTime: anchor.BN,
    cancelled: Boolean,

    title: String,

    bidderCap: anchor.BN,
    bidders: PublicKey[],
    bids: anchor.BN[],

    highestBidder: PublicKey,
    highestBid: anchor.BN,

    bidFloor: anchor.BN,
    minBidIncrement: anchor.BN,

    bump: anchor.BN,
    splToken: anchor.BN,
}

