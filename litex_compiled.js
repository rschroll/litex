if(!lt.util.load.provided_QMARK_('lt.plugins.litex')) {
goog.provide('lt.plugins.litex');
goog.require('cljs.core');
goog.require('lt.objs.files');
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

lt.plugins.litex._exec = require("child_process").exec;

lt.plugins.litex.exec = (function exec(command,cwd,exitfunc){return lt.plugins.litex._exec.call(null,command,(function (){var obj7392 = {"cwd":cwd,"env":lt.objs.proc.merge_env.call(null,null),"windowsVerbatimArguments":((cljs.core._EQ_.call(null,process.platform,"win32"))?true:null)};return obj7392;
})(),exitfunc);
});

lt.plugins.litex.kwpair = (function kwpair(str){var vec__7394 = str.split(":");var k = cljs.core.nth.call(null,vec__7394,0,null);var v = cljs.core.nth.call(null,vec__7394,1,null);if(cljs.core.truth_(v))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
} else
{return null;
}
});

/**
* @param {...*} var_args
*/
lt.plugins.litex.run_commands = (function() { 
var run_commands__delegate = function (commands,cwd,exitfunc,p__7395){var map__7397 = p__7395;var map__7397__$1 = ((cljs.core.seq_QMARK_.call(null,map__7397))?cljs.core.apply.call(null,cljs.core.hash_map,map__7397):map__7397);var accout = cljs.core.get.call(null,map__7397__$1,new cljs.core.Keyword(null,"accout","accout",3885420191),"");if(cljs.core.empty_QMARK_.call(null,commands))
{return exitfunc.call(null,null,accout,"");
} else
{var command = cljs.core.first.call(null,commands);var commands__$1 = cljs.core.rest.call(null,commands);return lt.plugins.litex.exec.call(null,command,cwd,(function (error,stdout,stderr){var stdout__$1 = [cljs.core.str(accout),cljs.core.str(stdout)].join('');if(cljs.core.truth_(error))
{return exitfunc.call(null,error,stdout__$1,stderr);
} else
{return run_commands.call(null,commands__$1,cwd,exitfunc,new cljs.core.Keyword(null,"accout","accout",3885420191),stdout__$1);
}
}));
}
};
var run_commands = function (commands,cwd,exitfunc,var_args){
var p__7395 = null;if (arguments.length > 3) {
  p__7395 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return run_commands__delegate.call(this,commands,cwd,exitfunc,p__7395);};
run_commands.cljs$lang$maxFixedArity = 3;
run_commands.cljs$lang$applyTo = (function (arglist__7402){
var commands = cljs.core.first(arglist__7402);
arglist__7402 = cljs.core.next(arglist__7402);
var cwd = cljs.core.first(arglist__7402);
arglist__7402 = cljs.core.next(arglist__7402);
var exitfunc = cljs.core.first(arglist__7402);
var p__7395 = cljs.core.rest(arglist__7402);
return run_commands__delegate(commands,cwd,exitfunc,p__7395);
});
run_commands.cljs$core$IFn$_invoke$arity$variadic = run_commands__delegate;
return run_commands;
})()
;

lt.plugins.litex.run_commands_to_client = (function run_commands_to_client(connection_command,editor,commands,render_QMARK_){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));var pathmap = ((function (info,path){
return (function (s){return clojure.string.replace.call(null,s,/%[fpbder%]/,((function (info,path){
return (function (p1__7398_SHARP_){return cljs.core.keyword.call(null,p1__7398_SHARP_).call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"%f","%f",1013905491),lt.objs.files.basename.call(null,path),new cljs.core.Keyword(null,"%p","%p",1013905501),path,new cljs.core.Keyword(null,"%b","%b",1013905487),lt.objs.files.without_ext.call(null,lt.objs.files.basename.call(null,path)),new cljs.core.Keyword(null,"%d","%d",1013905489),lt.objs.files.parent.call(null,path),new cljs.core.Keyword(null,"%e","%e",1013905490),lt.objs.files.ext.call(null,path)], null));
});})(info,path))
);
});})(info,path))
;var imgdir = [cljs.core.str(pathmap.call(null,"%d")),cljs.core.str("/.img."),cljs.core.str(pathmap.call(null,"%f"))].join('');var pdfname = [cljs.core.str(lt.objs.files.join.call(null,pathmap.call(null,"%d"),pathmap.call(null,"%b"))),cljs.core.str(".pdf")].join('');var exitfunc = ((function (info,path,pathmap,imgdir,pdfname){
return (function (error,stdout,stderr){return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),connection_command,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null)),connection_command,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"error","error",1110689146),error,new cljs.core.Keyword(null,"stdout","stdout",4416474557),stdout,new cljs.core.Keyword(null,"stderr","stderr",4416464852),stderr,new cljs.core.Keyword(null,"editor","editor",4001043679),editor,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),pdfname),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});})(info,path,pathmap,imgdir,pdfname))
;lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),connection_command,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-litex-viewer-tab","add-litex-viewer-tab",1003999387),(cljs.core.truth_(render_QMARK_)?pdfname:null));
}),new cljs.core.Keyword(null,"info","info",1017141280),info], null));
return lt.plugins.litex.run_commands.call(null,cljs.core.map.call(null,pathmap,commands),lt.objs.files.parent.call(null,path),exitfunc);
});

lt.plugins.litex.pdflatex_commands = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pdflatex -halt-on-error --synctex=1 \"%f\""], null);

lt.plugins.litex.dvilatex_commands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["latex -halt-on-error --synctex=1 \"%f\"","dvipdf \"%b\""], null);

lt.plugins.litex.__BEH__on_eval = (function __BEH__on_eval(editor){return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"save","save",1017427183));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","on-eval","lt.plugins.litex/on-eval",1488919527),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null,new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));

lt.plugins.litex.__BEH__eval_on_save = (function __BEH__eval_on_save(editor){return lt.object.raise.call(null,lt.plugins.litex.tex_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","eval-on-save","lt.plugins.litex/eval-on-save",1116566327),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__eval_on_save,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"save","save",1017427183),null], null), null));

lt.plugins.litex.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__7400 = event;var map__7400__$1 = ((cljs.core.seq_QMARK_.call(null,map__7400))?cljs.core.apply.call(null,cljs.core.hash_map,map__7400):map__7400);var origin = cljs.core.get.call(null,map__7400__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__7400__$1,new cljs.core.Keyword(null,"info","info",1017141280));return lt.plugins.litex.run_commands_to_client.call(null,new cljs.core.Keyword(null,"editor.eval.tex","editor.eval.tex",1083030184),origin,lt.plugins.litex.pdflatex_commands,false);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","eval!","lt.plugins.litex/eval!",4032952478),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));

lt.plugins.litex.__BEH__sync_forward = (function __BEH__sync_forward(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);return lt.plugins.litex.run_commands_to_client.call(null,new cljs.core.Keyword(null,"litex.forward-sync","litex.forward-sync",2440308217),editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("synctex view -i \""),cljs.core.str((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos) + 1)),cljs.core.str(":"),cljs.core.str((new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos) + 1)),cljs.core.str(":%f\" -o \"%b\"")].join('')], null),true);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","sync-forward","lt.plugins.litex/sync-forward",3351270864),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__sync_forward,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-forward","sync-forward",2039658757),null], null), null));

lt.plugins.litex.__BEH__sync_backward = (function __BEH__sync_backward(this$,cwd,pdfname,pagenum,clickX,clickY){return lt.plugins.litex.run_commands.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("synctex edit -o \""),cljs.core.str(pagenum),cljs.core.str(":"),cljs.core.str(clickX),cljs.core.str(":"),cljs.core.str(clickY),cljs.core.str(":"),cljs.core.str(pdfname),cljs.core.str("\"")].join('')], null),cwd,(function (error,stdout,stderr){if(cljs.core.not.call(null,error))
{var loc = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lt.plugins.litex.kwpair,stdout.split("\n"))));var filename = ((function (loc){
return (function (p1__7401_SHARP_){if(cljs.core.truth_(lt.objs.files.absolute_QMARK_.call(null,p1__7401_SHARP_)))
{return p1__7401_SHARP_;
} else
{return lt.objs.files.join.call(null,cwd,p1__7401_SHARP_);
}
});})(loc))
.call(null,new cljs.core.Keyword(null,"Input","Input",1084709660).cljs$core$IFn$_invoke$arity$1(loc));var line = (new cljs.core.Keyword(null,"Line","Line",1016272774).cljs$core$IFn$_invoke$arity$1(loc) - 1);var column = (new cljs.core.Keyword(null,"Column","Column",3037901544).cljs$core$IFn$_invoke$arity$1(loc) - 1);lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename);
var temp__4090__auto__ = cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,filename));if(cljs.core.truth_(temp__4090__auto__))
{var edit = temp__4090__auto__;lt.objs.editor.move_cursor.call(null,edit,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),(function (){var x__6112__auto__ = column;var y__6113__auto__ = 0;return ((x__6112__auto__ > y__6113__auto__) ? x__6112__auto__ : y__6113__auto__);
})()], null));
return lt.objs.editor.center_cursor.call(null,edit);
} else
{return console.log([cljs.core.str("LiTeX could not find editor with "),cljs.core.str(filename)].join(''));
}
} else
{return null;
}
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","sync-backward","lt.plugins.litex/sync-backward",864848014),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__sync_backward,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-backward","sync-backward",4386186823),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","tex-lang","lt.plugins.litex/tex-lang",1255901069),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tex.lang","tex.lang",4241292999),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex","eval!","lt.plugins.litex/eval!",4032952478),new cljs.core.Keyword("lt.plugins.litex","sync-backward","lt.plugins.litex/sync-backward",864848014)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sync-backward","sync-backward",4386186823),null,new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));

lt.plugins.litex.tex_lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.litex","tex-lang","lt.plugins.litex/tex-lang",1255901069));

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"litex-forward-sync","litex-forward-sync",2733711224),new cljs.core.Keyword(null,"desc","desc",1016984067),"LiTeX: Forward sync from LaTeX to PDF",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
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

lt.plugins.litex.viewer.utils = (function (){var obj7664 = {};return obj7664;
})();

lttools = lt.plugins.litex.viewer.utils;

lt.plugins.litex.viewer.add_util = (function add_util(nme,fn){return (lt.plugins.litex.viewer.utils[cljs.core.name.call(null,nme)] = fn);
});

lt.plugins.litex.viewer.zoom_in = (function zoom_in(this$){var e__7140__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-in"], null),"\u2295"], null));var seq__7671_7754 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588));
})], null)));var chunk__7672_7755 = null;var count__7673_7756 = 0;var i__7674_7757 = 0;while(true){
if((i__7674_7757 < count__7673_7756))
{var vec__7675_7758 = cljs.core._nth.call(null,chunk__7672_7755,i__7674_7757);var ev__7141__auto___7759 = cljs.core.nth.call(null,vec__7675_7758,0,null);var func__7142__auto___7760 = cljs.core.nth.call(null,vec__7675_7758,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7759,func__7142__auto___7760);
{
var G__7761 = seq__7671_7754;
var G__7762 = chunk__7672_7755;
var G__7763 = count__7673_7756;
var G__7764 = (i__7674_7757 + 1);
seq__7671_7754 = G__7761;
chunk__7672_7755 = G__7762;
count__7673_7756 = G__7763;
i__7674_7757 = G__7764;
continue;
}
} else
{var temp__4092__auto___7765 = cljs.core.seq.call(null,seq__7671_7754);if(temp__4092__auto___7765)
{var seq__7671_7766__$1 = temp__4092__auto___7765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7671_7766__$1))
{var c__6529__auto___7767 = cljs.core.chunk_first.call(null,seq__7671_7766__$1);{
var G__7768 = cljs.core.chunk_rest.call(null,seq__7671_7766__$1);
var G__7769 = c__6529__auto___7767;
var G__7770 = cljs.core.count.call(null,c__6529__auto___7767);
var G__7771 = 0;
seq__7671_7754 = G__7768;
chunk__7672_7755 = G__7769;
count__7673_7756 = G__7770;
i__7674_7757 = G__7771;
continue;
}
} else
{var vec__7676_7772 = cljs.core.first.call(null,seq__7671_7766__$1);var ev__7141__auto___7773 = cljs.core.nth.call(null,vec__7676_7772,0,null);var func__7142__auto___7774 = cljs.core.nth.call(null,vec__7676_7772,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7773,func__7142__auto___7774);
{
var G__7775 = cljs.core.next.call(null,seq__7671_7766__$1);
var G__7776 = null;
var G__7777 = 0;
var G__7778 = 0;
seq__7671_7754 = G__7775;
chunk__7672_7755 = G__7776;
count__7673_7756 = G__7777;
i__7674_7757 = G__7778;
continue;
}
}
} else
{}
}
break;
}
return e__7140__auto__;
});

lt.plugins.litex.viewer.zoom_out = (function zoom_out(this$){var e__7140__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-out"], null),"\u2296"], null));var seq__7683_7779 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271));
})], null)));var chunk__7684_7780 = null;var count__7685_7781 = 0;var i__7686_7782 = 0;while(true){
if((i__7686_7782 < count__7685_7781))
{var vec__7687_7783 = cljs.core._nth.call(null,chunk__7684_7780,i__7686_7782);var ev__7141__auto___7784 = cljs.core.nth.call(null,vec__7687_7783,0,null);var func__7142__auto___7785 = cljs.core.nth.call(null,vec__7687_7783,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7784,func__7142__auto___7785);
{
var G__7786 = seq__7683_7779;
var G__7787 = chunk__7684_7780;
var G__7788 = count__7685_7781;
var G__7789 = (i__7686_7782 + 1);
seq__7683_7779 = G__7786;
chunk__7684_7780 = G__7787;
count__7685_7781 = G__7788;
i__7686_7782 = G__7789;
continue;
}
} else
{var temp__4092__auto___7790 = cljs.core.seq.call(null,seq__7683_7779);if(temp__4092__auto___7790)
{var seq__7683_7791__$1 = temp__4092__auto___7790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7683_7791__$1))
{var c__6529__auto___7792 = cljs.core.chunk_first.call(null,seq__7683_7791__$1);{
var G__7793 = cljs.core.chunk_rest.call(null,seq__7683_7791__$1);
var G__7794 = c__6529__auto___7792;
var G__7795 = cljs.core.count.call(null,c__6529__auto___7792);
var G__7796 = 0;
seq__7683_7779 = G__7793;
chunk__7684_7780 = G__7794;
count__7685_7781 = G__7795;
i__7686_7782 = G__7796;
continue;
}
} else
{var vec__7688_7797 = cljs.core.first.call(null,seq__7683_7791__$1);var ev__7141__auto___7798 = cljs.core.nth.call(null,vec__7688_7797,0,null);var func__7142__auto___7799 = cljs.core.nth.call(null,vec__7688_7797,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7798,func__7142__auto___7799);
{
var G__7800 = cljs.core.next.call(null,seq__7683_7791__$1);
var G__7801 = null;
var G__7802 = 0;
var G__7803 = 0;
seq__7683_7779 = G__7800;
chunk__7684_7780 = G__7801;
count__7685_7781 = G__7802;
i__7686_7782 = G__7803;
continue;
}
}
} else
{}
}
break;
}
return e__7140__auto__;
});

lt.plugins.litex.viewer.show_log = (function show_log(this$){var e__7140__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"show-log"], null),"Show logs"], null));var seq__7695_7804 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"show-log!","show-log!",3359135135));
})], null)));var chunk__7696_7805 = null;var count__7697_7806 = 0;var i__7698_7807 = 0;while(true){
if((i__7698_7807 < count__7697_7806))
{var vec__7699_7808 = cljs.core._nth.call(null,chunk__7696_7805,i__7698_7807);var ev__7141__auto___7809 = cljs.core.nth.call(null,vec__7699_7808,0,null);var func__7142__auto___7810 = cljs.core.nth.call(null,vec__7699_7808,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7809,func__7142__auto___7810);
{
var G__7811 = seq__7695_7804;
var G__7812 = chunk__7696_7805;
var G__7813 = count__7697_7806;
var G__7814 = (i__7698_7807 + 1);
seq__7695_7804 = G__7811;
chunk__7696_7805 = G__7812;
count__7697_7806 = G__7813;
i__7698_7807 = G__7814;
continue;
}
} else
{var temp__4092__auto___7815 = cljs.core.seq.call(null,seq__7695_7804);if(temp__4092__auto___7815)
{var seq__7695_7816__$1 = temp__4092__auto___7815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7695_7816__$1))
{var c__6529__auto___7817 = cljs.core.chunk_first.call(null,seq__7695_7816__$1);{
var G__7818 = cljs.core.chunk_rest.call(null,seq__7695_7816__$1);
var G__7819 = c__6529__auto___7817;
var G__7820 = cljs.core.count.call(null,c__6529__auto___7817);
var G__7821 = 0;
seq__7695_7804 = G__7818;
chunk__7696_7805 = G__7819;
count__7697_7806 = G__7820;
i__7698_7807 = G__7821;
continue;
}
} else
{var vec__7700_7822 = cljs.core.first.call(null,seq__7695_7816__$1);var ev__7141__auto___7823 = cljs.core.nth.call(null,vec__7700_7822,0,null);var func__7142__auto___7824 = cljs.core.nth.call(null,vec__7700_7822,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7823,func__7142__auto___7824);
{
var G__7825 = cljs.core.next.call(null,seq__7695_7816__$1);
var G__7826 = null;
var G__7827 = 0;
var G__7828 = 0;
seq__7695_7804 = G__7825;
chunk__7696_7805 = G__7826;
count__7697_7806 = G__7827;
i__7698_7807 = G__7828;
continue;
}
}
} else
{}
}
break;
}
return e__7140__auto__;
});

lt.plugins.litex.viewer.hide_log = (function hide_log(this$){var e__7140__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"hide-log"], null),"Hide logs"], null));var seq__7707_7829 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466));
})], null)));var chunk__7708_7830 = null;var count__7709_7831 = 0;var i__7710_7832 = 0;while(true){
if((i__7710_7832 < count__7709_7831))
{var vec__7711_7833 = cljs.core._nth.call(null,chunk__7708_7830,i__7710_7832);var ev__7141__auto___7834 = cljs.core.nth.call(null,vec__7711_7833,0,null);var func__7142__auto___7835 = cljs.core.nth.call(null,vec__7711_7833,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7834,func__7142__auto___7835);
{
var G__7836 = seq__7707_7829;
var G__7837 = chunk__7708_7830;
var G__7838 = count__7709_7831;
var G__7839 = (i__7710_7832 + 1);
seq__7707_7829 = G__7836;
chunk__7708_7830 = G__7837;
count__7709_7831 = G__7838;
i__7710_7832 = G__7839;
continue;
}
} else
{var temp__4092__auto___7840 = cljs.core.seq.call(null,seq__7707_7829);if(temp__4092__auto___7840)
{var seq__7707_7841__$1 = temp__4092__auto___7840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7707_7841__$1))
{var c__6529__auto___7842 = cljs.core.chunk_first.call(null,seq__7707_7841__$1);{
var G__7843 = cljs.core.chunk_rest.call(null,seq__7707_7841__$1);
var G__7844 = c__6529__auto___7842;
var G__7845 = cljs.core.count.call(null,c__6529__auto___7842);
var G__7846 = 0;
seq__7707_7829 = G__7843;
chunk__7708_7830 = G__7844;
count__7709_7831 = G__7845;
i__7710_7832 = G__7846;
continue;
}
} else
{var vec__7712_7847 = cljs.core.first.call(null,seq__7707_7841__$1);var ev__7141__auto___7848 = cljs.core.nth.call(null,vec__7712_7847,0,null);var func__7142__auto___7849 = cljs.core.nth.call(null,vec__7712_7847,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7848,func__7142__auto___7849);
{
var G__7850 = cljs.core.next.call(null,seq__7707_7841__$1);
var G__7851 = null;
var G__7852 = 0;
var G__7853 = 0;
seq__7707_7829 = G__7850;
chunk__7708_7830 = G__7851;
count__7709_7831 = G__7852;
i__7710_7832 = G__7853;
continue;
}
}
} else
{}
}
break;
}
return e__7140__auto__;
});

lt.plugins.litex.viewer.pdfimg = (function pdfimg(viewer,src){var e__7140__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),src], null)], null));var seq__7719_7854 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (event){return lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"image-click!","image-click!",4167726013),event);
}),new cljs.core.Keyword(null,"load","load",1017231448),(function (evemt){return lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"image-load!","image-load!",2093865083),lt.plugins.litex.viewer.event);
})], null)));var chunk__7720_7855 = null;var count__7721_7856 = 0;var i__7722_7857 = 0;while(true){
if((i__7722_7857 < count__7721_7856))
{var vec__7723_7858 = cljs.core._nth.call(null,chunk__7720_7855,i__7722_7857);var ev__7141__auto___7859 = cljs.core.nth.call(null,vec__7723_7858,0,null);var func__7142__auto___7860 = cljs.core.nth.call(null,vec__7723_7858,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7859,func__7142__auto___7860);
{
var G__7861 = seq__7719_7854;
var G__7862 = chunk__7720_7855;
var G__7863 = count__7721_7856;
var G__7864 = (i__7722_7857 + 1);
seq__7719_7854 = G__7861;
chunk__7720_7855 = G__7862;
count__7721_7856 = G__7863;
i__7722_7857 = G__7864;
continue;
}
} else
{var temp__4092__auto___7865 = cljs.core.seq.call(null,seq__7719_7854);if(temp__4092__auto___7865)
{var seq__7719_7866__$1 = temp__4092__auto___7865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7719_7866__$1))
{var c__6529__auto___7867 = cljs.core.chunk_first.call(null,seq__7719_7866__$1);{
var G__7868 = cljs.core.chunk_rest.call(null,seq__7719_7866__$1);
var G__7869 = c__6529__auto___7867;
var G__7870 = cljs.core.count.call(null,c__6529__auto___7867);
var G__7871 = 0;
seq__7719_7854 = G__7868;
chunk__7720_7855 = G__7869;
count__7721_7856 = G__7870;
i__7722_7857 = G__7871;
continue;
}
} else
{var vec__7724_7872 = cljs.core.first.call(null,seq__7719_7866__$1);var ev__7141__auto___7873 = cljs.core.nth.call(null,vec__7724_7872,0,null);var func__7142__auto___7874 = cljs.core.nth.call(null,vec__7724_7872,1,null);lt.util.dom.on.call(null,e__7140__auto__,ev__7141__auto___7873,func__7142__auto___7874);
{
var G__7875 = cljs.core.next.call(null,seq__7719_7866__$1);
var G__7876 = null;
var G__7877 = 0;
var G__7878 = 0;
seq__7719_7854 = G__7875;
chunk__7720_7855 = G__7876;
count__7721_7856 = G__7877;
i__7722_7857 = G__7878;
continue;
}
}
} else
{}
}
break;
}
return e__7140__auto__;
});

lt.plugins.litex.viewer.kwpairf = (function kwpairf(str){var vec__7726 = str.split(":");var k = cljs.core.nth.call(null,vec__7726,0,null);var v = cljs.core.nth.call(null,vec__7726,1,null);if(cljs.core.truth_(v))
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

lt.plugins.litex.viewer.connect_client = (function connect_client(this$){return lt.objs.clients.handle_connection_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"urlvalue","urlvalue",4359376084).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"frame","frame",1111596255),this$,new cljs.core.Keyword(null,"frame-id","frame-id",3663850733),lt.plugins.litex.viewer.browser_id.call(null,this$),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zframe.client","zframe.client",582940760)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex.viewer","tex-eval","lt.plugins.litex.viewer/tex-eval",3832158056),new cljs.core.Keyword("lt.plugins.litex.viewer","forward-sync","lt.plugins.litex.viewer/forward-sync",3501952325),new cljs.core.Keyword("lt.plugins.litex.viewer","handle-send!","lt.plugins.litex.viewer/handle-send!",1448649814),new cljs.core.Keyword("lt.plugins.litex.viewer","handle-close!","lt.plugins.litex.viewer/handle-close!",3739019540)], null),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.eval.tex","editor.eval.tex",1083030184),null,new cljs.core.Keyword(null,"litex.forward-sync","litex.forward-sync",2440308217),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"frame","frame",1111596255)], null));
});

lt.plugins.litex.viewer.add = (function add(){var browser = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","browser","lt.plugins.litex.viewer/browser",2946031034));lt.objs.tabs.add_BANG_.call(null,browser);
lt.objs.tabs.active_BANG_.call(null,browser);
return browser;
});

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","browser","lt.plugins.litex.viewer/browser",2946031034),new cljs.core.Keyword(null,"name","name",1017277949),"browser",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",4492240260),null], null), null),new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"history-pos","history-pos",1364759821),-1,new cljs.core.Keyword(null,"url","url",1014020321),"about:blank",new cljs.core.Keyword(null,"urlvalue","urlvalue",4359376084),"about:blank",new cljs.core.Keyword(null,"zoom","zoom",1017648965),1,new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939),1.25,new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),null,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),null,new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057),null,new cljs.core.Keyword(null,"rendering","rendering",2853558782),false,new cljs.core.Keyword(null,"loading-count","loading-count",4680473776),0,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex.viewer","destroy-on-close","lt.plugins.litex.viewer/destroy-on-close",4767354851),new cljs.core.Keyword("lt.plugins.litex.viewer","rem-client","lt.plugins.litex.viewer/rem-client",574186756),new cljs.core.Keyword("lt.plugins.litex.viewer","render-pdf","lt.plugins.litex.viewer/render-pdf",1840536781),new cljs.core.Keyword("lt.plugins.litex.viewer","render-done","lt.plugins.litex.viewer/render-done",4300380207),new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-in!","lt.plugins.litex.viewer/zoom-in!",2562456392),new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-out!","lt.plugins.litex.viewer/zoom-out!",1172268339),new cljs.core.Keyword("lt.plugins.litex.viewer","set-zoom!","lt.plugins.litex.viewer/set-zoom!",3334100069),new cljs.core.Keyword("lt.plugins.litex.viewer","show-log!","lt.plugins.litex.viewer/show-log!",837199571),new cljs.core.Keyword("lt.plugins.litex.viewer","hide-log!","lt.plugins.litex.viewer/hide-log!",2486896090),new cljs.core.Keyword("lt.plugins.litex.viewer","image-click!","lt.plugins.litex.viewer/image-click!",3767830813),new cljs.core.Keyword("lt.plugins.litex.viewer","image-load!","lt.plugins.litex.viewer/image-load!",1693983711),new cljs.core.Keyword("lt.plugins.litex.viewer","init!","lt.plugins.litex.viewer/init!",2861886455),new cljs.core.Keyword("lt.plugins.litex.viewer","set-client-name","lt.plugins.litex.viewer/set-client-name",3207171848),new cljs.core.Keyword("lt.plugins.litex.viewer","set-active","lt.plugins.litex.viewer/set-active",1808486327),new cljs.core.Keyword("lt.plugins.litex.viewer","active-context","lt.plugins.litex.viewer/active-context",3628136570),new cljs.core.Keyword("lt.plugins.litex.viewer","focus-on-show","lt.plugins.litex.viewer/focus-on-show",2313578188),new cljs.core.Keyword("lt.plugins.litex.viewer","inactive-context","lt.plugins.litex.viewer/inactive-context",3143388979)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),lt.plugins.litex.viewer.connect_client.call(null,this$)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#litex-viewer.cm-s-default.hide-log","div#litex-viewer.cm-s-default.hide-log",2295371982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pdf-viewer-container","div#pdf-viewer-container",4332961317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sync-box.animate","div#sync-box.animate",4450762416)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",1014013077),lt.plugins.litex.viewer.zoom_in.call(null,this$),lt.plugins.litex.viewer.zoom_out.call(null,this$),lt.plugins.litex.viewer.show_log.call(null,this$),lt.plugins.litex.viewer.hide_log.call(null,this$)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre#log-viewer","pre#log-viewer",3895935501)], null)], null);
}));

lt.plugins.litex.viewer.__BEH__destroy_on_close = (function __BEH__destroy_on_close(this$){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"inactive","inactive",1038569437));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","destroy-on-close","lt.plugins.litex.viewer/destroy-on-close",4767354851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__destroy_on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));

lt.plugins.litex.viewer.__BEH__rem_client = (function __BEH__rem_client(this$){if(cljs.core._EQ_.call(null,lt.objs.context.__GT_obj.call(null,new cljs.core.Keyword(null,"global.browser","global.browser",3786202959)),this$))
{lt.objs.context.out_BANG_.call(null,new cljs.core.Keyword(null,"global.browser","global.browser",3786202959));
} else
{}
var temp__4092__auto___7879 = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([this$], true),lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698))));if(cljs.core.truth_(temp__4092__auto___7879))
{var b_7880 = temp__4092__auto___7879;lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"global.browser","global.browser",3786202959),b_7880);
} else
{}
return lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","rem-client","lt.plugins.litex.viewer/rem-client",574186756),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__rem_client,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));

lt.plugins.litex.viewer.__BEH__render_pdf = (function __BEH__render_pdf(this$,path){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rendering","rendering",2853558782),true], null));
var randstr = cljs.core.rand_int.call(null,1679616).toString(36);var filename = lt.objs.files.basename.call(null,path);var basename = lt.objs.files.without_ext.call(null,filename);var dirname = lt.objs.files.parent.call(null,path);var imgdir = lt.objs.files.join.call(null,dirname,[cljs.core.str(".img."),cljs.core.str(filename)].join(''));if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,imgdir)))
{lt.objs.files.delete_BANG_.call(null,imgdir);
} else
{}
lt.objs.files.mkdir.call(null,imgdir);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-name","set-name",2383102088),filename);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),path], null));
return lt.plugins.litex.run_commands.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("pdftoppm -png \""),cljs.core.str(basename),cljs.core.str(".pdf\" \".img."),cljs.core.str(filename),cljs.core.str("/"),cljs.core.str(randstr),cljs.core.str("\"")].join('')], null),dirname,(function (error,stdout,stderr){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"render-done","render-done",3634660555),error,stdout,stderr,imgdir);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","render-pdf","lt.plugins.litex.viewer/render-pdf",1840536781),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__render_pdf,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-pdf","set-pdf",2997736569),null], null), null));

lt.plugins.litex.viewer.__BEH__render_done = (function __BEH__render_done(this$,error,stdout,stderr,imgdir){var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var sync_box = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#sync-box","div#sync-box",2601350845),lt.object.__GT_content.call(null,this$));var scroll_top = pdf_viewer.scrollTop;var scroll_left = pdf_viewer.scrollLeft;while(true){
if(!(cljs.core._EQ_.call(null,sync_box,cljs.core.first.call(null,lt.util.dom.children.call(null,pdf_viewer)))))
{lt.util.dom.remove.call(null,cljs.core.first.call(null,lt.util.dom.children.call(null,pdf_viewer)));
{
continue;
}
} else
{}
break;
}
var seq__7731_7881 = cljs.core.seq.call(null,lt.objs.files.ls.call(null,imgdir));var chunk__7732_7882 = null;var count__7733_7883 = 0;var i__7734_7884 = 0;while(true){
if((i__7734_7884 < count__7733_7883))
{var f_7885 = cljs.core._nth.call(null,chunk__7732_7882,i__7734_7884);lt.util.dom.before.call(null,sync_box,lt.plugins.litex.viewer.pdfimg.call(null,this$,[cljs.core.str("file://"),cljs.core.str(lt.objs.files.join.call(null,imgdir,f_7885))].join('')));
{
var G__7886 = seq__7731_7881;
var G__7887 = chunk__7732_7882;
var G__7888 = count__7733_7883;
var G__7889 = (i__7734_7884 + 1);
seq__7731_7881 = G__7886;
chunk__7732_7882 = G__7887;
count__7733_7883 = G__7888;
i__7734_7884 = G__7889;
continue;
}
} else
{var temp__4092__auto___7890 = cljs.core.seq.call(null,seq__7731_7881);if(temp__4092__auto___7890)
{var seq__7731_7891__$1 = temp__4092__auto___7890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7731_7891__$1))
{var c__6529__auto___7892 = cljs.core.chunk_first.call(null,seq__7731_7891__$1);{
var G__7893 = cljs.core.chunk_rest.call(null,seq__7731_7891__$1);
var G__7894 = c__6529__auto___7892;
var G__7895 = cljs.core.count.call(null,c__6529__auto___7892);
var G__7896 = 0;
seq__7731_7881 = G__7893;
chunk__7732_7882 = G__7894;
count__7733_7883 = G__7895;
i__7734_7884 = G__7896;
continue;
}
} else
{var f_7897 = cljs.core.first.call(null,seq__7731_7891__$1);lt.util.dom.before.call(null,sync_box,lt.plugins.litex.viewer.pdfimg.call(null,this$,[cljs.core.str("file://"),cljs.core.str(lt.objs.files.join.call(null,imgdir,f_7897))].join('')));
{
var G__7898 = cljs.core.next.call(null,seq__7731_7891__$1);
var G__7899 = null;
var G__7900 = 0;
var G__7901 = 0;
seq__7731_7881 = G__7898;
chunk__7732_7882 = G__7899;
count__7733_7883 = G__7900;
i__7734_7884 = G__7901;
continue;
}
}
} else
{}
}
break;
}
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037));
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),scroll_top,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),scroll_left,new cljs.core.Keyword(null,"loading-count","loading-count",4680473776),(cljs.core.count.call(null,lt.util.dom.children.call(null,pdf_viewer)) - 1)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","render-done","lt.plugins.litex.viewer/render-done",4300380207),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__render_done,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-done","render-done",3634660555),null], null), null));

lt.plugins.litex.viewer.__BEH__image_load_BANG_ = (function __BEH__image_load_BANG_(this$,event){var count = (new cljs.core.Keyword(null,"loading-count","loading-count",4680473776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)) - 1);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"loading-count","loading-count",4680473776),count], null));
if(cljs.core._EQ_.call(null,count,0))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rendering","rendering",2853558782),false], null));
var temp__4092__auto__ = new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var sync_msg = temp__4092__auto__;lt.object.raise.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"litex.forward-sync!","litex.forward-sync!",2282754540),sync_msg);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057),null], null));
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","image-load!","lt.plugins.litex.viewer/image-load!",1693983711),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__image_load_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image-load!","image-load!",2093865083),null], null), null));

lt.plugins.litex.viewer.__BEH__zoom_in_BANG_ = (function __BEH__zoom_in_BANG_(this$){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var factor = new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),(zoom * factor));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-in!","lt.plugins.litex.viewer/zoom-in!",2562456392),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__zoom_in_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588),null], null), null));

lt.plugins.litex.viewer.__BEH__zoom_out_BANG_ = (function __BEH__zoom_out_BANG_(this$){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var factor = new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),(zoom / factor));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-out!","lt.plugins.litex.viewer/zoom-out!",1172268339),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__zoom_out_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271),null], null), null));

lt.plugins.litex.viewer.__BEH__set_zoom_BANG_ = (function __BEH__set_zoom_BANG_(this$,nzoom){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var vec__7741 = lt.plugins.litex.viewer.center_point.call(null,pdf_viewer);var x = cljs.core.nth.call(null,vec__7741,0,null);var y = cljs.core.nth.call(null,vec__7741,1,null);var new_zoom = (function (){var or__5800__auto__ = nzoom;if(cljs.core.truth_(or__5800__auto__))
{return or__5800__auto__;
} else
{return zoom;
}
})();lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
var seq__7742_7902 = cljs.core.seq.call(null,lt.util.dom.children.call(null,pdf_viewer));var chunk__7743_7903 = null;var count__7744_7904 = 0;var i__7745_7905 = 0;while(true){
if((i__7745_7905 < count__7744_7904))
{var elem_7906 = cljs.core._nth.call(null,chunk__7743_7903,i__7745_7905);lt.util.dom.css.call(null,elem_7906,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
{
var G__7907 = seq__7742_7902;
var G__7908 = chunk__7743_7903;
var G__7909 = count__7744_7904;
var G__7910 = (i__7745_7905 + 1);
seq__7742_7902 = G__7907;
chunk__7743_7903 = G__7908;
count__7744_7904 = G__7909;
i__7745_7905 = G__7910;
continue;
}
} else
{var temp__4092__auto___7911 = cljs.core.seq.call(null,seq__7742_7902);if(temp__4092__auto___7911)
{var seq__7742_7912__$1 = temp__4092__auto___7911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7742_7912__$1))
{var c__6529__auto___7913 = cljs.core.chunk_first.call(null,seq__7742_7912__$1);{
var G__7914 = cljs.core.chunk_rest.call(null,seq__7742_7912__$1);
var G__7915 = c__6529__auto___7913;
var G__7916 = cljs.core.count.call(null,c__6529__auto___7913);
var G__7917 = 0;
seq__7742_7902 = G__7914;
chunk__7743_7903 = G__7915;
count__7744_7904 = G__7916;
i__7745_7905 = G__7917;
continue;
}
} else
{var elem_7918 = cljs.core.first.call(null,seq__7742_7912__$1);lt.util.dom.css.call(null,elem_7918,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
{
var G__7919 = cljs.core.next.call(null,seq__7742_7912__$1);
var G__7920 = null;
var G__7921 = 0;
var G__7922 = 0;
seq__7742_7902 = G__7919;
chunk__7743_7903 = G__7920;
count__7744_7904 = G__7921;
i__7745_7905 = G__7922;
continue;
}
}
} else
{}
}
break;
}
return lt.plugins.litex.viewer.set_center_point.call(null,pdf_viewer,cljs.core.map.call(null,(function (p1__7735_SHARP_){return (p1__7735_SHARP_ * (new_zoom / zoom));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","set-zoom!","lt.plugins.litex.viewer/set-zoom!",3334100069),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__set_zoom_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),null], null), null));

lt.plugins.litex.viewer.center_point = (function center_point(elem){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(elem.scrollLeft + (elem.clientWidth / 2)),(elem.scrollTop + (elem.clientHeight / 2))], null);
});

lt.plugins.litex.viewer.set_center_point = (function set_center_point(elem,p__7746){var vec__7748 = p__7746;var x = cljs.core.nth.call(null,vec__7748,0,null);var y = cljs.core.nth.call(null,vec__7748,1,null);elem.scrollLeft = (x - (elem.clientWidth / 2));
return elem.scrollTop = (y - (elem.clientHeight / 2));
});

lt.plugins.litex.viewer.__BEH__show_log_BANG_ = (function __BEH__show_log_BANG_(this$){return lt.util.dom.remove_class.call(null,lt.object.__GT_content.call(null,this$),"hide-log");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","show-log!","lt.plugins.litex.viewer/show-log!",837199571),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__show_log_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-log!","show-log!",3359135135),null], null), null));

lt.plugins.litex.viewer.__BEH__hide_log_BANG_ = (function __BEH__hide_log_BANG_(this$){return lt.util.dom.add_class.call(null,lt.object.__GT_content.call(null,this$),"hide-log");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","hide-log!","lt.plugins.litex.viewer/hide-log!",2486896090),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__hide_log_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466),null], null), null));

lt.plugins.litex.viewer.__BEH__image_click_BANG_ = (function __BEH__image_click_BANG_(this$,event){if(cljs.core.truth_(event.ctrlKey))
{var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var scale = (150 / 72);var clickX = (((parseFloat(event.offsetX) / zoom) - 2) / scale);var clickY = (((parseFloat(event.offsetY) / zoom) - 2) / scale);var pagenum = parseInt(cljs.core.last.call(null,event.srcElement.src.split("-")));var cwd = lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var pdfname = lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.object.raise.call(null,lt.plugins.litex.tex_lang,new cljs.core.Keyword(null,"sync-backward","sync-backward",4386186823),cwd,pdfname,pagenum,clickX,clickY);
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

lt.plugins.litex.viewer.__BEH__tex_eval = (function __BEH__tex_eval(this$,msg){var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var log_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"pre#log-viewer","pre#log-viewer",3895935501),lt.object.__GT_content.call(null,this$));var viewer = new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(data)))
{lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"set-pdf","set-pdf",2997736569),new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(data));
lt.object.raise.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"sync-forward","sync-forward",2039658757));
lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466));
} else
{lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"show-log!","show-log!",3359135135));
}
log_viewer.innerText = [cljs.core.str(new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(data)),cljs.core.str(new cljs.core.Keyword(null,"stderr","stderr",4416464852).cljs$core$IFn$_invoke$arity$1(data))].join('');
return log_viewer.scrollTop = (log_viewer.scrollHeight - log_viewer.clientHeight);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","tex-eval","lt.plugins.litex.viewer/tex-eval",3832158056),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__tex_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.tex!","editor.eval.tex!",3156808477),null], null), null));

lt.plugins.litex.viewer.__BEH__forward_sync = (function __BEH__forward_sync(this$,msg){if(cljs.core.truth_(new cljs.core.Keyword(null,"rendering","rendering",2853558782).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))))
{return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057),msg], null));
} else
{var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var sync_box = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#sync-box","div#sync-box",2601350845),lt.object.__GT_content.call(null,this$));var output_split = (function (){var and__5788__auto__ = new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__5788__auto__))
{return cljs.core.rest.call(null,new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(data).split("\nOutput"));
} else
{return and__5788__auto__;
}
})();var restore_top = new cljs.core.Keyword(null,"restore-top","restore-top",1342702856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var restore_left = new cljs.core.Keyword(null,"restore-left","restore-left",2616478552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),null,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),null], null));
pdf_viewer.offsetHeight = pdf_viewer.offsetHeight;
if(cljs.core.truth_(output_split))
{var locs = cljs.core.map.call(null,(function (p1__7749_SHARP_){return lt.plugins.litex.viewer.pdf_to_elem.call(null,pdf_viewer,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lt.plugins.litex.viewer.kwpairf,p1__7749_SHARP_.split("\n")))));
}),output_split);var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var bbleft = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,new cljs.core.Keyword(null,"h","h",1013904346),locs));var bbtop = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (locs,zoom,bbleft){
return (function (p1__7750_SHARP_){return (new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(p1__7750_SHARP_) - new cljs.core.Keyword(null,"H","H",1013904314).cljs$core$IFn$_invoke$arity$1(p1__7750_SHARP_));
});})(locs,zoom,bbleft))
,locs));var bbright = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (locs,zoom,bbleft,bbtop){
return (function (p1__7751_SHARP_){return (new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(p1__7751_SHARP_) + new cljs.core.Keyword(null,"W","W",1013904329).cljs$core$IFn$_invoke$arity$1(p1__7751_SHARP_));
});})(locs,zoom,bbleft,bbtop))
,locs));var bbbottom = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),locs));var bbwidth = (bbright - bbleft);var bbheight = (bbbottom - bbtop);var vleft = (function (){var or__5800__auto__ = restore_left;if(cljs.core.truth_(or__5800__auto__))
{return or__5800__auto__;
} else
{return pdf_viewer.scrollLeft;
}
})();var vwidth = pdf_viewer.clientWidth;var vright = (vleft + vwidth);var vtop = (function (){var or__5800__auto__ = restore_top;if(cljs.core.truth_(or__5800__auto__))
{return or__5800__auto__;
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
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","forward-sync","lt.plugins.litex.viewer/forward-sync",3501952325),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__forward_sync,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"litex.forward-sync!","litex.forward-sync!",2282754540),null], null), null));

lt.plugins.litex.viewer.pdf_to_elem = (function pdf_to_elem(elem,loc){var map__7753 = loc;var map__7753__$1 = ((cljs.core.seq_QMARK_.call(null,map__7753))?cljs.core.apply.call(null,cljs.core.hash_map,map__7753):map__7753);var Page = cljs.core.get.call(null,map__7753__$1,new cljs.core.Keyword(null,"Page","Page",1016384033));var H = cljs.core.get.call(null,map__7753__$1,new cljs.core.Keyword(null,"H","H",1013904314));var W = cljs.core.get.call(null,map__7753__$1,new cljs.core.Keyword(null,"W","W",1013904329));var v = cljs.core.get.call(null,map__7753__$1,new cljs.core.Keyword(null,"v","v",1013904360));var h = cljs.core.get.call(null,map__7753__$1,new cljs.core.Keyword(null,"h","h",1013904346));var img = cljs.core.nth.call(null,lt.util.dom.children.call(null,elem),(Page - 1));var scale = (150 / 72);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"h","h",1013904346),(((h * scale) + img.offsetLeft) + 2),new cljs.core.Keyword(null,"v","v",1013904360),(((v * scale) + img.offsetTop) + 2),new cljs.core.Keyword(null,"W","W",1013904329),(W * scale),new cljs.core.Keyword(null,"H","H",1013904314),(H * scale)], null);
});

lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"add-litex-viewer-tab","add-litex-viewer-tab",1003999387),new cljs.core.Keyword(null,"desc","desc",1016984067),"LiTeX: Add PDF viewer for LaTeX document",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (filename){var b = lt.plugins.litex.viewer.add.call(null);lt.object.raise.call(null,b,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
if(cljs.core.truth_(filename))
{return lt.object.raise.call(null,b,new cljs.core.Keyword(null,"set-pdf","set-pdf",2997736569),filename,null);
} else
{return null;
}
})], null));

}

//# sourceMappingURL=