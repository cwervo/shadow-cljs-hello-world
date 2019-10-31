goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40918){
var map__40919 = p__40918;
var map__40919__$1 = (((((!((map__40919 == null))))?(((((map__40919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40919):map__40919);
var m = map__40919__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40919__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40919__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40931_41335 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40932_41336 = null;
var count__40933_41337 = (0);
var i__40934_41338 = (0);
while(true){
if((i__40934_41338 < count__40933_41337)){
var f_41339 = chunk__40932_41336.cljs$core$IIndexed$_nth$arity$2(null,i__40934_41338);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41339], 0));


var G__41342 = seq__40931_41335;
var G__41343 = chunk__40932_41336;
var G__41344 = count__40933_41337;
var G__41345 = (i__40934_41338 + (1));
seq__40931_41335 = G__41342;
chunk__40932_41336 = G__41343;
count__40933_41337 = G__41344;
i__40934_41338 = G__41345;
continue;
} else {
var temp__5735__auto___41347 = cljs.core.seq(seq__40931_41335);
if(temp__5735__auto___41347){
var seq__40931_41348__$1 = temp__5735__auto___41347;
if(cljs.core.chunked_seq_QMARK_(seq__40931_41348__$1)){
var c__4550__auto___41349 = cljs.core.chunk_first(seq__40931_41348__$1);
var G__41350 = cljs.core.chunk_rest(seq__40931_41348__$1);
var G__41351 = c__4550__auto___41349;
var G__41352 = cljs.core.count(c__4550__auto___41349);
var G__41353 = (0);
seq__40931_41335 = G__41350;
chunk__40932_41336 = G__41351;
count__40933_41337 = G__41352;
i__40934_41338 = G__41353;
continue;
} else {
var f_41355 = cljs.core.first(seq__40931_41348__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41355], 0));


var G__41356 = cljs.core.next(seq__40931_41348__$1);
var G__41357 = null;
var G__41358 = (0);
var G__41359 = (0);
seq__40931_41335 = G__41356;
chunk__40932_41336 = G__41357;
count__40933_41337 = G__41358;
i__40934_41338 = G__41359;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41363 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41363], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41363)))?cljs.core.second(arglists_41363):arglists_41363)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40963_41370 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40964_41371 = null;
var count__40965_41372 = (0);
var i__40966_41373 = (0);
while(true){
if((i__40966_41373 < count__40965_41372)){
var vec__41006_41374 = chunk__40964_41371.cljs$core$IIndexed$_nth$arity$2(null,i__40966_41373);
var name_41375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41006_41374,(0),null);
var map__41009_41376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41006_41374,(1),null);
var map__41009_41377__$1 = (((((!((map__41009_41376 == null))))?(((((map__41009_41376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41009_41376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41009_41376):map__41009_41376);
var doc_41378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41009_41377__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41009_41377__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41375], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41379], 0));

if(cljs.core.truth_(doc_41378)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41378], 0));
} else {
}


var G__41419 = seq__40963_41370;
var G__41420 = chunk__40964_41371;
var G__41421 = count__40965_41372;
var G__41422 = (i__40966_41373 + (1));
seq__40963_41370 = G__41419;
chunk__40964_41371 = G__41420;
count__40965_41372 = G__41421;
i__40966_41373 = G__41422;
continue;
} else {
var temp__5735__auto___41426 = cljs.core.seq(seq__40963_41370);
if(temp__5735__auto___41426){
var seq__40963_41429__$1 = temp__5735__auto___41426;
if(cljs.core.chunked_seq_QMARK_(seq__40963_41429__$1)){
var c__4550__auto___41431 = cljs.core.chunk_first(seq__40963_41429__$1);
var G__41432 = cljs.core.chunk_rest(seq__40963_41429__$1);
var G__41433 = c__4550__auto___41431;
var G__41434 = cljs.core.count(c__4550__auto___41431);
var G__41435 = (0);
seq__40963_41370 = G__41432;
chunk__40964_41371 = G__41433;
count__40965_41372 = G__41434;
i__40966_41373 = G__41435;
continue;
} else {
var vec__41028_41453 = cljs.core.first(seq__40963_41429__$1);
var name_41454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41028_41453,(0),null);
var map__41032_41455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41028_41453,(1),null);
var map__41032_41456__$1 = (((((!((map__41032_41455 == null))))?(((((map__41032_41455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41032_41455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41032_41455):map__41032_41455);
var doc_41457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41032_41456__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41032_41456__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41454], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41458], 0));

if(cljs.core.truth_(doc_41457)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41457], 0));
} else {
}


var G__41492 = cljs.core.next(seq__40963_41429__$1);
var G__41493 = null;
var G__41494 = (0);
var G__41495 = (0);
seq__40963_41370 = G__41492;
chunk__40964_41371 = G__41493;
count__40965_41372 = G__41494;
i__40966_41373 = G__41495;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41036 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41037 = null;
var count__41038 = (0);
var i__41039 = (0);
while(true){
if((i__41039 < count__41038)){
var role = chunk__41037.cljs$core$IIndexed$_nth$arity$2(null,i__41039);
var temp__5735__auto___41529__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41529__$1)){
var spec_41530 = temp__5735__auto___41529__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41530)], 0));
} else {
}


var G__41531 = seq__41036;
var G__41532 = chunk__41037;
var G__41533 = count__41038;
var G__41534 = (i__41039 + (1));
seq__41036 = G__41531;
chunk__41037 = G__41532;
count__41038 = G__41533;
i__41039 = G__41534;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__41036);
if(temp__5735__auto____$1){
var seq__41036__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41036__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41036__$1);
var G__41536 = cljs.core.chunk_rest(seq__41036__$1);
var G__41537 = c__4550__auto__;
var G__41538 = cljs.core.count(c__4550__auto__);
var G__41539 = (0);
seq__41036 = G__41536;
chunk__41037 = G__41537;
count__41038 = G__41538;
i__41039 = G__41539;
continue;
} else {
var role = cljs.core.first(seq__41036__$1);
var temp__5735__auto___41541__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41541__$2)){
var spec_41543 = temp__5735__auto___41541__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41543)], 0));
} else {
}


var G__41544 = cljs.core.next(seq__41036__$1);
var G__41545 = null;
var G__41546 = (0);
var G__41547 = (0);
seq__41036 = G__41544;
chunk__41037 = G__41545;
count__41038 = G__41546;
i__41039 = G__41547;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41560 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41561 = cljs.core.ex_cause(t);
via = G__41560;
t = G__41561;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41143 = datafied_throwable;
var map__41143__$1 = (((((!((map__41143 == null))))?(((((map__41143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41143):map__41143);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41143__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41143__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41143__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41144 = cljs.core.last(via);
var map__41144__$1 = (((((!((map__41144 == null))))?(((((map__41144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41144):map__41144);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41144__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41144__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41144__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41145 = data;
var map__41145__$1 = (((((!((map__41145 == null))))?(((((map__41145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41145):map__41145);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41145__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41145__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41145__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41147 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41147__$1 = (((((!((map__41147 == null))))?(((((map__41147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41147.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41147):map__41147);
var top_data = map__41147__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41147__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41186 = phase;
var G__41186__$1 = (((G__41186 instanceof cljs.core.Keyword))?G__41186.fqn:null);
switch (G__41186__$1) {
case "read-source":
var map__41191 = data;
var map__41191__$1 = (((((!((map__41191 == null))))?(((((map__41191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41191):map__41191);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41191__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41191__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41197 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41197__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41197,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41197);
var G__41197__$2 = (cljs.core.truth_((function (){var fexpr__41205 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41205.cljs$core$IFn$_invoke$arity$1 ? fexpr__41205.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41205.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41197__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41197__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41197__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41197__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41206 = top_data;
var G__41206__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41206,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41206);
var G__41206__$2 = (cljs.core.truth_((function (){var fexpr__41210 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41210.cljs$core$IFn$_invoke$arity$1 ? fexpr__41210.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41210.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41206__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41206__$1);
var G__41206__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41206__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41206__$2);
var G__41206__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41206__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41206__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41206__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41206__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41212 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41212,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41212,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41212,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41212,(3),null);
var G__41216 = top_data;
var G__41216__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41216,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41216);
var G__41216__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41216__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41216__$1);
var G__41216__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41216__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41216__$2);
var G__41216__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41216__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41216__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41216__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41216__$4;
}

break;
case "execution":
var vec__41224 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41224,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__41224,source__$1,method,file,line,G__41186,G__41186__$1,map__41143,map__41143__$1,via,trace,phase,map__41144,map__41144__$1,type,message,data,map__41145,map__41145__$1,problems,fn,caller,map__41147,map__41147__$1,top_data,source){
return (function (p1__41138_SHARP_){
var or__4131__auto__ = (p1__41138_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__41229 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41229.cljs$core$IFn$_invoke$arity$1 ? fexpr__41229.cljs$core$IFn$_invoke$arity$1(p1__41138_SHARP_) : fexpr__41229.call(null,p1__41138_SHARP_));
}
});})(vec__41224,source__$1,method,file,line,G__41186,G__41186__$1,map__41143,map__41143__$1,via,trace,phase,map__41144,map__41144__$1,type,message,data,map__41145,map__41145__$1,problems,fn,caller,map__41147,map__41147__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__41230 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41230__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41230,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41230);
var G__41230__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41230__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41230__$1);
var G__41230__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41230__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41230__$2);
var G__41230__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41230__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41230__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41230__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41230__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41186__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41237){
var map__41239 = p__41237;
var map__41239__$1 = (((((!((map__41239 == null))))?(((((map__41239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41239):map__41239);
var triage_data = map__41239__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41239__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41239__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41239__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41239__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41239__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41239__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41239__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41239__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41256 = phase;
var G__41256__$1 = (((G__41256 instanceof cljs.core.Keyword))?G__41256.fqn:null);
switch (G__41256__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41259 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41260 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41261 = loc;
var G__41262 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41264_41690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41265_41691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41266_41692 = true;
var _STAR_print_fn_STAR__temp_val__41267_41693 = ((function (_STAR_print_newline_STAR__orig_val__41264_41690,_STAR_print_fn_STAR__orig_val__41265_41691,_STAR_print_newline_STAR__temp_val__41266_41692,sb__4661__auto__,G__41259,G__41260,G__41261,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__41264_41690,_STAR_print_fn_STAR__orig_val__41265_41691,_STAR_print_newline_STAR__temp_val__41266_41692,sb__4661__auto__,G__41259,G__41260,G__41261,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41266_41692;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41267_41693;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__41264_41690,_STAR_print_fn_STAR__orig_val__41265_41691,_STAR_print_newline_STAR__temp_val__41266_41692,_STAR_print_fn_STAR__temp_val__41267_41693,sb__4661__auto__,G__41259,G__41260,G__41261,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__41264_41690,_STAR_print_fn_STAR__orig_val__41265_41691,_STAR_print_newline_STAR__temp_val__41266_41692,_STAR_print_fn_STAR__temp_val__41267_41693,sb__4661__auto__,G__41259,G__41260,G__41261,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__41235_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41235_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__41264_41690,_STAR_print_fn_STAR__orig_val__41265_41691,_STAR_print_newline_STAR__temp_val__41266_41692,_STAR_print_fn_STAR__temp_val__41267_41693,sb__4661__auto__,G__41259,G__41260,G__41261,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__41264_41690,_STAR_print_fn_STAR__orig_val__41265_41691,_STAR_print_newline_STAR__temp_val__41266_41692,_STAR_print_fn_STAR__temp_val__41267_41693,sb__4661__auto__,G__41259,G__41260,G__41261,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41265_41691;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41264_41690;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41259,G__41260,G__41261,G__41262) : format.call(null,G__41259,G__41260,G__41261,G__41262));

break;
case "macroexpansion":
var G__41277 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41278 = cause_type;
var G__41279 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41280 = loc;
var G__41281 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41277,G__41278,G__41279,G__41280,G__41281) : format.call(null,G__41277,G__41278,G__41279,G__41280,G__41281));

break;
case "compile-syntax-check":
var G__41283 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41284 = cause_type;
var G__41285 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41286 = loc;
var G__41287 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41283,G__41284,G__41285,G__41286,G__41287) : format.call(null,G__41283,G__41284,G__41285,G__41286,G__41287));

break;
case "compilation":
var G__41292 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41293 = cause_type;
var G__41294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41295 = loc;
var G__41296 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41292,G__41293,G__41294,G__41295,G__41296) : format.call(null,G__41292,G__41293,G__41294,G__41295,G__41296));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41298 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41299 = symbol;
var G__41300 = loc;
var G__41301 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41305_41711 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41306_41712 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41307_41713 = true;
var _STAR_print_fn_STAR__temp_val__41308_41714 = ((function (_STAR_print_newline_STAR__orig_val__41305_41711,_STAR_print_fn_STAR__orig_val__41306_41712,_STAR_print_newline_STAR__temp_val__41307_41713,sb__4661__auto__,G__41298,G__41299,G__41300,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__41305_41711,_STAR_print_fn_STAR__orig_val__41306_41712,_STAR_print_newline_STAR__temp_val__41307_41713,sb__4661__auto__,G__41298,G__41299,G__41300,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41307_41713;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41308_41714;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__41305_41711,_STAR_print_fn_STAR__orig_val__41306_41712,_STAR_print_newline_STAR__temp_val__41307_41713,_STAR_print_fn_STAR__temp_val__41308_41714,sb__4661__auto__,G__41298,G__41299,G__41300,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__41305_41711,_STAR_print_fn_STAR__orig_val__41306_41712,_STAR_print_newline_STAR__temp_val__41307_41713,_STAR_print_fn_STAR__temp_val__41308_41714,sb__4661__auto__,G__41298,G__41299,G__41300,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__41236_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41236_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__41305_41711,_STAR_print_fn_STAR__orig_val__41306_41712,_STAR_print_newline_STAR__temp_val__41307_41713,_STAR_print_fn_STAR__temp_val__41308_41714,sb__4661__auto__,G__41298,G__41299,G__41300,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__41305_41711,_STAR_print_fn_STAR__orig_val__41306_41712,_STAR_print_newline_STAR__temp_val__41307_41713,_STAR_print_fn_STAR__temp_val__41308_41714,sb__4661__auto__,G__41298,G__41299,G__41300,G__41256,G__41256__$1,loc,class_name,simple_class,cause_type,format,map__41239,map__41239__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41306_41712;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41305_41711;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41298,G__41299,G__41300,G__41301) : format.call(null,G__41298,G__41299,G__41300,G__41301));
} else {
var G__41313 = "Execution error%s at %s(%s).\n%s\n";
var G__41314 = cause_type;
var G__41315 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41316 = loc;
var G__41317 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41313,G__41314,G__41315,G__41316,G__41317) : format.call(null,G__41313,G__41314,G__41315,G__41316,G__41317));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41256__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
