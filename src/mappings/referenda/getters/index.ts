import { Context } from '../../utils/types'
import * as events from '../../../types/polkadot/events'
import { EventContext } from '../../../types/polkadot/support'


export function getSubmitReferendumEvent(ctx: EventContext): any {
  const event = new events.ReferendaSubmittedEvent(ctx)
}

export function getPlaceReferendumDepositEvent(ctx: EventContext): any {
  const event = new events.ReferendaDecisionDepositPlacedEvent(ctx)
}