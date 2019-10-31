goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39448 = arguments.length;
switch (G__39448) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39454 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39454 = (function (f,blockable,meta39455){
this.f = f;
this.blockable = blockable;
this.meta39455 = meta39455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39456,meta39455__$1){
var self__ = this;
var _39456__$1 = this;
return (new cljs.core.async.t_cljs$core$async39454(self__.f,self__.blockable,meta39455__$1));
});

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39456){
var self__ = this;
var _39456__$1 = this;
return self__.meta39455;
});

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39455","meta39455",498082912,null)], null);
});

cljs.core.async.t_cljs$core$async39454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39454";

cljs.core.async.t_cljs$core$async39454.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39454");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39454.
 */
cljs.core.async.__GT_t_cljs$core$async39454 = (function cljs$core$async$__GT_t_cljs$core$async39454(f__$1,blockable__$1,meta39455){
return (new cljs.core.async.t_cljs$core$async39454(f__$1,blockable__$1,meta39455));
});

}

return (new cljs.core.async.t_cljs$core$async39454(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39503 = arguments.length;
switch (G__39503) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39522 = arguments.length;
switch (G__39522) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39546 = arguments.length;
switch (G__39546) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42878 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42878) : fn1.call(null,val_42878));
} else {
cljs.core.async.impl.dispatch.run(((function (val_42878,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42878) : fn1.call(null,val_42878));
});})(val_42878,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39581 = arguments.length;
switch (G__39581) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___42888 = n;
var x_42889 = (0);
while(true){
if((x_42889 < n__4607__auto___42888)){
(a[x_42889] = x_42889);

var G__42893 = (x_42889 + (1));
x_42889 = G__42893;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39601 = (function (flag,meta39602){
this.flag = flag;
this.meta39602 = meta39602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39603,meta39602__$1){
var self__ = this;
var _39603__$1 = this;
return (new cljs.core.async.t_cljs$core$async39601(self__.flag,meta39602__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39603){
var self__ = this;
var _39603__$1 = this;
return self__.meta39602;
});})(flag))
;

cljs.core.async.t_cljs$core$async39601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39601.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39602","meta39602",-1714801844,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39601";

cljs.core.async.t_cljs$core$async39601.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39601");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39601.
 */
cljs.core.async.__GT_t_cljs$core$async39601 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39601(flag__$1,meta39602){
return (new cljs.core.async.t_cljs$core$async39601(flag__$1,meta39602));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39601(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39636 = (function (flag,cb,meta39637){
this.flag = flag;
this.cb = cb;
this.meta39637 = meta39637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39638,meta39637__$1){
var self__ = this;
var _39638__$1 = this;
return (new cljs.core.async.t_cljs$core$async39636(self__.flag,self__.cb,meta39637__$1));
});

cljs.core.async.t_cljs$core$async39636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39638){
var self__ = this;
var _39638__$1 = this;
return self__.meta39637;
});

cljs.core.async.t_cljs$core$async39636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async39636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39637","meta39637",104815166,null)], null);
});

cljs.core.async.t_cljs$core$async39636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39636";

cljs.core.async.t_cljs$core$async39636.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39636");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39636.
 */
cljs.core.async.__GT_t_cljs$core$async39636 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39636(flag__$1,cb__$1,meta39637){
return (new cljs.core.async.t_cljs$core$async39636(flag__$1,cb__$1,meta39637));
});

}

return (new cljs.core.async.t_cljs$core$async39636(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39679_SHARP_){
var G__39695 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39679_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39695) : fret.call(null,G__39695));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39681_SHARP_){
var G__39696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39681_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39696) : fret.call(null,G__39696));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42928 = (i + (1));
i = G__42928;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42929 = arguments.length;
var i__4731__auto___42930 = (0);
while(true){
if((i__4731__auto___42930 < len__4730__auto___42929)){
args__4736__auto__.push((arguments[i__4731__auto___42930]));

var G__42931 = (i__4731__auto___42930 + (1));
i__4731__auto___42930 = G__42931;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39733){
var map__39734 = p__39733;
var map__39734__$1 = (((((!((map__39734 == null))))?(((((map__39734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39734):map__39734);
var opts = map__39734__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39715){
var G__39716 = cljs.core.first(seq39715);
var seq39715__$1 = cljs.core.next(seq39715);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39716,seq39715__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39800 = arguments.length;
switch (G__39800) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30234__auto___42937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___42937){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___42937){
return (function (state_39863){
var state_val_39864 = (state_39863[(1)]);
if((state_val_39864 === (7))){
var inst_39856 = (state_39863[(2)]);
var state_39863__$1 = state_39863;
var statearr_39874_42943 = state_39863__$1;
(statearr_39874_42943[(2)] = inst_39856);

(statearr_39874_42943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (1))){
var state_39863__$1 = state_39863;
var statearr_39877_42946 = state_39863__$1;
(statearr_39877_42946[(2)] = null);

(statearr_39877_42946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (4))){
var inst_39833 = (state_39863[(7)]);
var inst_39833__$1 = (state_39863[(2)]);
var inst_39835 = (inst_39833__$1 == null);
var state_39863__$1 = (function (){var statearr_39880 = state_39863;
(statearr_39880[(7)] = inst_39833__$1);

return statearr_39880;
})();
if(cljs.core.truth_(inst_39835)){
var statearr_39886_42948 = state_39863__$1;
(statearr_39886_42948[(1)] = (5));

} else {
var statearr_39888_42949 = state_39863__$1;
(statearr_39888_42949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (13))){
var state_39863__$1 = state_39863;
var statearr_39896_42956 = state_39863__$1;
(statearr_39896_42956[(2)] = null);

(statearr_39896_42956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (6))){
var inst_39833 = (state_39863[(7)]);
var state_39863__$1 = state_39863;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39863__$1,(11),to,inst_39833);
} else {
if((state_val_39864 === (3))){
var inst_39858 = (state_39863[(2)]);
var state_39863__$1 = state_39863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39863__$1,inst_39858);
} else {
if((state_val_39864 === (12))){
var state_39863__$1 = state_39863;
var statearr_39897_42958 = state_39863__$1;
(statearr_39897_42958[(2)] = null);

(statearr_39897_42958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (2))){
var state_39863__$1 = state_39863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39863__$1,(4),from);
} else {
if((state_val_39864 === (11))){
var inst_39847 = (state_39863[(2)]);
var state_39863__$1 = state_39863;
if(cljs.core.truth_(inst_39847)){
var statearr_39908_42961 = state_39863__$1;
(statearr_39908_42961[(1)] = (12));

} else {
var statearr_39909_42962 = state_39863__$1;
(statearr_39909_42962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (9))){
var state_39863__$1 = state_39863;
var statearr_39918_42967 = state_39863__$1;
(statearr_39918_42967[(2)] = null);

(statearr_39918_42967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (5))){
var state_39863__$1 = state_39863;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39922_42972 = state_39863__$1;
(statearr_39922_42972[(1)] = (8));

} else {
var statearr_39923_42973 = state_39863__$1;
(statearr_39923_42973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (14))){
var inst_39854 = (state_39863[(2)]);
var state_39863__$1 = state_39863;
var statearr_39925_42975 = state_39863__$1;
(statearr_39925_42975[(2)] = inst_39854);

(statearr_39925_42975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (10))){
var inst_39842 = (state_39863[(2)]);
var state_39863__$1 = state_39863;
var statearr_39932_42978 = state_39863__$1;
(statearr_39932_42978[(2)] = inst_39842);

(statearr_39932_42978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39864 === (8))){
var inst_39838 = cljs.core.async.close_BANG_(to);
var state_39863__$1 = state_39863;
var statearr_39935_42980 = state_39863__$1;
(statearr_39935_42980[(2)] = inst_39838);

(statearr_39935_42980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___42937))
;
return ((function (switch__29708__auto__,c__30234__auto___42937){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_39939 = [null,null,null,null,null,null,null,null];
(statearr_39939[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_39939[(1)] = (1));

return statearr_39939;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_39863){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_39863);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e39941){if((e39941 instanceof Object)){
var ex__29712__auto__ = e39941;
var statearr_39945_42986 = state_39863;
(statearr_39945_42986[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42990 = state_39863;
state_39863 = G__42990;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_39863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_39863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___42937))
})();
var state__30236__auto__ = (function (){var statearr_39947 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_39947[(6)] = c__30234__auto___42937);

return statearr_39947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___42937))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__39969){
var vec__39970 = p__39969;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39970,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39970,(1),null);
var job = vec__39970;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30234__auto___42997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___42997,res,vec__39970,v,p,job,jobs,results){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___42997,res,vec__39970,v,p,job,jobs,results){
return (function (state_39977){
var state_val_39978 = (state_39977[(1)]);
if((state_val_39978 === (1))){
var state_39977__$1 = state_39977;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39977__$1,(2),res,v);
} else {
if((state_val_39978 === (2))){
var inst_39974 = (state_39977[(2)]);
var inst_39975 = cljs.core.async.close_BANG_(res);
var state_39977__$1 = (function (){var statearr_39985 = state_39977;
(statearr_39985[(7)] = inst_39974);

return statearr_39985;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39977__$1,inst_39975);
} else {
return null;
}
}
});})(c__30234__auto___42997,res,vec__39970,v,p,job,jobs,results))
;
return ((function (switch__29708__auto__,c__30234__auto___42997,res,vec__39970,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0 = (function (){
var statearr_39989 = [null,null,null,null,null,null,null,null];
(statearr_39989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__);

(statearr_39989[(1)] = (1));

return statearr_39989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1 = (function (state_39977){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_39977);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e39990){if((e39990 instanceof Object)){
var ex__29712__auto__ = e39990;
var statearr_39991_43019 = state_39977;
(statearr_39991_43019[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43020 = state_39977;
state_39977 = G__43020;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = function(state_39977){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1.call(this,state_39977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___42997,res,vec__39970,v,p,job,jobs,results))
})();
var state__30236__auto__ = (function (){var statearr_39997 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_39997[(6)] = c__30234__auto___42997);

return statearr_39997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___42997,res,vec__39970,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39999){
var vec__40001 = p__39999;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40001,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40001,(1),null);
var job = vec__40001;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___43032 = n;
var __43033 = (0);
while(true){
if((__43033 < n__4607__auto___43032)){
var G__40006_43035 = type;
var G__40006_43036__$1 = (((G__40006_43035 instanceof cljs.core.Keyword))?G__40006_43035.fqn:null);
switch (G__40006_43036__$1) {
case "compute":
var c__30234__auto___43041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43033,c__30234__auto___43041,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (__43033,c__30234__auto___43041,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async){
return (function (state_40020){
var state_val_40021 = (state_40020[(1)]);
if((state_val_40021 === (1))){
var state_40020__$1 = state_40020;
var statearr_40023_43045 = state_40020__$1;
(statearr_40023_43045[(2)] = null);

(statearr_40023_43045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (2))){
var state_40020__$1 = state_40020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40020__$1,(4),jobs);
} else {
if((state_val_40021 === (3))){
var inst_40018 = (state_40020[(2)]);
var state_40020__$1 = state_40020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40020__$1,inst_40018);
} else {
if((state_val_40021 === (4))){
var inst_40009 = (state_40020[(2)]);
var inst_40010 = process(inst_40009);
var state_40020__$1 = state_40020;
if(cljs.core.truth_(inst_40010)){
var statearr_40025_43050 = state_40020__$1;
(statearr_40025_43050[(1)] = (5));

} else {
var statearr_40026_43051 = state_40020__$1;
(statearr_40026_43051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (5))){
var state_40020__$1 = state_40020;
var statearr_40031_43052 = state_40020__$1;
(statearr_40031_43052[(2)] = null);

(statearr_40031_43052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (6))){
var state_40020__$1 = state_40020;
var statearr_40033_43059 = state_40020__$1;
(statearr_40033_43059[(2)] = null);

(statearr_40033_43059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (7))){
var inst_40015 = (state_40020[(2)]);
var state_40020__$1 = state_40020;
var statearr_40034_43061 = state_40020__$1;
(statearr_40034_43061[(2)] = inst_40015);

(statearr_40034_43061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43033,c__30234__auto___43041,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async))
;
return ((function (__43033,switch__29708__auto__,c__30234__auto___43041,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0 = (function (){
var statearr_40035 = [null,null,null,null,null,null,null];
(statearr_40035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__);

(statearr_40035[(1)] = (1));

return statearr_40035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1 = (function (state_40020){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_40020);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e40037){if((e40037 instanceof Object)){
var ex__29712__auto__ = e40037;
var statearr_40038_43067 = state_40020;
(statearr_40038_43067[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40037;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43068 = state_40020;
state_40020 = G__43068;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = function(state_40020){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1.call(this,state_40020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__;
})()
;})(__43033,switch__29708__auto__,c__30234__auto___43041,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async))
})();
var state__30236__auto__ = (function (){var statearr_40045 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_40045[(6)] = c__30234__auto___43041);

return statearr_40045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(__43033,c__30234__auto___43041,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async))
);


break;
case "async":
var c__30234__auto___43069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43033,c__30234__auto___43069,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (__43033,c__30234__auto___43069,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async){
return (function (state_40064){
var state_val_40065 = (state_40064[(1)]);
if((state_val_40065 === (1))){
var state_40064__$1 = state_40064;
var statearr_40070_43070 = state_40064__$1;
(statearr_40070_43070[(2)] = null);

(statearr_40070_43070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40065 === (2))){
var state_40064__$1 = state_40064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40064__$1,(4),jobs);
} else {
if((state_val_40065 === (3))){
var inst_40062 = (state_40064[(2)]);
var state_40064__$1 = state_40064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40064__$1,inst_40062);
} else {
if((state_val_40065 === (4))){
var inst_40054 = (state_40064[(2)]);
var inst_40055 = async(inst_40054);
var state_40064__$1 = state_40064;
if(cljs.core.truth_(inst_40055)){
var statearr_40074_43079 = state_40064__$1;
(statearr_40074_43079[(1)] = (5));

} else {
var statearr_40075_43080 = state_40064__$1;
(statearr_40075_43080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40065 === (5))){
var state_40064__$1 = state_40064;
var statearr_40082_43081 = state_40064__$1;
(statearr_40082_43081[(2)] = null);

(statearr_40082_43081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40065 === (6))){
var state_40064__$1 = state_40064;
var statearr_40083_43084 = state_40064__$1;
(statearr_40083_43084[(2)] = null);

(statearr_40083_43084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40065 === (7))){
var inst_40060 = (state_40064[(2)]);
var state_40064__$1 = state_40064;
var statearr_40084_43093 = state_40064__$1;
(statearr_40084_43093[(2)] = inst_40060);

(statearr_40084_43093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43033,c__30234__auto___43069,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async))
;
return ((function (__43033,switch__29708__auto__,c__30234__auto___43069,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0 = (function (){
var statearr_40091 = [null,null,null,null,null,null,null];
(statearr_40091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__);

(statearr_40091[(1)] = (1));

return statearr_40091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1 = (function (state_40064){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_40064);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e40093){if((e40093 instanceof Object)){
var ex__29712__auto__ = e40093;
var statearr_40094_43102 = state_40064;
(statearr_40094_43102[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40093;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43106 = state_40064;
state_40064 = G__43106;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = function(state_40064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1.call(this,state_40064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__;
})()
;})(__43033,switch__29708__auto__,c__30234__auto___43069,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async))
})();
var state__30236__auto__ = (function (){var statearr_40100 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_40100[(6)] = c__30234__auto___43069);

return statearr_40100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(__43033,c__30234__auto___43069,G__40006_43035,G__40006_43036__$1,n__4607__auto___43032,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40006_43036__$1)].join('')));

}

var G__43107 = (__43033 + (1));
__43033 = G__43107;
continue;
} else {
}
break;
}

var c__30234__auto___43108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___43108,jobs,results,process,async){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___43108,jobs,results,process,async){
return (function (state_40144){
var state_val_40146 = (state_40144[(1)]);
if((state_val_40146 === (7))){
var inst_40135 = (state_40144[(2)]);
var state_40144__$1 = state_40144;
var statearr_40159_43113 = state_40144__$1;
(statearr_40159_43113[(2)] = inst_40135);

(statearr_40159_43113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40146 === (1))){
var state_40144__$1 = state_40144;
var statearr_40165_43114 = state_40144__$1;
(statearr_40165_43114[(2)] = null);

(statearr_40165_43114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40146 === (4))){
var inst_40115 = (state_40144[(7)]);
var inst_40115__$1 = (state_40144[(2)]);
var inst_40116 = (inst_40115__$1 == null);
var state_40144__$1 = (function (){var statearr_40172 = state_40144;
(statearr_40172[(7)] = inst_40115__$1);

return statearr_40172;
})();
if(cljs.core.truth_(inst_40116)){
var statearr_40177_43115 = state_40144__$1;
(statearr_40177_43115[(1)] = (5));

} else {
var statearr_40178_43116 = state_40144__$1;
(statearr_40178_43116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40146 === (6))){
var inst_40121 = (state_40144[(8)]);
var inst_40115 = (state_40144[(7)]);
var inst_40121__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40127 = [inst_40115,inst_40121__$1];
var inst_40128 = (new cljs.core.PersistentVector(null,2,(5),inst_40126,inst_40127,null));
var state_40144__$1 = (function (){var statearr_40184 = state_40144;
(statearr_40184[(8)] = inst_40121__$1);

return statearr_40184;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40144__$1,(8),jobs,inst_40128);
} else {
if((state_val_40146 === (3))){
var inst_40138 = (state_40144[(2)]);
var state_40144__$1 = state_40144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40144__$1,inst_40138);
} else {
if((state_val_40146 === (2))){
var state_40144__$1 = state_40144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40144__$1,(4),from);
} else {
if((state_val_40146 === (9))){
var inst_40132 = (state_40144[(2)]);
var state_40144__$1 = (function (){var statearr_40194 = state_40144;
(statearr_40194[(9)] = inst_40132);

return statearr_40194;
})();
var statearr_40195_43123 = state_40144__$1;
(statearr_40195_43123[(2)] = null);

(statearr_40195_43123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40146 === (5))){
var inst_40118 = cljs.core.async.close_BANG_(jobs);
var state_40144__$1 = state_40144;
var statearr_40196_43129 = state_40144__$1;
(statearr_40196_43129[(2)] = inst_40118);

(statearr_40196_43129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40146 === (8))){
var inst_40121 = (state_40144[(8)]);
var inst_40130 = (state_40144[(2)]);
var state_40144__$1 = (function (){var statearr_40198 = state_40144;
(statearr_40198[(10)] = inst_40130);

return statearr_40198;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40144__$1,(9),results,inst_40121);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___43108,jobs,results,process,async))
;
return ((function (switch__29708__auto__,c__30234__auto___43108,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0 = (function (){
var statearr_40201 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__);

(statearr_40201[(1)] = (1));

return statearr_40201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1 = (function (state_40144){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_40144);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e40202){if((e40202 instanceof Object)){
var ex__29712__auto__ = e40202;
var statearr_40203_43142 = state_40144;
(statearr_40203_43142[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43146 = state_40144;
state_40144 = G__43146;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = function(state_40144){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1.call(this,state_40144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___43108,jobs,results,process,async))
})();
var state__30236__auto__ = (function (){var statearr_40205 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_40205[(6)] = c__30234__auto___43108);

return statearr_40205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___43108,jobs,results,process,async))
);


var c__30234__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto__,jobs,results,process,async){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto__,jobs,results,process,async){
return (function (state_40257){
var state_val_40258 = (state_40257[(1)]);
if((state_val_40258 === (7))){
var inst_40252 = (state_40257[(2)]);
var state_40257__$1 = state_40257;
var statearr_40263_43150 = state_40257__$1;
(statearr_40263_43150[(2)] = inst_40252);

(statearr_40263_43150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (20))){
var state_40257__$1 = state_40257;
var statearr_40265_43152 = state_40257__$1;
(statearr_40265_43152[(2)] = null);

(statearr_40265_43152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (1))){
var state_40257__$1 = state_40257;
var statearr_40269_43154 = state_40257__$1;
(statearr_40269_43154[(2)] = null);

(statearr_40269_43154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (4))){
var inst_40213 = (state_40257[(7)]);
var inst_40213__$1 = (state_40257[(2)]);
var inst_40215 = (inst_40213__$1 == null);
var state_40257__$1 = (function (){var statearr_40270 = state_40257;
(statearr_40270[(7)] = inst_40213__$1);

return statearr_40270;
})();
if(cljs.core.truth_(inst_40215)){
var statearr_40271_43159 = state_40257__$1;
(statearr_40271_43159[(1)] = (5));

} else {
var statearr_40272_43160 = state_40257__$1;
(statearr_40272_43160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (15))){
var inst_40228 = (state_40257[(8)]);
var state_40257__$1 = state_40257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40257__$1,(18),to,inst_40228);
} else {
if((state_val_40258 === (21))){
var inst_40247 = (state_40257[(2)]);
var state_40257__$1 = state_40257;
var statearr_40273_43167 = state_40257__$1;
(statearr_40273_43167[(2)] = inst_40247);

(statearr_40273_43167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (13))){
var inst_40249 = (state_40257[(2)]);
var state_40257__$1 = (function (){var statearr_40274 = state_40257;
(statearr_40274[(9)] = inst_40249);

return statearr_40274;
})();
var statearr_40279_43168 = state_40257__$1;
(statearr_40279_43168[(2)] = null);

(statearr_40279_43168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (6))){
var inst_40213 = (state_40257[(7)]);
var state_40257__$1 = state_40257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40257__$1,(11),inst_40213);
} else {
if((state_val_40258 === (17))){
var inst_40242 = (state_40257[(2)]);
var state_40257__$1 = state_40257;
if(cljs.core.truth_(inst_40242)){
var statearr_40290_43172 = state_40257__$1;
(statearr_40290_43172[(1)] = (19));

} else {
var statearr_40292_43176 = state_40257__$1;
(statearr_40292_43176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (3))){
var inst_40254 = (state_40257[(2)]);
var state_40257__$1 = state_40257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40257__$1,inst_40254);
} else {
if((state_val_40258 === (12))){
var inst_40224 = (state_40257[(10)]);
var state_40257__$1 = state_40257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40257__$1,(14),inst_40224);
} else {
if((state_val_40258 === (2))){
var state_40257__$1 = state_40257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40257__$1,(4),results);
} else {
if((state_val_40258 === (19))){
var state_40257__$1 = state_40257;
var statearr_40294_43180 = state_40257__$1;
(statearr_40294_43180[(2)] = null);

(statearr_40294_43180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (11))){
var inst_40224 = (state_40257[(2)]);
var state_40257__$1 = (function (){var statearr_40295 = state_40257;
(statearr_40295[(10)] = inst_40224);

return statearr_40295;
})();
var statearr_40296_43184 = state_40257__$1;
(statearr_40296_43184[(2)] = null);

(statearr_40296_43184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (9))){
var state_40257__$1 = state_40257;
var statearr_40306_43185 = state_40257__$1;
(statearr_40306_43185[(2)] = null);

(statearr_40306_43185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (5))){
var state_40257__$1 = state_40257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40309_43187 = state_40257__$1;
(statearr_40309_43187[(1)] = (8));

} else {
var statearr_40315_43188 = state_40257__$1;
(statearr_40315_43188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (14))){
var inst_40236 = (state_40257[(11)]);
var inst_40228 = (state_40257[(8)]);
var inst_40228__$1 = (state_40257[(2)]);
var inst_40235 = (inst_40228__$1 == null);
var inst_40236__$1 = cljs.core.not(inst_40235);
var state_40257__$1 = (function (){var statearr_40316 = state_40257;
(statearr_40316[(11)] = inst_40236__$1);

(statearr_40316[(8)] = inst_40228__$1);

return statearr_40316;
})();
if(inst_40236__$1){
var statearr_40317_43192 = state_40257__$1;
(statearr_40317_43192[(1)] = (15));

} else {
var statearr_40318_43193 = state_40257__$1;
(statearr_40318_43193[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (16))){
var inst_40236 = (state_40257[(11)]);
var state_40257__$1 = state_40257;
var statearr_40319_43197 = state_40257__$1;
(statearr_40319_43197[(2)] = inst_40236);

(statearr_40319_43197[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (10))){
var inst_40221 = (state_40257[(2)]);
var state_40257__$1 = state_40257;
var statearr_40323_43198 = state_40257__$1;
(statearr_40323_43198[(2)] = inst_40221);

(statearr_40323_43198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (18))){
var inst_40239 = (state_40257[(2)]);
var state_40257__$1 = state_40257;
var statearr_40324_43199 = state_40257__$1;
(statearr_40324_43199[(2)] = inst_40239);

(statearr_40324_43199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40258 === (8))){
var inst_40218 = cljs.core.async.close_BANG_(to);
var state_40257__$1 = state_40257;
var statearr_40325_43200 = state_40257__$1;
(statearr_40325_43200[(2)] = inst_40218);

(statearr_40325_43200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto__,jobs,results,process,async))
;
return ((function (switch__29708__auto__,c__30234__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0 = (function (){
var statearr_40326 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__);

(statearr_40326[(1)] = (1));

return statearr_40326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1 = (function (state_40257){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_40257);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e40327){if((e40327 instanceof Object)){
var ex__29712__auto__ = e40327;
var statearr_40328_43202 = state_40257;
(statearr_40328_43202[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43203 = state_40257;
state_40257 = G__43203;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__ = function(state_40257){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1.call(this,state_40257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29709__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto__,jobs,results,process,async))
})();
var state__30236__auto__ = (function (){var statearr_40336 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_40336[(6)] = c__30234__auto__);

return statearr_40336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto__,jobs,results,process,async))
);

return c__30234__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40338 = arguments.length;
switch (G__40338) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40360 = arguments.length;
switch (G__40360) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40378 = arguments.length;
switch (G__40378) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30234__auto___43226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___43226,tc,fc){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___43226,tc,fc){
return (function (state_40427){
var state_val_40429 = (state_40427[(1)]);
if((state_val_40429 === (7))){
var inst_40421 = (state_40427[(2)]);
var state_40427__$1 = state_40427;
var statearr_40443_43233 = state_40427__$1;
(statearr_40443_43233[(2)] = inst_40421);

(statearr_40443_43233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (1))){
var state_40427__$1 = state_40427;
var statearr_40446_43234 = state_40427__$1;
(statearr_40446_43234[(2)] = null);

(statearr_40446_43234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (4))){
var inst_40401 = (state_40427[(7)]);
var inst_40401__$1 = (state_40427[(2)]);
var inst_40402 = (inst_40401__$1 == null);
var state_40427__$1 = (function (){var statearr_40452 = state_40427;
(statearr_40452[(7)] = inst_40401__$1);

return statearr_40452;
})();
if(cljs.core.truth_(inst_40402)){
var statearr_40454_43239 = state_40427__$1;
(statearr_40454_43239[(1)] = (5));

} else {
var statearr_40455_43241 = state_40427__$1;
(statearr_40455_43241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (13))){
var state_40427__$1 = state_40427;
var statearr_40456_43243 = state_40427__$1;
(statearr_40456_43243[(2)] = null);

(statearr_40456_43243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (6))){
var inst_40401 = (state_40427[(7)]);
var inst_40408 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40401) : p.call(null,inst_40401));
var state_40427__$1 = state_40427;
if(cljs.core.truth_(inst_40408)){
var statearr_40461_43249 = state_40427__$1;
(statearr_40461_43249[(1)] = (9));

} else {
var statearr_40463_43250 = state_40427__$1;
(statearr_40463_43250[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (3))){
var inst_40423 = (state_40427[(2)]);
var state_40427__$1 = state_40427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40427__$1,inst_40423);
} else {
if((state_val_40429 === (12))){
var state_40427__$1 = state_40427;
var statearr_40465_43253 = state_40427__$1;
(statearr_40465_43253[(2)] = null);

(statearr_40465_43253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (2))){
var state_40427__$1 = state_40427;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40427__$1,(4),ch);
} else {
if((state_val_40429 === (11))){
var inst_40401 = (state_40427[(7)]);
var inst_40412 = (state_40427[(2)]);
var state_40427__$1 = state_40427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40427__$1,(8),inst_40412,inst_40401);
} else {
if((state_val_40429 === (9))){
var state_40427__$1 = state_40427;
var statearr_40467_43257 = state_40427__$1;
(statearr_40467_43257[(2)] = tc);

(statearr_40467_43257[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (5))){
var inst_40405 = cljs.core.async.close_BANG_(tc);
var inst_40406 = cljs.core.async.close_BANG_(fc);
var state_40427__$1 = (function (){var statearr_40468 = state_40427;
(statearr_40468[(8)] = inst_40405);

return statearr_40468;
})();
var statearr_40469_43262 = state_40427__$1;
(statearr_40469_43262[(2)] = inst_40406);

(statearr_40469_43262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (14))){
var inst_40419 = (state_40427[(2)]);
var state_40427__$1 = state_40427;
var statearr_40473_43264 = state_40427__$1;
(statearr_40473_43264[(2)] = inst_40419);

(statearr_40473_43264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (10))){
var state_40427__$1 = state_40427;
var statearr_40476_43265 = state_40427__$1;
(statearr_40476_43265[(2)] = fc);

(statearr_40476_43265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40429 === (8))){
var inst_40414 = (state_40427[(2)]);
var state_40427__$1 = state_40427;
if(cljs.core.truth_(inst_40414)){
var statearr_40477_43267 = state_40427__$1;
(statearr_40477_43267[(1)] = (12));

} else {
var statearr_40479_43268 = state_40427__$1;
(statearr_40479_43268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___43226,tc,fc))
;
return ((function (switch__29708__auto__,c__30234__auto___43226,tc,fc){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_40480 = [null,null,null,null,null,null,null,null,null];
(statearr_40480[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_40480[(1)] = (1));

return statearr_40480;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_40427){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_40427);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e40481){if((e40481 instanceof Object)){
var ex__29712__auto__ = e40481;
var statearr_40482_43270 = state_40427;
(statearr_40482_43270[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40481;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43271 = state_40427;
state_40427 = G__43271;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_40427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_40427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___43226,tc,fc))
})();
var state__30236__auto__ = (function (){var statearr_40489 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_40489[(6)] = c__30234__auto___43226);

return statearr_40489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___43226,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30234__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto__){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto__){
return (function (state_40520){
var state_val_40521 = (state_40520[(1)]);
if((state_val_40521 === (7))){
var inst_40516 = (state_40520[(2)]);
var state_40520__$1 = state_40520;
var statearr_40538_43272 = state_40520__$1;
(statearr_40538_43272[(2)] = inst_40516);

(statearr_40538_43272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40521 === (1))){
var inst_40498 = init;
var state_40520__$1 = (function (){var statearr_40539 = state_40520;
(statearr_40539[(7)] = inst_40498);

return statearr_40539;
})();
var statearr_40540_43274 = state_40520__$1;
(statearr_40540_43274[(2)] = null);

(statearr_40540_43274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40521 === (4))){
var inst_40503 = (state_40520[(8)]);
var inst_40503__$1 = (state_40520[(2)]);
var inst_40504 = (inst_40503__$1 == null);
var state_40520__$1 = (function (){var statearr_40541 = state_40520;
(statearr_40541[(8)] = inst_40503__$1);

return statearr_40541;
})();
if(cljs.core.truth_(inst_40504)){
var statearr_40542_43278 = state_40520__$1;
(statearr_40542_43278[(1)] = (5));

} else {
var statearr_40543_43279 = state_40520__$1;
(statearr_40543_43279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40521 === (6))){
var inst_40507 = (state_40520[(9)]);
var inst_40498 = (state_40520[(7)]);
var inst_40503 = (state_40520[(8)]);
var inst_40507__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40498,inst_40503) : f.call(null,inst_40498,inst_40503));
var inst_40508 = cljs.core.reduced_QMARK_(inst_40507__$1);
var state_40520__$1 = (function (){var statearr_40546 = state_40520;
(statearr_40546[(9)] = inst_40507__$1);

return statearr_40546;
})();
if(inst_40508){
var statearr_40547_43283 = state_40520__$1;
(statearr_40547_43283[(1)] = (8));

} else {
var statearr_40548_43284 = state_40520__$1;
(statearr_40548_43284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40521 === (3))){
var inst_40518 = (state_40520[(2)]);
var state_40520__$1 = state_40520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40520__$1,inst_40518);
} else {
if((state_val_40521 === (2))){
var state_40520__$1 = state_40520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40520__$1,(4),ch);
} else {
if((state_val_40521 === (9))){
var inst_40507 = (state_40520[(9)]);
var inst_40498 = inst_40507;
var state_40520__$1 = (function (){var statearr_40556 = state_40520;
(statearr_40556[(7)] = inst_40498);

return statearr_40556;
})();
var statearr_40560_43287 = state_40520__$1;
(statearr_40560_43287[(2)] = null);

(statearr_40560_43287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40521 === (5))){
var inst_40498 = (state_40520[(7)]);
var state_40520__$1 = state_40520;
var statearr_40566_43288 = state_40520__$1;
(statearr_40566_43288[(2)] = inst_40498);

(statearr_40566_43288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40521 === (10))){
var inst_40514 = (state_40520[(2)]);
var state_40520__$1 = state_40520;
var statearr_40574_43290 = state_40520__$1;
(statearr_40574_43290[(2)] = inst_40514);

(statearr_40574_43290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40521 === (8))){
var inst_40507 = (state_40520[(9)]);
var inst_40510 = cljs.core.deref(inst_40507);
var state_40520__$1 = state_40520;
var statearr_40578_43298 = state_40520__$1;
(statearr_40578_43298[(2)] = inst_40510);

(statearr_40578_43298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto__))
;
return ((function (switch__29708__auto__,c__30234__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29709__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29709__auto____0 = (function (){
var statearr_40579 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40579[(0)] = cljs$core$async$reduce_$_state_machine__29709__auto__);

(statearr_40579[(1)] = (1));

return statearr_40579;
});
var cljs$core$async$reduce_$_state_machine__29709__auto____1 = (function (state_40520){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_40520);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e40587){if((e40587 instanceof Object)){
var ex__29712__auto__ = e40587;
var statearr_40594_43306 = state_40520;
(statearr_40594_43306[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43307 = state_40520;
state_40520 = G__43307;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29709__auto__ = function(state_40520){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29709__auto____1.call(this,state_40520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29709__auto____0;
cljs$core$async$reduce_$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29709__auto____1;
return cljs$core$async$reduce_$_state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto__))
})();
var state__30236__auto__ = (function (){var statearr_40607 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_40607[(6)] = c__30234__auto__);

return statearr_40607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto__))
);

return c__30234__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30234__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto__,f__$1){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto__,f__$1){
return (function (state_40639){
var state_val_40640 = (state_40639[(1)]);
if((state_val_40640 === (1))){
var inst_40634 = cljs.core.async.reduce(f__$1,init,ch);
var state_40639__$1 = state_40639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40639__$1,(2),inst_40634);
} else {
if((state_val_40640 === (2))){
var inst_40636 = (state_40639[(2)]);
var inst_40637 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40636) : f__$1.call(null,inst_40636));
var state_40639__$1 = state_40639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40639__$1,inst_40637);
} else {
return null;
}
}
});})(c__30234__auto__,f__$1))
;
return ((function (switch__29708__auto__,c__30234__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29709__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29709__auto____0 = (function (){
var statearr_40650 = [null,null,null,null,null,null,null];
(statearr_40650[(0)] = cljs$core$async$transduce_$_state_machine__29709__auto__);

(statearr_40650[(1)] = (1));

return statearr_40650;
});
var cljs$core$async$transduce_$_state_machine__29709__auto____1 = (function (state_40639){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_40639);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e40651){if((e40651 instanceof Object)){
var ex__29712__auto__ = e40651;
var statearr_40652_43315 = state_40639;
(statearr_40652_43315[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40651;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43316 = state_40639;
state_40639 = G__43316;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29709__auto__ = function(state_40639){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29709__auto____1.call(this,state_40639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29709__auto____0;
cljs$core$async$transduce_$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29709__auto____1;
return cljs$core$async$transduce_$_state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto__,f__$1))
})();
var state__30236__auto__ = (function (){var statearr_40656 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_40656[(6)] = c__30234__auto__);

return statearr_40656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto__,f__$1))
);

return c__30234__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40662 = arguments.length;
switch (G__40662) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30234__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto__){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto__){
return (function (state_40695){
var state_val_40696 = (state_40695[(1)]);
if((state_val_40696 === (7))){
var inst_40677 = (state_40695[(2)]);
var state_40695__$1 = state_40695;
var statearr_40703_43327 = state_40695__$1;
(statearr_40703_43327[(2)] = inst_40677);

(statearr_40703_43327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (1))){
var inst_40668 = cljs.core.seq(coll);
var inst_40669 = inst_40668;
var state_40695__$1 = (function (){var statearr_40707 = state_40695;
(statearr_40707[(7)] = inst_40669);

return statearr_40707;
})();
var statearr_40708_43328 = state_40695__$1;
(statearr_40708_43328[(2)] = null);

(statearr_40708_43328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (4))){
var inst_40669 = (state_40695[(7)]);
var inst_40675 = cljs.core.first(inst_40669);
var state_40695__$1 = state_40695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40695__$1,(7),ch,inst_40675);
} else {
if((state_val_40696 === (13))){
var inst_40689 = (state_40695[(2)]);
var state_40695__$1 = state_40695;
var statearr_40709_43329 = state_40695__$1;
(statearr_40709_43329[(2)] = inst_40689);

(statearr_40709_43329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (6))){
var inst_40680 = (state_40695[(2)]);
var state_40695__$1 = state_40695;
if(cljs.core.truth_(inst_40680)){
var statearr_40719_43330 = state_40695__$1;
(statearr_40719_43330[(1)] = (8));

} else {
var statearr_40720_43331 = state_40695__$1;
(statearr_40720_43331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (3))){
var inst_40693 = (state_40695[(2)]);
var state_40695__$1 = state_40695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40695__$1,inst_40693);
} else {
if((state_val_40696 === (12))){
var state_40695__$1 = state_40695;
var statearr_40721_43332 = state_40695__$1;
(statearr_40721_43332[(2)] = null);

(statearr_40721_43332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (2))){
var inst_40669 = (state_40695[(7)]);
var state_40695__$1 = state_40695;
if(cljs.core.truth_(inst_40669)){
var statearr_40722_43333 = state_40695__$1;
(statearr_40722_43333[(1)] = (4));

} else {
var statearr_40723_43334 = state_40695__$1;
(statearr_40723_43334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (11))){
var inst_40686 = cljs.core.async.close_BANG_(ch);
var state_40695__$1 = state_40695;
var statearr_40724_43335 = state_40695__$1;
(statearr_40724_43335[(2)] = inst_40686);

(statearr_40724_43335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (9))){
var state_40695__$1 = state_40695;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40725_43336 = state_40695__$1;
(statearr_40725_43336[(1)] = (11));

} else {
var statearr_40726_43337 = state_40695__$1;
(statearr_40726_43337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (5))){
var inst_40669 = (state_40695[(7)]);
var state_40695__$1 = state_40695;
var statearr_40727_43344 = state_40695__$1;
(statearr_40727_43344[(2)] = inst_40669);

(statearr_40727_43344[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (10))){
var inst_40691 = (state_40695[(2)]);
var state_40695__$1 = state_40695;
var statearr_40728_43345 = state_40695__$1;
(statearr_40728_43345[(2)] = inst_40691);

(statearr_40728_43345[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40696 === (8))){
var inst_40669 = (state_40695[(7)]);
var inst_40682 = cljs.core.next(inst_40669);
var inst_40669__$1 = inst_40682;
var state_40695__$1 = (function (){var statearr_40729 = state_40695;
(statearr_40729[(7)] = inst_40669__$1);

return statearr_40729;
})();
var statearr_40730_43346 = state_40695__$1;
(statearr_40730_43346[(2)] = null);

(statearr_40730_43346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto__))
;
return ((function (switch__29708__auto__,c__30234__auto__){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_40734 = [null,null,null,null,null,null,null,null];
(statearr_40734[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_40734[(1)] = (1));

return statearr_40734;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_40695){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_40695);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e40735){if((e40735 instanceof Object)){
var ex__29712__auto__ = e40735;
var statearr_40736_43347 = state_40695;
(statearr_40736_43347[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43348 = state_40695;
state_40695 = G__43348;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_40695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_40695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto__))
})();
var state__30236__auto__ = (function (){var statearr_40737 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_40737[(6)] = c__30234__auto__);

return statearr_40737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto__))
);

return c__30234__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40754 = (function (ch,cs,meta40755){
this.ch = ch;
this.cs = cs;
this.meta40755 = meta40755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40756,meta40755__$1){
var self__ = this;
var _40756__$1 = this;
return (new cljs.core.async.t_cljs$core$async40754(self__.ch,self__.cs,meta40755__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40756){
var self__ = this;
var _40756__$1 = this;
return self__.meta40755;
});})(cs))
;

cljs.core.async.t_cljs$core$async40754.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40754.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40754.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40754.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40754.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40754.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40755","meta40755",-149099424,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40754";

cljs.core.async.t_cljs$core$async40754.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40754");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40754.
 */
cljs.core.async.__GT_t_cljs$core$async40754 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40754(ch__$1,cs__$1,meta40755){
return (new cljs.core.async.t_cljs$core$async40754(ch__$1,cs__$1,meta40755));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40754(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30234__auto___43382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___43382,cs,m,dchan,dctr,done){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___43382,cs,m,dchan,dctr,done){
return (function (state_40915){
var state_val_40916 = (state_40915[(1)]);
if((state_val_40916 === (7))){
var inst_40911 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
var statearr_40917_43383 = state_40915__$1;
(statearr_40917_43383[(2)] = inst_40911);

(statearr_40917_43383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (20))){
var inst_40807 = (state_40915[(7)]);
var inst_40820 = cljs.core.first(inst_40807);
var inst_40821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40820,(0),null);
var inst_40822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40820,(1),null);
var state_40915__$1 = (function (){var statearr_40921 = state_40915;
(statearr_40921[(8)] = inst_40821);

return statearr_40921;
})();
if(cljs.core.truth_(inst_40822)){
var statearr_40922_43386 = state_40915__$1;
(statearr_40922_43386[(1)] = (22));

} else {
var statearr_40923_43387 = state_40915__$1;
(statearr_40923_43387[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (27))){
var inst_40773 = (state_40915[(9)]);
var inst_40852 = (state_40915[(10)]);
var inst_40854 = (state_40915[(11)]);
var inst_40859 = (state_40915[(12)]);
var inst_40859__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40852,inst_40854);
var inst_40860 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40859__$1,inst_40773,done);
var state_40915__$1 = (function (){var statearr_40927 = state_40915;
(statearr_40927[(12)] = inst_40859__$1);

return statearr_40927;
})();
if(cljs.core.truth_(inst_40860)){
var statearr_40928_43392 = state_40915__$1;
(statearr_40928_43392[(1)] = (30));

} else {
var statearr_40929_43393 = state_40915__$1;
(statearr_40929_43393[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (1))){
var state_40915__$1 = state_40915;
var statearr_40930_43395 = state_40915__$1;
(statearr_40930_43395[(2)] = null);

(statearr_40930_43395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (24))){
var inst_40807 = (state_40915[(7)]);
var inst_40828 = (state_40915[(2)]);
var inst_40829 = cljs.core.next(inst_40807);
var inst_40782 = inst_40829;
var inst_40783 = null;
var inst_40784 = (0);
var inst_40785 = (0);
var state_40915__$1 = (function (){var statearr_40936 = state_40915;
(statearr_40936[(13)] = inst_40783);

(statearr_40936[(14)] = inst_40782);

(statearr_40936[(15)] = inst_40785);

(statearr_40936[(16)] = inst_40828);

(statearr_40936[(17)] = inst_40784);

return statearr_40936;
})();
var statearr_40937_43405 = state_40915__$1;
(statearr_40937_43405[(2)] = null);

(statearr_40937_43405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (39))){
var state_40915__$1 = state_40915;
var statearr_40942_43407 = state_40915__$1;
(statearr_40942_43407[(2)] = null);

(statearr_40942_43407[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (4))){
var inst_40773 = (state_40915[(9)]);
var inst_40773__$1 = (state_40915[(2)]);
var inst_40774 = (inst_40773__$1 == null);
var state_40915__$1 = (function (){var statearr_40947 = state_40915;
(statearr_40947[(9)] = inst_40773__$1);

return statearr_40947;
})();
if(cljs.core.truth_(inst_40774)){
var statearr_40949_43410 = state_40915__$1;
(statearr_40949_43410[(1)] = (5));

} else {
var statearr_40951_43412 = state_40915__$1;
(statearr_40951_43412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (15))){
var inst_40783 = (state_40915[(13)]);
var inst_40782 = (state_40915[(14)]);
var inst_40785 = (state_40915[(15)]);
var inst_40784 = (state_40915[(17)]);
var inst_40800 = (state_40915[(2)]);
var inst_40801 = (inst_40785 + (1));
var tmp40938 = inst_40783;
var tmp40939 = inst_40782;
var tmp40940 = inst_40784;
var inst_40782__$1 = tmp40939;
var inst_40783__$1 = tmp40938;
var inst_40784__$1 = tmp40940;
var inst_40785__$1 = inst_40801;
var state_40915__$1 = (function (){var statearr_40952 = state_40915;
(statearr_40952[(13)] = inst_40783__$1);

(statearr_40952[(14)] = inst_40782__$1);

(statearr_40952[(15)] = inst_40785__$1);

(statearr_40952[(18)] = inst_40800);

(statearr_40952[(17)] = inst_40784__$1);

return statearr_40952;
})();
var statearr_40953_43421 = state_40915__$1;
(statearr_40953_43421[(2)] = null);

(statearr_40953_43421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (21))){
var inst_40832 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
var statearr_40960_43423 = state_40915__$1;
(statearr_40960_43423[(2)] = inst_40832);

(statearr_40960_43423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (31))){
var inst_40859 = (state_40915[(12)]);
var inst_40863 = done(null);
var inst_40864 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40859);
var state_40915__$1 = (function (){var statearr_40961 = state_40915;
(statearr_40961[(19)] = inst_40863);

return statearr_40961;
})();
var statearr_40962_43427 = state_40915__$1;
(statearr_40962_43427[(2)] = inst_40864);

(statearr_40962_43427[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (32))){
var inst_40852 = (state_40915[(10)]);
var inst_40851 = (state_40915[(20)]);
var inst_40854 = (state_40915[(11)]);
var inst_40853 = (state_40915[(21)]);
var inst_40866 = (state_40915[(2)]);
var inst_40869 = (inst_40854 + (1));
var tmp40954 = inst_40852;
var tmp40955 = inst_40851;
var tmp40956 = inst_40853;
var inst_40851__$1 = tmp40955;
var inst_40852__$1 = tmp40954;
var inst_40853__$1 = tmp40956;
var inst_40854__$1 = inst_40869;
var state_40915__$1 = (function (){var statearr_40972 = state_40915;
(statearr_40972[(10)] = inst_40852__$1);

(statearr_40972[(20)] = inst_40851__$1);

(statearr_40972[(22)] = inst_40866);

(statearr_40972[(11)] = inst_40854__$1);

(statearr_40972[(21)] = inst_40853__$1);

return statearr_40972;
})();
var statearr_40978_43429 = state_40915__$1;
(statearr_40978_43429[(2)] = null);

(statearr_40978_43429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (40))){
var inst_40883 = (state_40915[(23)]);
var inst_40887 = done(null);
var inst_40888 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_40883);
var state_40915__$1 = (function (){var statearr_40980 = state_40915;
(statearr_40980[(24)] = inst_40887);

return statearr_40980;
})();
var statearr_40984_43431 = state_40915__$1;
(statearr_40984_43431[(2)] = inst_40888);

(statearr_40984_43431[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (33))){
var inst_40873 = (state_40915[(25)]);
var inst_40875 = cljs.core.chunked_seq_QMARK_(inst_40873);
var state_40915__$1 = state_40915;
if(inst_40875){
var statearr_40994_43432 = state_40915__$1;
(statearr_40994_43432[(1)] = (36));

} else {
var statearr_40995_43433 = state_40915__$1;
(statearr_40995_43433[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (13))){
var inst_40794 = (state_40915[(26)]);
var inst_40797 = cljs.core.async.close_BANG_(inst_40794);
var state_40915__$1 = state_40915;
var statearr_41000_43436 = state_40915__$1;
(statearr_41000_43436[(2)] = inst_40797);

(statearr_41000_43436[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (22))){
var inst_40821 = (state_40915[(8)]);
var inst_40825 = cljs.core.async.close_BANG_(inst_40821);
var state_40915__$1 = state_40915;
var statearr_41003_43437 = state_40915__$1;
(statearr_41003_43437[(2)] = inst_40825);

(statearr_41003_43437[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (36))){
var inst_40873 = (state_40915[(25)]);
var inst_40878 = cljs.core.chunk_first(inst_40873);
var inst_40879 = cljs.core.chunk_rest(inst_40873);
var inst_40880 = cljs.core.count(inst_40878);
var inst_40851 = inst_40879;
var inst_40852 = inst_40878;
var inst_40853 = inst_40880;
var inst_40854 = (0);
var state_40915__$1 = (function (){var statearr_41004 = state_40915;
(statearr_41004[(10)] = inst_40852);

(statearr_41004[(20)] = inst_40851);

(statearr_41004[(11)] = inst_40854);

(statearr_41004[(21)] = inst_40853);

return statearr_41004;
})();
var statearr_41005_43445 = state_40915__$1;
(statearr_41005_43445[(2)] = null);

(statearr_41005_43445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (41))){
var inst_40873 = (state_40915[(25)]);
var inst_40890 = (state_40915[(2)]);
var inst_40891 = cljs.core.next(inst_40873);
var inst_40851 = inst_40891;
var inst_40852 = null;
var inst_40853 = (0);
var inst_40854 = (0);
var state_40915__$1 = (function (){var statearr_41010 = state_40915;
(statearr_41010[(10)] = inst_40852);

(statearr_41010[(20)] = inst_40851);

(statearr_41010[(27)] = inst_40890);

(statearr_41010[(11)] = inst_40854);

(statearr_41010[(21)] = inst_40853);

return statearr_41010;
})();
var statearr_41012_43453 = state_40915__$1;
(statearr_41012_43453[(2)] = null);

(statearr_41012_43453[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (43))){
var state_40915__$1 = state_40915;
var statearr_41025_43454 = state_40915__$1;
(statearr_41025_43454[(2)] = null);

(statearr_41025_43454[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (29))){
var inst_40899 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
var statearr_41026_43456 = state_40915__$1;
(statearr_41026_43456[(2)] = inst_40899);

(statearr_41026_43456[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (44))){
var inst_40908 = (state_40915[(2)]);
var state_40915__$1 = (function (){var statearr_41027 = state_40915;
(statearr_41027[(28)] = inst_40908);

return statearr_41027;
})();
var statearr_41031_43457 = state_40915__$1;
(statearr_41031_43457[(2)] = null);

(statearr_41031_43457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (6))){
var inst_40843 = (state_40915[(29)]);
var inst_40842 = cljs.core.deref(cs);
var inst_40843__$1 = cljs.core.keys(inst_40842);
var inst_40844 = cljs.core.count(inst_40843__$1);
var inst_40845 = cljs.core.reset_BANG_(dctr,inst_40844);
var inst_40850 = cljs.core.seq(inst_40843__$1);
var inst_40851 = inst_40850;
var inst_40852 = null;
var inst_40853 = (0);
var inst_40854 = (0);
var state_40915__$1 = (function (){var statearr_41034 = state_40915;
(statearr_41034[(10)] = inst_40852);

(statearr_41034[(20)] = inst_40851);

(statearr_41034[(29)] = inst_40843__$1);

(statearr_41034[(11)] = inst_40854);

(statearr_41034[(21)] = inst_40853);

(statearr_41034[(30)] = inst_40845);

return statearr_41034;
})();
var statearr_41035_43468 = state_40915__$1;
(statearr_41035_43468[(2)] = null);

(statearr_41035_43468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (28))){
var inst_40851 = (state_40915[(20)]);
var inst_40873 = (state_40915[(25)]);
var inst_40873__$1 = cljs.core.seq(inst_40851);
var state_40915__$1 = (function (){var statearr_41040 = state_40915;
(statearr_41040[(25)] = inst_40873__$1);

return statearr_41040;
})();
if(inst_40873__$1){
var statearr_41041_43469 = state_40915__$1;
(statearr_41041_43469[(1)] = (33));

} else {
var statearr_41042_43470 = state_40915__$1;
(statearr_41042_43470[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (25))){
var inst_40854 = (state_40915[(11)]);
var inst_40853 = (state_40915[(21)]);
var inst_40856 = (inst_40854 < inst_40853);
var inst_40857 = inst_40856;
var state_40915__$1 = state_40915;
if(cljs.core.truth_(inst_40857)){
var statearr_41043_43471 = state_40915__$1;
(statearr_41043_43471[(1)] = (27));

} else {
var statearr_41044_43472 = state_40915__$1;
(statearr_41044_43472[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (34))){
var state_40915__$1 = state_40915;
var statearr_41049_43473 = state_40915__$1;
(statearr_41049_43473[(2)] = null);

(statearr_41049_43473[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (17))){
var state_40915__$1 = state_40915;
var statearr_41054_43474 = state_40915__$1;
(statearr_41054_43474[(2)] = null);

(statearr_41054_43474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (3))){
var inst_40913 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40915__$1,inst_40913);
} else {
if((state_val_40916 === (12))){
var inst_40837 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
var statearr_41064_43475 = state_40915__$1;
(statearr_41064_43475[(2)] = inst_40837);

(statearr_41064_43475[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (2))){
var state_40915__$1 = state_40915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40915__$1,(4),ch);
} else {
if((state_val_40916 === (23))){
var state_40915__$1 = state_40915;
var statearr_41065_43478 = state_40915__$1;
(statearr_41065_43478[(2)] = null);

(statearr_41065_43478[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (35))){
var inst_40897 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
var statearr_41066_43479 = state_40915__$1;
(statearr_41066_43479[(2)] = inst_40897);

(statearr_41066_43479[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (19))){
var inst_40807 = (state_40915[(7)]);
var inst_40811 = cljs.core.chunk_first(inst_40807);
var inst_40812 = cljs.core.chunk_rest(inst_40807);
var inst_40813 = cljs.core.count(inst_40811);
var inst_40782 = inst_40812;
var inst_40783 = inst_40811;
var inst_40784 = inst_40813;
var inst_40785 = (0);
var state_40915__$1 = (function (){var statearr_41067 = state_40915;
(statearr_41067[(13)] = inst_40783);

(statearr_41067[(14)] = inst_40782);

(statearr_41067[(15)] = inst_40785);

(statearr_41067[(17)] = inst_40784);

return statearr_41067;
})();
var statearr_41068_43480 = state_40915__$1;
(statearr_41068_43480[(2)] = null);

(statearr_41068_43480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (11))){
var inst_40782 = (state_40915[(14)]);
var inst_40807 = (state_40915[(7)]);
var inst_40807__$1 = cljs.core.seq(inst_40782);
var state_40915__$1 = (function (){var statearr_41076 = state_40915;
(statearr_41076[(7)] = inst_40807__$1);

return statearr_41076;
})();
if(inst_40807__$1){
var statearr_41077_43482 = state_40915__$1;
(statearr_41077_43482[(1)] = (16));

} else {
var statearr_41078_43483 = state_40915__$1;
(statearr_41078_43483[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (9))){
var inst_40839 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
var statearr_41079_43484 = state_40915__$1;
(statearr_41079_43484[(2)] = inst_40839);

(statearr_41079_43484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (5))){
var inst_40780 = cljs.core.deref(cs);
var inst_40781 = cljs.core.seq(inst_40780);
var inst_40782 = inst_40781;
var inst_40783 = null;
var inst_40784 = (0);
var inst_40785 = (0);
var state_40915__$1 = (function (){var statearr_41080 = state_40915;
(statearr_41080[(13)] = inst_40783);

(statearr_41080[(14)] = inst_40782);

(statearr_41080[(15)] = inst_40785);

(statearr_41080[(17)] = inst_40784);

return statearr_41080;
})();
var statearr_41081_43492 = state_40915__$1;
(statearr_41081_43492[(2)] = null);

(statearr_41081_43492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (14))){
var state_40915__$1 = state_40915;
var statearr_41082_43494 = state_40915__$1;
(statearr_41082_43494[(2)] = null);

(statearr_41082_43494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (45))){
var inst_40905 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
var statearr_41087_43496 = state_40915__$1;
(statearr_41087_43496[(2)] = inst_40905);

(statearr_41087_43496[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (26))){
var inst_40843 = (state_40915[(29)]);
var inst_40901 = (state_40915[(2)]);
var inst_40902 = cljs.core.seq(inst_40843);
var state_40915__$1 = (function (){var statearr_41095 = state_40915;
(statearr_41095[(31)] = inst_40901);

return statearr_41095;
})();
if(inst_40902){
var statearr_41099_43500 = state_40915__$1;
(statearr_41099_43500[(1)] = (42));

} else {
var statearr_41100_43502 = state_40915__$1;
(statearr_41100_43502[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (16))){
var inst_40807 = (state_40915[(7)]);
var inst_40809 = cljs.core.chunked_seq_QMARK_(inst_40807);
var state_40915__$1 = state_40915;
if(inst_40809){
var statearr_41101_43506 = state_40915__$1;
(statearr_41101_43506[(1)] = (19));

} else {
var statearr_41102_43509 = state_40915__$1;
(statearr_41102_43509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (38))){
var inst_40894 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
var statearr_41103_43510 = state_40915__$1;
(statearr_41103_43510[(2)] = inst_40894);

(statearr_41103_43510[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (30))){
var state_40915__$1 = state_40915;
var statearr_41108_43511 = state_40915__$1;
(statearr_41108_43511[(2)] = null);

(statearr_41108_43511[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (10))){
var inst_40783 = (state_40915[(13)]);
var inst_40785 = (state_40915[(15)]);
var inst_40793 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40783,inst_40785);
var inst_40794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40793,(0),null);
var inst_40795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40793,(1),null);
var state_40915__$1 = (function (){var statearr_41114 = state_40915;
(statearr_41114[(26)] = inst_40794);

return statearr_41114;
})();
if(cljs.core.truth_(inst_40795)){
var statearr_41116_43519 = state_40915__$1;
(statearr_41116_43519[(1)] = (13));

} else {
var statearr_41118_43520 = state_40915__$1;
(statearr_41118_43520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (18))){
var inst_40835 = (state_40915[(2)]);
var state_40915__$1 = state_40915;
var statearr_41135_43521 = state_40915__$1;
(statearr_41135_43521[(2)] = inst_40835);

(statearr_41135_43521[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (42))){
var state_40915__$1 = state_40915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40915__$1,(45),dchan);
} else {
if((state_val_40916 === (37))){
var inst_40773 = (state_40915[(9)]);
var inst_40883 = (state_40915[(23)]);
var inst_40873 = (state_40915[(25)]);
var inst_40883__$1 = cljs.core.first(inst_40873);
var inst_40884 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_40883__$1,inst_40773,done);
var state_40915__$1 = (function (){var statearr_41137 = state_40915;
(statearr_41137[(23)] = inst_40883__$1);

return statearr_41137;
})();
if(cljs.core.truth_(inst_40884)){
var statearr_41139_43522 = state_40915__$1;
(statearr_41139_43522[(1)] = (39));

} else {
var statearr_41140_43525 = state_40915__$1;
(statearr_41140_43525[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40916 === (8))){
var inst_40785 = (state_40915[(15)]);
var inst_40784 = (state_40915[(17)]);
var inst_40787 = (inst_40785 < inst_40784);
var inst_40788 = inst_40787;
var state_40915__$1 = state_40915;
if(cljs.core.truth_(inst_40788)){
var statearr_41141_43527 = state_40915__$1;
(statearr_41141_43527[(1)] = (10));

} else {
var statearr_41142_43529 = state_40915__$1;
(statearr_41142_43529[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___43382,cs,m,dchan,dctr,done))
;
return ((function (switch__29708__auto__,c__30234__auto___43382,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29709__auto__ = null;
var cljs$core$async$mult_$_state_machine__29709__auto____0 = (function (){
var statearr_41162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41162[(0)] = cljs$core$async$mult_$_state_machine__29709__auto__);

(statearr_41162[(1)] = (1));

return statearr_41162;
});
var cljs$core$async$mult_$_state_machine__29709__auto____1 = (function (state_40915){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_40915);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e41164){if((e41164 instanceof Object)){
var ex__29712__auto__ = e41164;
var statearr_41165_43536 = state_40915;
(statearr_41165_43536[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41164;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43538 = state_40915;
state_40915 = G__43538;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29709__auto__ = function(state_40915){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29709__auto____1.call(this,state_40915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29709__auto____0;
cljs$core$async$mult_$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29709__auto____1;
return cljs$core$async$mult_$_state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___43382,cs,m,dchan,dctr,done))
})();
var state__30236__auto__ = (function (){var statearr_41171 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_41171[(6)] = c__30234__auto___43382);

return statearr_41171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___43382,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41185 = arguments.length;
switch (G__41185) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43580 = arguments.length;
var i__4731__auto___43581 = (0);
while(true){
if((i__4731__auto___43581 < len__4730__auto___43580)){
args__4736__auto__.push((arguments[i__4731__auto___43581]));

var G__43582 = (i__4731__auto___43581 + (1));
i__4731__auto___43581 = G__43582;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41270){
var map__41272 = p__41270;
var map__41272__$1 = (((((!((map__41272 == null))))?(((((map__41272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41272):map__41272);
var opts = map__41272__$1;
var statearr_41274_43590 = state;
(statearr_41274_43590[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__41272,map__41272__$1,opts){
return (function (val){
var statearr_41282_43595 = state;
(statearr_41282_43595[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__41272,map__41272__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_41288_43596 = state;
(statearr_41288_43596[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41247){
var G__41248 = cljs.core.first(seq41247);
var seq41247__$1 = cljs.core.next(seq41247);
var G__41249 = cljs.core.first(seq41247__$1);
var seq41247__$2 = cljs.core.next(seq41247__$1);
var G__41250 = cljs.core.first(seq41247__$2);
var seq41247__$3 = cljs.core.next(seq41247__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41248,G__41249,G__41250,seq41247__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41323 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41324){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41324 = meta41324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41325,meta41324__$1){
var self__ = this;
var _41325__$1 = this;
return (new cljs.core.async.t_cljs$core$async41323(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41324__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41325){
var self__ = this;
var _41325__$1 = this;
return self__.meta41324;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41323.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41324","meta41324",-1869956709,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41323";

cljs.core.async.t_cljs$core$async41323.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async41323");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41323.
 */
cljs.core.async.__GT_t_cljs$core$async41323 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41323(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41324){
return (new cljs.core.async.t_cljs$core$async41323(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41324));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41323(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30234__auto___43625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___43625,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___43625,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41527){
var state_val_41528 = (state_41527[(1)]);
if((state_val_41528 === (7))){
var inst_41405 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
var statearr_41540_43626 = state_41527__$1;
(statearr_41540_43626[(2)] = inst_41405);

(statearr_41540_43626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (20))){
var inst_41417 = (state_41527[(7)]);
var state_41527__$1 = state_41527;
var statearr_41542_43628 = state_41527__$1;
(statearr_41542_43628[(2)] = inst_41417);

(statearr_41542_43628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (27))){
var state_41527__$1 = state_41527;
var statearr_41549_43629 = state_41527__$1;
(statearr_41549_43629[(2)] = null);

(statearr_41549_43629[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (1))){
var inst_41386 = (state_41527[(8)]);
var inst_41386__$1 = calc_state();
var inst_41390 = (inst_41386__$1 == null);
var inst_41391 = cljs.core.not(inst_41390);
var state_41527__$1 = (function (){var statearr_41550 = state_41527;
(statearr_41550[(8)] = inst_41386__$1);

return statearr_41550;
})();
if(inst_41391){
var statearr_41551_43630 = state_41527__$1;
(statearr_41551_43630[(1)] = (2));

} else {
var statearr_41552_43632 = state_41527__$1;
(statearr_41552_43632[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (24))){
var inst_41471 = (state_41527[(9)]);
var inst_41459 = (state_41527[(10)]);
var inst_41491 = (state_41527[(11)]);
var inst_41491__$1 = (inst_41459.cljs$core$IFn$_invoke$arity$1 ? inst_41459.cljs$core$IFn$_invoke$arity$1(inst_41471) : inst_41459.call(null,inst_41471));
var state_41527__$1 = (function (){var statearr_41553 = state_41527;
(statearr_41553[(11)] = inst_41491__$1);

return statearr_41553;
})();
if(cljs.core.truth_(inst_41491__$1)){
var statearr_41554_43636 = state_41527__$1;
(statearr_41554_43636[(1)] = (29));

} else {
var statearr_41556_43641 = state_41527__$1;
(statearr_41556_43641[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (4))){
var inst_41408 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
if(cljs.core.truth_(inst_41408)){
var statearr_41557_43642 = state_41527__$1;
(statearr_41557_43642[(1)] = (8));

} else {
var statearr_41559_43643 = state_41527__$1;
(statearr_41559_43643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (15))){
var inst_41447 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
if(cljs.core.truth_(inst_41447)){
var statearr_41563_43644 = state_41527__$1;
(statearr_41563_43644[(1)] = (19));

} else {
var statearr_41564_43646 = state_41527__$1;
(statearr_41564_43646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (21))){
var inst_41452 = (state_41527[(12)]);
var inst_41452__$1 = (state_41527[(2)]);
var inst_41459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41452__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41452__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41452__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41527__$1 = (function (){var statearr_41567 = state_41527;
(statearr_41567[(10)] = inst_41459);

(statearr_41567[(12)] = inst_41452__$1);

(statearr_41567[(13)] = inst_41460);

return statearr_41567;
})();
return cljs.core.async.ioc_alts_BANG_(state_41527__$1,(22),inst_41461);
} else {
if((state_val_41528 === (31))){
var inst_41505 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
if(cljs.core.truth_(inst_41505)){
var statearr_41569_43648 = state_41527__$1;
(statearr_41569_43648[(1)] = (32));

} else {
var statearr_41570_43649 = state_41527__$1;
(statearr_41570_43649[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (32))){
var inst_41470 = (state_41527[(14)]);
var state_41527__$1 = state_41527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41527__$1,(35),out,inst_41470);
} else {
if((state_val_41528 === (33))){
var inst_41452 = (state_41527[(12)]);
var inst_41417 = inst_41452;
var state_41527__$1 = (function (){var statearr_41571 = state_41527;
(statearr_41571[(7)] = inst_41417);

return statearr_41571;
})();
var statearr_41572_43650 = state_41527__$1;
(statearr_41572_43650[(2)] = null);

(statearr_41572_43650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (13))){
var inst_41417 = (state_41527[(7)]);
var inst_41436 = inst_41417.cljs$lang$protocol_mask$partition0$;
var inst_41437 = (inst_41436 & (64));
var inst_41438 = inst_41417.cljs$core$ISeq$;
var inst_41439 = (cljs.core.PROTOCOL_SENTINEL === inst_41438);
var inst_41440 = ((inst_41437) || (inst_41439));
var state_41527__$1 = state_41527;
if(cljs.core.truth_(inst_41440)){
var statearr_41575_43656 = state_41527__$1;
(statearr_41575_43656[(1)] = (16));

} else {
var statearr_41577_43657 = state_41527__$1;
(statearr_41577_43657[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (22))){
var inst_41471 = (state_41527[(9)]);
var inst_41470 = (state_41527[(14)]);
var inst_41468 = (state_41527[(2)]);
var inst_41470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41468,(0),null);
var inst_41471__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41468,(1),null);
var inst_41474 = (inst_41470__$1 == null);
var inst_41475 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41471__$1,change);
var inst_41476 = ((inst_41474) || (inst_41475));
var state_41527__$1 = (function (){var statearr_41584 = state_41527;
(statearr_41584[(9)] = inst_41471__$1);

(statearr_41584[(14)] = inst_41470__$1);

return statearr_41584;
})();
if(cljs.core.truth_(inst_41476)){
var statearr_41585_43660 = state_41527__$1;
(statearr_41585_43660[(1)] = (23));

} else {
var statearr_41586_43661 = state_41527__$1;
(statearr_41586_43661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (36))){
var inst_41452 = (state_41527[(12)]);
var inst_41417 = inst_41452;
var state_41527__$1 = (function (){var statearr_41591 = state_41527;
(statearr_41591[(7)] = inst_41417);

return statearr_41591;
})();
var statearr_41592_43666 = state_41527__$1;
(statearr_41592_43666[(2)] = null);

(statearr_41592_43666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (29))){
var inst_41491 = (state_41527[(11)]);
var state_41527__$1 = state_41527;
var statearr_41595_43667 = state_41527__$1;
(statearr_41595_43667[(2)] = inst_41491);

(statearr_41595_43667[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (6))){
var state_41527__$1 = state_41527;
var statearr_41597_43669 = state_41527__$1;
(statearr_41597_43669[(2)] = false);

(statearr_41597_43669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (28))){
var inst_41487 = (state_41527[(2)]);
var inst_41488 = calc_state();
var inst_41417 = inst_41488;
var state_41527__$1 = (function (){var statearr_41600 = state_41527;
(statearr_41600[(15)] = inst_41487);

(statearr_41600[(7)] = inst_41417);

return statearr_41600;
})();
var statearr_41602_43670 = state_41527__$1;
(statearr_41602_43670[(2)] = null);

(statearr_41602_43670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (25))){
var inst_41520 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
var statearr_41604_43671 = state_41527__$1;
(statearr_41604_43671[(2)] = inst_41520);

(statearr_41604_43671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (34))){
var inst_41518 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
var statearr_41605_43674 = state_41527__$1;
(statearr_41605_43674[(2)] = inst_41518);

(statearr_41605_43674[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (17))){
var state_41527__$1 = state_41527;
var statearr_41607_43675 = state_41527__$1;
(statearr_41607_43675[(2)] = false);

(statearr_41607_43675[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (3))){
var state_41527__$1 = state_41527;
var statearr_41611_43676 = state_41527__$1;
(statearr_41611_43676[(2)] = false);

(statearr_41611_43676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (12))){
var inst_41522 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41527__$1,inst_41522);
} else {
if((state_val_41528 === (2))){
var inst_41386 = (state_41527[(8)]);
var inst_41395 = inst_41386.cljs$lang$protocol_mask$partition0$;
var inst_41396 = (inst_41395 & (64));
var inst_41397 = inst_41386.cljs$core$ISeq$;
var inst_41398 = (cljs.core.PROTOCOL_SENTINEL === inst_41397);
var inst_41399 = ((inst_41396) || (inst_41398));
var state_41527__$1 = state_41527;
if(cljs.core.truth_(inst_41399)){
var statearr_41644_43677 = state_41527__$1;
(statearr_41644_43677[(1)] = (5));

} else {
var statearr_41651_43678 = state_41527__$1;
(statearr_41651_43678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (23))){
var inst_41470 = (state_41527[(14)]);
var inst_41479 = (inst_41470 == null);
var state_41527__$1 = state_41527;
if(cljs.core.truth_(inst_41479)){
var statearr_41656_43679 = state_41527__$1;
(statearr_41656_43679[(1)] = (26));

} else {
var statearr_41657_43680 = state_41527__$1;
(statearr_41657_43680[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (35))){
var inst_41508 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
if(cljs.core.truth_(inst_41508)){
var statearr_41659_43682 = state_41527__$1;
(statearr_41659_43682[(1)] = (36));

} else {
var statearr_41660_43683 = state_41527__$1;
(statearr_41660_43683[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (19))){
var inst_41417 = (state_41527[(7)]);
var inst_41449 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41417);
var state_41527__$1 = state_41527;
var statearr_41662_43684 = state_41527__$1;
(statearr_41662_43684[(2)] = inst_41449);

(statearr_41662_43684[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (11))){
var inst_41417 = (state_41527[(7)]);
var inst_41427 = (inst_41417 == null);
var inst_41428 = cljs.core.not(inst_41427);
var state_41527__$1 = state_41527;
if(inst_41428){
var statearr_41663_43687 = state_41527__$1;
(statearr_41663_43687[(1)] = (13));

} else {
var statearr_41665_43688 = state_41527__$1;
(statearr_41665_43688[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (9))){
var inst_41386 = (state_41527[(8)]);
var state_41527__$1 = state_41527;
var statearr_41666_43691 = state_41527__$1;
(statearr_41666_43691[(2)] = inst_41386);

(statearr_41666_43691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (5))){
var state_41527__$1 = state_41527;
var statearr_41670_43692 = state_41527__$1;
(statearr_41670_43692[(2)] = true);

(statearr_41670_43692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (14))){
var state_41527__$1 = state_41527;
var statearr_41672_43693 = state_41527__$1;
(statearr_41672_43693[(2)] = false);

(statearr_41672_43693[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (26))){
var inst_41471 = (state_41527[(9)]);
var inst_41484 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41471);
var state_41527__$1 = state_41527;
var statearr_41673_43701 = state_41527__$1;
(statearr_41673_43701[(2)] = inst_41484);

(statearr_41673_43701[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (16))){
var state_41527__$1 = state_41527;
var statearr_41674_43702 = state_41527__$1;
(statearr_41674_43702[(2)] = true);

(statearr_41674_43702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (38))){
var inst_41514 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
var statearr_41675_43704 = state_41527__$1;
(statearr_41675_43704[(2)] = inst_41514);

(statearr_41675_43704[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (30))){
var inst_41471 = (state_41527[(9)]);
var inst_41459 = (state_41527[(10)]);
var inst_41460 = (state_41527[(13)]);
var inst_41500 = cljs.core.empty_QMARK_(inst_41459);
var inst_41501 = (inst_41460.cljs$core$IFn$_invoke$arity$1 ? inst_41460.cljs$core$IFn$_invoke$arity$1(inst_41471) : inst_41460.call(null,inst_41471));
var inst_41502 = cljs.core.not(inst_41501);
var inst_41503 = ((inst_41500) && (inst_41502));
var state_41527__$1 = state_41527;
var statearr_41676_43707 = state_41527__$1;
(statearr_41676_43707[(2)] = inst_41503);

(statearr_41676_43707[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (10))){
var inst_41386 = (state_41527[(8)]);
var inst_41413 = (state_41527[(2)]);
var inst_41414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41413,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41413,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41413,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41417 = inst_41386;
var state_41527__$1 = (function (){var statearr_41686 = state_41527;
(statearr_41686[(16)] = inst_41415);

(statearr_41686[(17)] = inst_41414);

(statearr_41686[(7)] = inst_41417);

(statearr_41686[(18)] = inst_41416);

return statearr_41686;
})();
var statearr_41694_43709 = state_41527__$1;
(statearr_41694_43709[(2)] = null);

(statearr_41694_43709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (18))){
var inst_41444 = (state_41527[(2)]);
var state_41527__$1 = state_41527;
var statearr_41699_43710 = state_41527__$1;
(statearr_41699_43710[(2)] = inst_41444);

(statearr_41699_43710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (37))){
var state_41527__$1 = state_41527;
var statearr_41700_43711 = state_41527__$1;
(statearr_41700_43711[(2)] = null);

(statearr_41700_43711[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41528 === (8))){
var inst_41386 = (state_41527[(8)]);
var inst_41410 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41386);
var state_41527__$1 = state_41527;
var statearr_41702_43712 = state_41527__$1;
(statearr_41702_43712[(2)] = inst_41410);

(statearr_41702_43712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___43625,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29708__auto__,c__30234__auto___43625,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29709__auto__ = null;
var cljs$core$async$mix_$_state_machine__29709__auto____0 = (function (){
var statearr_41706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41706[(0)] = cljs$core$async$mix_$_state_machine__29709__auto__);

(statearr_41706[(1)] = (1));

return statearr_41706;
});
var cljs$core$async$mix_$_state_machine__29709__auto____1 = (function (state_41527){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_41527);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e41708){if((e41708 instanceof Object)){
var ex__29712__auto__ = e41708;
var statearr_41709_43714 = state_41527;
(statearr_41709_43714[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41708;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43715 = state_41527;
state_41527 = G__43715;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29709__auto__ = function(state_41527){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29709__auto____1.call(this,state_41527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29709__auto____0;
cljs$core$async$mix_$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29709__auto____1;
return cljs$core$async$mix_$_state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___43625,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30236__auto__ = (function (){var statearr_41710 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_41710[(6)] = c__30234__auto___43625);

return statearr_41710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___43625,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41720 = arguments.length;
switch (G__41720) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41737 = arguments.length;
switch (G__41737) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__41735_SHARP_){
if(cljs.core.truth_((p1__41735_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41735_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41735_SHARP_.call(null,topic)))){
return p1__41735_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41735_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41742 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41743){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41743 = meta41743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41744,meta41743__$1){
var self__ = this;
var _41744__$1 = this;
return (new cljs.core.async.t_cljs$core$async41742(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41743__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41744){
var self__ = this;
var _41744__$1 = this;
return self__.meta41743;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41742.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41742.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41742.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41742.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41742.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41742.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41742.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41742.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41743","meta41743",-724691588,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41742";

cljs.core.async.t_cljs$core$async41742.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async41742");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41742.
 */
cljs.core.async.__GT_t_cljs$core$async41742 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41742(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41743){
return (new cljs.core.async.t_cljs$core$async41742(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41743));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41742(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30234__auto___43745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___43745,mults,ensure_mult,p){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___43745,mults,ensure_mult,p){
return (function (state_41840){
var state_val_41841 = (state_41840[(1)]);
if((state_val_41841 === (7))){
var inst_41831 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41845_43746 = state_41840__$1;
(statearr_41845_43746[(2)] = inst_41831);

(statearr_41845_43746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (20))){
var state_41840__$1 = state_41840;
var statearr_41846_43749 = state_41840__$1;
(statearr_41846_43749[(2)] = null);

(statearr_41846_43749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (1))){
var state_41840__$1 = state_41840;
var statearr_41847_43750 = state_41840__$1;
(statearr_41847_43750[(2)] = null);

(statearr_41847_43750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (24))){
var inst_41813 = (state_41840[(7)]);
var inst_41823 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41813);
var state_41840__$1 = state_41840;
var statearr_41848_43751 = state_41840__$1;
(statearr_41848_43751[(2)] = inst_41823);

(statearr_41848_43751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (4))){
var inst_41762 = (state_41840[(8)]);
var inst_41762__$1 = (state_41840[(2)]);
var inst_41764 = (inst_41762__$1 == null);
var state_41840__$1 = (function (){var statearr_41849 = state_41840;
(statearr_41849[(8)] = inst_41762__$1);

return statearr_41849;
})();
if(cljs.core.truth_(inst_41764)){
var statearr_41850_43752 = state_41840__$1;
(statearr_41850_43752[(1)] = (5));

} else {
var statearr_41853_43753 = state_41840__$1;
(statearr_41853_43753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (15))){
var inst_41806 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41857_43755 = state_41840__$1;
(statearr_41857_43755[(2)] = inst_41806);

(statearr_41857_43755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (21))){
var inst_41828 = (state_41840[(2)]);
var state_41840__$1 = (function (){var statearr_41859 = state_41840;
(statearr_41859[(9)] = inst_41828);

return statearr_41859;
})();
var statearr_41861_43756 = state_41840__$1;
(statearr_41861_43756[(2)] = null);

(statearr_41861_43756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (13))){
var inst_41788 = (state_41840[(10)]);
var inst_41790 = cljs.core.chunked_seq_QMARK_(inst_41788);
var state_41840__$1 = state_41840;
if(inst_41790){
var statearr_41864_43757 = state_41840__$1;
(statearr_41864_43757[(1)] = (16));

} else {
var statearr_41865_43758 = state_41840__$1;
(statearr_41865_43758[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (22))){
var inst_41820 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41820)){
var statearr_41866_43759 = state_41840__$1;
(statearr_41866_43759[(1)] = (23));

} else {
var statearr_41867_43760 = state_41840__$1;
(statearr_41867_43760[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (6))){
var inst_41813 = (state_41840[(7)]);
var inst_41815 = (state_41840[(11)]);
var inst_41762 = (state_41840[(8)]);
var inst_41813__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41762) : topic_fn.call(null,inst_41762));
var inst_41814 = cljs.core.deref(mults);
var inst_41815__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41814,inst_41813__$1);
var state_41840__$1 = (function (){var statearr_41868 = state_41840;
(statearr_41868[(7)] = inst_41813__$1);

(statearr_41868[(11)] = inst_41815__$1);

return statearr_41868;
})();
if(cljs.core.truth_(inst_41815__$1)){
var statearr_41869_43762 = state_41840__$1;
(statearr_41869_43762[(1)] = (19));

} else {
var statearr_41870_43763 = state_41840__$1;
(statearr_41870_43763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (25))){
var inst_41825 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41875_43764 = state_41840__$1;
(statearr_41875_43764[(2)] = inst_41825);

(statearr_41875_43764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (17))){
var inst_41788 = (state_41840[(10)]);
var inst_41797 = cljs.core.first(inst_41788);
var inst_41798 = cljs.core.async.muxch_STAR_(inst_41797);
var inst_41799 = cljs.core.async.close_BANG_(inst_41798);
var inst_41800 = cljs.core.next(inst_41788);
var inst_41774 = inst_41800;
var inst_41775 = null;
var inst_41776 = (0);
var inst_41777 = (0);
var state_41840__$1 = (function (){var statearr_41876 = state_41840;
(statearr_41876[(12)] = inst_41774);

(statearr_41876[(13)] = inst_41776);

(statearr_41876[(14)] = inst_41777);

(statearr_41876[(15)] = inst_41775);

(statearr_41876[(16)] = inst_41799);

return statearr_41876;
})();
var statearr_41877_43774 = state_41840__$1;
(statearr_41877_43774[(2)] = null);

(statearr_41877_43774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (3))){
var inst_41833 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41840__$1,inst_41833);
} else {
if((state_val_41841 === (12))){
var inst_41808 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41879_43782 = state_41840__$1;
(statearr_41879_43782[(2)] = inst_41808);

(statearr_41879_43782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (2))){
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41840__$1,(4),ch);
} else {
if((state_val_41841 === (23))){
var state_41840__$1 = state_41840;
var statearr_41880_43787 = state_41840__$1;
(statearr_41880_43787[(2)] = null);

(statearr_41880_43787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (19))){
var inst_41815 = (state_41840[(11)]);
var inst_41762 = (state_41840[(8)]);
var inst_41818 = cljs.core.async.muxch_STAR_(inst_41815);
var state_41840__$1 = state_41840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41840__$1,(22),inst_41818,inst_41762);
} else {
if((state_val_41841 === (11))){
var inst_41774 = (state_41840[(12)]);
var inst_41788 = (state_41840[(10)]);
var inst_41788__$1 = cljs.core.seq(inst_41774);
var state_41840__$1 = (function (){var statearr_41883 = state_41840;
(statearr_41883[(10)] = inst_41788__$1);

return statearr_41883;
})();
if(inst_41788__$1){
var statearr_41886_43791 = state_41840__$1;
(statearr_41886_43791[(1)] = (13));

} else {
var statearr_41887_43792 = state_41840__$1;
(statearr_41887_43792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (9))){
var inst_41810 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41888_43793 = state_41840__$1;
(statearr_41888_43793[(2)] = inst_41810);

(statearr_41888_43793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (5))){
var inst_41771 = cljs.core.deref(mults);
var inst_41772 = cljs.core.vals(inst_41771);
var inst_41773 = cljs.core.seq(inst_41772);
var inst_41774 = inst_41773;
var inst_41775 = null;
var inst_41776 = (0);
var inst_41777 = (0);
var state_41840__$1 = (function (){var statearr_41897 = state_41840;
(statearr_41897[(12)] = inst_41774);

(statearr_41897[(13)] = inst_41776);

(statearr_41897[(14)] = inst_41777);

(statearr_41897[(15)] = inst_41775);

return statearr_41897;
})();
var statearr_41898_43797 = state_41840__$1;
(statearr_41898_43797[(2)] = null);

(statearr_41898_43797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (14))){
var state_41840__$1 = state_41840;
var statearr_41903_43801 = state_41840__$1;
(statearr_41903_43801[(2)] = null);

(statearr_41903_43801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (16))){
var inst_41788 = (state_41840[(10)]);
var inst_41792 = cljs.core.chunk_first(inst_41788);
var inst_41793 = cljs.core.chunk_rest(inst_41788);
var inst_41794 = cljs.core.count(inst_41792);
var inst_41774 = inst_41793;
var inst_41775 = inst_41792;
var inst_41776 = inst_41794;
var inst_41777 = (0);
var state_41840__$1 = (function (){var statearr_41906 = state_41840;
(statearr_41906[(12)] = inst_41774);

(statearr_41906[(13)] = inst_41776);

(statearr_41906[(14)] = inst_41777);

(statearr_41906[(15)] = inst_41775);

return statearr_41906;
})();
var statearr_41907_43802 = state_41840__$1;
(statearr_41907_43802[(2)] = null);

(statearr_41907_43802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (10))){
var inst_41774 = (state_41840[(12)]);
var inst_41776 = (state_41840[(13)]);
var inst_41777 = (state_41840[(14)]);
var inst_41775 = (state_41840[(15)]);
var inst_41782 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41775,inst_41777);
var inst_41783 = cljs.core.async.muxch_STAR_(inst_41782);
var inst_41784 = cljs.core.async.close_BANG_(inst_41783);
var inst_41785 = (inst_41777 + (1));
var tmp41899 = inst_41774;
var tmp41900 = inst_41776;
var tmp41901 = inst_41775;
var inst_41774__$1 = tmp41899;
var inst_41775__$1 = tmp41901;
var inst_41776__$1 = tmp41900;
var inst_41777__$1 = inst_41785;
var state_41840__$1 = (function (){var statearr_41914 = state_41840;
(statearr_41914[(12)] = inst_41774__$1);

(statearr_41914[(13)] = inst_41776__$1);

(statearr_41914[(17)] = inst_41784);

(statearr_41914[(14)] = inst_41777__$1);

(statearr_41914[(15)] = inst_41775__$1);

return statearr_41914;
})();
var statearr_41920_43806 = state_41840__$1;
(statearr_41920_43806[(2)] = null);

(statearr_41920_43806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (18))){
var inst_41803 = (state_41840[(2)]);
var state_41840__$1 = state_41840;
var statearr_41921_43808 = state_41840__$1;
(statearr_41921_43808[(2)] = inst_41803);

(statearr_41921_43808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41841 === (8))){
var inst_41776 = (state_41840[(13)]);
var inst_41777 = (state_41840[(14)]);
var inst_41779 = (inst_41777 < inst_41776);
var inst_41780 = inst_41779;
var state_41840__$1 = state_41840;
if(cljs.core.truth_(inst_41780)){
var statearr_41925_43809 = state_41840__$1;
(statearr_41925_43809[(1)] = (10));

} else {
var statearr_41926_43810 = state_41840__$1;
(statearr_41926_43810[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___43745,mults,ensure_mult,p))
;
return ((function (switch__29708__auto__,c__30234__auto___43745,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_41933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41933[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_41933[(1)] = (1));

return statearr_41933;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_41840){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_41840);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e41942){if((e41942 instanceof Object)){
var ex__29712__auto__ = e41942;
var statearr_41944_43820 = state_41840;
(statearr_41944_43820[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43821 = state_41840;
state_41840 = G__43821;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_41840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_41840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___43745,mults,ensure_mult,p))
})();
var state__30236__auto__ = (function (){var statearr_41947 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_41947[(6)] = c__30234__auto___43745);

return statearr_41947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___43745,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41951 = arguments.length;
switch (G__41951) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41971 = arguments.length;
switch (G__41971) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41973 = arguments.length;
switch (G__41973) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30234__auto___43846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___43846,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___43846,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42020){
var state_val_42021 = (state_42020[(1)]);
if((state_val_42021 === (7))){
var state_42020__$1 = state_42020;
var statearr_42022_43849 = state_42020__$1;
(statearr_42022_43849[(2)] = null);

(statearr_42022_43849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (1))){
var state_42020__$1 = state_42020;
var statearr_42024_43850 = state_42020__$1;
(statearr_42024_43850[(2)] = null);

(statearr_42024_43850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (4))){
var inst_41984 = (state_42020[(7)]);
var inst_41986 = (inst_41984 < cnt);
var state_42020__$1 = state_42020;
if(cljs.core.truth_(inst_41986)){
var statearr_42026_43853 = state_42020__$1;
(statearr_42026_43853[(1)] = (6));

} else {
var statearr_42028_43854 = state_42020__$1;
(statearr_42028_43854[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (15))){
var inst_42016 = (state_42020[(2)]);
var state_42020__$1 = state_42020;
var statearr_42033_43856 = state_42020__$1;
(statearr_42033_43856[(2)] = inst_42016);

(statearr_42033_43856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (13))){
var inst_42009 = cljs.core.async.close_BANG_(out);
var state_42020__$1 = state_42020;
var statearr_42042_43857 = state_42020__$1;
(statearr_42042_43857[(2)] = inst_42009);

(statearr_42042_43857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (6))){
var state_42020__$1 = state_42020;
var statearr_42043_43859 = state_42020__$1;
(statearr_42043_43859[(2)] = null);

(statearr_42043_43859[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (3))){
var inst_42018 = (state_42020[(2)]);
var state_42020__$1 = state_42020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42020__$1,inst_42018);
} else {
if((state_val_42021 === (12))){
var inst_42006 = (state_42020[(8)]);
var inst_42006__$1 = (state_42020[(2)]);
var inst_42007 = cljs.core.some(cljs.core.nil_QMARK_,inst_42006__$1);
var state_42020__$1 = (function (){var statearr_42045 = state_42020;
(statearr_42045[(8)] = inst_42006__$1);

return statearr_42045;
})();
if(cljs.core.truth_(inst_42007)){
var statearr_42046_43869 = state_42020__$1;
(statearr_42046_43869[(1)] = (13));

} else {
var statearr_42049_43870 = state_42020__$1;
(statearr_42049_43870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (2))){
var inst_41981 = cljs.core.reset_BANG_(dctr,cnt);
var inst_41984 = (0);
var state_42020__$1 = (function (){var statearr_42051 = state_42020;
(statearr_42051[(9)] = inst_41981);

(statearr_42051[(7)] = inst_41984);

return statearr_42051;
})();
var statearr_42052_43875 = state_42020__$1;
(statearr_42052_43875[(2)] = null);

(statearr_42052_43875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (11))){
var inst_41984 = (state_42020[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42020,(10),Object,null,(9));
var inst_41993 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_41984) : chs__$1.call(null,inst_41984));
var inst_41994 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_41984) : done.call(null,inst_41984));
var inst_41995 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_41993,inst_41994);
var state_42020__$1 = state_42020;
var statearr_42055_43880 = state_42020__$1;
(statearr_42055_43880[(2)] = inst_41995);


cljs.core.async.impl.ioc_helpers.process_exception(state_42020__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (9))){
var inst_41984 = (state_42020[(7)]);
var inst_41997 = (state_42020[(2)]);
var inst_41998 = (inst_41984 + (1));
var inst_41984__$1 = inst_41998;
var state_42020__$1 = (function (){var statearr_42058 = state_42020;
(statearr_42058[(10)] = inst_41997);

(statearr_42058[(7)] = inst_41984__$1);

return statearr_42058;
})();
var statearr_42060_43883 = state_42020__$1;
(statearr_42060_43883[(2)] = null);

(statearr_42060_43883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (5))){
var inst_42004 = (state_42020[(2)]);
var state_42020__$1 = (function (){var statearr_42063 = state_42020;
(statearr_42063[(11)] = inst_42004);

return statearr_42063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42020__$1,(12),dchan);
} else {
if((state_val_42021 === (14))){
var inst_42006 = (state_42020[(8)]);
var inst_42011 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42006);
var state_42020__$1 = state_42020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42020__$1,(16),out,inst_42011);
} else {
if((state_val_42021 === (16))){
var inst_42013 = (state_42020[(2)]);
var state_42020__$1 = (function (){var statearr_42066 = state_42020;
(statearr_42066[(12)] = inst_42013);

return statearr_42066;
})();
var statearr_42069_43884 = state_42020__$1;
(statearr_42069_43884[(2)] = null);

(statearr_42069_43884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (10))){
var inst_41988 = (state_42020[(2)]);
var inst_41989 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42020__$1 = (function (){var statearr_42075 = state_42020;
(statearr_42075[(13)] = inst_41988);

return statearr_42075;
})();
var statearr_42076_43891 = state_42020__$1;
(statearr_42076_43891[(2)] = inst_41989);


cljs.core.async.impl.ioc_helpers.process_exception(state_42020__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42021 === (8))){
var inst_42002 = (state_42020[(2)]);
var state_42020__$1 = state_42020;
var statearr_42077_43892 = state_42020__$1;
(statearr_42077_43892[(2)] = inst_42002);

(statearr_42077_43892[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___43846,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29708__auto__,c__30234__auto___43846,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_42078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42078[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_42078[(1)] = (1));

return statearr_42078;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_42020){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_42020);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e42079){if((e42079 instanceof Object)){
var ex__29712__auto__ = e42079;
var statearr_42080_43893 = state_42020;
(statearr_42080_43893[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42079;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43896 = state_42020;
state_42020 = G__43896;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_42020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_42020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___43846,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30236__auto__ = (function (){var statearr_42081 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_42081[(6)] = c__30234__auto___43846);

return statearr_42081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___43846,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42084 = arguments.length;
switch (G__42084) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30234__auto___43905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___43905,out){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___43905,out){
return (function (state_42122){
var state_val_42123 = (state_42122[(1)]);
if((state_val_42123 === (7))){
var inst_42100 = (state_42122[(7)]);
var inst_42099 = (state_42122[(8)]);
var inst_42099__$1 = (state_42122[(2)]);
var inst_42100__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42099__$1,(0),null);
var inst_42101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42099__$1,(1),null);
var inst_42102 = (inst_42100__$1 == null);
var state_42122__$1 = (function (){var statearr_42124 = state_42122;
(statearr_42124[(7)] = inst_42100__$1);

(statearr_42124[(9)] = inst_42101);

(statearr_42124[(8)] = inst_42099__$1);

return statearr_42124;
})();
if(cljs.core.truth_(inst_42102)){
var statearr_42132_43909 = state_42122__$1;
(statearr_42132_43909[(1)] = (8));

} else {
var statearr_42133_43910 = state_42122__$1;
(statearr_42133_43910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42123 === (1))){
var inst_42088 = cljs.core.vec(chs);
var inst_42089 = inst_42088;
var state_42122__$1 = (function (){var statearr_42135 = state_42122;
(statearr_42135[(10)] = inst_42089);

return statearr_42135;
})();
var statearr_42136_43911 = state_42122__$1;
(statearr_42136_43911[(2)] = null);

(statearr_42136_43911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42123 === (4))){
var inst_42089 = (state_42122[(10)]);
var state_42122__$1 = state_42122;
return cljs.core.async.ioc_alts_BANG_(state_42122__$1,(7),inst_42089);
} else {
if((state_val_42123 === (6))){
var inst_42118 = (state_42122[(2)]);
var state_42122__$1 = state_42122;
var statearr_42137_43914 = state_42122__$1;
(statearr_42137_43914[(2)] = inst_42118);

(statearr_42137_43914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42123 === (3))){
var inst_42120 = (state_42122[(2)]);
var state_42122__$1 = state_42122;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42122__$1,inst_42120);
} else {
if((state_val_42123 === (2))){
var inst_42089 = (state_42122[(10)]);
var inst_42091 = cljs.core.count(inst_42089);
var inst_42092 = (inst_42091 > (0));
var state_42122__$1 = state_42122;
if(cljs.core.truth_(inst_42092)){
var statearr_42141_43926 = state_42122__$1;
(statearr_42141_43926[(1)] = (4));

} else {
var statearr_42142_43927 = state_42122__$1;
(statearr_42142_43927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42123 === (11))){
var inst_42089 = (state_42122[(10)]);
var inst_42111 = (state_42122[(2)]);
var tmp42138 = inst_42089;
var inst_42089__$1 = tmp42138;
var state_42122__$1 = (function (){var statearr_42145 = state_42122;
(statearr_42145[(11)] = inst_42111);

(statearr_42145[(10)] = inst_42089__$1);

return statearr_42145;
})();
var statearr_42146_43931 = state_42122__$1;
(statearr_42146_43931[(2)] = null);

(statearr_42146_43931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42123 === (9))){
var inst_42100 = (state_42122[(7)]);
var state_42122__$1 = state_42122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42122__$1,(11),out,inst_42100);
} else {
if((state_val_42123 === (5))){
var inst_42116 = cljs.core.async.close_BANG_(out);
var state_42122__$1 = state_42122;
var statearr_42150_43933 = state_42122__$1;
(statearr_42150_43933[(2)] = inst_42116);

(statearr_42150_43933[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42123 === (10))){
var inst_42114 = (state_42122[(2)]);
var state_42122__$1 = state_42122;
var statearr_42153_43934 = state_42122__$1;
(statearr_42153_43934[(2)] = inst_42114);

(statearr_42153_43934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42123 === (8))){
var inst_42100 = (state_42122[(7)]);
var inst_42089 = (state_42122[(10)]);
var inst_42101 = (state_42122[(9)]);
var inst_42099 = (state_42122[(8)]);
var inst_42104 = (function (){var cs = inst_42089;
var vec__42095 = inst_42099;
var v = inst_42100;
var c = inst_42101;
return ((function (cs,vec__42095,v,c,inst_42100,inst_42089,inst_42101,inst_42099,state_val_42123,c__30234__auto___43905,out){
return (function (p1__42082_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42082_SHARP_);
});
;})(cs,vec__42095,v,c,inst_42100,inst_42089,inst_42101,inst_42099,state_val_42123,c__30234__auto___43905,out))
})();
var inst_42105 = cljs.core.filterv(inst_42104,inst_42089);
var inst_42089__$1 = inst_42105;
var state_42122__$1 = (function (){var statearr_42161 = state_42122;
(statearr_42161[(10)] = inst_42089__$1);

return statearr_42161;
})();
var statearr_42163_43935 = state_42122__$1;
(statearr_42163_43935[(2)] = null);

(statearr_42163_43935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___43905,out))
;
return ((function (switch__29708__auto__,c__30234__auto___43905,out){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_42164 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42164[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_42164[(1)] = (1));

return statearr_42164;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_42122){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_42122);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e42165){if((e42165 instanceof Object)){
var ex__29712__auto__ = e42165;
var statearr_42168_43937 = state_42122;
(statearr_42168_43937[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43941 = state_42122;
state_42122 = G__43941;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_42122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_42122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___43905,out))
})();
var state__30236__auto__ = (function (){var statearr_42171 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_42171[(6)] = c__30234__auto___43905);

return statearr_42171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___43905,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42183 = arguments.length;
switch (G__42183) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30234__auto___43943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___43943,out){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___43943,out){
return (function (state_42214){
var state_val_42215 = (state_42214[(1)]);
if((state_val_42215 === (7))){
var inst_42193 = (state_42214[(7)]);
var inst_42193__$1 = (state_42214[(2)]);
var inst_42197 = (inst_42193__$1 == null);
var inst_42198 = cljs.core.not(inst_42197);
var state_42214__$1 = (function (){var statearr_42221 = state_42214;
(statearr_42221[(7)] = inst_42193__$1);

return statearr_42221;
})();
if(inst_42198){
var statearr_42222_43947 = state_42214__$1;
(statearr_42222_43947[(1)] = (8));

} else {
var statearr_42224_43951 = state_42214__$1;
(statearr_42224_43951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42215 === (1))){
var inst_42188 = (0);
var state_42214__$1 = (function (){var statearr_42225 = state_42214;
(statearr_42225[(8)] = inst_42188);

return statearr_42225;
})();
var statearr_42226_43958 = state_42214__$1;
(statearr_42226_43958[(2)] = null);

(statearr_42226_43958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42215 === (4))){
var state_42214__$1 = state_42214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42214__$1,(7),ch);
} else {
if((state_val_42215 === (6))){
var inst_42209 = (state_42214[(2)]);
var state_42214__$1 = state_42214;
var statearr_42231_43959 = state_42214__$1;
(statearr_42231_43959[(2)] = inst_42209);

(statearr_42231_43959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42215 === (3))){
var inst_42211 = (state_42214[(2)]);
var inst_42212 = cljs.core.async.close_BANG_(out);
var state_42214__$1 = (function (){var statearr_42233 = state_42214;
(statearr_42233[(9)] = inst_42211);

return statearr_42233;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42214__$1,inst_42212);
} else {
if((state_val_42215 === (2))){
var inst_42188 = (state_42214[(8)]);
var inst_42190 = (inst_42188 < n);
var state_42214__$1 = state_42214;
if(cljs.core.truth_(inst_42190)){
var statearr_42234_43961 = state_42214__$1;
(statearr_42234_43961[(1)] = (4));

} else {
var statearr_42236_43962 = state_42214__$1;
(statearr_42236_43962[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42215 === (11))){
var inst_42188 = (state_42214[(8)]);
var inst_42201 = (state_42214[(2)]);
var inst_42202 = (inst_42188 + (1));
var inst_42188__$1 = inst_42202;
var state_42214__$1 = (function (){var statearr_42237 = state_42214;
(statearr_42237[(10)] = inst_42201);

(statearr_42237[(8)] = inst_42188__$1);

return statearr_42237;
})();
var statearr_42238_43965 = state_42214__$1;
(statearr_42238_43965[(2)] = null);

(statearr_42238_43965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42215 === (9))){
var state_42214__$1 = state_42214;
var statearr_42239_43967 = state_42214__$1;
(statearr_42239_43967[(2)] = null);

(statearr_42239_43967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42215 === (5))){
var state_42214__$1 = state_42214;
var statearr_42240_43968 = state_42214__$1;
(statearr_42240_43968[(2)] = null);

(statearr_42240_43968[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42215 === (10))){
var inst_42206 = (state_42214[(2)]);
var state_42214__$1 = state_42214;
var statearr_42241_43970 = state_42214__$1;
(statearr_42241_43970[(2)] = inst_42206);

(statearr_42241_43970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42215 === (8))){
var inst_42193 = (state_42214[(7)]);
var state_42214__$1 = state_42214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42214__$1,(11),out,inst_42193);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___43943,out))
;
return ((function (switch__29708__auto__,c__30234__auto___43943,out){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_42242 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42242[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_42242[(1)] = (1));

return statearr_42242;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_42214){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_42214);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e42244){if((e42244 instanceof Object)){
var ex__29712__auto__ = e42244;
var statearr_42245_43972 = state_42214;
(statearr_42245_43972[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43973 = state_42214;
state_42214 = G__43973;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_42214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_42214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___43943,out))
})();
var state__30236__auto__ = (function (){var statearr_42248 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_42248[(6)] = c__30234__auto___43943);

return statearr_42248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___43943,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42257 = (function (f,ch,meta42258){
this.f = f;
this.ch = ch;
this.meta42258 = meta42258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42259,meta42258__$1){
var self__ = this;
var _42259__$1 = this;
return (new cljs.core.async.t_cljs$core$async42257(self__.f,self__.ch,meta42258__$1));
});

cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42259){
var self__ = this;
var _42259__$1 = this;
return self__.meta42258;
});

cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42263 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42263 = (function (f,ch,meta42258,_,fn1,meta42264){
this.f = f;
this.ch = ch;
this.meta42258 = meta42258;
this._ = _;
this.fn1 = fn1;
this.meta42264 = meta42264;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42265,meta42264__$1){
var self__ = this;
var _42265__$1 = this;
return (new cljs.core.async.t_cljs$core$async42263(self__.f,self__.ch,self__.meta42258,self__._,self__.fn1,meta42264__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42263.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42265){
var self__ = this;
var _42265__$1 = this;
return self__.meta42264;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42263.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42263.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42252_SHARP_){
var G__42269 = (((p1__42252_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42252_SHARP_) : self__.f.call(null,p1__42252_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42269) : f1.call(null,G__42269));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42263.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42258","meta42258",1411392074,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42257","cljs.core.async/t_cljs$core$async42257",-36955411,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42264","meta42264",1931845038,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42263.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42263.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42263";

cljs.core.async.t_cljs$core$async42263.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42263");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42263.
 */
cljs.core.async.__GT_t_cljs$core$async42263 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42263(f__$1,ch__$1,meta42258__$1,___$2,fn1__$1,meta42264){
return (new cljs.core.async.t_cljs$core$async42263(f__$1,ch__$1,meta42258__$1,___$2,fn1__$1,meta42264));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42263(self__.f,self__.ch,self__.meta42258,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42277 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42277) : self__.f.call(null,G__42277));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42258","meta42258",1411392074,null)], null);
});

cljs.core.async.t_cljs$core$async42257.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42257";

cljs.core.async.t_cljs$core$async42257.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42257");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42257.
 */
cljs.core.async.__GT_t_cljs$core$async42257 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42257(f__$1,ch__$1,meta42258){
return (new cljs.core.async.t_cljs$core$async42257(f__$1,ch__$1,meta42258));
});

}

return (new cljs.core.async.t_cljs$core$async42257(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42292 = (function (f,ch,meta42293){
this.f = f;
this.ch = ch;
this.meta42293 = meta42293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42294,meta42293__$1){
var self__ = this;
var _42294__$1 = this;
return (new cljs.core.async.t_cljs$core$async42292(self__.f,self__.ch,meta42293__$1));
});

cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42294){
var self__ = this;
var _42294__$1 = this;
return self__.meta42293;
});

cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async42292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42293","meta42293",-261609823,null)], null);
});

cljs.core.async.t_cljs$core$async42292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42292";

cljs.core.async.t_cljs$core$async42292.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42292");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42292.
 */
cljs.core.async.__GT_t_cljs$core$async42292 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42292(f__$1,ch__$1,meta42293){
return (new cljs.core.async.t_cljs$core$async42292(f__$1,ch__$1,meta42293));
});

}

return (new cljs.core.async.t_cljs$core$async42292(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42312 = (function (p,ch,meta42313){
this.p = p;
this.ch = ch;
this.meta42313 = meta42313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42314,meta42313__$1){
var self__ = this;
var _42314__$1 = this;
return (new cljs.core.async.t_cljs$core$async42312(self__.p,self__.ch,meta42313__$1));
});

cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42314){
var self__ = this;
var _42314__$1 = this;
return self__.meta42313;
});

cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42313","meta42313",-1405040911,null)], null);
});

cljs.core.async.t_cljs$core$async42312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42312";

cljs.core.async.t_cljs$core$async42312.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async42312");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42312.
 */
cljs.core.async.__GT_t_cljs$core$async42312 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42312(p__$1,ch__$1,meta42313){
return (new cljs.core.async.t_cljs$core$async42312(p__$1,ch__$1,meta42313));
});

}

return (new cljs.core.async.t_cljs$core$async42312(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42330 = arguments.length;
switch (G__42330) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30234__auto___44039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___44039,out){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___44039,out){
return (function (state_42365){
var state_val_42366 = (state_42365[(1)]);
if((state_val_42366 === (7))){
var inst_42361 = (state_42365[(2)]);
var state_42365__$1 = state_42365;
var statearr_42368_44045 = state_42365__$1;
(statearr_42368_44045[(2)] = inst_42361);

(statearr_42368_44045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (1))){
var state_42365__$1 = state_42365;
var statearr_42369_44052 = state_42365__$1;
(statearr_42369_44052[(2)] = null);

(statearr_42369_44052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (4))){
var inst_42343 = (state_42365[(7)]);
var inst_42343__$1 = (state_42365[(2)]);
var inst_42348 = (inst_42343__$1 == null);
var state_42365__$1 = (function (){var statearr_42371 = state_42365;
(statearr_42371[(7)] = inst_42343__$1);

return statearr_42371;
})();
if(cljs.core.truth_(inst_42348)){
var statearr_42372_44053 = state_42365__$1;
(statearr_42372_44053[(1)] = (5));

} else {
var statearr_42373_44054 = state_42365__$1;
(statearr_42373_44054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (6))){
var inst_42343 = (state_42365[(7)]);
var inst_42352 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42343) : p.call(null,inst_42343));
var state_42365__$1 = state_42365;
if(cljs.core.truth_(inst_42352)){
var statearr_42378_44055 = state_42365__$1;
(statearr_42378_44055[(1)] = (8));

} else {
var statearr_42379_44056 = state_42365__$1;
(statearr_42379_44056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (3))){
var inst_42363 = (state_42365[(2)]);
var state_42365__$1 = state_42365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42365__$1,inst_42363);
} else {
if((state_val_42366 === (2))){
var state_42365__$1 = state_42365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42365__$1,(4),ch);
} else {
if((state_val_42366 === (11))){
var inst_42355 = (state_42365[(2)]);
var state_42365__$1 = state_42365;
var statearr_42380_44057 = state_42365__$1;
(statearr_42380_44057[(2)] = inst_42355);

(statearr_42380_44057[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (9))){
var state_42365__$1 = state_42365;
var statearr_42384_44058 = state_42365__$1;
(statearr_42384_44058[(2)] = null);

(statearr_42384_44058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (5))){
var inst_42350 = cljs.core.async.close_BANG_(out);
var state_42365__$1 = state_42365;
var statearr_42385_44059 = state_42365__$1;
(statearr_42385_44059[(2)] = inst_42350);

(statearr_42385_44059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (10))){
var inst_42358 = (state_42365[(2)]);
var state_42365__$1 = (function (){var statearr_42386 = state_42365;
(statearr_42386[(8)] = inst_42358);

return statearr_42386;
})();
var statearr_42387_44060 = state_42365__$1;
(statearr_42387_44060[(2)] = null);

(statearr_42387_44060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42366 === (8))){
var inst_42343 = (state_42365[(7)]);
var state_42365__$1 = state_42365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42365__$1,(11),out,inst_42343);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___44039,out))
;
return ((function (switch__29708__auto__,c__30234__auto___44039,out){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_42388 = [null,null,null,null,null,null,null,null,null];
(statearr_42388[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_42388[(1)] = (1));

return statearr_42388;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_42365){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_42365);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e42390){if((e42390 instanceof Object)){
var ex__29712__auto__ = e42390;
var statearr_42391_44070 = state_42365;
(statearr_42391_44070[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42390;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44075 = state_42365;
state_42365 = G__44075;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_42365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_42365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___44039,out))
})();
var state__30236__auto__ = (function (){var statearr_42392 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_42392[(6)] = c__30234__auto___44039);

return statearr_42392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___44039,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42394 = arguments.length;
switch (G__42394) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30234__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto__){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto__){
return (function (state_42467){
var state_val_42468 = (state_42467[(1)]);
if((state_val_42468 === (7))){
var inst_42462 = (state_42467[(2)]);
var state_42467__$1 = state_42467;
var statearr_42470_44100 = state_42467__$1;
(statearr_42470_44100[(2)] = inst_42462);

(statearr_42470_44100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (20))){
var inst_42430 = (state_42467[(7)]);
var inst_42441 = (state_42467[(2)]);
var inst_42442 = cljs.core.next(inst_42430);
var inst_42415 = inst_42442;
var inst_42416 = null;
var inst_42417 = (0);
var inst_42418 = (0);
var state_42467__$1 = (function (){var statearr_42471 = state_42467;
(statearr_42471[(8)] = inst_42441);

(statearr_42471[(9)] = inst_42416);

(statearr_42471[(10)] = inst_42417);

(statearr_42471[(11)] = inst_42418);

(statearr_42471[(12)] = inst_42415);

return statearr_42471;
})();
var statearr_42472_44103 = state_42467__$1;
(statearr_42472_44103[(2)] = null);

(statearr_42472_44103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (1))){
var state_42467__$1 = state_42467;
var statearr_42482_44104 = state_42467__$1;
(statearr_42482_44104[(2)] = null);

(statearr_42482_44104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (4))){
var inst_42403 = (state_42467[(13)]);
var inst_42403__$1 = (state_42467[(2)]);
var inst_42404 = (inst_42403__$1 == null);
var state_42467__$1 = (function (){var statearr_42483 = state_42467;
(statearr_42483[(13)] = inst_42403__$1);

return statearr_42483;
})();
if(cljs.core.truth_(inst_42404)){
var statearr_42484_44105 = state_42467__$1;
(statearr_42484_44105[(1)] = (5));

} else {
var statearr_42485_44106 = state_42467__$1;
(statearr_42485_44106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (15))){
var state_42467__$1 = state_42467;
var statearr_42493_44110 = state_42467__$1;
(statearr_42493_44110[(2)] = null);

(statearr_42493_44110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (21))){
var state_42467__$1 = state_42467;
var statearr_42494_44111 = state_42467__$1;
(statearr_42494_44111[(2)] = null);

(statearr_42494_44111[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (13))){
var inst_42416 = (state_42467[(9)]);
var inst_42417 = (state_42467[(10)]);
var inst_42418 = (state_42467[(11)]);
var inst_42415 = (state_42467[(12)]);
var inst_42425 = (state_42467[(2)]);
var inst_42426 = (inst_42418 + (1));
var tmp42490 = inst_42416;
var tmp42491 = inst_42417;
var tmp42492 = inst_42415;
var inst_42415__$1 = tmp42492;
var inst_42416__$1 = tmp42490;
var inst_42417__$1 = tmp42491;
var inst_42418__$1 = inst_42426;
var state_42467__$1 = (function (){var statearr_42496 = state_42467;
(statearr_42496[(9)] = inst_42416__$1);

(statearr_42496[(10)] = inst_42417__$1);

(statearr_42496[(11)] = inst_42418__$1);

(statearr_42496[(12)] = inst_42415__$1);

(statearr_42496[(14)] = inst_42425);

return statearr_42496;
})();
var statearr_42497_44114 = state_42467__$1;
(statearr_42497_44114[(2)] = null);

(statearr_42497_44114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (22))){
var state_42467__$1 = state_42467;
var statearr_42498_44116 = state_42467__$1;
(statearr_42498_44116[(2)] = null);

(statearr_42498_44116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (6))){
var inst_42403 = (state_42467[(13)]);
var inst_42413 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42403) : f.call(null,inst_42403));
var inst_42414 = cljs.core.seq(inst_42413);
var inst_42415 = inst_42414;
var inst_42416 = null;
var inst_42417 = (0);
var inst_42418 = (0);
var state_42467__$1 = (function (){var statearr_42500 = state_42467;
(statearr_42500[(9)] = inst_42416);

(statearr_42500[(10)] = inst_42417);

(statearr_42500[(11)] = inst_42418);

(statearr_42500[(12)] = inst_42415);

return statearr_42500;
})();
var statearr_42501_44119 = state_42467__$1;
(statearr_42501_44119[(2)] = null);

(statearr_42501_44119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (17))){
var inst_42430 = (state_42467[(7)]);
var inst_42434 = cljs.core.chunk_first(inst_42430);
var inst_42435 = cljs.core.chunk_rest(inst_42430);
var inst_42436 = cljs.core.count(inst_42434);
var inst_42415 = inst_42435;
var inst_42416 = inst_42434;
var inst_42417 = inst_42436;
var inst_42418 = (0);
var state_42467__$1 = (function (){var statearr_42503 = state_42467;
(statearr_42503[(9)] = inst_42416);

(statearr_42503[(10)] = inst_42417);

(statearr_42503[(11)] = inst_42418);

(statearr_42503[(12)] = inst_42415);

return statearr_42503;
})();
var statearr_42505_44120 = state_42467__$1;
(statearr_42505_44120[(2)] = null);

(statearr_42505_44120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (3))){
var inst_42465 = (state_42467[(2)]);
var state_42467__$1 = state_42467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42467__$1,inst_42465);
} else {
if((state_val_42468 === (12))){
var inst_42450 = (state_42467[(2)]);
var state_42467__$1 = state_42467;
var statearr_42506_44128 = state_42467__$1;
(statearr_42506_44128[(2)] = inst_42450);

(statearr_42506_44128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (2))){
var state_42467__$1 = state_42467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42467__$1,(4),in$);
} else {
if((state_val_42468 === (23))){
var inst_42460 = (state_42467[(2)]);
var state_42467__$1 = state_42467;
var statearr_42510_44144 = state_42467__$1;
(statearr_42510_44144[(2)] = inst_42460);

(statearr_42510_44144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (19))){
var inst_42445 = (state_42467[(2)]);
var state_42467__$1 = state_42467;
var statearr_42511_44152 = state_42467__$1;
(statearr_42511_44152[(2)] = inst_42445);

(statearr_42511_44152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (11))){
var inst_42430 = (state_42467[(7)]);
var inst_42415 = (state_42467[(12)]);
var inst_42430__$1 = cljs.core.seq(inst_42415);
var state_42467__$1 = (function (){var statearr_42512 = state_42467;
(statearr_42512[(7)] = inst_42430__$1);

return statearr_42512;
})();
if(inst_42430__$1){
var statearr_42517_44165 = state_42467__$1;
(statearr_42517_44165[(1)] = (14));

} else {
var statearr_42518_44170 = state_42467__$1;
(statearr_42518_44170[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (9))){
var inst_42452 = (state_42467[(2)]);
var inst_42454 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42467__$1 = (function (){var statearr_42524 = state_42467;
(statearr_42524[(15)] = inst_42452);

return statearr_42524;
})();
if(cljs.core.truth_(inst_42454)){
var statearr_42525_44175 = state_42467__$1;
(statearr_42525_44175[(1)] = (21));

} else {
var statearr_42526_44180 = state_42467__$1;
(statearr_42526_44180[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (5))){
var inst_42406 = cljs.core.async.close_BANG_(out);
var state_42467__$1 = state_42467;
var statearr_42527_44187 = state_42467__$1;
(statearr_42527_44187[(2)] = inst_42406);

(statearr_42527_44187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (14))){
var inst_42430 = (state_42467[(7)]);
var inst_42432 = cljs.core.chunked_seq_QMARK_(inst_42430);
var state_42467__$1 = state_42467;
if(inst_42432){
var statearr_42528_44189 = state_42467__$1;
(statearr_42528_44189[(1)] = (17));

} else {
var statearr_42529_44194 = state_42467__$1;
(statearr_42529_44194[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (16))){
var inst_42448 = (state_42467[(2)]);
var state_42467__$1 = state_42467;
var statearr_42530_44206 = state_42467__$1;
(statearr_42530_44206[(2)] = inst_42448);

(statearr_42530_44206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42468 === (10))){
var inst_42416 = (state_42467[(9)]);
var inst_42418 = (state_42467[(11)]);
var inst_42423 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42416,inst_42418);
var state_42467__$1 = state_42467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42467__$1,(13),out,inst_42423);
} else {
if((state_val_42468 === (18))){
var inst_42430 = (state_42467[(7)]);
var inst_42439 = cljs.core.first(inst_42430);
var state_42467__$1 = state_42467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42467__$1,(20),out,inst_42439);
} else {
if((state_val_42468 === (8))){
var inst_42417 = (state_42467[(10)]);
var inst_42418 = (state_42467[(11)]);
var inst_42420 = (inst_42418 < inst_42417);
var inst_42421 = inst_42420;
var state_42467__$1 = state_42467;
if(cljs.core.truth_(inst_42421)){
var statearr_42531_44238 = state_42467__$1;
(statearr_42531_44238[(1)] = (10));

} else {
var statearr_42536_44240 = state_42467__$1;
(statearr_42536_44240[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto__))
;
return ((function (switch__29708__auto__,c__30234__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29709__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29709__auto____0 = (function (){
var statearr_42537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42537[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29709__auto__);

(statearr_42537[(1)] = (1));

return statearr_42537;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29709__auto____1 = (function (state_42467){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_42467);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e42538){if((e42538 instanceof Object)){
var ex__29712__auto__ = e42538;
var statearr_42539_44242 = state_42467;
(statearr_42539_44242[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42538;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44243 = state_42467;
state_42467 = G__44243;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29709__auto__ = function(state_42467){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29709__auto____1.call(this,state_42467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29709__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29709__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto__))
})();
var state__30236__auto__ = (function (){var statearr_42543 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_42543[(6)] = c__30234__auto__);

return statearr_42543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto__))
);

return c__30234__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__42547 = arguments.length;
switch (G__42547) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__42553 = arguments.length;
switch (G__42553) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__42564 = arguments.length;
switch (G__42564) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30234__auto___44271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___44271,out){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___44271,out){
return (function (state_42593){
var state_val_42594 = (state_42593[(1)]);
if((state_val_42594 === (7))){
var inst_42587 = (state_42593[(2)]);
var state_42593__$1 = state_42593;
var statearr_42600_44276 = state_42593__$1;
(statearr_42600_44276[(2)] = inst_42587);

(statearr_42600_44276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42594 === (1))){
var inst_42565 = null;
var state_42593__$1 = (function (){var statearr_42601 = state_42593;
(statearr_42601[(7)] = inst_42565);

return statearr_42601;
})();
var statearr_42602_44277 = state_42593__$1;
(statearr_42602_44277[(2)] = null);

(statearr_42602_44277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42594 === (4))){
var inst_42568 = (state_42593[(8)]);
var inst_42568__$1 = (state_42593[(2)]);
var inst_42573 = (inst_42568__$1 == null);
var inst_42574 = cljs.core.not(inst_42573);
var state_42593__$1 = (function (){var statearr_42606 = state_42593;
(statearr_42606[(8)] = inst_42568__$1);

return statearr_42606;
})();
if(inst_42574){
var statearr_42607_44278 = state_42593__$1;
(statearr_42607_44278[(1)] = (5));

} else {
var statearr_42608_44280 = state_42593__$1;
(statearr_42608_44280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42594 === (6))){
var state_42593__$1 = state_42593;
var statearr_42609_44284 = state_42593__$1;
(statearr_42609_44284[(2)] = null);

(statearr_42609_44284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42594 === (3))){
var inst_42590 = (state_42593[(2)]);
var inst_42591 = cljs.core.async.close_BANG_(out);
var state_42593__$1 = (function (){var statearr_42612 = state_42593;
(statearr_42612[(9)] = inst_42590);

return statearr_42612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42593__$1,inst_42591);
} else {
if((state_val_42594 === (2))){
var state_42593__$1 = state_42593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42593__$1,(4),ch);
} else {
if((state_val_42594 === (11))){
var inst_42568 = (state_42593[(8)]);
var inst_42581 = (state_42593[(2)]);
var inst_42565 = inst_42568;
var state_42593__$1 = (function (){var statearr_42616 = state_42593;
(statearr_42616[(10)] = inst_42581);

(statearr_42616[(7)] = inst_42565);

return statearr_42616;
})();
var statearr_42617_44288 = state_42593__$1;
(statearr_42617_44288[(2)] = null);

(statearr_42617_44288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42594 === (9))){
var inst_42568 = (state_42593[(8)]);
var state_42593__$1 = state_42593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42593__$1,(11),out,inst_42568);
} else {
if((state_val_42594 === (5))){
var inst_42568 = (state_42593[(8)]);
var inst_42565 = (state_42593[(7)]);
var inst_42576 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42568,inst_42565);
var state_42593__$1 = state_42593;
if(inst_42576){
var statearr_42620_44291 = state_42593__$1;
(statearr_42620_44291[(1)] = (8));

} else {
var statearr_42621_44293 = state_42593__$1;
(statearr_42621_44293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42594 === (10))){
var inst_42584 = (state_42593[(2)]);
var state_42593__$1 = state_42593;
var statearr_42623_44298 = state_42593__$1;
(statearr_42623_44298[(2)] = inst_42584);

(statearr_42623_44298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42594 === (8))){
var inst_42565 = (state_42593[(7)]);
var tmp42619 = inst_42565;
var inst_42565__$1 = tmp42619;
var state_42593__$1 = (function (){var statearr_42624 = state_42593;
(statearr_42624[(7)] = inst_42565__$1);

return statearr_42624;
})();
var statearr_42625_44304 = state_42593__$1;
(statearr_42625_44304[(2)] = null);

(statearr_42625_44304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___44271,out))
;
return ((function (switch__29708__auto__,c__30234__auto___44271,out){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_42628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42628[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_42628[(1)] = (1));

return statearr_42628;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_42593){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_42593);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e42631){if((e42631 instanceof Object)){
var ex__29712__auto__ = e42631;
var statearr_42638_44325 = state_42593;
(statearr_42638_44325[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44330 = state_42593;
state_42593 = G__44330;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_42593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_42593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___44271,out))
})();
var state__30236__auto__ = (function (){var statearr_42640 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_42640[(6)] = c__30234__auto___44271);

return statearr_42640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___44271,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__42645 = arguments.length;
switch (G__42645) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30234__auto___44359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___44359,out){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___44359,out){
return (function (state_42688){
var state_val_42689 = (state_42688[(1)]);
if((state_val_42689 === (7))){
var inst_42684 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
var statearr_42693_44368 = state_42688__$1;
(statearr_42693_44368[(2)] = inst_42684);

(statearr_42693_44368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (1))){
var inst_42650 = (new Array(n));
var inst_42651 = inst_42650;
var inst_42652 = (0);
var state_42688__$1 = (function (){var statearr_42694 = state_42688;
(statearr_42694[(7)] = inst_42652);

(statearr_42694[(8)] = inst_42651);

return statearr_42694;
})();
var statearr_42695_44374 = state_42688__$1;
(statearr_42695_44374[(2)] = null);

(statearr_42695_44374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (4))){
var inst_42655 = (state_42688[(9)]);
var inst_42655__$1 = (state_42688[(2)]);
var inst_42656 = (inst_42655__$1 == null);
var inst_42657 = cljs.core.not(inst_42656);
var state_42688__$1 = (function (){var statearr_42696 = state_42688;
(statearr_42696[(9)] = inst_42655__$1);

return statearr_42696;
})();
if(inst_42657){
var statearr_42697_44382 = state_42688__$1;
(statearr_42697_44382[(1)] = (5));

} else {
var statearr_42700_44383 = state_42688__$1;
(statearr_42700_44383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (15))){
var inst_42678 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
var statearr_42703_44387 = state_42688__$1;
(statearr_42703_44387[(2)] = inst_42678);

(statearr_42703_44387[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (13))){
var state_42688__$1 = state_42688;
var statearr_42705_44391 = state_42688__$1;
(statearr_42705_44391[(2)] = null);

(statearr_42705_44391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (6))){
var inst_42652 = (state_42688[(7)]);
var inst_42674 = (inst_42652 > (0));
var state_42688__$1 = state_42688;
if(cljs.core.truth_(inst_42674)){
var statearr_42706_44393 = state_42688__$1;
(statearr_42706_44393[(1)] = (12));

} else {
var statearr_42707_44394 = state_42688__$1;
(statearr_42707_44394[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (3))){
var inst_42686 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42688__$1,inst_42686);
} else {
if((state_val_42689 === (12))){
var inst_42651 = (state_42688[(8)]);
var inst_42676 = cljs.core.vec(inst_42651);
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42688__$1,(15),out,inst_42676);
} else {
if((state_val_42689 === (2))){
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42688__$1,(4),ch);
} else {
if((state_val_42689 === (11))){
var inst_42667 = (state_42688[(2)]);
var inst_42669 = (new Array(n));
var inst_42651 = inst_42669;
var inst_42652 = (0);
var state_42688__$1 = (function (){var statearr_42710 = state_42688;
(statearr_42710[(7)] = inst_42652);

(statearr_42710[(8)] = inst_42651);

(statearr_42710[(10)] = inst_42667);

return statearr_42710;
})();
var statearr_42713_44402 = state_42688__$1;
(statearr_42713_44402[(2)] = null);

(statearr_42713_44402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (9))){
var inst_42651 = (state_42688[(8)]);
var inst_42665 = cljs.core.vec(inst_42651);
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42688__$1,(11),out,inst_42665);
} else {
if((state_val_42689 === (5))){
var inst_42652 = (state_42688[(7)]);
var inst_42660 = (state_42688[(11)]);
var inst_42651 = (state_42688[(8)]);
var inst_42655 = (state_42688[(9)]);
var inst_42659 = (inst_42651[inst_42652] = inst_42655);
var inst_42660__$1 = (inst_42652 + (1));
var inst_42661 = (inst_42660__$1 < n);
var state_42688__$1 = (function (){var statearr_42714 = state_42688;
(statearr_42714[(12)] = inst_42659);

(statearr_42714[(11)] = inst_42660__$1);

return statearr_42714;
})();
if(cljs.core.truth_(inst_42661)){
var statearr_42716_44411 = state_42688__$1;
(statearr_42716_44411[(1)] = (8));

} else {
var statearr_42717_44414 = state_42688__$1;
(statearr_42717_44414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (14))){
var inst_42681 = (state_42688[(2)]);
var inst_42682 = cljs.core.async.close_BANG_(out);
var state_42688__$1 = (function (){var statearr_42719 = state_42688;
(statearr_42719[(13)] = inst_42681);

return statearr_42719;
})();
var statearr_42720_44415 = state_42688__$1;
(statearr_42720_44415[(2)] = inst_42682);

(statearr_42720_44415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (10))){
var inst_42672 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
var statearr_42721_44420 = state_42688__$1;
(statearr_42721_44420[(2)] = inst_42672);

(statearr_42721_44420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (8))){
var inst_42660 = (state_42688[(11)]);
var inst_42651 = (state_42688[(8)]);
var tmp42718 = inst_42651;
var inst_42651__$1 = tmp42718;
var inst_42652 = inst_42660;
var state_42688__$1 = (function (){var statearr_42722 = state_42688;
(statearr_42722[(7)] = inst_42652);

(statearr_42722[(8)] = inst_42651__$1);

return statearr_42722;
})();
var statearr_42723_44430 = state_42688__$1;
(statearr_42723_44430[(2)] = null);

(statearr_42723_44430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___44359,out))
;
return ((function (switch__29708__auto__,c__30234__auto___44359,out){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_42727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42727[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_42727[(1)] = (1));

return statearr_42727;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_42688){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_42688);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e42729){if((e42729 instanceof Object)){
var ex__29712__auto__ = e42729;
var statearr_42731_44433 = state_42688;
(statearr_42731_44433[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44434 = state_42688;
state_42688 = G__44434;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_42688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_42688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___44359,out))
})();
var state__30236__auto__ = (function (){var statearr_42734 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_42734[(6)] = c__30234__auto___44359);

return statearr_42734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___44359,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__42743 = arguments.length;
switch (G__42743) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30234__auto___44436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___44436,out){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___44436,out){
return (function (state_42807){
var state_val_42808 = (state_42807[(1)]);
if((state_val_42808 === (7))){
var inst_42797 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
var statearr_42809_44439 = state_42807__$1;
(statearr_42809_44439[(2)] = inst_42797);

(statearr_42809_44439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (1))){
var inst_42750 = [];
var inst_42751 = inst_42750;
var inst_42752 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42807__$1 = (function (){var statearr_42813 = state_42807;
(statearr_42813[(7)] = inst_42751);

(statearr_42813[(8)] = inst_42752);

return statearr_42813;
})();
var statearr_42814_44441 = state_42807__$1;
(statearr_42814_44441[(2)] = null);

(statearr_42814_44441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (4))){
var inst_42755 = (state_42807[(9)]);
var inst_42755__$1 = (state_42807[(2)]);
var inst_42757 = (inst_42755__$1 == null);
var inst_42758 = cljs.core.not(inst_42757);
var state_42807__$1 = (function (){var statearr_42818 = state_42807;
(statearr_42818[(9)] = inst_42755__$1);

return statearr_42818;
})();
if(inst_42758){
var statearr_42819_44443 = state_42807__$1;
(statearr_42819_44443[(1)] = (5));

} else {
var statearr_42820_44444 = state_42807__$1;
(statearr_42820_44444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (15))){
var inst_42791 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
var statearr_42821_44445 = state_42807__$1;
(statearr_42821_44445[(2)] = inst_42791);

(statearr_42821_44445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (13))){
var state_42807__$1 = state_42807;
var statearr_42826_44449 = state_42807__$1;
(statearr_42826_44449[(2)] = null);

(statearr_42826_44449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (6))){
var inst_42751 = (state_42807[(7)]);
var inst_42785 = inst_42751.length;
var inst_42786 = (inst_42785 > (0));
var state_42807__$1 = state_42807;
if(cljs.core.truth_(inst_42786)){
var statearr_42827_44450 = state_42807__$1;
(statearr_42827_44450[(1)] = (12));

} else {
var statearr_42828_44451 = state_42807__$1;
(statearr_42828_44451[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (3))){
var inst_42799 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42807__$1,inst_42799);
} else {
if((state_val_42808 === (12))){
var inst_42751 = (state_42807[(7)]);
var inst_42789 = cljs.core.vec(inst_42751);
var state_42807__$1 = state_42807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42807__$1,(15),out,inst_42789);
} else {
if((state_val_42808 === (2))){
var state_42807__$1 = state_42807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42807__$1,(4),ch);
} else {
if((state_val_42808 === (11))){
var inst_42760 = (state_42807[(10)]);
var inst_42755 = (state_42807[(9)]);
var inst_42778 = (state_42807[(2)]);
var inst_42779 = [];
var inst_42780 = inst_42779.push(inst_42755);
var inst_42751 = inst_42779;
var inst_42752 = inst_42760;
var state_42807__$1 = (function (){var statearr_42829 = state_42807;
(statearr_42829[(7)] = inst_42751);

(statearr_42829[(11)] = inst_42780);

(statearr_42829[(8)] = inst_42752);

(statearr_42829[(12)] = inst_42778);

return statearr_42829;
})();
var statearr_42830_44461 = state_42807__$1;
(statearr_42830_44461[(2)] = null);

(statearr_42830_44461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (9))){
var inst_42751 = (state_42807[(7)]);
var inst_42776 = cljs.core.vec(inst_42751);
var state_42807__$1 = state_42807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42807__$1,(11),out,inst_42776);
} else {
if((state_val_42808 === (5))){
var inst_42760 = (state_42807[(10)]);
var inst_42755 = (state_42807[(9)]);
var inst_42752 = (state_42807[(8)]);
var inst_42760__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42755) : f.call(null,inst_42755));
var inst_42769 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42760__$1,inst_42752);
var inst_42770 = cljs.core.keyword_identical_QMARK_(inst_42752,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42771 = ((inst_42769) || (inst_42770));
var state_42807__$1 = (function (){var statearr_42834 = state_42807;
(statearr_42834[(10)] = inst_42760__$1);

return statearr_42834;
})();
if(cljs.core.truth_(inst_42771)){
var statearr_42835_44462 = state_42807__$1;
(statearr_42835_44462[(1)] = (8));

} else {
var statearr_42839_44463 = state_42807__$1;
(statearr_42839_44463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (14))){
var inst_42794 = (state_42807[(2)]);
var inst_42795 = cljs.core.async.close_BANG_(out);
var state_42807__$1 = (function (){var statearr_42841 = state_42807;
(statearr_42841[(13)] = inst_42794);

return statearr_42841;
})();
var statearr_42845_44467 = state_42807__$1;
(statearr_42845_44467[(2)] = inst_42795);

(statearr_42845_44467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (10))){
var inst_42783 = (state_42807[(2)]);
var state_42807__$1 = state_42807;
var statearr_42847_44472 = state_42807__$1;
(statearr_42847_44472[(2)] = inst_42783);

(statearr_42847_44472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42808 === (8))){
var inst_42751 = (state_42807[(7)]);
var inst_42760 = (state_42807[(10)]);
var inst_42755 = (state_42807[(9)]);
var inst_42773 = inst_42751.push(inst_42755);
var tmp42840 = inst_42751;
var inst_42751__$1 = tmp42840;
var inst_42752 = inst_42760;
var state_42807__$1 = (function (){var statearr_42848 = state_42807;
(statearr_42848[(14)] = inst_42773);

(statearr_42848[(7)] = inst_42751__$1);

(statearr_42848[(8)] = inst_42752);

return statearr_42848;
})();
var statearr_42849_44473 = state_42807__$1;
(statearr_42849_44473[(2)] = null);

(statearr_42849_44473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30234__auto___44436,out))
;
return ((function (switch__29708__auto__,c__30234__auto___44436,out){
return (function() {
var cljs$core$async$state_machine__29709__auto__ = null;
var cljs$core$async$state_machine__29709__auto____0 = (function (){
var statearr_42850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42850[(0)] = cljs$core$async$state_machine__29709__auto__);

(statearr_42850[(1)] = (1));

return statearr_42850;
});
var cljs$core$async$state_machine__29709__auto____1 = (function (state_42807){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_42807);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e42851){if((e42851 instanceof Object)){
var ex__29712__auto__ = e42851;
var statearr_42852_44482 = state_42807;
(statearr_42852_44482[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44486 = state_42807;
state_42807 = G__44486;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
cljs$core$async$state_machine__29709__auto__ = function(state_42807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29709__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29709__auto____1.call(this,state_42807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29709__auto____0;
cljs$core$async$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29709__auto____1;
return cljs$core$async$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___44436,out))
})();
var state__30236__auto__ = (function (){var statearr_42856 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_42856[(6)] = c__30234__auto___44436);

return statearr_42856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___44436,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
