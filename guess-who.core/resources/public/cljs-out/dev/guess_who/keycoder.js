// Compiled by ClojureScript 1.10.520 {}
goog.provide('guess_who.keycoder');
goog.require('cljs.core');
goog.require('clojure.string');
guess_who.keycoder.key_mapper = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"72","72",-576755360),new cljs.core.Keyword(null,"120","120",1958088705),new cljs.core.Keyword(null,"109","109",-1709760255),new cljs.core.Keyword(null,"88","88",2130735713),new cljs.core.Keyword(null,"39","39",-1852192031),new cljs.core.Keyword(null,"89","89",-938775711),new cljs.core.Keyword(null,"108","108",1330227491),new cljs.core.Keyword(null,"114","114",-825898140),new cljs.core.Keyword(null,"77","77",263722533),new cljs.core.Keyword(null,"83","83",-1967959195),new cljs.core.Keyword(null,"65","65",-2003820186),new cljs.core.Keyword(null,"52","52",-1710276890),new cljs.core.Keyword(null,"115","115",1423452487),new cljs.core.Keyword(null,"76","76",1337246695),new cljs.core.Keyword(null,"75","75",389757224),new cljs.core.Keyword(null,"117","117",320879689),new cljs.core.Keyword(null,"56","56",952887817),new cljs.core.Keyword(null,"70","70",1643945641),new cljs.core.Keyword(null,"110","110",585795626),new cljs.core.Keyword(null,"73","73",40426570),new cljs.core.Keyword(null,"118","118",-1050353526),new cljs.core.Keyword(null,"13","13",-1232839158),new cljs.core.Keyword(null,"122","122",827489834),new cljs.core.Keyword(null,"66","66",-1344855254),new cljs.core.Keyword(null,"119","119",962069547),new cljs.core.Keyword(null,"71","71",1591650891),new cljs.core.Keyword(null,"53","53",749578027),new cljs.core.Keyword(null,"57","57",-819443668),new cljs.core.Keyword(null,"79","79",1905149228),new cljs.core.Keyword(null,"98","98",-82660628),new cljs.core.Keyword(null,"106","106",-1519093908),new cljs.core.Keyword(null,"87","87",1355010285),new cljs.core.Keyword(null,"85","85",-1827114547),new cljs.core.Keyword(null,"100","100",943295053),new cljs.core.Keyword(null,"105","105",1696001998),new cljs.core.Keyword(null,"81","81",-1629911825),new cljs.core.Keyword(null,"55","55",474895791),new cljs.core.Keyword(null,"78","78",-1302360145),new cljs.core.Keyword(null,"50","50",-510472304),new cljs.core.Keyword(null,"113","113",-1330138927),new cljs.core.Keyword(null,"67","67",-365775983),new cljs.core.Keyword(null,"74","74",1066509330),new cljs.core.Keyword(null,"86","86",1082368754),new cljs.core.Keyword(null,"102","102",617083507),new cljs.core.Keyword(null,"32","32",-583115021),new cljs.core.Keyword(null,"49","49",973939221),new cljs.core.Keyword(null,"112","112",1821690613),new cljs.core.Keyword(null,"48","48",1049432214),new cljs.core.Keyword(null,"69","69",1700625334),new cljs.core.Keyword(null,"103","103",355685591),new cljs.core.Keyword(null,"121","121",-2018636168),new cljs.core.Keyword(null,"90","90",-1828276392),new cljs.core.Keyword(null,"107","107",-1859558568),new cljs.core.Keyword(null,"101","101",869919993),new cljs.core.Keyword(null,"111","111",1254158777),new cljs.core.Keyword(null,"99","99",809465114),new cljs.core.Keyword(null,"97","97",510134618),new cljs.core.Keyword(null,"51","51",796806460),new cljs.core.Keyword(null,"104","104",-294590020),new cljs.core.Keyword(null,"54","54",-1174129028),new cljs.core.Keyword(null,"116","116",1433375452),new cljs.core.Keyword(null,"82","82",-1765742788),new cljs.core.Keyword(null,"84","84",-899053668),new cljs.core.Keyword(null,"80","80",314908061),new cljs.core.Keyword(null,"68","68",-94762081)],["h","x","m","x","'","y","l","r","m","s","a","4","s","l","k","u","8","f","n","i","v","","z","b","w","g","5","9","o","b","j","w","u","d","i","q","7","n","2","q","c","j","v","f"," ","1","p","0","e","g","y","z","k","e","o","c","a","3","h","6","t","r","t","p","d"]);
guess_who.keycoder.get_word = (function guess_who$keycoder$get_word(coll){
var kws = cljs.core.map.call(null,(function (p1__19758_SHARP_){
return cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19758_SHARP_));
}),coll);
var letters = (function (){var iter__4523__auto__ = ((function (kws){
return (function guess_who$keycoder$get_word_$_iter__19759(s__19760){
return (new cljs.core.LazySeq(null,((function (kws){
return (function (){
var s__19760__$1 = s__19760;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19760__$1);
if(temp__5457__auto__){
var s__19760__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19760__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19760__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19762 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19761 = (0);
while(true){
if((i__19761 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__19761);
var y = cljs.core.get.call(null,guess_who.keycoder.key_mapper,x);
cljs.core.chunk_append.call(null,b__19762,y);

var G__19763 = (i__19761 + (1));
i__19761 = G__19763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19762),guess_who$keycoder$get_word_$_iter__19759.call(null,cljs.core.chunk_rest.call(null,s__19760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19762),null);
}
} else {
var x = cljs.core.first.call(null,s__19760__$2);
var y = cljs.core.get.call(null,guess_who.keycoder.key_mapper,x);
return cljs.core.cons.call(null,y,guess_who$keycoder$get_word_$_iter__19759.call(null,cljs.core.rest.call(null,s__19760__$2)));
}
} else {
return null;
}
break;
}
});})(kws))
,null,null));
});})(kws))
;
return iter__4523__auto__.call(null,kws);
})();
return clojure.string.join.call(null,letters);
});

//# sourceMappingURL=keycoder.js.map
