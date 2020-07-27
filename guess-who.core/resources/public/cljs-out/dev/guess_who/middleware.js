// Compiled by ClojureScript 1.10.520 {}
goog.provide('guess_who.middleware');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('guess_who.person_generator');
guess_who.middleware.get_comp_hc = (function guess_who$middleware$get_comp_hc(comp){
var comp__$1 = cljs.core.keyword.call(null,comp);
return cljs.core.get.call(null,guess_who.person_generator.comp_checker,comp__$1);
});
guess_who.middleware.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
guess_who.middleware.swapper = (function guess_who$middleware$swapper(newstate){
return cljs.core.swap_BANG_.call(null,guess_who.middleware.state,cljs.core.assoc,new cljs.core.Keyword(null,"info","info",-317069002),newstate);
});
guess_who.middleware.handler = (function guess_who$middleware$handler(p__25844){
var vec__25845 = p__25844;
var ok = cljs.core.nth.call(null,vec__25845,(0),null);
var response = cljs.core.nth.call(null,vec__25845,(1),null);
var attr = cljs.core.select_keys.call(null,response,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"era","era",1165135812),new cljs.core.Keyword(null,"hair-type","hair-type",805324640),new cljs.core.Keyword(null,"hair-color","hair-color",330394323),new cljs.core.Keyword(null,"instrument","instrument",-960698844)], null));
if(cljs.core.truth_(ok)){
console.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(response));
} else {
}

console.error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(response));

return guess_who.middleware.swapper.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr));
});
guess_who.middleware.getcompa = (function guess_who$middleware$getcompa(comp){
ajax.core.ajax_request.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8080/composer/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comp)].join(''),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"handler","handler",-195596612),guess_who.middleware.handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null))], null));

return cljs.core.get.call(null,cljs.core.deref.call(null,guess_who.middleware.state),new cljs.core.Keyword(null,"info","info",-317069002));
});

//# sourceMappingURL=middleware.js.map
