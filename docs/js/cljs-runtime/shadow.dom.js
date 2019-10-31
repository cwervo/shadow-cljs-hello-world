goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__42924 = coll;
var G__42925 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__42924,G__42925) : shadow.dom.lazy_native_coll_seq.call(null,G__42924,G__42925));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__42957 = arguments.length;
switch (G__42957) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__42970 = arguments.length;
switch (G__42970) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__42983 = arguments.length;
switch (G__42983) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__42995 = arguments.length;
switch (G__42995) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__43009 = arguments.length;
switch (G__43009) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__43013 = document;
var G__43014 = shadow.dom.dom_node(el);
return goog.dom.contains(G__43013,G__43014);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__43016 = shadow.dom.dom_node(parent);
var G__43017 = shadow.dom.dom_node(el);
return goog.dom.contains(G__43016,G__43017);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__43022 = shadow.dom.dom_node(el);
var G__43023 = cls;
return goog.dom.classlist.add(G__43022,G__43023);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__43024 = shadow.dom.dom_node(el);
var G__43025 = cls;
return goog.dom.classlist.remove(G__43024,G__43025);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__43034 = arguments.length;
switch (G__43034) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__43043 = shadow.dom.dom_node(el);
var G__43044 = cls;
return goog.dom.classlist.toggle(G__43043,G__43044);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e43062){if((e43062 instanceof Object)){
var e = e43062;
return console.log("didnt support attachEvent",el,e);
} else {
throw e43062;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__43071 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__43072 = null;
var count__43073 = (0);
var i__43074 = (0);
while(true){
if((i__43074 < count__43073)){
var el = chunk__43072.cljs$core$IIndexed$_nth$arity$2(null,i__43074);
var handler_44017__$1 = ((function (seq__43071,chunk__43072,count__43073,i__43074,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43071,chunk__43072,count__43073,i__43074,el))
;
var G__43095_44018 = el;
var G__43096_44019 = cljs.core.name(ev);
var G__43097_44020 = handler_44017__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__43095_44018,G__43096_44019,G__43097_44020) : shadow.dom.dom_listen.call(null,G__43095_44018,G__43096_44019,G__43097_44020));


var G__44021 = seq__43071;
var G__44022 = chunk__43072;
var G__44023 = count__43073;
var G__44024 = (i__43074 + (1));
seq__43071 = G__44021;
chunk__43072 = G__44022;
count__43073 = G__44023;
i__43074 = G__44024;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43071);
if(temp__5735__auto__){
var seq__43071__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43071__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43071__$1);
var G__44028 = cljs.core.chunk_rest(seq__43071__$1);
var G__44029 = c__4550__auto__;
var G__44030 = cljs.core.count(c__4550__auto__);
var G__44031 = (0);
seq__43071 = G__44028;
chunk__43072 = G__44029;
count__43073 = G__44030;
i__43074 = G__44031;
continue;
} else {
var el = cljs.core.first(seq__43071__$1);
var handler_44032__$1 = ((function (seq__43071,chunk__43072,count__43073,i__43074,el,seq__43071__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43071,chunk__43072,count__43073,i__43074,el,seq__43071__$1,temp__5735__auto__))
;
var G__43103_44035 = el;
var G__43104_44036 = cljs.core.name(ev);
var G__43105_44037 = handler_44032__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__43103_44035,G__43104_44036,G__43105_44037) : shadow.dom.dom_listen.call(null,G__43103_44035,G__43104_44036,G__43105_44037));


var G__44040 = cljs.core.next(seq__43071__$1);
var G__44041 = null;
var G__44042 = (0);
var G__44043 = (0);
seq__43071 = G__44040;
chunk__43072 = G__44041;
count__43073 = G__44042;
i__43074 = G__44043;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__43112 = arguments.length;
switch (G__43112) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__43117 = shadow.dom.dom_node(el);
var G__43118 = cljs.core.name(ev);
var G__43119 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__43117,G__43118,G__43119) : shadow.dom.dom_listen.call(null,G__43117,G__43118,G__43119));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__43120 = shadow.dom.dom_node(el);
var G__43121 = cljs.core.name(ev);
var G__43122 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__43120,G__43121,G__43122) : shadow.dom.dom_listen_remove.call(null,G__43120,G__43121,G__43122));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__43125 = cljs.core.seq(events);
var chunk__43126 = null;
var count__43127 = (0);
var i__43128 = (0);
while(true){
if((i__43128 < count__43127)){
var vec__43143 = chunk__43126.cljs$core$IIndexed$_nth$arity$2(null,i__43128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43143,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43143,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44062 = seq__43125;
var G__44063 = chunk__43126;
var G__44064 = count__43127;
var G__44065 = (i__43128 + (1));
seq__43125 = G__44062;
chunk__43126 = G__44063;
count__43127 = G__44064;
i__43128 = G__44065;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43125);
if(temp__5735__auto__){
var seq__43125__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43125__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43125__$1);
var G__44066 = cljs.core.chunk_rest(seq__43125__$1);
var G__44067 = c__4550__auto__;
var G__44068 = cljs.core.count(c__4550__auto__);
var G__44069 = (0);
seq__43125 = G__44066;
chunk__43126 = G__44067;
count__43127 = G__44068;
i__43128 = G__44069;
continue;
} else {
var vec__43147 = cljs.core.first(seq__43125__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43147,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44071 = cljs.core.next(seq__43125__$1);
var G__44072 = null;
var G__44073 = (0);
var G__44074 = (0);
seq__43125 = G__44071;
chunk__43126 = G__44072;
count__43127 = G__44073;
i__43128 = G__44074;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__43155 = cljs.core.seq(styles);
var chunk__43156 = null;
var count__43157 = (0);
var i__43158 = (0);
while(true){
if((i__43158 < count__43157)){
var vec__43177 = chunk__43156.cljs$core$IIndexed$_nth$arity$2(null,i__43158);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43177,(1),null);
var G__43181_44076 = dom;
var G__43182_44077 = cljs.core.name(k);
var G__43183_44078 = (((v == null))?"":v);
goog.style.setStyle(G__43181_44076,G__43182_44077,G__43183_44078);


var G__44079 = seq__43155;
var G__44080 = chunk__43156;
var G__44081 = count__43157;
var G__44082 = (i__43158 + (1));
seq__43155 = G__44079;
chunk__43156 = G__44080;
count__43157 = G__44081;
i__43158 = G__44082;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43155);
if(temp__5735__auto__){
var seq__43155__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43155__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43155__$1);
var G__44084 = cljs.core.chunk_rest(seq__43155__$1);
var G__44085 = c__4550__auto__;
var G__44086 = cljs.core.count(c__4550__auto__);
var G__44087 = (0);
seq__43155 = G__44084;
chunk__43156 = G__44085;
count__43157 = G__44086;
i__43158 = G__44087;
continue;
} else {
var vec__43189 = cljs.core.first(seq__43155__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43189,(1),null);
var G__43194_44089 = dom;
var G__43195_44090 = cljs.core.name(k);
var G__43196_44091 = (((v == null))?"":v);
goog.style.setStyle(G__43194_44089,G__43195_44090,G__43196_44091);


var G__44093 = cljs.core.next(seq__43155__$1);
var G__44094 = null;
var G__44095 = (0);
var G__44096 = (0);
seq__43155 = G__44093;
chunk__43156 = G__44094;
count__43157 = G__44095;
i__43158 = G__44096;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__43201_44097 = key;
var G__43201_44098__$1 = (((G__43201_44097 instanceof cljs.core.Keyword))?G__43201_44097.fqn:null);
switch (G__43201_44098__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_44102 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_44102,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_44102,"aria-");
}
})())){
el.setAttribute(ks_44102,value);
} else {
(el[ks_44102] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__43222 = shadow.dom.dom_node(el);
var G__43223 = cls;
return goog.dom.classlist.contains(G__43222,G__43223);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__43252){
var map__43254 = p__43252;
var map__43254__$1 = (((((!((map__43254 == null))))?(((((map__43254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43254):map__43254);
var props = map__43254__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43254__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__43259 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__43263 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__43263,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__43263;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__43269 = arguments.length;
switch (G__43269) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__43273){
var vec__43275 = p__43273;
var seq__43276 = cljs.core.seq(vec__43275);
var first__43277 = cljs.core.first(seq__43276);
var seq__43276__$1 = cljs.core.next(seq__43276);
var nn = first__43277;
var first__43277__$1 = cljs.core.first(seq__43276__$1);
var seq__43276__$2 = cljs.core.next(seq__43276__$1);
var np = first__43277__$1;
var nc = seq__43276__$2;
var node = vec__43275;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43281 = nn;
var G__43282 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43281,G__43282) : create_fn.call(null,G__43281,G__43282));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43285 = nn;
var G__43286 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43285,G__43286) : create_fn.call(null,G__43285,G__43286));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__43291 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43291,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43291,(1),null);
var seq__43294_44122 = cljs.core.seq(node_children);
var chunk__43295_44123 = null;
var count__43296_44124 = (0);
var i__43297_44125 = (0);
while(true){
if((i__43297_44125 < count__43296_44124)){
var child_struct_44126 = chunk__43295_44123.cljs$core$IIndexed$_nth$arity$2(null,i__43297_44125);
var children_44127 = shadow.dom.dom_node(child_struct_44126);
if(cljs.core.seq_QMARK_(children_44127)){
var seq__43321_44129 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44127));
var chunk__43323_44130 = null;
var count__43324_44131 = (0);
var i__43325_44132 = (0);
while(true){
if((i__43325_44132 < count__43324_44131)){
var child_44133 = chunk__43323_44130.cljs$core$IIndexed$_nth$arity$2(null,i__43325_44132);
if(cljs.core.truth_(child_44133)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44133);


var G__44135 = seq__43321_44129;
var G__44136 = chunk__43323_44130;
var G__44137 = count__43324_44131;
var G__44138 = (i__43325_44132 + (1));
seq__43321_44129 = G__44135;
chunk__43323_44130 = G__44136;
count__43324_44131 = G__44137;
i__43325_44132 = G__44138;
continue;
} else {
var G__44139 = seq__43321_44129;
var G__44140 = chunk__43323_44130;
var G__44141 = count__43324_44131;
var G__44142 = (i__43325_44132 + (1));
seq__43321_44129 = G__44139;
chunk__43323_44130 = G__44140;
count__43324_44131 = G__44141;
i__43325_44132 = G__44142;
continue;
}
} else {
var temp__5735__auto___44145 = cljs.core.seq(seq__43321_44129);
if(temp__5735__auto___44145){
var seq__43321_44146__$1 = temp__5735__auto___44145;
if(cljs.core.chunked_seq_QMARK_(seq__43321_44146__$1)){
var c__4550__auto___44147 = cljs.core.chunk_first(seq__43321_44146__$1);
var G__44148 = cljs.core.chunk_rest(seq__43321_44146__$1);
var G__44149 = c__4550__auto___44147;
var G__44150 = cljs.core.count(c__4550__auto___44147);
var G__44151 = (0);
seq__43321_44129 = G__44148;
chunk__43323_44130 = G__44149;
count__43324_44131 = G__44150;
i__43325_44132 = G__44151;
continue;
} else {
var child_44156 = cljs.core.first(seq__43321_44146__$1);
if(cljs.core.truth_(child_44156)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44156);


var G__44157 = cljs.core.next(seq__43321_44146__$1);
var G__44158 = null;
var G__44159 = (0);
var G__44160 = (0);
seq__43321_44129 = G__44157;
chunk__43323_44130 = G__44158;
count__43324_44131 = G__44159;
i__43325_44132 = G__44160;
continue;
} else {
var G__44161 = cljs.core.next(seq__43321_44146__$1);
var G__44162 = null;
var G__44163 = (0);
var G__44164 = (0);
seq__43321_44129 = G__44161;
chunk__43323_44130 = G__44162;
count__43324_44131 = G__44163;
i__43325_44132 = G__44164;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44127);
}


var G__44166 = seq__43294_44122;
var G__44167 = chunk__43295_44123;
var G__44168 = count__43296_44124;
var G__44169 = (i__43297_44125 + (1));
seq__43294_44122 = G__44166;
chunk__43295_44123 = G__44167;
count__43296_44124 = G__44168;
i__43297_44125 = G__44169;
continue;
} else {
var temp__5735__auto___44172 = cljs.core.seq(seq__43294_44122);
if(temp__5735__auto___44172){
var seq__43294_44173__$1 = temp__5735__auto___44172;
if(cljs.core.chunked_seq_QMARK_(seq__43294_44173__$1)){
var c__4550__auto___44174 = cljs.core.chunk_first(seq__43294_44173__$1);
var G__44176 = cljs.core.chunk_rest(seq__43294_44173__$1);
var G__44177 = c__4550__auto___44174;
var G__44178 = cljs.core.count(c__4550__auto___44174);
var G__44179 = (0);
seq__43294_44122 = G__44176;
chunk__43295_44123 = G__44177;
count__43296_44124 = G__44178;
i__43297_44125 = G__44179;
continue;
} else {
var child_struct_44181 = cljs.core.first(seq__43294_44173__$1);
var children_44182 = shadow.dom.dom_node(child_struct_44181);
if(cljs.core.seq_QMARK_(children_44182)){
var seq__43338_44183 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44182));
var chunk__43340_44184 = null;
var count__43341_44185 = (0);
var i__43342_44186 = (0);
while(true){
if((i__43342_44186 < count__43341_44185)){
var child_44188 = chunk__43340_44184.cljs$core$IIndexed$_nth$arity$2(null,i__43342_44186);
if(cljs.core.truth_(child_44188)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44188);


var G__44190 = seq__43338_44183;
var G__44191 = chunk__43340_44184;
var G__44192 = count__43341_44185;
var G__44193 = (i__43342_44186 + (1));
seq__43338_44183 = G__44190;
chunk__43340_44184 = G__44191;
count__43341_44185 = G__44192;
i__43342_44186 = G__44193;
continue;
} else {
var G__44195 = seq__43338_44183;
var G__44196 = chunk__43340_44184;
var G__44197 = count__43341_44185;
var G__44198 = (i__43342_44186 + (1));
seq__43338_44183 = G__44195;
chunk__43340_44184 = G__44196;
count__43341_44185 = G__44197;
i__43342_44186 = G__44198;
continue;
}
} else {
var temp__5735__auto___44205__$1 = cljs.core.seq(seq__43338_44183);
if(temp__5735__auto___44205__$1){
var seq__43338_44210__$1 = temp__5735__auto___44205__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43338_44210__$1)){
var c__4550__auto___44211 = cljs.core.chunk_first(seq__43338_44210__$1);
var G__44212 = cljs.core.chunk_rest(seq__43338_44210__$1);
var G__44213 = c__4550__auto___44211;
var G__44214 = cljs.core.count(c__4550__auto___44211);
var G__44215 = (0);
seq__43338_44183 = G__44212;
chunk__43340_44184 = G__44213;
count__43341_44185 = G__44214;
i__43342_44186 = G__44215;
continue;
} else {
var child_44220 = cljs.core.first(seq__43338_44210__$1);
if(cljs.core.truth_(child_44220)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44220);


var G__44221 = cljs.core.next(seq__43338_44210__$1);
var G__44222 = null;
var G__44223 = (0);
var G__44224 = (0);
seq__43338_44183 = G__44221;
chunk__43340_44184 = G__44222;
count__43341_44185 = G__44223;
i__43342_44186 = G__44224;
continue;
} else {
var G__44225 = cljs.core.next(seq__43338_44210__$1);
var G__44226 = null;
var G__44227 = (0);
var G__44228 = (0);
seq__43338_44183 = G__44225;
chunk__43340_44184 = G__44226;
count__43341_44185 = G__44227;
i__43342_44186 = G__44228;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44182);
}


var G__44234 = cljs.core.next(seq__43294_44173__$1);
var G__44235 = null;
var G__44236 = (0);
var G__44237 = (0);
seq__43294_44122 = G__44234;
chunk__43295_44123 = G__44235;
count__43296_44124 = G__44236;
i__43297_44125 = G__44237;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__43364 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__43364);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__43367 = cljs.core.seq(node);
var chunk__43368 = null;
var count__43369 = (0);
var i__43370 = (0);
while(true){
if((i__43370 < count__43369)){
var n = chunk__43368.cljs$core$IIndexed$_nth$arity$2(null,i__43370);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44250 = seq__43367;
var G__44251 = chunk__43368;
var G__44252 = count__43369;
var G__44253 = (i__43370 + (1));
seq__43367 = G__44250;
chunk__43368 = G__44251;
count__43369 = G__44252;
i__43370 = G__44253;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43367);
if(temp__5735__auto__){
var seq__43367__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43367__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43367__$1);
var G__44254 = cljs.core.chunk_rest(seq__43367__$1);
var G__44255 = c__4550__auto__;
var G__44256 = cljs.core.count(c__4550__auto__);
var G__44257 = (0);
seq__43367 = G__44254;
chunk__43368 = G__44255;
count__43369 = G__44256;
i__43370 = G__44257;
continue;
} else {
var n = cljs.core.first(seq__43367__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__44258 = cljs.core.next(seq__43367__$1);
var G__44259 = null;
var G__44260 = (0);
var G__44261 = (0);
seq__43367 = G__44258;
chunk__43368 = G__44259;
count__43369 = G__44260;
i__43370 = G__44261;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__43375 = shadow.dom.dom_node(new$);
var G__43376 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__43375,G__43376);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__43380 = arguments.length;
switch (G__43380) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__43385 = arguments.length;
switch (G__43385) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__43419 = arguments.length;
switch (G__43419) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44289 = arguments.length;
var i__4731__auto___44290 = (0);
while(true){
if((i__4731__auto___44290 < len__4730__auto___44289)){
args__4736__auto__.push((arguments[i__4731__auto___44290]));

var G__44292 = (i__4731__auto___44290 + (1));
i__4731__auto___44290 = G__44292;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__43464_44299 = cljs.core.seq(nodes);
var chunk__43465_44300 = null;
var count__43466_44301 = (0);
var i__43467_44302 = (0);
while(true){
if((i__43467_44302 < count__43466_44301)){
var node_44303 = chunk__43465_44300.cljs$core$IIndexed$_nth$arity$2(null,i__43467_44302);
fragment.appendChild(shadow.dom._to_dom(node_44303));


var G__44305 = seq__43464_44299;
var G__44306 = chunk__43465_44300;
var G__44307 = count__43466_44301;
var G__44308 = (i__43467_44302 + (1));
seq__43464_44299 = G__44305;
chunk__43465_44300 = G__44306;
count__43466_44301 = G__44307;
i__43467_44302 = G__44308;
continue;
} else {
var temp__5735__auto___44309 = cljs.core.seq(seq__43464_44299);
if(temp__5735__auto___44309){
var seq__43464_44310__$1 = temp__5735__auto___44309;
if(cljs.core.chunked_seq_QMARK_(seq__43464_44310__$1)){
var c__4550__auto___44313 = cljs.core.chunk_first(seq__43464_44310__$1);
var G__44316 = cljs.core.chunk_rest(seq__43464_44310__$1);
var G__44317 = c__4550__auto___44313;
var G__44318 = cljs.core.count(c__4550__auto___44313);
var G__44319 = (0);
seq__43464_44299 = G__44316;
chunk__43465_44300 = G__44317;
count__43466_44301 = G__44318;
i__43467_44302 = G__44319;
continue;
} else {
var node_44324 = cljs.core.first(seq__43464_44310__$1);
fragment.appendChild(shadow.dom._to_dom(node_44324));


var G__44326 = cljs.core.next(seq__43464_44310__$1);
var G__44327 = null;
var G__44328 = (0);
var G__44329 = (0);
seq__43464_44299 = G__44326;
chunk__43465_44300 = G__44327;
count__43466_44301 = G__44328;
i__43467_44302 = G__44329;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq43451){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43451));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__43485_44339 = cljs.core.seq(scripts);
var chunk__43486_44340 = null;
var count__43487_44341 = (0);
var i__43488_44342 = (0);
while(true){
if((i__43488_44342 < count__43487_44341)){
var vec__43503_44346 = chunk__43486_44340.cljs$core$IIndexed$_nth$arity$2(null,i__43488_44342);
var script_tag_44347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43503_44346,(0),null);
var script_body_44348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43503_44346,(1),null);
eval(script_body_44348);


var G__44355 = seq__43485_44339;
var G__44356 = chunk__43486_44340;
var G__44357 = count__43487_44341;
var G__44358 = (i__43488_44342 + (1));
seq__43485_44339 = G__44355;
chunk__43486_44340 = G__44356;
count__43487_44341 = G__44357;
i__43488_44342 = G__44358;
continue;
} else {
var temp__5735__auto___44361 = cljs.core.seq(seq__43485_44339);
if(temp__5735__auto___44361){
var seq__43485_44362__$1 = temp__5735__auto___44361;
if(cljs.core.chunked_seq_QMARK_(seq__43485_44362__$1)){
var c__4550__auto___44363 = cljs.core.chunk_first(seq__43485_44362__$1);
var G__44364 = cljs.core.chunk_rest(seq__43485_44362__$1);
var G__44365 = c__4550__auto___44363;
var G__44366 = cljs.core.count(c__4550__auto___44363);
var G__44367 = (0);
seq__43485_44339 = G__44364;
chunk__43486_44340 = G__44365;
count__43487_44341 = G__44366;
i__43488_44342 = G__44367;
continue;
} else {
var vec__43512_44371 = cljs.core.first(seq__43485_44362__$1);
var script_tag_44372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43512_44371,(0),null);
var script_body_44373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43512_44371,(1),null);
eval(script_body_44373);


var G__44375 = cljs.core.next(seq__43485_44362__$1);
var G__44376 = null;
var G__44377 = (0);
var G__44378 = (0);
seq__43485_44339 = G__44375;
chunk__43486_44340 = G__44376;
count__43487_44341 = G__44377;
i__43488_44342 = G__44378;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__43515){
var vec__43516 = p__43515;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43516,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43516,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__43523 = shadow.dom.dom_node(el);
var G__43524 = cls;
return goog.dom.getAncestorByClass(G__43523,G__43524);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__43530 = arguments.length;
switch (G__43530) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__43531 = shadow.dom.dom_node(el);
var G__43532 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__43531,G__43532);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__43533 = shadow.dom.dom_node(el);
var G__43534 = cljs.core.name(tag);
var G__43535 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__43533,G__43534,G__43535);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__43537 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__43537);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__43539 = shadow.dom.dom_node(dom);
var G__43540 = value;
return goog.dom.forms.setValue(G__43539,G__43540);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__43553 = cljs.core.seq(style_keys);
var chunk__43554 = null;
var count__43555 = (0);
var i__43556 = (0);
while(true){
if((i__43556 < count__43555)){
var it = chunk__43554.cljs$core$IIndexed$_nth$arity$2(null,i__43556);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44416 = seq__43553;
var G__44417 = chunk__43554;
var G__44418 = count__43555;
var G__44419 = (i__43556 + (1));
seq__43553 = G__44416;
chunk__43554 = G__44417;
count__43555 = G__44418;
i__43556 = G__44419;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43553);
if(temp__5735__auto__){
var seq__43553__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43553__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__43553__$1);
var G__44421 = cljs.core.chunk_rest(seq__43553__$1);
var G__44422 = c__4550__auto__;
var G__44423 = cljs.core.count(c__4550__auto__);
var G__44424 = (0);
seq__43553 = G__44421;
chunk__43554 = G__44422;
count__43555 = G__44423;
i__43556 = G__44424;
continue;
} else {
var it = cljs.core.first(seq__43553__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__44426 = cljs.core.next(seq__43553__$1);
var G__44427 = null;
var G__44428 = (0);
var G__44429 = (0);
seq__43553 = G__44426;
chunk__43554 = G__44427;
count__43555 = G__44428;
i__43556 = G__44429;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k43576,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__43587 = k43576;
var G__43587__$1 = (((G__43587 instanceof cljs.core.Keyword))?G__43587.fqn:null);
switch (G__43587__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43576,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__43591){
var vec__43592 = p__43591;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43592,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43592,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43575){
var self__ = this;
var G__43575__$1 = this;
return (new cljs.core.RecordIter((0),G__43575__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__43597 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__43597(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43577,other43578){
var self__ = this;
var this43577__$1 = this;
return (((!((other43578 == null)))) && ((this43577__$1.constructor === other43578.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43577__$1.x,other43578.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43577__$1.y,other43578.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43577__$1.__extmap,other43578.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__43575){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__43607 = cljs.core.keyword_identical_QMARK_;
var expr__43608 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__43610 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__43611 = expr__43608;
return (pred__43607.cljs$core$IFn$_invoke$arity$2 ? pred__43607.cljs$core$IFn$_invoke$arity$2(G__43610,G__43611) : pred__43607.call(null,G__43610,G__43611));
})())){
return (new shadow.dom.Coordinate(G__43575,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43612 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__43613 = expr__43608;
return (pred__43607.cljs$core$IFn$_invoke$arity$2 ? pred__43607.cljs$core$IFn$_invoke$arity$2(G__43612,G__43613) : pred__43607.call(null,G__43612,G__43613));
})())){
return (new shadow.dom.Coordinate(self__.x,G__43575,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__43575),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__43575){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__43575,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__43579){
var extmap__4424__auto__ = (function (){var G__43621 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43579,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__43579)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43621);
} else {
return G__43621;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__43579),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__43579),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__43624 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__43624);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__43627 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__43627);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__43634 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__43634);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k43638,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__43653 = k43638;
var G__43653__$1 = (((G__43653 instanceof cljs.core.Keyword))?G__43653.fqn:null);
switch (G__43653__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43638,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__43662){
var vec__43663 = p__43662;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43663,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43663,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43637){
var self__ = this;
var G__43637__$1 = this;
return (new cljs.core.RecordIter((0),G__43637__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__43681 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__43681(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43639,other43640){
var self__ = this;
var this43639__$1 = this;
return (((!((other43640 == null)))) && ((this43639__$1.constructor === other43640.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43639__$1.w,other43640.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43639__$1.h,other43640.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43639__$1.__extmap,other43640.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__43637){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__43694 = cljs.core.keyword_identical_QMARK_;
var expr__43695 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__43697 = new cljs.core.Keyword(null,"w","w",354169001);
var G__43698 = expr__43695;
return (pred__43694.cljs$core$IFn$_invoke$arity$2 ? pred__43694.cljs$core$IFn$_invoke$arity$2(G__43697,G__43698) : pred__43694.call(null,G__43697,G__43698));
})())){
return (new shadow.dom.Size(G__43637,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__43699 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__43700 = expr__43695;
return (pred__43694.cljs$core$IFn$_invoke$arity$2 ? pred__43694.cljs$core$IFn$_invoke$arity$2(G__43699,G__43700) : pred__43694.call(null,G__43699,G__43700));
})())){
return (new shadow.dom.Size(self__.w,G__43637,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__43637),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__43637){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__43637,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__43645){
var extmap__4424__auto__ = (function (){var G__43708 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43645,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__43645)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43708);
} else {
return G__43708;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__43645),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__43645),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__43713 = shadow.dom.dom_node(el);
return goog.style.getSize(G__43713);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__44517 = (i + (1));
var G__44518 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__44517;
ret = G__44518;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43729){
var vec__43730 = p__43729;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43730,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43730,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__43735 = arguments.length;
switch (G__43735) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__43737_44525 = new_node;
var G__43738_44526 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__43737_44525,G__43738_44526);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__43743_44527 = new_node;
var G__43744_44528 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__43743_44527,G__43744_44528);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__44529 = ps;
var G__44530 = (i + (1));
el__$1 = G__44529;
i = G__44530;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__43754 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__43754);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__43761 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__43761);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__43765 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__43765);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__43775 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43775,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43775,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43775,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__43783_44534 = cljs.core.seq(props);
var chunk__43784_44535 = null;
var count__43785_44536 = (0);
var i__43786_44537 = (0);
while(true){
if((i__43786_44537 < count__43785_44536)){
var vec__43798_44538 = chunk__43784_44535.cljs$core$IIndexed$_nth$arity$2(null,i__43786_44537);
var k_44539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43798_44538,(0),null);
var v_44540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43798_44538,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_44539);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44539),v_44540);


var G__44541 = seq__43783_44534;
var G__44542 = chunk__43784_44535;
var G__44543 = count__43785_44536;
var G__44544 = (i__43786_44537 + (1));
seq__43783_44534 = G__44541;
chunk__43784_44535 = G__44542;
count__43785_44536 = G__44543;
i__43786_44537 = G__44544;
continue;
} else {
var temp__5735__auto___44547 = cljs.core.seq(seq__43783_44534);
if(temp__5735__auto___44547){
var seq__43783_44548__$1 = temp__5735__auto___44547;
if(cljs.core.chunked_seq_QMARK_(seq__43783_44548__$1)){
var c__4550__auto___44551 = cljs.core.chunk_first(seq__43783_44548__$1);
var G__44552 = cljs.core.chunk_rest(seq__43783_44548__$1);
var G__44553 = c__4550__auto___44551;
var G__44554 = cljs.core.count(c__4550__auto___44551);
var G__44555 = (0);
seq__43783_44534 = G__44552;
chunk__43784_44535 = G__44553;
count__43785_44536 = G__44554;
i__43786_44537 = G__44555;
continue;
} else {
var vec__43803_44556 = cljs.core.first(seq__43783_44548__$1);
var k_44557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803_44556,(0),null);
var v_44558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803_44556,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_44557);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_44557),v_44558);


var G__44563 = cljs.core.next(seq__43783_44548__$1);
var G__44564 = null;
var G__44565 = (0);
var G__44566 = (0);
seq__43783_44534 = G__44563;
chunk__43784_44535 = G__44564;
count__43785_44536 = G__44565;
i__43786_44537 = G__44566;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__43811 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43811,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43811,(1),null);
var seq__43814_44576 = cljs.core.seq(node_children);
var chunk__43816_44577 = null;
var count__43817_44578 = (0);
var i__43818_44579 = (0);
while(true){
if((i__43818_44579 < count__43817_44578)){
var child_struct_44583 = chunk__43816_44577.cljs$core$IIndexed$_nth$arity$2(null,i__43818_44579);
if((!((child_struct_44583 == null)))){
if(typeof child_struct_44583 === 'string'){
var text_44584 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44584),child_struct_44583].join(''));
} else {
var children_44585 = shadow.dom.svg_node(child_struct_44583);
if(cljs.core.seq_QMARK_(children_44585)){
var seq__43863_44586 = cljs.core.seq(children_44585);
var chunk__43865_44587 = null;
var count__43866_44588 = (0);
var i__43867_44589 = (0);
while(true){
if((i__43867_44589 < count__43866_44588)){
var child_44592 = chunk__43865_44587.cljs$core$IIndexed$_nth$arity$2(null,i__43867_44589);
if(cljs.core.truth_(child_44592)){
node.appendChild(child_44592);


var G__44593 = seq__43863_44586;
var G__44594 = chunk__43865_44587;
var G__44595 = count__43866_44588;
var G__44596 = (i__43867_44589 + (1));
seq__43863_44586 = G__44593;
chunk__43865_44587 = G__44594;
count__43866_44588 = G__44595;
i__43867_44589 = G__44596;
continue;
} else {
var G__44597 = seq__43863_44586;
var G__44598 = chunk__43865_44587;
var G__44599 = count__43866_44588;
var G__44600 = (i__43867_44589 + (1));
seq__43863_44586 = G__44597;
chunk__43865_44587 = G__44598;
count__43866_44588 = G__44599;
i__43867_44589 = G__44600;
continue;
}
} else {
var temp__5735__auto___44601 = cljs.core.seq(seq__43863_44586);
if(temp__5735__auto___44601){
var seq__43863_44603__$1 = temp__5735__auto___44601;
if(cljs.core.chunked_seq_QMARK_(seq__43863_44603__$1)){
var c__4550__auto___44604 = cljs.core.chunk_first(seq__43863_44603__$1);
var G__44605 = cljs.core.chunk_rest(seq__43863_44603__$1);
var G__44606 = c__4550__auto___44604;
var G__44607 = cljs.core.count(c__4550__auto___44604);
var G__44608 = (0);
seq__43863_44586 = G__44605;
chunk__43865_44587 = G__44606;
count__43866_44588 = G__44607;
i__43867_44589 = G__44608;
continue;
} else {
var child_44610 = cljs.core.first(seq__43863_44603__$1);
if(cljs.core.truth_(child_44610)){
node.appendChild(child_44610);


var G__44613 = cljs.core.next(seq__43863_44603__$1);
var G__44614 = null;
var G__44615 = (0);
var G__44616 = (0);
seq__43863_44586 = G__44613;
chunk__43865_44587 = G__44614;
count__43866_44588 = G__44615;
i__43867_44589 = G__44616;
continue;
} else {
var G__44618 = cljs.core.next(seq__43863_44603__$1);
var G__44619 = null;
var G__44620 = (0);
var G__44621 = (0);
seq__43863_44586 = G__44618;
chunk__43865_44587 = G__44619;
count__43866_44588 = G__44620;
i__43867_44589 = G__44621;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44585);
}
}


var G__44625 = seq__43814_44576;
var G__44626 = chunk__43816_44577;
var G__44627 = count__43817_44578;
var G__44628 = (i__43818_44579 + (1));
seq__43814_44576 = G__44625;
chunk__43816_44577 = G__44626;
count__43817_44578 = G__44627;
i__43818_44579 = G__44628;
continue;
} else {
var G__44629 = seq__43814_44576;
var G__44630 = chunk__43816_44577;
var G__44631 = count__43817_44578;
var G__44632 = (i__43818_44579 + (1));
seq__43814_44576 = G__44629;
chunk__43816_44577 = G__44630;
count__43817_44578 = G__44631;
i__43818_44579 = G__44632;
continue;
}
} else {
var temp__5735__auto___44637 = cljs.core.seq(seq__43814_44576);
if(temp__5735__auto___44637){
var seq__43814_44638__$1 = temp__5735__auto___44637;
if(cljs.core.chunked_seq_QMARK_(seq__43814_44638__$1)){
var c__4550__auto___44639 = cljs.core.chunk_first(seq__43814_44638__$1);
var G__44640 = cljs.core.chunk_rest(seq__43814_44638__$1);
var G__44641 = c__4550__auto___44639;
var G__44642 = cljs.core.count(c__4550__auto___44639);
var G__44643 = (0);
seq__43814_44576 = G__44640;
chunk__43816_44577 = G__44641;
count__43817_44578 = G__44642;
i__43818_44579 = G__44643;
continue;
} else {
var child_struct_44644 = cljs.core.first(seq__43814_44638__$1);
if((!((child_struct_44644 == null)))){
if(typeof child_struct_44644 === 'string'){
var text_44645 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_44645),child_struct_44644].join(''));
} else {
var children_44646 = shadow.dom.svg_node(child_struct_44644);
if(cljs.core.seq_QMARK_(children_44646)){
var seq__43885_44647 = cljs.core.seq(children_44646);
var chunk__43887_44648 = null;
var count__43888_44649 = (0);
var i__43889_44650 = (0);
while(true){
if((i__43889_44650 < count__43888_44649)){
var child_44651 = chunk__43887_44648.cljs$core$IIndexed$_nth$arity$2(null,i__43889_44650);
if(cljs.core.truth_(child_44651)){
node.appendChild(child_44651);


var G__44652 = seq__43885_44647;
var G__44653 = chunk__43887_44648;
var G__44654 = count__43888_44649;
var G__44655 = (i__43889_44650 + (1));
seq__43885_44647 = G__44652;
chunk__43887_44648 = G__44653;
count__43888_44649 = G__44654;
i__43889_44650 = G__44655;
continue;
} else {
var G__44656 = seq__43885_44647;
var G__44657 = chunk__43887_44648;
var G__44658 = count__43888_44649;
var G__44659 = (i__43889_44650 + (1));
seq__43885_44647 = G__44656;
chunk__43887_44648 = G__44657;
count__43888_44649 = G__44658;
i__43889_44650 = G__44659;
continue;
}
} else {
var temp__5735__auto___44661__$1 = cljs.core.seq(seq__43885_44647);
if(temp__5735__auto___44661__$1){
var seq__43885_44662__$1 = temp__5735__auto___44661__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43885_44662__$1)){
var c__4550__auto___44663 = cljs.core.chunk_first(seq__43885_44662__$1);
var G__44664 = cljs.core.chunk_rest(seq__43885_44662__$1);
var G__44665 = c__4550__auto___44663;
var G__44666 = cljs.core.count(c__4550__auto___44663);
var G__44667 = (0);
seq__43885_44647 = G__44664;
chunk__43887_44648 = G__44665;
count__43888_44649 = G__44666;
i__43889_44650 = G__44667;
continue;
} else {
var child_44668 = cljs.core.first(seq__43885_44662__$1);
if(cljs.core.truth_(child_44668)){
node.appendChild(child_44668);


var G__44669 = cljs.core.next(seq__43885_44662__$1);
var G__44670 = null;
var G__44671 = (0);
var G__44672 = (0);
seq__43885_44647 = G__44669;
chunk__43887_44648 = G__44670;
count__43888_44649 = G__44671;
i__43889_44650 = G__44672;
continue;
} else {
var G__44673 = cljs.core.next(seq__43885_44662__$1);
var G__44674 = null;
var G__44675 = (0);
var G__44676 = (0);
seq__43885_44647 = G__44673;
chunk__43887_44648 = G__44674;
count__43888_44649 = G__44675;
i__43889_44650 = G__44676;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_44646);
}
}


var G__44678 = cljs.core.next(seq__43814_44638__$1);
var G__44679 = null;
var G__44680 = (0);
var G__44681 = (0);
seq__43814_44576 = G__44678;
chunk__43816_44577 = G__44679;
count__43817_44578 = G__44680;
i__43818_44579 = G__44681;
continue;
} else {
var G__44682 = cljs.core.next(seq__43814_44638__$1);
var G__44683 = null;
var G__44684 = (0);
var G__44685 = (0);
seq__43814_44576 = G__44682;
chunk__43816_44577 = G__44683;
count__43817_44578 = G__44684;
i__43818_44579 = G__44685;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__43902_44686 = shadow.dom._to_svg;
var G__43903_44687 = "string";
var G__43904_44688 = ((function (G__43902_44686,G__43903_44687){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__43902_44686,G__43903_44687))
;
goog.object.set(G__43902_44686,G__43903_44687,G__43904_44688);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__43916_44689 = shadow.dom._to_svg;
var G__43917_44690 = "null";
var G__43918_44691 = ((function (G__43916_44689,G__43917_44690){
return (function (_){
return null;
});})(G__43916_44689,G__43917_44690))
;
goog.object.set(G__43916_44689,G__43917_44690,G__43918_44691);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44697 = arguments.length;
var i__4731__auto___44698 = (0);
while(true){
if((i__4731__auto___44698 < len__4730__auto___44697)){
args__4736__auto__.push((arguments[i__4731__auto___44698]));

var G__44701 = (i__4731__auto___44698 + (1));
i__4731__auto___44698 = G__44701;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq43929){
var G__43930 = cljs.core.first(seq43929);
var seq43929__$1 = cljs.core.next(seq43929);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43930,seq43929__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__43940 = arguments.length;
switch (G__43940) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__43944_44711 = shadow.dom.dom_node(el);
var G__43945_44712 = cljs.core.name(event);
var G__43946_44713 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__43944_44711,G__43945_44712,G__43946_44713) : shadow.dom.dom_listen.call(null,G__43944_44711,G__43945_44712,G__43946_44713));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30234__auto___44718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30234__auto___44718,buf,chan,event_fn){
return (function (){
var f__30235__auto__ = (function (){var switch__29708__auto__ = ((function (c__30234__auto___44718,buf,chan,event_fn){
return (function (state_43956){
var state_val_43957 = (state_43956[(1)]);
if((state_val_43957 === (1))){
var state_43956__$1 = state_43956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43956__$1,(2),once_or_cleanup);
} else {
if((state_val_43957 === (2))){
var inst_43953 = (state_43956[(2)]);
var inst_43954 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_43956__$1 = (function (){var statearr_43960 = state_43956;
(statearr_43960[(7)] = inst_43953);

return statearr_43960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43956__$1,inst_43954);
} else {
return null;
}
}
});})(c__30234__auto___44718,buf,chan,event_fn))
;
return ((function (switch__29708__auto__,c__30234__auto___44718,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__29709__auto__ = null;
var shadow$dom$state_machine__29709__auto____0 = (function (){
var statearr_43963 = [null,null,null,null,null,null,null,null];
(statearr_43963[(0)] = shadow$dom$state_machine__29709__auto__);

(statearr_43963[(1)] = (1));

return statearr_43963;
});
var shadow$dom$state_machine__29709__auto____1 = (function (state_43956){
while(true){
var ret_value__29710__auto__ = (function (){try{while(true){
var result__29711__auto__ = switch__29708__auto__(state_43956);
if(cljs.core.keyword_identical_QMARK_(result__29711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29711__auto__;
}
break;
}
}catch (e43964){if((e43964 instanceof Object)){
var ex__29712__auto__ = e43964;
var statearr_43966_44720 = state_43956;
(statearr_43966_44720[(5)] = ex__29712__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29710__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44722 = state_43956;
state_43956 = G__44722;
continue;
} else {
return ret_value__29710__auto__;
}
break;
}
});
shadow$dom$state_machine__29709__auto__ = function(state_43956){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29709__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29709__auto____1.call(this,state_43956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29709__auto____0;
shadow$dom$state_machine__29709__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29709__auto____1;
return shadow$dom$state_machine__29709__auto__;
})()
;})(switch__29708__auto__,c__30234__auto___44718,buf,chan,event_fn))
})();
var state__30236__auto__ = (function (){var statearr_43969 = (f__30235__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30235__auto__.cljs$core$IFn$_invoke$arity$0() : f__30235__auto__.call(null));
(statearr_43969[(6)] = c__30234__auto___44718);

return statearr_43969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30236__auto__);
});})(c__30234__auto___44718,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
