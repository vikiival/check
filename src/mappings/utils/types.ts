
import { Item, EventItem, CallItem, Context } from '../../processor'
// export { Fields, Context, Block, Log, Transaction } from '../../processor'

import { BaseBlock } from '@kodadot1/metasquid/types'
import { BatchBlock } from '@subsquid/substrate-processor'
// import { Interaction } from '../../model/generated/_interaction'
// import { CollectionEntity, NFTEntity, Event as EventEntity } from '../../model'
// import { CollectionEntity, NFTEntity } from '../../model'

export type BaseCall = {
  caller: string
  blockNumber: string
  timestamp: Date
}

export type BlockData = BatchBlock<Item>

// export { Interaction }
export { Item, EventItem, CallItem, Context, BatchBlock, Item as Log }



export type CallWith<T> = BaseCall & T

type TransferTo = {
  to: string
}

type CollectionId = {
  collectionId: string
}

export type EntityConstructor<T> = {
  new (...args: any[]): T
}

export type WithAmount = {
  amount: bigint
}

export type WithCaller = {
  caller: string
}

export type WithBlock = {
  block: BaseBlock
}

export type WithContract = {
  contract: string
}

export type SomethingWithMeta = {
  metadata: string
}

export type SomethingWithOptionalMeta = {
  metadata?: string
}

export type WithCount = {
  count: bigint
}

// export type KeyType = Interaction.MINT | Interaction.MINTNFT | 'REST'
// export type StateMap = Map<KeyType, MetaEvent<KeyType extends Interaction.MINT ? CollectionEntity : NFTEntity>[]>



export type WithHooks = {
  before?: (ctx: Context) => void | Promise<void>
  after?: (ctx: Context) => void | Promise<void>
}

export type EventExtra = WithBlock & WithCaller & WithContract

export type UnwrapFunc<T> = (ctx: Item) => T
export type SanitizerFunc = (url: string) => string

export function ensure<T>(value: unknown): T {
  return value as T
}

export function createTokenId(collection: string, id: string | bigint): string {
  return `${collection}-${id.toString()}`
}

// export const eventId = (id: string, event: Interaction): string =>
//   `${id}-${event}-${nanoid()}`

export const createOfferId = (id: string, caller: string): string =>
  `${id}-${caller}`

// export const tokenIdOf = (base: BaseTokenEvent): string =>
  // createTokenId(base.collectionId, base.sn)

export type TokenMetadata = {
  name?: string
  description: string
  external_url?: string
  image: string
  animation_url?: string
  attributes?: MetadataAttribute[]
}

export type MetadataAttribute = {
  display_type?: DisplayType
  trait_type?: string
  value: number | string
}

export enum DisplayType {
  null,
  'boost_number',
  'number',
  'boost_percentage',
}

// export { Interaction as Action, Event as EventEntity } from '../../model'
