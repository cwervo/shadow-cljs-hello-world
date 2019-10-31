goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46184 = arguments.length;
var i__4731__auto___46185 = (0);
while(true){
if((i__4731__auto___46185 < len__4730__auto___46184)){
args__4736__auto__.push((arguments[i__4731__auto___46185]));

var G__46186 = (i__4731__auto___46185 + (1));
i__4731__auto___46185 = G__46186;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45988){
var G__45989 = cljs.core.first(seq45988);
var seq45988__$1 = cljs.core.next(seq45988);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45989,seq45988__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__45993){
var map__45994 = p__45993;
var map__45994__$1 = (((((!((map__45994 == null))))?(((((map__45994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45994):map__45994);
var src = map__45994__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45994__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45994__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__45997 = cljs.core.seq(sources);
var chunk__45998 = null;
var count__45999 = (0);
var i__46000 = (0);
while(true){
if((i__46000 < count__45999)){
var map__46008 = chunk__45998.cljs$core$IIndexed$_nth$arity$2(null,i__46000);
var map__46008__$1 = (((((!((map__46008 == null))))?(((((map__46008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46008):map__46008);
var src = map__46008__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46008__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46008__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46008__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46008__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e46010){var e_46187 = e46010;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46187);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46187.message)].join('')));
}

var G__46188 = seq__45997;
var G__46189 = chunk__45998;
var G__46190 = count__45999;
var G__46191 = (i__46000 + (1));
seq__45997 = G__46188;
chunk__45998 = G__46189;
count__45999 = G__46190;
i__46000 = G__46191;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45997);
if(temp__5735__auto__){
var seq__45997__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45997__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__45997__$1);
var G__46192 = cljs.core.chunk_rest(seq__45997__$1);
var G__46193 = c__4550__auto__;
var G__46194 = cljs.core.count(c__4550__auto__);
var G__46195 = (0);
seq__45997 = G__46192;
chunk__45998 = G__46193;
count__45999 = G__46194;
i__46000 = G__46195;
continue;
} else {
var map__46011 = cljs.core.first(seq__45997__$1);
var map__46011__$1 = (((((!((map__46011 == null))))?(((((map__46011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46011):map__46011);
var src = map__46011__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46011__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46011__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46011__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46011__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e46015){var e_46196 = e46015;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46196);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46196.message)].join('')));
}

var G__46197 = cljs.core.next(seq__45997__$1);
var G__46198 = null;
var G__46199 = (0);
var G__46200 = (0);
seq__45997 = G__46197;
chunk__45998 = G__46198;
count__45999 = G__46199;
i__46000 = G__46200;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__46023 = cljs.core.seq(js_requires);
var chunk__46024 = null;
var count__46025 = (0);
var i__46026 = (0);
while(true){
if((i__46026 < count__46025)){
var js_ns = chunk__46024.cljs$core$IIndexed$_nth$arity$2(null,i__46026);
var require_str_46201 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46201);


var G__46202 = seq__46023;
var G__46203 = chunk__46024;
var G__46204 = count__46025;
var G__46205 = (i__46026 + (1));
seq__46023 = G__46202;
chunk__46024 = G__46203;
count__46025 = G__46204;
i__46026 = G__46205;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46023);
if(temp__5735__auto__){
var seq__46023__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46023__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46023__$1);
var G__46206 = cljs.core.chunk_rest(seq__46023__$1);
var G__46207 = c__4550__auto__;
var G__46208 = cljs.core.count(c__4550__auto__);
var G__46209 = (0);
seq__46023 = G__46206;
chunk__46024 = G__46207;
count__46025 = G__46208;
i__46026 = G__46209;
continue;
} else {
var js_ns = cljs.core.first(seq__46023__$1);
var require_str_46210 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46210);


var G__46211 = cljs.core.next(seq__46023__$1);
var G__46212 = null;
var G__46213 = (0);
var G__46214 = (0);
seq__46023 = G__46211;
chunk__46024 = G__46212;
count__46025 = G__46213;
i__46026 = G__46214;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__46047 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__46047) : callback.call(null,G__46047));
} else {
var G__46048 = shadow.cljs.devtools.client.env.files_url();
var G__46049 = ((function (G__46048){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__46048))
;
var G__46050 = "POST";
var G__46051 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__46052 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__46048,G__46049,G__46050,G__46051,G__46052);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__46063){
var map__46064 = p__46063;
var map__46064__$1 = (((((!((map__46064 == null))))?(((((map__46064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46064):map__46064);
var msg = map__46064__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46064__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46064__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__46066 = info;
var map__46066__$1 = (((((!((map__46066 == null))))?(((((map__46066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46066):map__46066);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46066__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46066__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__46066,map__46066__$1,sources,compiled,map__46064,map__46064__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46068(s__46069){
return (new cljs.core.LazySeq(null,((function (map__46066,map__46066__$1,sources,compiled,map__46064,map__46064__$1,msg,info,reload_info){
return (function (){
var s__46069__$1 = s__46069;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46069__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__46074 = cljs.core.first(xs__6292__auto__);
var map__46074__$1 = (((((!((map__46074 == null))))?(((((map__46074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46074):map__46074);
var src = map__46074__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46074__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46074__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__46069__$1,map__46074,map__46074__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46066,map__46066__$1,sources,compiled,map__46064,map__46064__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46068_$_iter__46070(s__46071){
return (new cljs.core.LazySeq(null,((function (s__46069__$1,map__46074,map__46074__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46066,map__46066__$1,sources,compiled,map__46064,map__46064__$1,msg,info,reload_info){
return (function (){
var s__46071__$1 = s__46071;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46071__$1);
if(temp__5735__auto____$1){
var s__46071__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46071__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__46071__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__46073 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__46072 = (0);
while(true){
if((i__46072 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__46072);
cljs.core.chunk_append(b__46073,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46215 = (i__46072 + (1));
i__46072 = G__46215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46073),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46068_$_iter__46070(cljs.core.chunk_rest(s__46071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46073),null);
}
} else {
var warning = cljs.core.first(s__46071__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46068_$_iter__46070(cljs.core.rest(s__46071__$2)));
}
} else {
return null;
}
break;
}
});})(s__46069__$1,map__46074,map__46074__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46066,map__46066__$1,sources,compiled,map__46064,map__46064__$1,msg,info,reload_info))
,null,null));
});})(s__46069__$1,map__46074,map__46074__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46066,map__46066__$1,sources,compiled,map__46064,map__46064__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46068(cljs.core.rest(s__46069__$1)));
} else {
var G__46216 = cljs.core.rest(s__46069__$1);
s__46069__$1 = G__46216;
continue;
}
} else {
var G__46217 = cljs.core.rest(s__46069__$1);
s__46069__$1 = G__46217;
continue;
}
} else {
return null;
}
break;
}
});})(map__46066,map__46066__$1,sources,compiled,map__46064,map__46064__$1,msg,info,reload_info))
,null,null));
});})(map__46066,map__46066__$1,sources,compiled,map__46064,map__46064__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__46079_46218 = cljs.core.seq(warnings);
var chunk__46080_46219 = null;
var count__46081_46220 = (0);
var i__46082_46221 = (0);
while(true){
if((i__46082_46221 < count__46081_46220)){
var map__46088_46222 = chunk__46080_46219.cljs$core$IIndexed$_nth$arity$2(null,i__46082_46221);
var map__46088_46223__$1 = (((((!((map__46088_46222 == null))))?(((((map__46088_46222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46088_46222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46088_46222):map__46088_46222);
var w_46224 = map__46088_46223__$1;
var msg_46225__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088_46223__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088_46223__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088_46223__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088_46223__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46228)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46226),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46227),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46225__$1)].join(''));


var G__46229 = seq__46079_46218;
var G__46230 = chunk__46080_46219;
var G__46231 = count__46081_46220;
var G__46232 = (i__46082_46221 + (1));
seq__46079_46218 = G__46229;
chunk__46080_46219 = G__46230;
count__46081_46220 = G__46231;
i__46082_46221 = G__46232;
continue;
} else {
var temp__5735__auto___46233 = cljs.core.seq(seq__46079_46218);
if(temp__5735__auto___46233){
var seq__46079_46234__$1 = temp__5735__auto___46233;
if(cljs.core.chunked_seq_QMARK_(seq__46079_46234__$1)){
var c__4550__auto___46235 = cljs.core.chunk_first(seq__46079_46234__$1);
var G__46236 = cljs.core.chunk_rest(seq__46079_46234__$1);
var G__46237 = c__4550__auto___46235;
var G__46238 = cljs.core.count(c__4550__auto___46235);
var G__46239 = (0);
seq__46079_46218 = G__46236;
chunk__46080_46219 = G__46237;
count__46081_46220 = G__46238;
i__46082_46221 = G__46239;
continue;
} else {
var map__46090_46240 = cljs.core.first(seq__46079_46234__$1);
var map__46090_46241__$1 = (((((!((map__46090_46240 == null))))?(((((map__46090_46240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46090_46240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46090_46240):map__46090_46240);
var w_46242 = map__46090_46241__$1;
var msg_46243__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46090_46241__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46090_46241__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46090_46241__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46090_46241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46246)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46244),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46245),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46243__$1)].join(''));


var G__46247 = cljs.core.next(seq__46079_46234__$1);
var G__46248 = null;
var G__46249 = (0);
var G__46250 = (0);
seq__46079_46218 = G__46247;
chunk__46080_46219 = G__46248;
count__46081_46220 = G__46249;
i__46082_46221 = G__46250;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__46066,map__46066__$1,sources,compiled,warnings,map__46064,map__46064__$1,msg,info,reload_info){
return (function (p__46092){
var map__46093 = p__46092;
var map__46093__$1 = (((((!((map__46093 == null))))?(((((map__46093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46093):map__46093);
var src = map__46093__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46093__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46093__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__46066,map__46066__$1,sources,compiled,warnings,map__46064,map__46064__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__46066,map__46066__$1,sources,compiled,warnings,map__46064,map__46064__$1,msg,info,reload_info){
return (function (p__46095){
var map__46096 = p__46095;
var map__46096__$1 = (((((!((map__46096 == null))))?(((((map__46096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46096):map__46096);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46096__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__46066,map__46066__$1,sources,compiled,warnings,map__46064,map__46064__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__46066,map__46066__$1,sources,compiled,warnings,map__46064,map__46064__$1,msg,info,reload_info){
return (function (p__46098){
var map__46099 = p__46098;
var map__46099__$1 = (((((!((map__46099 == null))))?(((((map__46099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46099):map__46099);
var rc = map__46099__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46099__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__46066,map__46066__$1,sources,compiled,warnings,map__46064,map__46064__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__46066,map__46066__$1,sources,compiled,warnings,map__46064,map__46064__$1,msg,info,reload_info){
return (function (p1__46062_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46062_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__46066,map__46066__$1,sources,compiled,warnings,map__46064,map__46064__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__46101){
var map__46102 = p__46101;
var map__46102__$1 = (((((!((map__46102 == null))))?(((((map__46102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46102):map__46102);
var msg = map__46102__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46102__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46104 = cljs.core.seq(updates);
var chunk__46106 = null;
var count__46107 = (0);
var i__46108 = (0);
while(true){
if((i__46108 < count__46107)){
var path = chunk__46106.cljs$core$IIndexed$_nth$arity$2(null,i__46108);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46134_46251 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46137_46252 = null;
var count__46138_46253 = (0);
var i__46139_46254 = (0);
while(true){
if((i__46139_46254 < count__46138_46253)){
var node_46255 = chunk__46137_46252.cljs$core$IIndexed$_nth$arity$2(null,i__46139_46254);
var path_match_46256 = shadow.cljs.devtools.client.browser.match_paths(node_46255.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46256)){
var new_link_46257 = (function (){var G__46144 = node_46255.cloneNode(true);
G__46144.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46256),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46144;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46256], 0));

goog.dom.insertSiblingAfter(new_link_46257,node_46255);

goog.dom.removeNode(node_46255);


var G__46258 = seq__46134_46251;
var G__46259 = chunk__46137_46252;
var G__46260 = count__46138_46253;
var G__46261 = (i__46139_46254 + (1));
seq__46134_46251 = G__46258;
chunk__46137_46252 = G__46259;
count__46138_46253 = G__46260;
i__46139_46254 = G__46261;
continue;
} else {
var G__46262 = seq__46134_46251;
var G__46263 = chunk__46137_46252;
var G__46264 = count__46138_46253;
var G__46265 = (i__46139_46254 + (1));
seq__46134_46251 = G__46262;
chunk__46137_46252 = G__46263;
count__46138_46253 = G__46264;
i__46139_46254 = G__46265;
continue;
}
} else {
var temp__5735__auto___46266 = cljs.core.seq(seq__46134_46251);
if(temp__5735__auto___46266){
var seq__46134_46267__$1 = temp__5735__auto___46266;
if(cljs.core.chunked_seq_QMARK_(seq__46134_46267__$1)){
var c__4550__auto___46268 = cljs.core.chunk_first(seq__46134_46267__$1);
var G__46269 = cljs.core.chunk_rest(seq__46134_46267__$1);
var G__46270 = c__4550__auto___46268;
var G__46271 = cljs.core.count(c__4550__auto___46268);
var G__46272 = (0);
seq__46134_46251 = G__46269;
chunk__46137_46252 = G__46270;
count__46138_46253 = G__46271;
i__46139_46254 = G__46272;
continue;
} else {
var node_46273 = cljs.core.first(seq__46134_46267__$1);
var path_match_46274 = shadow.cljs.devtools.client.browser.match_paths(node_46273.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46274)){
var new_link_46275 = (function (){var G__46145 = node_46273.cloneNode(true);
G__46145.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46274),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46145;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46274], 0));

goog.dom.insertSiblingAfter(new_link_46275,node_46273);

goog.dom.removeNode(node_46273);


var G__46276 = cljs.core.next(seq__46134_46267__$1);
var G__46277 = null;
var G__46278 = (0);
var G__46279 = (0);
seq__46134_46251 = G__46276;
chunk__46137_46252 = G__46277;
count__46138_46253 = G__46278;
i__46139_46254 = G__46279;
continue;
} else {
var G__46280 = cljs.core.next(seq__46134_46267__$1);
var G__46281 = null;
var G__46282 = (0);
var G__46283 = (0);
seq__46134_46251 = G__46280;
chunk__46137_46252 = G__46281;
count__46138_46253 = G__46282;
i__46139_46254 = G__46283;
continue;
}
}
} else {
}
}
break;
}


var G__46284 = seq__46104;
var G__46285 = chunk__46106;
var G__46286 = count__46107;
var G__46287 = (i__46108 + (1));
seq__46104 = G__46284;
chunk__46106 = G__46285;
count__46107 = G__46286;
i__46108 = G__46287;
continue;
} else {
var G__46288 = seq__46104;
var G__46289 = chunk__46106;
var G__46290 = count__46107;
var G__46291 = (i__46108 + (1));
seq__46104 = G__46288;
chunk__46106 = G__46289;
count__46107 = G__46290;
i__46108 = G__46291;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46104);
if(temp__5735__auto__){
var seq__46104__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46104__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46104__$1);
var G__46292 = cljs.core.chunk_rest(seq__46104__$1);
var G__46293 = c__4550__auto__;
var G__46294 = cljs.core.count(c__4550__auto__);
var G__46295 = (0);
seq__46104 = G__46292;
chunk__46106 = G__46293;
count__46107 = G__46294;
i__46108 = G__46295;
continue;
} else {
var path = cljs.core.first(seq__46104__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46146_46296 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46149_46297 = null;
var count__46150_46298 = (0);
var i__46151_46299 = (0);
while(true){
if((i__46151_46299 < count__46150_46298)){
var node_46300 = chunk__46149_46297.cljs$core$IIndexed$_nth$arity$2(null,i__46151_46299);
var path_match_46301 = shadow.cljs.devtools.client.browser.match_paths(node_46300.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46301)){
var new_link_46302 = (function (){var G__46156 = node_46300.cloneNode(true);
G__46156.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46301),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46156;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46301], 0));

goog.dom.insertSiblingAfter(new_link_46302,node_46300);

goog.dom.removeNode(node_46300);


var G__46303 = seq__46146_46296;
var G__46304 = chunk__46149_46297;
var G__46305 = count__46150_46298;
var G__46306 = (i__46151_46299 + (1));
seq__46146_46296 = G__46303;
chunk__46149_46297 = G__46304;
count__46150_46298 = G__46305;
i__46151_46299 = G__46306;
continue;
} else {
var G__46307 = seq__46146_46296;
var G__46308 = chunk__46149_46297;
var G__46309 = count__46150_46298;
var G__46310 = (i__46151_46299 + (1));
seq__46146_46296 = G__46307;
chunk__46149_46297 = G__46308;
count__46150_46298 = G__46309;
i__46151_46299 = G__46310;
continue;
}
} else {
var temp__5735__auto___46311__$1 = cljs.core.seq(seq__46146_46296);
if(temp__5735__auto___46311__$1){
var seq__46146_46312__$1 = temp__5735__auto___46311__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46146_46312__$1)){
var c__4550__auto___46313 = cljs.core.chunk_first(seq__46146_46312__$1);
var G__46314 = cljs.core.chunk_rest(seq__46146_46312__$1);
var G__46315 = c__4550__auto___46313;
var G__46316 = cljs.core.count(c__4550__auto___46313);
var G__46317 = (0);
seq__46146_46296 = G__46314;
chunk__46149_46297 = G__46315;
count__46150_46298 = G__46316;
i__46151_46299 = G__46317;
continue;
} else {
var node_46318 = cljs.core.first(seq__46146_46312__$1);
var path_match_46319 = shadow.cljs.devtools.client.browser.match_paths(node_46318.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46319)){
var new_link_46320 = (function (){var G__46157 = node_46318.cloneNode(true);
G__46157.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46319),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46157;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46319], 0));

goog.dom.insertSiblingAfter(new_link_46320,node_46318);

goog.dom.removeNode(node_46318);


var G__46321 = cljs.core.next(seq__46146_46312__$1);
var G__46322 = null;
var G__46323 = (0);
var G__46324 = (0);
seq__46146_46296 = G__46321;
chunk__46149_46297 = G__46322;
count__46150_46298 = G__46323;
i__46151_46299 = G__46324;
continue;
} else {
var G__46325 = cljs.core.next(seq__46146_46312__$1);
var G__46326 = null;
var G__46327 = (0);
var G__46328 = (0);
seq__46146_46296 = G__46325;
chunk__46149_46297 = G__46326;
count__46150_46298 = G__46327;
i__46151_46299 = G__46328;
continue;
}
}
} else {
}
}
break;
}


var G__46329 = cljs.core.next(seq__46104__$1);
var G__46330 = null;
var G__46331 = (0);
var G__46332 = (0);
seq__46104 = G__46329;
chunk__46106 = G__46330;
count__46107 = G__46331;
i__46108 = G__46332;
continue;
} else {
var G__46333 = cljs.core.next(seq__46104__$1);
var G__46334 = null;
var G__46335 = (0);
var G__46336 = (0);
seq__46104 = G__46333;
chunk__46106 = G__46334;
count__46107 = G__46335;
i__46108 = G__46336;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__46158){
var map__46159 = p__46158;
var map__46159__$1 = (((((!((map__46159 == null))))?(((((map__46159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46159):map__46159);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46159__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46159__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__46159,map__46159__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__46159,map__46159__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__46161,done){
var map__46162 = p__46161;
var map__46162__$1 = (((((!((map__46162 == null))))?(((((map__46162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46162):map__46162);
var msg = map__46162__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46162__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__46162,map__46162__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__46164){
var map__46165 = p__46164;
var map__46165__$1 = (((((!((map__46165 == null))))?(((((map__46165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46165):map__46165);
var src = map__46165__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46165__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__46162,map__46162__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__46162,map__46162__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e46167){var e = e46167;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__46162,map__46162__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__46168,done){
var map__46169 = p__46168;
var map__46169__$1 = (((((!((map__46169 == null))))?(((((map__46169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46169):map__46169);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46169__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46169__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__46169,map__46169__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__46169,map__46169__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__46171){
var map__46172 = p__46171;
var map__46172__$1 = (((((!((map__46172 == null))))?(((((map__46172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46172):map__46172);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46172__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46172__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__46174,done){
var map__46175 = p__46174;
var map__46175__$1 = (((((!((map__46175 == null))))?(((((map__46175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46175):map__46175);
var msg = map__46175__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46175__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__46177_46337 = type;
var G__46177_46338__$1 = (((G__46177_46337 instanceof cljs.core.Keyword))?G__46177_46337.fqn:null);
switch (G__46177_46338__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__46178 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__46179 = ((function (G__46178){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__46178))
;
var G__46180 = "POST";
var G__46181 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__46182 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__46178,G__46179,G__46180,G__46181,G__46182);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e46183){var e = e46183;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___46340 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___46340)){
var s_46341 = temp__5735__auto___46340;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_46341.onclose = ((function (s_46341,temp__5735__auto___46340){
return (function (e){
return null;
});})(s_46341,temp__5735__auto___46340))
;

s_46341.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
