import { logger } from '@kodadot1/metasquid/logger'
import { Calls, Events } from '../processable'
import { handleReferendaSubmit, handleReferendaPlaceDeposit } from './referenda'
import { handleVote } from './voting'
import { BlockData, Context, Log } from './utils/types'

export async function mainFrame(ctx: Context): Promise<void> {
  logger.info(`Processing ${ctx.blocks.length} blocks from ${ctx.blocks[0].header.height} to ${ctx.blocks[ctx.blocks.length - 1].header.height}`)
  const items = []

  for (const block of ctx.blocks) {
    for (const log of block.items) {
      const item = unwrapLog(log, block)
      if (item) {
        items.push(item)
      }
    }
  }

  if (items.length === 0) {
    return
  }

  logger.info(`Found ${items.length} items`)

  // const { contracts, tokens } = uniqueEntitySets(items)
  // const collections = await finalizeCollections(contracts, ctx)
  // const finish = await whatToDoWithTokens({ tokens, collections, items }, ctx)
  // const complete = await completeTokens(ctx, finish)


  // logger.info(`Batch completed, ${complete.length} tokens saved`)
}

function unwrapLog(log: Log, block: BlockData) {
  switch (log.name) {
    case Events.submit:
      return handleReferendaSubmit(log as any)
      // return handle721Token(log, block)
    case Events.placeDeposit:
      return handleReferendaPlaceDeposit(log as any)
        // return handle721Token(log, block)
    case Calls.vote:
      return handleVote(log as any)
      // return handle721Token(log, block)
    default:
      // console.log('unknown log', log.topics[0])
      return null
    // throw new Error('unknown log')
  }
}