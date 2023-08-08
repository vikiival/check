import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v9420 from './v9420'

export class ConvictionVotingVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ConvictionVoting.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `poll_index`: The index of the poll to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of polls the voter has voted on.
     */
    get isV9420(): boolean {
        return this._chain.getCallHash('ConvictionVoting.vote') === 'c659a6e0d84861cd97f11d84780117a5b61201e70e1e5533a740761dc9489558'
    }

    /**
     * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `poll_index`: The index of the poll to vote for.
     * - `vote`: The vote configuration.
     * 
     * Weight: `O(R)` where R is the number of polls the voter has voted on.
     */
    get asV9420(): {pollIndex: number, vote: v9420.Type_151} {
        assert(this.isV9420)
        return this._chain.decodeCall(this.call)
    }
}
