if(!lt.util.load.provided_QMARK_('lt.plugins.litex')) {
goog.provide('lt.plugins.litex');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');

lt.plugins.litex.start_browser = (function start_browser(path){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-litex-viewer-tab","add-litex-viewer-tab",1003999387),[cljs.core.str("file://"),cljs.core.str(path)].join(''));
});

lt.plugins.litex.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"output","output",4303359091),[cljs.core.str(new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),cljs.core.str(out)].join('')], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","on-out","lt.plugins.litex/on-out",1310306577),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));

lt.plugins.litex.__BEH__on_error = (function __BEH__on_error(this$,data){lt.objs.notifos.done_working.call(null);
var out = data.toString();return console.log([cljs.core.str("Proc error: "),cljs.core.str(out)].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","on-error","lt.plugins.litex/on-error",3802882775),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));

lt.plugins.litex.__BEH__on_exit = (function __BEH__on_exit(this$,data){if((cljs.core._EQ_.call(null,data,0)) && (!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"run","run",1014017533));
} else
{lt.objs.notifos.done_working.call(null);
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"connection-command","connection-command",3345512142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"origin","origin",4300251800),new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)),new cljs.core.Keyword(null,"connection-command","connection-command",3345512142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"exit","exit",1017031824),data,new cljs.core.Keyword(null,"output","output",4303359091),new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"imgdir","imgdir",4123796828),new cljs.core.Keyword(null,"imgdir","imgdir",4123796828).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"only","only",1017320222),new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","on-exit","lt.plugins.litex/on-exit",1488925541),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));

lt.plugins.litex.__BEH__run = (function __BEH__run(this$){var command = cljs.core.first.call(null,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var commands = cljs.core.rest.call(null,new cljs.core.Keyword(null,"commands","commands",4706336250).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commands","commands",4706336250),commands], null));
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,command)),new cljs.core.Keyword(null,"args","args",1016906831),cljs.core.map.call(null,(function (p1__7223_SHARP_){return cljs.core.apply.call(null,cljs.core.str,p1__7223_SHARP_);
}),cljs.core.rest.call(null,command)),new cljs.core.Keyword(null,"cwd","cwd",1014003170),new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"obj","obj",1014014057),this$], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","run","lt.plugins.litex/run",4472062248),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__run,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"run","run",1014017533),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","connecting-notifier","lt.plugins.litex/connecting-notifier",3730132568),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex","on-out","lt.plugins.litex/on-out",1310306577),new cljs.core.Keyword("lt.plugins.litex","on-error","lt.plugins.litex/on-error",3802882775),new cljs.core.Keyword("lt.plugins.litex","on-exit","lt.plugins.litex/on-exit",1488925541),new cljs.core.Keyword("lt.plugins.litex","run","lt.plugins.litex/run",4472062248)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,editor,info,commands,connection_command,cwd,imgdir,pdfname){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"editor","editor",4001043679),editor,new cljs.core.Keyword(null,"info","info",1017141280),info,new cljs.core.Keyword(null,"commands","commands",4706336250),commands,new cljs.core.Keyword(null,"connection-command","connection-command",3345512142),connection_command,new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"imgdir","imgdir",4123796828),imgdir,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),pdfname], null));
return null;
}));

lt.plugins.litex.run_command = (function run_command(connection_command,editor,commands){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));var pathmap = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"filename","filename",4574102905),lt.objs.files.basename.call(null,path),new cljs.core.Keyword(null,"fullname","fullname",2345709836),path,new cljs.core.Keyword(null,"basename","basename",3588138062),lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,path)),new cljs.core.Keyword(null,"dirname","dirname",2684675082),lt.objs.files.parent.call(null,path),new cljs.core.Keyword(null,"ext","ext",1014005139),lt.objs.files.ext.call(null,path),new cljs.core.Keyword(null,"randstr","randstr",1991817054),cljs.core.rand_int.call(null,1679616).toString(36)], null);var imgdir = [cljs.core.str(new cljs.core.Keyword(null,"dirname","dirname",2684675082).cljs$core$IFn$_invoke$arity$1(pathmap)),cljs.core.str("/.img."),cljs.core.str(new cljs.core.Keyword(null,"filename","filename",4574102905).cljs$core$IFn$_invoke$arity$1(pathmap))].join('');var pdfname = [cljs.core.str(lt.objs.files.join.call(null,new cljs.core.Keyword(null,"dirname","dirname",2684675082).cljs$core$IFn$_invoke$arity$1(pathmap),new cljs.core.Keyword(null,"basename","basename",3588138062).cljs$core$IFn$_invoke$arity$1(pathmap))),cljs.core.str(".pdf")].join('');var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.litex","connecting-notifier","lt.plugins.litex/connecting-notifier",3730132568),editor,info,clojure.walk.prewalk_replace.call(null,pathmap,commands),connection_command,lt.objs.files.parent.call(null,path),imgdir,pdfname);lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),connection_command,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),(function (){return lt.plugins.litex.start_browser.call(null,path);
}),new cljs.core.Keyword(null,"info","info",1017141280),info], null));
if(cljs.core._EQ_.call(null,connection_command,new cljs.core.Keyword(null,"editor.eval.tex","editor.eval.tex",1083030184)))
{if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,imgdir)))
{lt.objs.files.delete_BANG_.call(null,imgdir);
} else
{}
lt.objs.files.mkdir.call(null,imgdir);
} else
{}
lt.objs.notifos.working.call(null,"TeXing...");
return lt.object.raise.call(null,obj,new cljs.core.Keyword(null,"run","run",1014017533));
});

lt.plugins.litex.pdflatex_commands = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pdflatex","-halt-on-error","--synctex=1",new cljs.core.Keyword(null,"filename","filename",4574102905)], null)], null);

lt.plugins.litex.dvilatex_commands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["latex","-halt-on-error","--synctex=1",new cljs.core.Keyword(null,"filename","filename",4574102905)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dvipdf",new cljs.core.Keyword(null,"basename","basename",3588138062)], null)], null);

lt.plugins.litex.pdflatex_preview = cljs.core.conj.call(null,lt.plugins.litex.pdflatex_commands,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pdftoppm","-png",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"basename","basename",3588138062),".pdf"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [".img.",new cljs.core.Keyword(null,"filename","filename",4574102905),"/",new cljs.core.Keyword(null,"randstr","randstr",1991817054)], null)], null));

lt.plugins.litex.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"save","save",1017427183));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","on-eval","lt.plugins.litex/on-eval",1488919527),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null,new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));

lt.plugins.litex.__BEH__eval_on_save = (function __BEH__eval_on_save(editor){return lt.object.raise.call(null,lt.plugins.litex.tex_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","eval-on-save","lt.plugins.litex/eval-on-save",1116566327),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__eval_on_save,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null));

lt.plugins.litex.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__7225 = event;var map__7225__$1 = ((cljs.core.seq_QMARK_.call(null,map__7225))?cljs.core.apply.call(null,cljs.core.hash_map,map__7225):map__7225);var origin = cljs.core.get.call(null,map__7225__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__7225__$1,new cljs.core.Keyword(null,"info","info",1017141280));return lt.plugins.litex.run_command.call(null,new cljs.core.Keyword(null,"editor.eval.tex","editor.eval.tex",1083030184),origin,lt.plugins.litex.pdflatex_preview);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","eval!","lt.plugins.litex/eval!",4032952478),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));

lt.plugins.litex.__BEH__sync_forward = (function __BEH__sync_forward(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);return lt.plugins.litex.run_command.call(null,new cljs.core.Keyword(null,"litex.forward-sync","litex.forward-sync",2440308217),editor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["synctex","view","-i",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos) + 1),":",(new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos) + 1),":",new cljs.core.Keyword(null,"filename","filename",4574102905)], null),"-o",new cljs.core.Keyword(null,"basename","basename",3588138062)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sleep","0.1s"], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","sync-forward","lt.plugins.litex/sync-forward",3351270864),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__sync_forward,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-forward","sync-forward",2039658757),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","tex-lang","lt.plugins.litex/tex-lang",1255901069),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tex.lang","tex.lang",4241292999),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex","eval!","lt.plugins.litex/eval!",4032952478)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));

lt.plugins.litex.tex_lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.litex","tex-lang","lt.plugins.litex/tex-lang",1255901069));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"litex-forward-sync","litex-forward-sync",2733711224),new cljs.core.Keyword(null,"desc","desc",1016984067),"LiTeX: forward sync",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"sync-forward","sync-forward",2039658757));
} else
{return null;
}
})], null));

}
if(!lt.util.load.provided_QMARK_('lt.plugins.litex.viewer')) {
goog.provide('lt.plugins.litex.viewer');
goog.require('cljs.core');
goog.require('crate.binding');
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.context');
goog.require('lt.objs.tabs');
goog.require('crate.core');
goog.require('lt.objs.context');
goog.require('lt.objs.proc');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.objs.clients');
goog.require('clojure.string');
goog.require('crate.binding');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('crate.core');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');

lt.plugins.litex.viewer.utils = (function (){var obj7515 = {};return obj7515;
})();

lttools = lt.plugins.litex.viewer.utils;

lt.plugins.litex.viewer.add_util = (function add_util(nme,fn){return (lt.plugins.litex.viewer.utils[cljs.core.name.call(null,nme)] = fn);
});

lt.plugins.litex.viewer.zoom_in = (function zoom_in(this$){var e__7139__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-in"], null),"\u2295"], null));var seq__7522_7607 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588));
})], null)));var chunk__7523_7608 = null;var count__7524_7609 = 0;var i__7525_7610 = 0;while(true){
if((i__7525_7610 < count__7524_7609))
{var vec__7526_7611 = cljs.core._nth.call(null,chunk__7523_7608,i__7525_7610);var ev__7140__auto___7612 = cljs.core.nth.call(null,vec__7526_7611,0,null);var func__7141__auto___7613 = cljs.core.nth.call(null,vec__7526_7611,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7612,func__7141__auto___7613);
{
var G__7614 = seq__7522_7607;
var G__7615 = chunk__7523_7608;
var G__7616 = count__7524_7609;
var G__7617 = (i__7525_7610 + 1);
seq__7522_7607 = G__7614;
chunk__7523_7608 = G__7615;
count__7524_7609 = G__7616;
i__7525_7610 = G__7617;
continue;
}
} else
{var temp__4092__auto___7618 = cljs.core.seq.call(null,seq__7522_7607);if(temp__4092__auto___7618)
{var seq__7522_7619__$1 = temp__4092__auto___7618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7522_7619__$1))
{var c__6528__auto___7620 = cljs.core.chunk_first.call(null,seq__7522_7619__$1);{
var G__7621 = cljs.core.chunk_rest.call(null,seq__7522_7619__$1);
var G__7622 = c__6528__auto___7620;
var G__7623 = cljs.core.count.call(null,c__6528__auto___7620);
var G__7624 = 0;
seq__7522_7607 = G__7621;
chunk__7523_7608 = G__7622;
count__7524_7609 = G__7623;
i__7525_7610 = G__7624;
continue;
}
} else
{var vec__7527_7625 = cljs.core.first.call(null,seq__7522_7619__$1);var ev__7140__auto___7626 = cljs.core.nth.call(null,vec__7527_7625,0,null);var func__7141__auto___7627 = cljs.core.nth.call(null,vec__7527_7625,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7626,func__7141__auto___7627);
{
var G__7628 = cljs.core.next.call(null,seq__7522_7619__$1);
var G__7629 = null;
var G__7630 = 0;
var G__7631 = 0;
seq__7522_7607 = G__7628;
chunk__7523_7608 = G__7629;
count__7524_7609 = G__7630;
i__7525_7610 = G__7631;
continue;
}
}
} else
{}
}
break;
}
return e__7139__auto__;
});

lt.plugins.litex.viewer.zoom_out = (function zoom_out(this$){var e__7139__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-out"], null),"\u2296"], null));var seq__7534_7632 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271));
})], null)));var chunk__7535_7633 = null;var count__7536_7634 = 0;var i__7537_7635 = 0;while(true){
if((i__7537_7635 < count__7536_7634))
{var vec__7538_7636 = cljs.core._nth.call(null,chunk__7535_7633,i__7537_7635);var ev__7140__auto___7637 = cljs.core.nth.call(null,vec__7538_7636,0,null);var func__7141__auto___7638 = cljs.core.nth.call(null,vec__7538_7636,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7637,func__7141__auto___7638);
{
var G__7639 = seq__7534_7632;
var G__7640 = chunk__7535_7633;
var G__7641 = count__7536_7634;
var G__7642 = (i__7537_7635 + 1);
seq__7534_7632 = G__7639;
chunk__7535_7633 = G__7640;
count__7536_7634 = G__7641;
i__7537_7635 = G__7642;
continue;
}
} else
{var temp__4092__auto___7643 = cljs.core.seq.call(null,seq__7534_7632);if(temp__4092__auto___7643)
{var seq__7534_7644__$1 = temp__4092__auto___7643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7534_7644__$1))
{var c__6528__auto___7645 = cljs.core.chunk_first.call(null,seq__7534_7644__$1);{
var G__7646 = cljs.core.chunk_rest.call(null,seq__7534_7644__$1);
var G__7647 = c__6528__auto___7645;
var G__7648 = cljs.core.count.call(null,c__6528__auto___7645);
var G__7649 = 0;
seq__7534_7632 = G__7646;
chunk__7535_7633 = G__7647;
count__7536_7634 = G__7648;
i__7537_7635 = G__7649;
continue;
}
} else
{var vec__7539_7650 = cljs.core.first.call(null,seq__7534_7644__$1);var ev__7140__auto___7651 = cljs.core.nth.call(null,vec__7539_7650,0,null);var func__7141__auto___7652 = cljs.core.nth.call(null,vec__7539_7650,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7651,func__7141__auto___7652);
{
var G__7653 = cljs.core.next.call(null,seq__7534_7644__$1);
var G__7654 = null;
var G__7655 = 0;
var G__7656 = 0;
seq__7534_7632 = G__7653;
chunk__7535_7633 = G__7654;
count__7536_7634 = G__7655;
i__7537_7635 = G__7656;
continue;
}
}
} else
{}
}
break;
}
return e__7139__auto__;
});

lt.plugins.litex.viewer.show_log = (function show_log(this$){var e__7139__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"show-log"], null),"Show logs"], null));var seq__7546_7657 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"show-log!","show-log!",3359135135));
})], null)));var chunk__7547_7658 = null;var count__7548_7659 = 0;var i__7549_7660 = 0;while(true){
if((i__7549_7660 < count__7548_7659))
{var vec__7550_7661 = cljs.core._nth.call(null,chunk__7547_7658,i__7549_7660);var ev__7140__auto___7662 = cljs.core.nth.call(null,vec__7550_7661,0,null);var func__7141__auto___7663 = cljs.core.nth.call(null,vec__7550_7661,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7662,func__7141__auto___7663);
{
var G__7664 = seq__7546_7657;
var G__7665 = chunk__7547_7658;
var G__7666 = count__7548_7659;
var G__7667 = (i__7549_7660 + 1);
seq__7546_7657 = G__7664;
chunk__7547_7658 = G__7665;
count__7548_7659 = G__7666;
i__7549_7660 = G__7667;
continue;
}
} else
{var temp__4092__auto___7668 = cljs.core.seq.call(null,seq__7546_7657);if(temp__4092__auto___7668)
{var seq__7546_7669__$1 = temp__4092__auto___7668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7546_7669__$1))
{var c__6528__auto___7670 = cljs.core.chunk_first.call(null,seq__7546_7669__$1);{
var G__7671 = cljs.core.chunk_rest.call(null,seq__7546_7669__$1);
var G__7672 = c__6528__auto___7670;
var G__7673 = cljs.core.count.call(null,c__6528__auto___7670);
var G__7674 = 0;
seq__7546_7657 = G__7671;
chunk__7547_7658 = G__7672;
count__7548_7659 = G__7673;
i__7549_7660 = G__7674;
continue;
}
} else
{var vec__7551_7675 = cljs.core.first.call(null,seq__7546_7669__$1);var ev__7140__auto___7676 = cljs.core.nth.call(null,vec__7551_7675,0,null);var func__7141__auto___7677 = cljs.core.nth.call(null,vec__7551_7675,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7676,func__7141__auto___7677);
{
var G__7678 = cljs.core.next.call(null,seq__7546_7669__$1);
var G__7679 = null;
var G__7680 = 0;
var G__7681 = 0;
seq__7546_7657 = G__7678;
chunk__7547_7658 = G__7679;
count__7548_7659 = G__7680;
i__7549_7660 = G__7681;
continue;
}
}
} else
{}
}
break;
}
return e__7139__auto__;
});

lt.plugins.litex.viewer.hide_log = (function hide_log(this$){var e__7139__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"hide-log"], null),"Hide logs"], null));var seq__7558_7682 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466));
})], null)));var chunk__7559_7683 = null;var count__7560_7684 = 0;var i__7561_7685 = 0;while(true){
if((i__7561_7685 < count__7560_7684))
{var vec__7562_7686 = cljs.core._nth.call(null,chunk__7559_7683,i__7561_7685);var ev__7140__auto___7687 = cljs.core.nth.call(null,vec__7562_7686,0,null);var func__7141__auto___7688 = cljs.core.nth.call(null,vec__7562_7686,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7687,func__7141__auto___7688);
{
var G__7689 = seq__7558_7682;
var G__7690 = chunk__7559_7683;
var G__7691 = count__7560_7684;
var G__7692 = (i__7561_7685 + 1);
seq__7558_7682 = G__7689;
chunk__7559_7683 = G__7690;
count__7560_7684 = G__7691;
i__7561_7685 = G__7692;
continue;
}
} else
{var temp__4092__auto___7693 = cljs.core.seq.call(null,seq__7558_7682);if(temp__4092__auto___7693)
{var seq__7558_7694__$1 = temp__4092__auto___7693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7558_7694__$1))
{var c__6528__auto___7695 = cljs.core.chunk_first.call(null,seq__7558_7694__$1);{
var G__7696 = cljs.core.chunk_rest.call(null,seq__7558_7694__$1);
var G__7697 = c__6528__auto___7695;
var G__7698 = cljs.core.count.call(null,c__6528__auto___7695);
var G__7699 = 0;
seq__7558_7682 = G__7696;
chunk__7559_7683 = G__7697;
count__7560_7684 = G__7698;
i__7561_7685 = G__7699;
continue;
}
} else
{var vec__7563_7700 = cljs.core.first.call(null,seq__7558_7694__$1);var ev__7140__auto___7701 = cljs.core.nth.call(null,vec__7563_7700,0,null);var func__7141__auto___7702 = cljs.core.nth.call(null,vec__7563_7700,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7701,func__7141__auto___7702);
{
var G__7703 = cljs.core.next.call(null,seq__7558_7694__$1);
var G__7704 = null;
var G__7705 = 0;
var G__7706 = 0;
seq__7558_7682 = G__7703;
chunk__7559_7683 = G__7704;
count__7560_7684 = G__7705;
i__7561_7685 = G__7706;
continue;
}
}
} else
{}
}
break;
}
return e__7139__auto__;
});

lt.plugins.litex.viewer.pdfimg = (function pdfimg(viewer,src){var e__7139__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),src], null)], null));var seq__7570_7707 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (event){return lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"image-click!","image-click!",4167726013),event);
})], null)));var chunk__7571_7708 = null;var count__7572_7709 = 0;var i__7573_7710 = 0;while(true){
if((i__7573_7710 < count__7572_7709))
{var vec__7574_7711 = cljs.core._nth.call(null,chunk__7571_7708,i__7573_7710);var ev__7140__auto___7712 = cljs.core.nth.call(null,vec__7574_7711,0,null);var func__7141__auto___7713 = cljs.core.nth.call(null,vec__7574_7711,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7712,func__7141__auto___7713);
{
var G__7714 = seq__7570_7707;
var G__7715 = chunk__7571_7708;
var G__7716 = count__7572_7709;
var G__7717 = (i__7573_7710 + 1);
seq__7570_7707 = G__7714;
chunk__7571_7708 = G__7715;
count__7572_7709 = G__7716;
i__7573_7710 = G__7717;
continue;
}
} else
{var temp__4092__auto___7718 = cljs.core.seq.call(null,seq__7570_7707);if(temp__4092__auto___7718)
{var seq__7570_7719__$1 = temp__4092__auto___7718;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7570_7719__$1))
{var c__6528__auto___7720 = cljs.core.chunk_first.call(null,seq__7570_7719__$1);{
var G__7721 = cljs.core.chunk_rest.call(null,seq__7570_7719__$1);
var G__7722 = c__6528__auto___7720;
var G__7723 = cljs.core.count.call(null,c__6528__auto___7720);
var G__7724 = 0;
seq__7570_7707 = G__7721;
chunk__7571_7708 = G__7722;
count__7572_7709 = G__7723;
i__7573_7710 = G__7724;
continue;
}
} else
{var vec__7575_7725 = cljs.core.first.call(null,seq__7570_7719__$1);var ev__7140__auto___7726 = cljs.core.nth.call(null,vec__7575_7725,0,null);var func__7141__auto___7727 = cljs.core.nth.call(null,vec__7575_7725,1,null);lt.util.dom.on.call(null,e__7139__auto__,ev__7140__auto___7726,func__7141__auto___7727);
{
var G__7728 = cljs.core.next.call(null,seq__7570_7719__$1);
var G__7729 = null;
var G__7730 = 0;
var G__7731 = 0;
seq__7570_7707 = G__7728;
chunk__7571_7708 = G__7729;
count__7572_7709 = G__7730;
i__7573_7710 = G__7731;
continue;
}
}
} else
{}
}
break;
}
return e__7139__auto__;
});

lt.plugins.litex.viewer.kwpair = (function kwpair(str){var vec__7577 = str.split(":");var k = cljs.core.nth.call(null,vec__7577,0,null);var v = cljs.core.nth.call(null,vec__7577,1,null);if(cljs.core.truth_(v))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
} else
{return null;
}
});

lt.plugins.litex.viewer.kwpairf = (function kwpairf(str){var vec__7579 = str.split(":");var k = cljs.core.nth.call(null,vec__7579,0,null);var v = cljs.core.nth.call(null,vec__7579,1,null);if(cljs.core.truth_(v))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),parseFloat(v)], null);
} else
{return null;
}
});

lt.plugins.litex.viewer.browser_id = (function browser_id(this$){return [cljs.core.str("browser"),cljs.core.str(lt.object.__GT_id.call(null,this$))].join('');
});

lt.plugins.litex.viewer.to_frame = (function to_frame(this$){var id = ((typeof this$ === 'string')?this$:lt.plugins.litex.viewer.browser_id.call(null,this$));return (window.frames[id]);
});

lt.plugins.litex.viewer.handle_cb = (function handle_cb(cbid,command,data){return lt.object.raise.call(null,lt.objs.clients.clients,new cljs.core.Keyword(null,"message","message",1968829305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cbid,command,data], null));
});

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","synctex-proc","lt.plugins.litex.viewer/synctex-proc",3378173353),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex.viewer","on-out","lt.plugins.litex.viewer/on-out",3928481538),new cljs.core.Keyword("lt.plugins.litex.viewer","on-error","lt.plugins.litex.viewer/on-error",3157809520)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,cwd){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd], null));
return null;
}));

lt.plugins.litex.viewer.__BEH__on_out = (function __BEH__on_out(this$,data){var loc = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lt.plugins.litex.viewer.kwpair,data.toString().split("\n"))));var filename = lt.objs.files.join.call(null,new cljs.core.Keyword(null,"cwd","cwd",1014003170).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"Input","Input",1084709660).cljs$core$IFn$_invoke$arity$1(loc));var line = (new cljs.core.Keyword(null,"Line","Line",1016272774).cljs$core$IFn$_invoke$arity$1(loc) - 1);var column = (new cljs.core.Keyword(null,"Column","Column",3037901544).cljs$core$IFn$_invoke$arity$1(loc) - 1);lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename);
return lt.objs.editor.move_cursor.call(null,cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,filename)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),(function (){var x__6111__auto__ = column;var y__6112__auto__ = 0;return ((x__6111__auto__ > y__6112__auto__) ? x__6111__auto__ : y__6112__auto__);
})()], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","on-out","lt.plugins.litex.viewer/on-out",3928481538),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));

lt.plugins.litex.viewer.__BEH__on_error = (function __BEH__on_error(this$,data){return console.log([cljs.core.str("Synctex error: "),cljs.core.str(data.toString())].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","on-error","lt.plugins.litex.viewer/on-error",3157809520),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));

lt.plugins.litex.viewer.connect_client = (function connect_client(this$){return lt.objs.clients.handle_connection_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"urlvalue","urlvalue",4359376084).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"frame","frame",1111596255),this$,new cljs.core.Keyword(null,"frame-id","frame-id",3663850733),lt.plugins.litex.viewer.browser_id.call(null,this$),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zframe.client","zframe.client",582940760)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex.viewer","tex-eval","lt.plugins.litex.viewer/tex-eval",3832158056),new cljs.core.Keyword("lt.plugins.litex.viewer","forward-sync","lt.plugins.litex.viewer/forward-sync",3501952325),new cljs.core.Keyword("lt.plugins.litex.viewer","handle-send!","lt.plugins.litex.viewer/handle-send!",1448649814),new cljs.core.Keyword("lt.plugins.litex.viewer","handle-close!","lt.plugins.litex.viewer/handle-close!",3739019540)], null),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.eval.tex","editor.eval.tex",1083030184),null,new cljs.core.Keyword(null,"litex.forward-sync","litex.forward-sync",2440308217),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"frame","frame",1111596255)], null));
});

lt.plugins.litex.viewer.add = (function add(){var browser = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","browser","lt.plugins.litex.viewer/browser",2946031034));lt.objs.tabs.add_BANG_.call(null,browser);
lt.objs.tabs.active_BANG_.call(null,browser);
return browser;
});

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","browser","lt.plugins.litex.viewer/browser",2946031034),new cljs.core.Keyword(null,"name","name",1017277949),"browser",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",4492240260),null], null), null),new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"history-pos","history-pos",1364759821),-1,new cljs.core.Keyword(null,"url","url",1014020321),"about:blank",new cljs.core.Keyword(null,"urlvalue","urlvalue",4359376084),"about:blank",new cljs.core.Keyword(null,"zoom","zoom",1017648965),1,new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939),1.25,new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),null,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),null,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex.viewer","destroy-on-close","lt.plugins.litex.viewer/destroy-on-close",4767354851),new cljs.core.Keyword("lt.plugins.litex.viewer","rem-client","lt.plugins.litex.viewer/rem-client",574186756),new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-in!","lt.plugins.litex.viewer/zoom-in!",2562456392),new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-out!","lt.plugins.litex.viewer/zoom-out!",1172268339),new cljs.core.Keyword("lt.plugins.litex.viewer","set-zoom!","lt.plugins.litex.viewer/set-zoom!",3334100069),new cljs.core.Keyword("lt.plugins.litex.viewer","show-log!","lt.plugins.litex.viewer/show-log!",837199571),new cljs.core.Keyword("lt.plugins.litex.viewer","hide-log!","lt.plugins.litex.viewer/hide-log!",2486896090),new cljs.core.Keyword("lt.plugins.litex.viewer","image-click!","lt.plugins.litex.viewer/image-click!",3767830813),new cljs.core.Keyword("lt.plugins.litex.viewer","init!","lt.plugins.litex.viewer/init!",2861886455),new cljs.core.Keyword("lt.plugins.litex.viewer","set-client-name","lt.plugins.litex.viewer/set-client-name",3207171848),new cljs.core.Keyword("lt.plugins.litex.viewer","set-active","lt.plugins.litex.viewer/set-active",1808486327),new cljs.core.Keyword("lt.plugins.litex.viewer","active-context","lt.plugins.litex.viewer/active-context",3628136570),new cljs.core.Keyword("lt.plugins.litex.viewer","focus-on-show","lt.plugins.litex.viewer/focus-on-show",2313578188),new cljs.core.Keyword("lt.plugins.litex.viewer","inactive-context","lt.plugins.litex.viewer/inactive-context",3143388979)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),lt.plugins.litex.viewer.connect_client.call(null,this$)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#litex-viewer.cm-s-default","div#litex-viewer.cm-s-default",3394120925),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css"], null),"\n                          #litex-viewer {\n                          position: relative;\n                          }\n                          #pdf-viewer-container {\n                          position: absolute;\n                          top: 0;\n                          width: 100%;\n                          height: 70%;\n                          overflow: hidden;\n                          }\n                          #litex-viewer.hide-log #pdf-viewer-container {\n                          height: 100%;\n                          }\n                          #pdf-viewer {\n                          position: absolute;\n                          top: 0;\n                          bottom: 2em;\n                          width: 100%;\n                          overflow: scroll;\n                          }\n                          #litex-viewer nav {\n                          position: absolute;\n                          bottom: 0;\n                          height: 2em;\n                          width: 100%\n                          }\n                          #litex-viewer nav button[value='show-log'] {\n                          display: none;\n                          }\n                          #litex-viewer.hide-log nav button[value='show-log'] {\n                          display: inline;\n                          float: right;\n                          }\n                          #litex-viewer nav button[value='hide-log'] {\n                          display: inline;\n                          float: right;\n                          }\n                          #litex-viewer.hide-log nav button[value='hide-log'] {\n                          display: none;\n                          }\n                          #pdf-viewer img {\n                          display: block;\n                          margin: 20px;\n                          border: 2px solid black;\n                          }\n                          #log-viewer {\n                          position: absolute;\n                          bottom: 0;\n                          width: 100%;\n                          height: 30%;\n                          overflow: scroll;\n                          font-family: monospace;\n                          }\n                          #litex-viewer.hide-log #log-viewer {\n                          visibility: hidden;\n                          }\n                          #sync-box {\n                          position: absolute;\n                          border: 3px solid blue;\n                          opacity: 1;\n                          }\n                          #sync-box.animate {\n                          transition-property: opacity;\n                          transition-duration: 5s;\n                          opacity: 0;\n                          }\n                          "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pdf-viewer-container","div#pdf-viewer-container",4332961317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sync-box.animate","div#sync-box.animate",4450762416)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",1014013077),lt.plugins.litex.viewer.zoom_in.call(null,this$),lt.plugins.litex.viewer.zoom_out.call(null,this$),lt.plugins.litex.viewer.show_log.call(null,this$),lt.plugins.litex.viewer.hide_log.call(null,this$)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre#log-viewer","pre#log-viewer",3895935501)], null)], null);
}));

lt.plugins.litex.viewer.__BEH__destroy_on_close = (function __BEH__destroy_on_close(this$){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"inactive","inactive",1038569437));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","destroy-on-close","lt.plugins.litex.viewer/destroy-on-close",4767354851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__destroy_on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.plugins.litex.viewer.__BEH__rem_client = (function __BEH__rem_client(this$){if(cljs.core._EQ_.call(null,lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"global.browser","global.browser",3786202959)),this$))
{lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"global.browser","global.browser",3786202959));
} else
{}
var temp__4092__auto___7732 = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([this$], true),lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698))));if(cljs.core.truth_(temp__4092__auto___7732))
{var b_7733 = temp__4092__auto___7732;lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"global.browser","global.browser",3786202959),b_7733);
} else
{}
return lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","rem-client","lt.plugins.litex.viewer/rem-client",574186756),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__rem_client,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));

lt.plugins.litex.viewer.__BEH__zoom_in_BANG_ = (function __BEH__zoom_in_BANG_(this$){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var factor = new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),(zoom * factor));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-in!","lt.plugins.litex.viewer/zoom-in!",2562456392),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__zoom_in_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588),null], null), null));

lt.plugins.litex.viewer.__BEH__zoom_out_BANG_ = (function __BEH__zoom_out_BANG_(this$){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var factor = new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),(zoom / factor));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-out!","lt.plugins.litex.viewer/zoom-out!",1172268339),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__zoom_out_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271),null], null), null));

lt.plugins.litex.viewer.__BEH__set_zoom_BANG_ = (function __BEH__set_zoom_BANG_(this$,nzoom){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var vec__7586 = lt.plugins.litex.viewer.center_point.call(null,pdf_viewer);var x = cljs.core.nth.call(null,vec__7586,0,null);var y = cljs.core.nth.call(null,vec__7586,1,null);var new_zoom = (function (){var or__5799__auto__ = nzoom;if(cljs.core.truth_(or__5799__auto__))
{return or__5799__auto__;
} else
{return zoom;
}
})();lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
var seq__7587_7734 = cljs.core.seq.call(null,lt.util.dom.children.call(null,pdf_viewer));var chunk__7588_7735 = null;var count__7589_7736 = 0;var i__7590_7737 = 0;while(true){
if((i__7590_7737 < count__7589_7736))
{var elem_7738 = cljs.core._nth.call(null,chunk__7588_7735,i__7590_7737);lt.util.dom.css.call(null,elem_7738,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
{
var G__7739 = seq__7587_7734;
var G__7740 = chunk__7588_7735;
var G__7741 = count__7589_7736;
var G__7742 = (i__7590_7737 + 1);
seq__7587_7734 = G__7739;
chunk__7588_7735 = G__7740;
count__7589_7736 = G__7741;
i__7590_7737 = G__7742;
continue;
}
} else
{var temp__4092__auto___7743 = cljs.core.seq.call(null,seq__7587_7734);if(temp__4092__auto___7743)
{var seq__7587_7744__$1 = temp__4092__auto___7743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7587_7744__$1))
{var c__6528__auto___7745 = cljs.core.chunk_first.call(null,seq__7587_7744__$1);{
var G__7746 = cljs.core.chunk_rest.call(null,seq__7587_7744__$1);
var G__7747 = c__6528__auto___7745;
var G__7748 = cljs.core.count.call(null,c__6528__auto___7745);
var G__7749 = 0;
seq__7587_7734 = G__7746;
chunk__7588_7735 = G__7747;
count__7589_7736 = G__7748;
i__7590_7737 = G__7749;
continue;
}
} else
{var elem_7750 = cljs.core.first.call(null,seq__7587_7744__$1);lt.util.dom.css.call(null,elem_7750,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
{
var G__7751 = cljs.core.next.call(null,seq__7587_7744__$1);
var G__7752 = null;
var G__7753 = 0;
var G__7754 = 0;
seq__7587_7734 = G__7751;
chunk__7588_7735 = G__7752;
count__7589_7736 = G__7753;
i__7590_7737 = G__7754;
continue;
}
}
} else
{}
}
break;
}
return lt.plugins.litex.viewer.set_center_point.call(null,pdf_viewer,cljs.core.map.call(null,(function (p1__7580_SHARP_){return (p1__7580_SHARP_ * (new_zoom / zoom));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","set-zoom!","lt.plugins.litex.viewer/set-zoom!",3334100069),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__set_zoom_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),null], null), null));

lt.plugins.litex.viewer.center_point = (function center_point(elem){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(elem.scrollLeft + (elem.clientWidth / 2)),(elem.scrollTop + (elem.clientHeight / 2))], null);
});

lt.plugins.litex.viewer.set_center_point = (function set_center_point(elem,p__7591){var vec__7593 = p__7591;var x = cljs.core.nth.call(null,vec__7593,0,null);var y = cljs.core.nth.call(null,vec__7593,1,null);elem.scrollLeft = (x - (elem.clientWidth / 2));
return elem.scrollTop = (y - (elem.clientHeight / 2));
});

lt.plugins.litex.viewer.__BEH__show_log_BANG_ = (function __BEH__show_log_BANG_(this$){return lt.util.dom.remove_class.call(null,lt.object.__GT_content.call(null,this$),"hide-log");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","show-log!","lt.plugins.litex.viewer/show-log!",837199571),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__show_log_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-log!","show-log!",3359135135),null], null), null));

lt.plugins.litex.viewer.__BEH__hide_log_BANG_ = (function __BEH__hide_log_BANG_(this$){return lt.util.dom.add_class.call(null,lt.object.__GT_content.call(null,this$),"hide-log");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","hide-log!","lt.plugins.litex.viewer/hide-log!",2486896090),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__hide_log_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466),null], null), null));

lt.plugins.litex.viewer.__BEH__image_click_BANG_ = (function __BEH__image_click_BANG_(this$,event){if(cljs.core.truth_(event.ctrlKey))
{var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var scale = (150 / 72);var clickX = (((parseFloat(event.offsetX) / zoom) - 2) / scale);var clickY = (((parseFloat(event.offsetY) / zoom) - 2) / scale);var pagenum = parseInt(cljs.core.last.call(null,event.srcElement.src.split("-")));var cwd = lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var pdfname = lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),"synctex",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["edit","-o",[cljs.core.str(pagenum),cljs.core.str(":"),cljs.core.str(clickX),cljs.core.str(":"),cljs.core.str(clickY),cljs.core.str(":"),cljs.core.str(pdfname)].join('')], null),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"obj","obj",1014014057),lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","synctex-proc","lt.plugins.litex.viewer/synctex-proc",3378173353),cwd)], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","image-click!","lt.plugins.litex.viewer/image-click!",3767830813),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__image_click_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image-click!","image-click!",4167726013),null], null), null));

lt.plugins.litex.viewer.__BEH__init_BANG_ = (function __BEH__init_BANG_(this$){return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","init!","lt.plugins.litex.viewer/init!",2861886455),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__init_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));

lt.plugins.litex.viewer.__BEH__set_client_name = (function __BEH__set_client_name(this$,title){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),title], null));
lt.objs.tabs.refresh_BANG_.call(null,this$);
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),lt.plugins.litex.viewer.loc], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","set-client-name","lt.plugins.litex.viewer/set-client-name",3207171848),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__set_client_name,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-name","set-name",2383102088),null], null), null));

lt.plugins.litex.viewer.__BEH__set_active = (function __BEH__set_active(this$){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"global.browser","global.browser",3786202959),this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","set-active","lt.plugins.litex.viewer/set-active",1808486327),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__set_active,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));

lt.plugins.litex.viewer.__BEH__active_context = (function __BEH__active_context(this$){return lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698),this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","active-context","lt.plugins.litex.viewer/active-context",3628136570),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__active_context,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));

lt.plugins.litex.viewer.__BEH__focus_on_show = (function __BEH__focus_on_show(this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","focus-on-show","lt.plugins.litex.viewer/focus-on-show",2313578188),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__focus_on_show,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));

lt.plugins.litex.viewer.__BEH__inactive_context = (function __BEH__inactive_context(this$){return lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","inactive-context","lt.plugins.litex.viewer/inactive-context",3143388979),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__inactive_context,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inactive","inactive",1038569437),null], null), null));

lt.plugins.litex.viewer.__BEH__handle_send_BANG_ = (function __BEH__handle_send_BANG_(this$,msg){return lt.object.raise.call(null,this$,cljs.core.keyword.call(null,[cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(msg)),cljs.core.str("!")].join('')),msg);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","handle-send!","lt.plugins.litex.viewer/handle-send!",1448649814),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__handle_send_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));

lt.plugins.litex.viewer.__BEH__handle_close_BANG_ = (function __BEH__handle_close_BANG_(this$){lt.object.raise.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"close","close",1108660586));
return lt.objs.clients.rem_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","handle-close!","lt.plugins.litex.viewer/handle-close!",3739019540),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__handle_close_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client.close!","client.close!",582466590),null], null), null));

lt.plugins.litex.viewer.__BEH__tex_eval = (function __BEH__tex_eval(this$,msg){var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var imgdir = new cljs.core.Keyword(null,"imgdir","imgdir",4123796828).cljs$core$IFn$_invoke$arity$1(data);var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var sync_box = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#sync-box","div#sync-box",2601350845),lt.object.__GT_content.call(null,this$));var log_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"pre#log-viewer","pre#log-viewer",3895935501),lt.object.__GT_content.call(null,this$));var scroll_top = pdf_viewer.scrollTop;var scroll_left = pdf_viewer.scrollLeft;var viewer = new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core._EQ_.call(null,0,new cljs.core.Keyword(null,"exit","exit",1017031824).cljs$core$IFn$_invoke$arity$1(data)))
{while(true){
if(!(cljs.core._EQ_.call(null,sync_box,cljs.core.first.call(null,lt.util.dom.children.call(null,pdf_viewer)))))
{lt.util.dom.remove.call(null,cljs.core.first.call(null,lt.util.dom.children.call(null,pdf_viewer)));
{
continue;
}
} else
{}
break;
}
var seq__7598_7755 = cljs.core.seq.call(null,lt.objs.files.ls.call(null,imgdir));var chunk__7599_7756 = null;var count__7600_7757 = 0;var i__7601_7758 = 0;while(true){
if((i__7601_7758 < count__7600_7757))
{var f_7759 = cljs.core._nth.call(null,chunk__7599_7756,i__7601_7758);lt.util.dom.before.call(null,sync_box,lt.plugins.litex.viewer.pdfimg.call(null,viewer,[cljs.core.str("file://"),cljs.core.str(lt.objs.files.join.call(null,imgdir,f_7759))].join('')));
{
var G__7760 = seq__7598_7755;
var G__7761 = chunk__7599_7756;
var G__7762 = count__7600_7757;
var G__7763 = (i__7601_7758 + 1);
seq__7598_7755 = G__7760;
chunk__7599_7756 = G__7761;
count__7600_7757 = G__7762;
i__7601_7758 = G__7763;
continue;
}
} else
{var temp__4092__auto___7764 = cljs.core.seq.call(null,seq__7598_7755);if(temp__4092__auto___7764)
{var seq__7598_7765__$1 = temp__4092__auto___7764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7598_7765__$1))
{var c__6528__auto___7766 = cljs.core.chunk_first.call(null,seq__7598_7765__$1);{
var G__7767 = cljs.core.chunk_rest.call(null,seq__7598_7765__$1);
var G__7768 = c__6528__auto___7766;
var G__7769 = cljs.core.count.call(null,c__6528__auto___7766);
var G__7770 = 0;
seq__7598_7755 = G__7767;
chunk__7599_7756 = G__7768;
count__7600_7757 = G__7769;
i__7601_7758 = G__7770;
continue;
}
} else
{var f_7771 = cljs.core.first.call(null,seq__7598_7765__$1);lt.util.dom.before.call(null,sync_box,lt.plugins.litex.viewer.pdfimg.call(null,viewer,[cljs.core.str("file://"),cljs.core.str(lt.objs.files.join.call(null,imgdir,f_7771))].join('')));
{
var G__7772 = cljs.core.next.call(null,seq__7598_7765__$1);
var G__7773 = null;
var G__7774 = 0;
var G__7775 = 0;
seq__7598_7755 = G__7772;
chunk__7599_7756 = G__7773;
count__7600_7757 = G__7774;
i__7601_7758 = G__7775;
continue;
}
}
} else
{}
}
break;
}
lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037));
lt.object.merge_BANG_.call(null,viewer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),scroll_top,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),scroll_left,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(data)], null));
lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"set-name","set-name",2383102088),lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(data)));
lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466));
lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"sync-forward","sync-forward",2039658757));
} else
{lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"show-log!","show-log!",3359135135));
}
log_viewer.innerText = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(data);
return log_viewer.scrollTop = (log_viewer.scrollHeight - log_viewer.clientHeight);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","tex-eval","lt.plugins.litex.viewer/tex-eval",3832158056),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__tex_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.tex!","editor.eval.tex!",3156808477),null], null), null));

lt.plugins.litex.viewer.__BEH__forward_sync = (function __BEH__forward_sync(this$,msg){var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var sync_box = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#sync-box","div#sync-box",2601350845),lt.object.__GT_content.call(null,this$));var output_split = (function (){var and__5787__auto__ = new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__5787__auto__))
{return cljs.core.rest.call(null,new cljs.core.Keyword(null,"output","output",4303359091).cljs$core$IFn$_invoke$arity$1(data).split("\nOutput"));
} else
{return and__5787__auto__;
}
})();var restore_top = new cljs.core.Keyword(null,"restore-top","restore-top",1342702856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var restore_left = new cljs.core.Keyword(null,"restore-left","restore-left",2616478552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),null,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),null], null));
if(cljs.core.truth_(output_split))
{var locs = cljs.core.map.call(null,(function (p1__7602_SHARP_){return lt.plugins.litex.viewer.pdf_to_elem.call(null,pdf_viewer,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lt.plugins.litex.viewer.kwpairf,p1__7602_SHARP_.split("\n")))));
}),output_split);var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var bbleft = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,new cljs.core.Keyword(null,"h","h",1013904346),locs));var bbtop = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (locs,zoom,bbleft){
return (function (p1__7603_SHARP_){return (new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(p1__7603_SHARP_) - new cljs.core.Keyword(null,"H","H",1013904314).cljs$core$IFn$_invoke$arity$1(p1__7603_SHARP_));
});})(locs,zoom,bbleft))
,locs));var bbright = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (locs,zoom,bbleft,bbtop){
return (function (p1__7604_SHARP_){return (new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(p1__7604_SHARP_) + new cljs.core.Keyword(null,"W","W",1013904329).cljs$core$IFn$_invoke$arity$1(p1__7604_SHARP_));
});})(locs,zoom,bbleft,bbtop))
,locs));var bbbottom = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),locs));var bbwidth = (bbright - bbleft);var bbheight = (bbbottom - bbtop);var vleft = (function (){var or__5799__auto__ = restore_left;if(cljs.core.truth_(or__5799__auto__))
{return or__5799__auto__;
} else
{return pdf_viewer.scrollLeft;
}
})();var vwidth = pdf_viewer.clientWidth;var vright = (vleft + vwidth);var vtop = (function (){var or__5799__auto__ = restore_top;if(cljs.core.truth_(or__5799__auto__))
{return or__5799__auto__;
} else
{return pdf_viewer.scrollTop;
}
})();var vheight = pdf_viewer.clientHeight;var vbottom = (vtop + vheight);lt.util.dom.remove_class.call(null,sync_box,new cljs.core.Keyword(null,"animate","animate",4451935827));
pdf_viewer.scrollLeft = (((((bbleft * zoom) >= vleft)) && (((bbright * zoom) <= vright)))?vleft:((((bbwidth * zoom) <= vwidth))?((bbleft * zoom) + (((bbwidth * zoom) - vwidth) / 2)):((new cljs.core.Keyword(null,"else","else",1017020587))?(bbleft * zoom):null)));
pdf_viewer.scrollTop = (((((bbtop * zoom) >= vtop)) && (((bbbottom * zoom) <= vbottom)))?vtop:((((bbheight * zoom) <= vheight))?((bbtop * zoom) + (((bbheight * zoom) - vheight) / 2)):((new cljs.core.Keyword(null,"else","else",1017020587))?(bbtop * zoom):null)));
lt.util.dom.css.call(null,sync_box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(bbleft),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),[cljs.core.str(bbtop),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",1127031096),[cljs.core.str((bbright - bbleft)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",4087841945),[cljs.core.str((bbbottom - bbtop)),cljs.core.str("px")].join('')], null));
return lt.util.dom.add_class.call(null,sync_box,new cljs.core.Keyword(null,"animate","animate",4451935827));
} else
{return console.log("No synctex results!");
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","forward-sync","lt.plugins.litex.viewer/forward-sync",3501952325),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__forward_sync,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"litex.forward-sync!","litex.forward-sync!",2282754540),null], null), null));

lt.plugins.litex.viewer.pdf_to_elem = (function pdf_to_elem(elem,loc){var map__7606 = loc;var map__7606__$1 = ((cljs.core.seq_QMARK_.call(null,map__7606))?cljs.core.apply.call(null,cljs.core.hash_map,map__7606):map__7606);var Page = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"Page","Page",1016384033));var H = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"H","H",1013904314));var W = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"W","W",1013904329));var v = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"v","v",1013904360));var h = cljs.core.get.call(null,map__7606__$1,new cljs.core.Keyword(null,"h","h",1013904346));var img = cljs.core.nth.call(null,lt.util.dom.children.call(null,elem),(Page - 1));var scale = (150 / 72);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"h","h",1013904346),(((h * scale) + img.offsetLeft) + 2),new cljs.core.Keyword(null,"v","v",1013904360),(((v * scale) + img.offsetTop) + 2),new cljs.core.Keyword(null,"W","W",1013904329),(W * scale),new cljs.core.Keyword(null,"H","H",1013904314),(H * scale)], null);
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"add-litex-viewer-tab","add-litex-viewer-tab",1003999387),new cljs.core.Keyword(null,"desc","desc",1016984067),"LiTeX: add viewer tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (loc){var b = lt.plugins.litex.viewer.add.call(null);if(cljs.core.not.call(null,loc))
{return lt.object.raise.call(null,b,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
} else
{return lt.object.raise.call(null,b,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),loc);
}
})], null));

lt.plugins.litex.viewer.start_viewer = (function start_viewer(loc){var b = lt.plugins.litex.viewer.add.call(null);if(cljs.core.not.call(null,loc))
{lt.object.raise.call(null,b,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
} else
{lt.object.raise.call(null,b,new cljs.core.Keyword(null,"navigate!","navigate!",1766726722),loc);
}
return b;
});

}

//# sourceMappingURL=