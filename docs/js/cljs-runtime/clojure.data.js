goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__40225){
var vec__40229 = p__40225;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40229,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40229,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__40260 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40260,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__40293 = arguments.length;
switch (G__40293) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__40339_40549 = clojure.data.equality_partition;
var G__40340_40550 = "null";
var G__40341_40551 = ((function (G__40339_40549,G__40340_40550){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40339_40549,G__40340_40550))
;
goog.object.set(G__40339_40549,G__40340_40550,G__40341_40551);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__40343_40552 = clojure.data.equality_partition;
var G__40344_40553 = "string";
var G__40345_40554 = ((function (G__40343_40552,G__40344_40553){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40343_40552,G__40344_40553))
;
goog.object.set(G__40343_40552,G__40344_40553,G__40345_40554);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__40347_40557 = clojure.data.equality_partition;
var G__40348_40558 = "number";
var G__40349_40559 = ((function (G__40347_40557,G__40348_40558){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40347_40557,G__40348_40558))
;
goog.object.set(G__40347_40557,G__40348_40558,G__40349_40559);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__40350_40561 = clojure.data.equality_partition;
var G__40351_40562 = "array";
var G__40352_40563 = ((function (G__40350_40561,G__40351_40562){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__40350_40561,G__40351_40562))
;
goog.object.set(G__40350_40561,G__40351_40562,G__40352_40563);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__40357_40567 = clojure.data.equality_partition;
var G__40358_40568 = "function";
var G__40359_40569 = ((function (G__40357_40567,G__40358_40568){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40357_40567,G__40358_40568))
;
goog.object.set(G__40357_40567,G__40358_40568,G__40359_40569);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__40361_40571 = clojure.data.equality_partition;
var G__40362_40572 = "boolean";
var G__40363_40573 = ((function (G__40361_40571,G__40362_40572){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__40361_40571,G__40362_40572))
;
goog.object.set(G__40361_40571,G__40362_40572,G__40363_40573);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__40364_40575 = clojure.data.equality_partition;
var G__40365_40576 = "_";
var G__40366_40577 = ((function (G__40364_40575,G__40365_40576){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__40364_40575,G__40365_40576))
;
goog.object.set(G__40364_40575,G__40365_40576,G__40366_40577);
goog.object.set(clojure.data.Diff,"null",true);

var G__40375_40588 = clojure.data.diff_similar;
var G__40376_40589 = "null";
var G__40377_40590 = ((function (G__40375_40588,G__40376_40589){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40375_40588,G__40376_40589))
;
goog.object.set(G__40375_40588,G__40376_40589,G__40377_40590);

goog.object.set(clojure.data.Diff,"string",true);

var G__40379_40596 = clojure.data.diff_similar;
var G__40380_40597 = "string";
var G__40381_40598 = ((function (G__40379_40596,G__40380_40597){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40379_40596,G__40380_40597))
;
goog.object.set(G__40379_40596,G__40380_40597,G__40381_40598);

goog.object.set(clojure.data.Diff,"number",true);

var G__40386_40604 = clojure.data.diff_similar;
var G__40387_40605 = "number";
var G__40388_40606 = ((function (G__40386_40604,G__40387_40605){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40386_40604,G__40387_40605))
;
goog.object.set(G__40386_40604,G__40387_40605,G__40388_40606);

goog.object.set(clojure.data.Diff,"array",true);

var G__40397_40613 = clojure.data.diff_similar;
var G__40398_40614 = "array";
var G__40399_40615 = ((function (G__40397_40613,G__40398_40614){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__40397_40613,G__40398_40614))
;
goog.object.set(G__40397_40613,G__40398_40614,G__40399_40615);

goog.object.set(clojure.data.Diff,"function",true);

var G__40430_40619 = clojure.data.diff_similar;
var G__40431_40620 = "function";
var G__40432_40621 = ((function (G__40430_40619,G__40431_40620){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40430_40619,G__40431_40620))
;
goog.object.set(G__40430_40619,G__40431_40620,G__40432_40621);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__40433_40625 = clojure.data.diff_similar;
var G__40434_40626 = "boolean";
var G__40435_40627 = ((function (G__40433_40625,G__40434_40626){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__40433_40625,G__40434_40626))
;
goog.object.set(G__40433_40625,G__40434_40626,G__40435_40627);

goog.object.set(clojure.data.Diff,"_",true);

var G__40440_40631 = clojure.data.diff_similar;
var G__40441_40632 = "_";
var G__40442_40633 = ((function (G__40440_40631,G__40441_40632){
return (function (a,b){
var fexpr__40451 = (function (){var G__40453 = clojure.data.equality_partition(a);
var G__40453__$1 = (((G__40453 instanceof cljs.core.Keyword))?G__40453.fqn:null);
switch (G__40453__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40453__$1)].join('')));

}
})();
return (fexpr__40451.cljs$core$IFn$_invoke$arity$2 ? fexpr__40451.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__40451.call(null,a,b));
});})(G__40440_40631,G__40441_40632))
;
goog.object.set(G__40440_40631,G__40441_40632,G__40442_40633);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
