/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Uint128, BalanceResponse, Expiration, TokenSelect, Decimal, InfoResponse, Token1ForToken2PriceResponse, Token2ForToken1PriceResponse } from "./JunoSwap.types";
export interface JunoSwapReadOnlyInterface {
    contractAddress: string;
    balance: ({ address }: {
        address: string;
    }) => Promise<BalanceResponse>;
    info: () => Promise<InfoResponse>;
    token1ForToken2Price: ({ token1Amount }: {
        token1Amount: Uint128;
    }) => Promise<Token1ForToken2PriceResponse>;
    token2ForToken1Price: ({ token2Amount }: {
        token2Amount: Uint128;
    }) => Promise<Token2ForToken1PriceResponse>;
}
export declare class JunoSwapQueryClient implements JunoSwapReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    balance: ({ address }: {
        address: string;
    }) => Promise<BalanceResponse>;
    info: () => Promise<InfoResponse>;
    token1ForToken2Price: ({ token1Amount }: {
        token1Amount: Uint128;
    }) => Promise<Token1ForToken2PriceResponse>;
    token2ForToken1Price: ({ token2Amount }: {
        token2Amount: Uint128;
    }) => Promise<Token2ForToken1PriceResponse>;
}
export interface JunoSwapInterface extends JunoSwapReadOnlyInterface {
    contractAddress: string;
    sender: string;
    addLiquidity: ({ expiration, maxToken2, minLiquidity, token1Amount }: {
        expiration?: Expiration;
        maxToken2: Uint128;
        minLiquidity: Uint128;
        token1Amount: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeLiquidity: ({ amount, expiration, minToken1, minToken2 }: {
        amount: Uint128;
        expiration?: Expiration;
        minToken1: Uint128;
        minToken2: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    swap: ({ expiration, inputAmount, inputToken, minOutput }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minOutput: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    passThroughSwap: ({ expiration, inputToken, inputTokenAmount, outputAmmAddress, outputMinToken }: {
        expiration?: Expiration;
        inputToken: TokenSelect;
        inputTokenAmount: Uint128;
        outputAmmAddress: string;
        outputMinToken: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    swapAndSendTo: ({ expiration, inputAmount, inputToken, minToken, recipient }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minToken: Uint128;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ lpFeePercent, owner, protocolFeePercent, protocolFeeRecipient }: {
        lpFeePercent: Decimal;
        owner?: string;
        protocolFeePercent: Decimal;
        protocolFeeRecipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class JunoSwapClient extends JunoSwapQueryClient implements JunoSwapInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    addLiquidity: ({ expiration, maxToken2, minLiquidity, token1Amount }: {
        expiration?: Expiration;
        maxToken2: Uint128;
        minLiquidity: Uint128;
        token1Amount: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    removeLiquidity: ({ amount, expiration, minToken1, minToken2 }: {
        amount: Uint128;
        expiration?: Expiration;
        minToken1: Uint128;
        minToken2: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    swap: ({ expiration, inputAmount, inputToken, minOutput }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minOutput: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    passThroughSwap: ({ expiration, inputToken, inputTokenAmount, outputAmmAddress, outputMinToken }: {
        expiration?: Expiration;
        inputToken: TokenSelect;
        inputTokenAmount: Uint128;
        outputAmmAddress: string;
        outputMinToken: Uint128;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    swapAndSendTo: ({ expiration, inputAmount, inputToken, minToken, recipient }: {
        expiration?: Expiration;
        inputAmount: Uint128;
        inputToken: TokenSelect;
        minToken: Uint128;
        recipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ lpFeePercent, owner, protocolFeePercent, protocolFeeRecipient }: {
        lpFeePercent: Decimal;
        owner?: string;
        protocolFeePercent: Decimal;
        protocolFeeRecipient: string;
    }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
