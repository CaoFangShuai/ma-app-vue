export default {
    functional:true,
    render:(h,ctx)=>{
        // console.log(h,ctx);
        return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {});
    }
}