/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { Coin } from "@cosmjs/amino";
import { MsgExecuteContractEncodeObject } from "cosmwasm";
import { MsgExecuteContract } from "cosmjs-types/cosmwasm/wasm/v1/tx";
import { toUtf8 } from "@cosmjs/encoding";
import { Uint128, BalanceResponse, ExecuteMsg, Expiration, Timestamp, Uint64, TokenSelect, Decimal, Denom, Addr, InfoResponse, InstantiateMsg, MigrateMsg, QueryMsg, Token, Token1ForToken2PriceResponse, Token2ForToken1PriceResponse } from "./JunoSwap.types";
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
  swap: ({
    expiration,
    inputAmount,
    inputToken,
    minOutput
  }: {
    expiration?: Expiration;
    inputAmount: Uint128;
    inputToken: TokenSelect;
    minOutput: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  passThroughSwap: ({
    expiration,
    inputToken,
    inputTokenAmount,
    outputAmmAddress,
    outputMinToken
  }: {
    expiration?: Expiration;
    inputToken: TokenSelect;
    inputTokenAmount: Uint128;
    outputAmmAddress: string;
    outputMinToken: Uint128;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  swapAndSendTo: ({
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
    recipient: string;
  }, funds?: Coin[]) => MsgExecuteContractEncodeObject;
  updateConfig: ({
    lpFeePercent,
    owner,
    protocolFeePercent,
    protocolFeeRecipient
  }: {
    lpFeePercent: Decimal;
    owner?: string;
    protocolFeePercent: Decimal;
    protocolFeeRecipient: string;
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
    this.swap = this.swap.bind(this);
    this.passThroughSwap = this.passThroughSwap.bind(this);
    this.swapAndSendTo = this.swapAndSendTo.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
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
  swap = ({
    expiration,
    inputAmount,
    inputToken,
    minOutput
  }: {
    expiration?: Expiration;
    inputAmount: Uint128;
    inputToken: TokenSelect;
    minOutput: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          swap: {
            expiration,
            input_amount: inputAmount,
            input_token: inputToken,
            min_output: minOutput
          }
        })),
        funds
      })
    };
  };
  passThroughSwap = ({
    expiration,
    inputToken,
    inputTokenAmount,
    outputAmmAddress,
    outputMinToken
  }: {
    expiration?: Expiration;
    inputToken: TokenSelect;
    inputTokenAmount: Uint128;
    outputAmmAddress: string;
    outputMinToken: Uint128;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          pass_through_swap: {
            expiration,
            input_token: inputToken,
            input_token_amount: inputTokenAmount,
            output_amm_address: outputAmmAddress,
            output_min_token: outputMinToken
          }
        })),
        funds
      })
    };
  };
  swapAndSendTo = ({
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
    recipient: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          swap_and_send_to: {
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
  updateConfig = ({
    lpFeePercent,
    owner,
    protocolFeePercent,
    protocolFeeRecipient
  }: {
    lpFeePercent: Decimal;
    owner?: string;
    protocolFeePercent: Decimal;
    protocolFeeRecipient: string;
  }, funds?: Coin[]): MsgExecuteContractEncodeObject => {
    return {
      typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
      value: MsgExecuteContract.fromPartial({
        sender: this.sender,
        contract: this.contractAddress,
        msg: toUtf8(JSON.stringify({
          update_config: {
            lp_fee_percent: lpFeePercent,
            owner,
            protocol_fee_percent: protocolFeePercent,
            protocol_fee_recipient: protocolFeeRecipient
          }
        })),
        funds
      })
    };
  };
}