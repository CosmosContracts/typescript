/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.13.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, BalanceResponse, ExecuteMsg, Expiration, Timestamp, Uint64, TokenSelect, Addr, InfoResponse, InstantiateMsg, QueryMsg, Token, Token1ForToken2PriceResponse, Token2ForToken1PriceResponse } from "./JunoSwap.types";
export interface JunoSwapMessage {
  contractAddress: string;
  sender: string;
  addLiquidity: ({
    expiration,
    maxToken2,
    minLiquidity,
    token1Amount
  }: {
    expiration?: Expiration;
    maxToken2: Uint128;
    minLiquidity: Uint128;
    token1Amount: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  removeLiquidity: ({
    amount,
    expiration,
    minToken1,
    minToken2
  }: {
    amount: Uint128;
    expiration?: Expiration;
    minToken1: Uint128;
    minToken2: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  swapToken1ForToken2: ({
    expiration,
    minToken2,
    token1Amount
  }: {
    expiration?: Expiration;
    minToken2: Uint128;
    token1Amount: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  swapToken2ForToken1: ({
    expiration,
    minToken1,
    token2Amount
  }: {
    expiration?: Expiration;
    minToken1: Uint128;
    token2Amount: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  multiContractSwap: ({
    expiration,
    inputToken,
    inputTokenAmount,
    outputAmmAddress,
    outputMinToken,
    outputToken
  }: {
    expiration?: Expiration;
    inputToken: TokenSelect;
    inputTokenAmount: Uint128;
    outputAmmAddress: Addr;
    outputMinToken: Uint128;
    outputToken: TokenSelect;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  swapTo: ({
    expiration,
    inputAmount,
    inputToken,
    minToken,
    recipient
  }: {
    expiration?: Expiration;
    inputAmount: Uint128;
    inputToken: TokenSelect;
    minToken: Uint128;
    recipient: Addr;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
}
export class JunoSwapMessageComposer implements JunoSwapMessage {
  sender: string;
  contractAddress: string;

  constructor(sender: string, contractAddress: string) {
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.addLiquidity = this.addLiquidity.bind(this);
    this.removeLiquidity = this.removeLiquidity.bind(this);
    this.swapToken1ForToken2 = this.swapToken1ForToken2.bind(this);
    this.swapToken2ForToken1 = this.swapToken2ForToken1.bind(this);
    this.multiContractSwap = this.multiContractSwap.bind(this);
    this.swapTo = this.swapTo.bind(this);
  }

  addLiquidity = ({
    expiration,
    maxToken2,
    minLiquidity,
    token1Amount
  }: {
    expiration?: Expiration;
    maxToken2: Uint128;
    minLiquidity: Uint128;
    token1Amount: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          add_liquidity: {
            expiration,
            max_token2: maxToken2,
            min_liquidity: minLiquidity,
            token1_amount: token1Amount
          }
        })),
        funds
      })
    };
  };
  removeLiquidity = ({
    amount,
    expiration,
    minToken1,
    minToken2
  }: {
    amount: Uint128;
    expiration?: Expiration;
    minToken1: Uint128;
    minToken2: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          remove_liquidity: {
            amount,
            expiration,
            min_token1: minToken1,
            min_token2: minToken2
          }
        })),
        funds
      })
    };
  };
  swapToken1ForToken2 = ({
    expiration,
    minToken2,
    token1Amount
  }: {
    expiration?: Expiration;
    minToken2: Uint128;
    token1Amount: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          swap_token1_for_token2: {
            expiration,
            min_token2: minToken2,
            token1_amount: token1Amount
          }
        })),
        funds
      })
    };
  };
  swapToken2ForToken1 = ({
    expiration,
    minToken1,
    token2Amount
  }: {
    expiration?: Expiration;
    minToken1: Uint128;
    token2Amount: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          swap_token2_for_token1: {
            expiration,
            min_token1: minToken1,
            token2_amount: token2Amount
          }
        })),
        funds
      })
    };
  };
  multiContractSwap = ({
    expiration,
    inputToken,
    inputTokenAmount,
    outputAmmAddress,
    outputMinToken,
    outputToken
  }: {
    expiration?: Expiration;
    inputToken: TokenSelect;
    inputTokenAmount: Uint128;
    outputAmmAddress: Addr;
    outputMinToken: Uint128;
    outputToken: TokenSelect;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          multi_contract_swap: {
            expiration,
            input_token: inputToken,
            input_token_amount: inputTokenAmount,
            output_amm_address: outputAmmAddress,
            output_min_token: outputMinToken,
            output_token: outputToken
          }
        })),
        funds
      })
    };
  };
  swapTo = ({
    expiration,
    inputAmount,
    inputToken,
    minToken,
    recipient
  }: {
    expiration?: Expiration;
    inputAmount: Uint128;
    inputToken: TokenSelect;
    minToken: Uint128;
    recipient: Addr;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          swap_to: {
            expiration,
            input_amount: inputAmount,
            input_token: inputToken,
            min_token: minToken,
            recipient
          }
        })),
        funds
      })
    };
  };
}