import type {Result, Option} from './support'

export type Bounded = Bounded_Legacy | Bounded_Inline | Bounded_Lookup

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: Uint8Array
}

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Uint8Array
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: Uint8Array
    len: number
}

export type Type_151 = Type_151_Standard | Type_151_Split | Type_151_SplitAbstain

export interface Type_151_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export interface Type_151_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface Type_151_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}
