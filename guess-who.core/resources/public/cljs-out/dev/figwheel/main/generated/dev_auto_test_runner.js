// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.main.generated.dev_auto_test_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('cljs_test_display.core');
goog.require('guess_who.core_test');
cljs.test.run_block.call(null,(function (){var env14684 = cljs_test_display.core.init_BANG_.call(null,"app-auto-testing");
var summary14685 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env14684,summary14685){
return (function (){
cljs.test.set_env_BANG_.call(null,env14684);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"guess-who.core-test","guess-who.core-test",-1353081783,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__14603__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__14603__auto__,env14684,summary14685){
return (function (){
if((env__14603__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__14603__auto__,env14684,summary14685))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__14603__auto__,env14684,summary14685){
return (function (){
if((env__14603__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__14603__auto__,env14684,summary14685))
], null));
})());
});})(env14684,summary14685))
,((function (env14684,summary14685){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"guess-who.core-test","guess-who.core-test",-1353081783,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env14684,summary14685))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env14684,summary14685){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary14685,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary14685),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env14684,summary14685))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env14684,summary14685){
return (function (){
cljs.test.set_env_BANG_.call(null,env14684);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary14685));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary14685),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env14684,summary14685))
], null));
})());

//# sourceMappingURL=dev_auto_test_runner.js.map
