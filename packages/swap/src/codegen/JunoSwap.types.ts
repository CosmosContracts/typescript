/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint128 = string;
export interface BalanceResponse {
  balance: Uint128;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  add_liquidity: {
    expiration?: Expiration | null;
    max_token2: Uint128;
    min_liquidity: Uint128;
    token1_amount: Uint128;
    [k: string]: unknown;
  };
} | {
  remove_liquidity: {
    amount: Uint128;
    expiration?: Expiration | null;
    min_token1: Uint128;
    min_token2: Uint128;
    [k: string]: unknown;
  };
} | {
  swap: {
    expiration?: Expiration | null;
    input_amount: Uint128;
    input_token: TokenSelect;
    min_output: Uint128;
    [k: string]: unknown;
  };
} | {
  pass_through_swap: {
    expiration?: Expiration | null;
    input_token: TokenSelect;
    input_token_amount: Uint128;
    output_amm_address: string;
    output_min_token: Uint128;
    [k: string]: unknown;
  };
} | {
  swap_and_send_to: {
    expiration?: Expiration | null;
    input_amount: Uint128;
    input_token: TokenSelect;
    min_token: Uint128;
    recipient: string;
    [k: string]: unknown;
  };
} | {
  update_config: {
    lp_fee_percent: Decimal;
    owner?: string | null;
    protocol_fee_percent: Decimal;
    protocol_fee_recipient: string;
    [k: string]: unknown;
  };
};
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {
    [k: string]: unknown;
  };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type TokenSelect = "Token1" | "Token2";
export type Decimal = string;
export type Denom = {
  native: string;
} | {
  cw20: Addr;
};
export type Addr = string;
export interface InfoResponse {
  lp_fee_percent: Decimal;
  lp_token_address: string;
  lp_token_supply: Uint128;
  owner?: string | null;
  protocol_fee_percent: Decimal;
  protocol_fee_recipient: string;
  token1_denom: Denom;
  token1_reserve: Uint128;
  token2_denom: Denom;
  token2_reserve: Uint128;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  lp_fee_percent: Decimal;
  lp_token_code_id: number;
  owner?: string | null;
  protocol_fee_percent: Decimal;
  protocol_fee_recipient: string;
  token1_denom: Denom;
  token2_denom: Denom;
  [k: string]: unknown;
}
export interface MigrateMsg {
  lp_fee_percent: Decimal;
  protocol_fee_percent: Decimal;
  protocol_fee_recipient: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  balance: {
    address: string;
    [k: string]: unknown;
  };
} | {
  info: {
    [k: string]: unknown;
  };
} | {
  token1_for_token2_price: {
    token1_amount: Uint128;
    [k: string]: unknown;
  };
} | {
  token2_for_token1_price: {
    token2_amount: Uint128;
    [k: string]: unknown;
  };
};
export interface Token {
  denom: Denom;
  reserve: Uint128;
  [k: string]: unknown;
}
export interface Token1ForToken2PriceResponse {
  token2_amount: Uint128;
  [k: string]: unknown;
}
export interface Token2ForToken1PriceResponse {
  token1_amount: Uint128;
  [k: string]: unknown;
}