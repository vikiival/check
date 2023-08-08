import {lookupArchive} from '@subsquid/archive-registry'
import {
    BatchContext,
    BatchProcessorCallItem,
    BatchProcessorEventItem,
    BatchProcessorItem,
    SubstrateBatchProcessor,
} from '@subsquid/substrate-processor'
import {Store} from '@subsquid/typeorm-store'

const fields = {
    data: {
        event: {
            args: true,
            extrinsic: {
                hash: true,
                fee: true,
            },
        },
    },
} as const

export const processor = new SubstrateBatchProcessor()
    .setDataSource({
        // Lookup archive by the network name in the Subsquid registry
        //archive: lookupArchive("kusama", {release: "FireSquid"})

        // Use archive created by archive/docker-compose.yml
        archive: lookupArchive('kusama', {release: 'FireSquid'}),
    })
    .addEvent('Referenda.Submitted', fields)
    .addEvent('Referenda.DecisionDepositPlaced', fields)
    .addCall('ConvictionVoting.vote', {
        data: {
            call: {
                args: true,
                extrinsic: {
                    hash: true,
                    fee: true,
                }
            }
        }
    } as const)

export type Item = BatchProcessorItem<typeof processor>
export type EventItem = BatchProcessorEventItem<typeof processor>
export type CallItem = BatchProcessorCallItem<typeof processor>
export type Context = BatchContext<Store, Item>
