// Compiled by ClojureScript 1.10.520 {}
goog.provide('guess_who.framework');
goog.require('cljs.core');
goog.require('clojure.string');
guess_who.framework.decoder = (function guess_who$framework$decoder(s){
var brahms = clojure.string.includes_QMARK_.call(null,s,"brahms");
var bach = clojure.string.includes_QMARK_.call(null,s,"bach");
var beethoven = clojure.string.includes_QMARK_.call(null,s,"beethoven");
var chopin = clojure.string.includes_QMARK_.call(null,s,"chopin");
var debussy = clojure.string.includes_QMARK_.call(null,s,"debussy");
var mozart = clojure.string.includes_QMARK_.call(null,s,"mozart");
var liszt = clojure.string.includes_QMARK_.call(null,s,"liszt");
var mendelssohn = clojure.string.includes_QMARK_.call(null,s,"mendelssohn");
var era = ((clojure.string.includes_QMARK_.call(null,s,"era")) || (clojure.string.includes_QMARK_.call(null,s,"period")));
var born = ((clojure.string.includes_QMARK_.call(null,s,"born")) || (clojure.string.includes_QMARK_.call(null,s,"birth")));
var died = ((clojure.string.includes_QMARK_.call(null,s,"died")) || (clojure.string.includes_QMARK_.call(null,s,"die")));
var region = ((clojure.string.includes_QMARK_.call(null,s,"from")) || (clojure.string.includes_QMARK_.call(null,s,"region")));
var instrument = ((clojure.string.includes_QMARK_.call(null,s,"play")) || (clojure.string.includes_QMARK_.call(null,s,"instrument")));
var hair = clojure.string.includes_QMARK_.call(null,s,"hair");
var height = ((clojure.string.includes_QMARK_.call(null,s,"height")) || (clojure.string.includes_QMARK_.call(null,s,"tall")));
var beard = clojure.string.includes_QMARK_.call(null,s,"beard");
var magnum_opus = ((clojure.string.includes_QMARK_.call(null,s,"compose")) || (clojure.string.includes_QMARK_.call(null,s,"write")));
var hint = clojure.string.includes_QMARK_.call(null,s,"hint");
if(cljs.core._EQ_.call(null,brahms,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"brahms",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,bach,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"bach",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,beethoven,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"beethoven",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,chopin,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"chopin",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,debussy,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"debussy",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,mozart,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"mozart",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,liszt,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"liszt",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,mendelssohn,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"mendelssohn",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,era,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"era",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,born,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"born",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,died,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"died",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,region,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"region",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,instrument,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"instrument",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,hair,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"hair",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,height,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"height",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,beard,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"beard",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,magnum_opus,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"magnum-opus",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
if(cljs.core._EQ_.call(null,hint,true)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"hint",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"unknown",new cljs.core.Keyword(null,"full-input","full-input",1051896429),s], null);

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
});
if((typeof guess_who !== 'undefined') && (typeof guess_who.framework !== 'undefined') && (typeof guess_who.framework.interpret !== 'undefined')){
} else {
guess_who.framework.interpret = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"guess-who.framework","interpret"),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,guess_who.framework.interpret,"era",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"classical")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"era","era",1165135812),"classical");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"baroque")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"era","era",1165135812),"baroque");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"romantic")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"era","era",1165135812),"romantic");
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"era","era",1165135812),"that");

}
}
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"born",(function (m){
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"1600s")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"17th century")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"born","born",-461260488),"17th century");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"1700s")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"18th century")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"born","born",-461260488),"18th century");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"1800s")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"19th century")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"born","born",-461260488),"19th century");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"1900s")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"20th century")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"born","born",-461260488),"17th century");
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"born","born",-461260488),"then");

}
}
}
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"died",(function (m){
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"1600s")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"17th century")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"died","died",1083960752),"17th century");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"1700s")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"18th century")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"died","died",1083960752),"18th century");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"1800s")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"19th century")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"died","died",1083960752),"19th century");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"1900s")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"20th century")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"died","died",1083960752),"20th century");
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"died","died",1083960752),"then");

}
}
}
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"height",(function (m){
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'1")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five one")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'1");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'2")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five two")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'2");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'3")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five three")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'3");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'4")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five four")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'4");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'5")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five five")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'5");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'6")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five six")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'6");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'7")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five seven")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'7");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'8")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five eight")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'8");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'9")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five nine")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'9");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'10")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five ten")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'10");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"5'11")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"five eleven")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"5'11");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"6'0")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"six foot")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"6'0");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"6'1")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"six one")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"6'1");
} else {
if(((clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"6'2")) || (clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"six two")))){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"6'2");
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622),"that");

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
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"region",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"united state")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"united states");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"usa")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"united states");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"poland")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"poland");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"vienna")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"vienna");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"austria")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"austria");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"hungary")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"hungary");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"germany")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"germany");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"france")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"france");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"germany")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"germany");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"china")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"china");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"england")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"england");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"russia")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"russia");
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"region","region",270415120),"there");

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
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"instrument",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"piano")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844),"piano");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"violin")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844),"violin");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"harpsichord")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844),"harpsichord");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"flute")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844),"flute");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"cello")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844),"cello");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"bass")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844),"bass");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"trumpet")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844),"trumpet");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"trombone")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844),"trombone");
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844),"that");

}
}
}
}
}
}
}
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"hair",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"brown")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"brown");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"gray")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"gray");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"grey")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"gray");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"red")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"red");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"blonde")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"blonde");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"black")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"black");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"bald")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323),"bald");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"short")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"short");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"long")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"long");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"curly")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"curly");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"straight")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"straight");
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640),"that type");

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
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"magnum-opus",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"mass in b minor")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641),"mass in b minor");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"9th symphony")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641),"9th symphony");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"symphony 4")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"magnum-opuscolor","magnum-opuscolor",855119276),"symphony 4");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"4th ballad")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641),"4th ballad");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"claire de lune")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641),"claire de lune");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"requim")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641),"requim");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"la campanella")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641),"la campanella");
} else {
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"violin concerto 64")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641),"violin concerto 64");
} else {
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641),"mass in b minor | 9th symphony | symphony 4 | 4th ballad | claire de lune | requim | la campanella | violin concerto 64");

}
}
}
}
}
}
}
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"beard",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"beard")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"beard","beard",636633992),true);
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"hint",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"hint")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"hint","hint",439639918),"hint");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"brahms",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"brahms")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"brahms");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"bach",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"bach")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"bach");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"beethoven",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"beethoven")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"beethoven");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"chopin",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"chopin")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"chopin");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"debussy",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"debussy")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"debussy");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"mozart",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"mozart")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"mozart");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"liszt",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"liszt")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"liszt");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"mendelssohn",(function (m){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),"mendelssohn")){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675),"mendelssohn");
} else {
return null;
}
}));
cljs.core._add_method.call(null,guess_who.framework.interpret,"unknown",(function (m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"unknown","unknown",-935977881),"Unknown command");
}));
guess_who.framework.Dynamic_Answers = (function guess_who$framework$Dynamic_Answers(m,targ){
if(clojure.string.includes_QMARK_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"full-input","full-input",1051896429)),cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"name","name",1843675177)))){
return (function (p1__16119_SHARP_){
return ["Yes! You guessed it! the person is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16119_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"name","name",1843675177)));
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640))){
if((function (p1__16120_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640)),p1__16120_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"hair-type","hair-type",805324640)))){
return (function (p1__16121_SHARP_){
return ["Yes! the persons hair is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16121_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"hair-type","hair-type",805324640)));
} else {
return (function (p1__16122_SHARP_){
return ["No, the persons hair is NOT ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16122_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"hair-type","hair-type",805324640)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622))){
if((function (p1__16123_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622)),p1__16123_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"height","height",1025178622)))){
return (function (p1__16124_SHARP_){
return ["Yes! the persons is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16124_SHARP_)," feet tall"].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"height","height",1025178622)));
} else {
return (function (p1__16125_SHARP_){
return ["No, the persons is NOT ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16125_SHARP_)," feet tall"].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"height","height",1025178622)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323))){
if((function (p1__16126_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323)),p1__16126_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"hair-color","hair-color",330394323)))){
return (function (p1__16127_SHARP_){
return ["Yes! the persons hair is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16127_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"hair-color","hair-color",330394323)));
} else {
return (function (p1__16128_SHARP_){
return ["No, the persons hair is NOT ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16128_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"hair-color","hair-color",330394323)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"region","region",270415120))){
if((function (p1__16129_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"region","region",270415120)),p1__16129_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"region","region",270415120)))){
return (function (p1__16130_SHARP_){
return ["Yes! the persons is from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16130_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"region","region",270415120)));
} else {
return (function (p1__16131_SHARP_){
return ["No, the persons is NOT from ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16131_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"region","region",270415120)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"era","era",1165135812))){
if((function (p1__16132_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"era","era",1165135812)),p1__16132_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"era","era",1165135812)))){
return (function (p1__16133_SHARP_){
return ["Yes! the persons composed in the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16133_SHARP_)," period"].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"era","era",1165135812)));
} else {
return (function (p1__16134_SHARP_){
return ["No, the persons is did not compose in the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16134_SHARP_)," period"].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"era","era",1165135812)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"born","born",-461260488))){
if((function (p1__16135_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"born","born",-461260488)),p1__16135_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"born","born",-461260488)))){
return (function (p1__16136_SHARP_){
return ["Yes! the persons was born in the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16136_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"born","born",-461260488)));
} else {
return (function (p1__16137_SHARP_){
return ["No, the persons is was not born in the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16137_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"born","born",-461260488)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"died","died",1083960752))){
if((function (p1__16138_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"died","died",1083960752)),p1__16138_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"died","died",1083960752)))){
return (function (p1__16139_SHARP_){
return ["Yes! the persons died in the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16139_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"died","died",1083960752)));
} else {
return (function (p1__16140_SHARP_){
return ["No, the persons did not die in the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16140_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"died","died",1083960752)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844))){
if((function (p1__16141_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844)),p1__16141_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"instrument","instrument",-960698844)))){
return (function (p1__16142_SHARP_){
return ["Yes! the persons plays the ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16142_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"instrument","instrument",-960698844)));
} else {
return (function (p1__16143_SHARP_){
return ["No, the persons does not play ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16143_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"instrument","instrument",-960698844)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"beard","beard",636633992))){
if((function (p1__16144_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"beard","beard",636633992)),p1__16144_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"beard","beard",636633992)))){
return "Yes! the persons has a beard ";
} else {
return "No, the persons does NOT have a beard";
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641))){
if((function (p1__16145_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641)),p1__16145_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641)))){
return (function (p1__16146_SHARP_){
return ["Yes! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16146_SHARP_)," is one of this composers most prolific pieces"].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641)));
} else {
return (function (p1__16147_SHARP_){
return ["No, try ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16147_SHARP_)," for another composer"].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"magnum-opus","magnum-opus",437282641)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"hint","hint",439639918))){
return (function (p1__16148_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16148_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"hint","hint",439639918)));
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675))){
if((function (p1__16149_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675)),p1__16149_SHARP_);
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"name","name",1843675177)))){
return (function (p1__16150_SHARP_){
return ["Yes! the persons is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16150_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,targ,new cljs.core.Keyword(null,"name","name",1843675177)));
} else {
return (function (p1__16151_SHARP_){
return ["No, the persons is NOT ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16151_SHARP_)].join('');
}).call(null,cljs.core.get.call(null,m,new cljs.core.Keyword(null,"solve","solve",-1004278675)));
}
} else {
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"unknown","unknown",-935977881))){
return "Unknown command";
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
});

//# sourceMappingURL=framework.js.map
