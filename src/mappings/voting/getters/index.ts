import * as calls from '../../../types/polkadot/calls'
import { CallContext } from '../../../types/polkadot/support'


export function getVotingCall(ctx: CallContext): any {
  const call = new calls.ConvictionVotingVoteCall(ctx)
}

