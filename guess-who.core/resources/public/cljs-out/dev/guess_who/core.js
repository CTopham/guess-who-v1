// Compiled by ClojureScript 1.10.520 {}
goog.provide('guess_who.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs.test');
goog.require('guess_who.person_generator');
goog.require('guess_who.keycoder');
goog.require('guess_who.framework');
guess_who.core.new_board = (function guess_who$core$new_board(n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,n,cljs.core.vec.call(null,cljs.core.repeat.call(null,n,(0)))));
});
guess_who.core.board_size = (4);
if((typeof guess_who !== 'undefined') && (typeof guess_who.core !== 'undefined') && (typeof guess_who.core.app_state !== 'undefined')){
} else {
guess_who.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Guess Who",new cljs.core.Keyword(null,"board","board",-1907017633),guess_who.core.new_board.call(null,guess_who.core.board_size),new cljs.core.Keyword(null,"target","target",253001721),guess_who.person_generator.generate_target.call(null)], null));
}
cljs.core.println.call(null,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,guess_who.core.app_state)));
if((typeof guess_who !== 'undefined') && (typeof guess_who.core !== 'undefined') && (typeof guess_who.core.input_state !== 'undefined')){
} else {
guess_who.core.input_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"word-array","word-array",1023188585),cljs.core.PersistentVector.EMPTY], null));
}
if((typeof guess_who !== 'undefined') && (typeof guess_who.core !== 'undefined') && (typeof guess_who.core.output_state !== 'undefined')){
} else {
guess_who.core.output_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answer","answer",-742633163),"listening.."], null));
}
guess_who.core.handle_input = (function guess_who$core$handle_input(){
var translated_word = guess_who.keycoder.get_word.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,guess_who.core.input_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-array","word-array",1023188585)], null)));
var decoded_phrase_map = guess_who.framework.decoder.call(null,translated_word);
var interpret_map = guess_who.framework.interpret.call(null,decoded_phrase_map);
var response = guess_who.framework.Dynamic_Answers.call(null,interpret_map,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,guess_who.core.app_state)));
cljs.core.prn.call(null,translated_word);

cljs.core.swap_BANG_.call(null,guess_who.core.output_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null),response);

cljs.core.swap_BANG_.call(null,guess_who.core.input_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-array","word-array",1023188585)], null),cljs.core.PersistentVector.EMPTY);

cljs.core.prn.call(null,"reset");

return cljs.core.prn.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,guess_who.core.input_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-array","word-array",1023188585)], null)));
});
guess_who.core.chat_input = (function guess_who$core$chat_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"value","value",305978217),guess_who.keycoder.get_word.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,guess_who.core.input_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-array","word-array",1023188585)], null))),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
cljs.core.swap_BANG_.call(null,guess_who.core.input_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-array","word-array",1023188585)], null),cljs.core.conj,e.charCode);

cljs.core.println.call(null,"key press",e.charCode);

if(cljs.core._EQ_.call(null,(13),e.charCode)){
return guess_who.core.handle_input.call(null);
} else {
return null;
}
})], null)], null);
});
guess_who.core.grid_html = (function guess_who$core$grid_html(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 4 2",new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(600)], null),(function (){var iter__4523__auto__ = (function guess_who$core$grid_html_$_iter__16154(s__16155){
return (new cljs.core.LazySeq(null,(function (){
var s__16155__$1 = s__16155;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16155__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__16155__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function guess_who$core$grid_html_$_iter__16154_$_iter__16156(s__16157){
return (new cljs.core.LazySeq(null,((function (s__16155__$1,i,xs__6012__auto__,temp__5457__auto__){
return (function (){
var s__16157__$1 = s__16157;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__16157__$1);
if(temp__5457__auto____$1){
var s__16157__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16157__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16157__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16159 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16158 = (0);
while(true){
if((i__16158 < size__4522__auto__)){
var j = cljs.core._nth.call(null,c__4521__auto__,i__16158);
cljs.core.chunk_append.call(null,b__16159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),.66,new cljs.core.Keyword(null,"height","height",1025178622),.89,new cljs.core.Keyword(null,"fill","fill",883462889),(((cljs.core.get_in.call(null,cljs.core.deref.call(null,guess_who.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null)) === (0)))?"rgba(100,200,10,0.0":"white"),new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),j,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16158,s__16155__$1,j,c__4521__auto__,size__4522__auto__,b__16159,s__16157__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__){
return (function guess_who$core$grid_html_$_iter__16154_$_iter__16156_$_box_click(e){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),j,i);

return cljs.core.swap_BANG_.call(null,guess_who.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null));
});})(i__16158,s__16155__$1,j,c__4521__auto__,size__4522__auto__,b__16159,s__16157__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__))
], null)], null));

var G__16160 = (i__16158 + (1));
i__16158 = G__16160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16159),guess_who$core$grid_html_$_iter__16154_$_iter__16156.call(null,cljs.core.chunk_rest.call(null,s__16157__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16159),null);
}
} else {
var j = cljs.core.first.call(null,s__16157__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),.66,new cljs.core.Keyword(null,"height","height",1025178622),.89,new cljs.core.Keyword(null,"fill","fill",883462889),(((cljs.core.get_in.call(null,cljs.core.deref.call(null,guess_who.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null)) === (0)))?"rgba(100,200,10,0.0":"white"),new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),j,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s__16155__$1,j,s__16157__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__){
return (function guess_who$core$grid_html_$_iter__16154_$_iter__16156_$_box_click(e){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"board","board",-1907017633),j,i);

return cljs.core.swap_BANG_.call(null,guess_who.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i], null));
});})(s__16155__$1,j,s__16157__$2,temp__5457__auto____$1,i,xs__6012__auto__,temp__5457__auto__))
], null)], null),guess_who$core$grid_html_$_iter__16154_$_iter__16156.call(null,cljs.core.rest.call(null,s__16157__$2)));
}
} else {
return null;
}
break;
}
});})(s__16155__$1,i,xs__6012__auto__,temp__5457__auto__))
,null,null));
});})(s__16155__$1,i,xs__6012__auto__,temp__5457__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,guess_who.core.app_state))))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,guess_who$core$grid_html_$_iter__16154.call(null,cljs.core.rest.call(null,s__16155__$1)));
} else {
var G__16161 = cljs.core.rest.call(null,s__16155__$1);
s__16155__$1 = G__16161;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,guess_who.core.app_state)))));
})()], null));
});
guess_who.core.reset_button = (function guess_who$core$reset_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Reset",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return location.reload(cljs.core.List.EMPTY);
})], null)], null)], null);
});
guess_who.core.guess_who = (function guess_who$core$guess_who(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),guess_who.core.reset_button.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,guess_who.core.app_state))], null),guess_who.core.chat_input.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,guess_who.core.output_state))], null),guess_who.core.grid_html.call(null)], null);
});
guess_who.core.get_app_element = (function guess_who$core$get_app_element(){
return goog.dom.getElement("app");
});
guess_who.core.mount = (function guess_who$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [guess_who.core.guess_who], null),el);
});
guess_who.core.mount_app_element = (function guess_who$core$mount_app_element(){
var temp__5457__auto__ = guess_who.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return guess_who.core.mount.call(null,el);
} else {
return null;
}
});
guess_who.core.mount_app_element.call(null);
guess_who.core.on_reload = (function guess_who$core$on_reload(){
return guess_who.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
