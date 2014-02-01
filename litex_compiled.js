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
lt.plugins.litex.exec = (function exec(command,cwd,exitfunc){return lt.plugins.litex._exec.call(null,command,(function (){var obj8186 = {"cwd":cwd,"env":lt.objs.proc.merge_env.call(null,null),"windowsVerbatimArguments":((cljs.core._EQ_.call(null,process.platform,"win32"))?true:null)};return obj8186;
})(),exitfunc);
});
lt.plugins.litex.kwpair = (function kwpair(str){var vec__8188 = str.split(":");var k = cljs.core.nth.call(null,vec__8188,0,null);var v = cljs.core.nth.call(null,vec__8188,1,null);if(cljs.core.truth_(v))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null);
} else
{return null;
}
});
lt.plugins.litex.ensure_absolute = (function ensure_absolute(path,dir){if(cljs.core.truth_(lt.objs.files.absolute_QMARK_.call(null,path)))
{return path;
} else
{return lt.objs.files.join.call(null,dir,path);
}
});
/**
* @param {...*} var_args
*/
lt.plugins.litex.run_commands = (function() { 
var run_commands__delegate = function (commands,cwd,exitfunc,p__8189){var map__8191 = p__8189;var map__8191__$1 = ((cljs.core.seq_QMARK_.call(null,map__8191))?cljs.core.apply.call(null,cljs.core.hash_map,map__8191):map__8191);var accout = cljs.core.get.call(null,map__8191__$1,new cljs.core.Keyword(null,"accout","accout",3885420191),"");if(cljs.core.empty_QMARK_.call(null,commands))
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
var p__8189 = null;if (arguments.length > 3) {
  p__8189 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return run_commands__delegate.call(this,commands,cwd,exitfunc,p__8189);};
run_commands.cljs$lang$maxFixedArity = 3;
run_commands.cljs$lang$applyTo = (function (arglist__8210){
var commands = cljs.core.first(arglist__8210);
arglist__8210 = cljs.core.next(arglist__8210);
var cwd = cljs.core.first(arglist__8210);
arglist__8210 = cljs.core.next(arglist__8210);
var exitfunc = cljs.core.first(arglist__8210);
var p__8189 = cljs.core.rest(arglist__8210);
return run_commands__delegate(commands,cwd,exitfunc,p__8189);
});
run_commands.cljs$core$IFn$_invoke$arity$variadic = run_commands__delegate;
return run_commands;
})()
;
lt.plugins.litex.get_config_from_settings = (function get_config_from_settings(path,which){var settings = lt.plugins.litex.get_settings.call(null,which,lt.objs.files.parent.call(null,path));var fullfilename = lt.plugins.litex.ensure_absolute.call(null,(function (){var or__6743__auto__ = cljs.core.get.call(null,settings,"filename");if(cljs.core.truth_(or__6743__auto__))
{return or__6743__auto__;
} else
{return path;
}
})(),lt.objs.files.parent.call(null,path));if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([lt.objs.files.ext.call(null,fullfilename)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tex","latex"], null))))
{var last_tex_file = new cljs.core.Keyword(null,"last-tex-file","last-tex-file",710788139).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.litex.tex_lang));if(cljs.core.truth_(last_tex_file))
{return get_config_from_settings.call(null,last_tex_file,which);
} else
{return null;
}
} else
{var filename = lt.objs.files.basename.call(null,fullfilename);var cwd = lt.objs.files.parent.call(null,fullfilename);var commands = (function (){var or__6743__auto__ = lt.plugins.litex.COMMANDS.call(null,settings.call(null,"commands"));if(cljs.core.truth_(or__6743__auto__))
{return or__6743__auto__;
} else
{return settings.call(null,"commands");
}
})();var pathmap = ((function (filename,cwd,commands){
return (function (s){return clojure.string.replace.call(null,s,/%[fpbde%]/,((function (filename,cwd,commands){
return (function (p1__8192_SHARP_){return cljs.core.keyword.call(null,p1__8192_SHARP_).call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"%f","%f",1013905491),filename,new cljs.core.Keyword(null,"%p","%p",1013905501),fullfilename,new cljs.core.Keyword(null,"%b","%b",1013905487),lt.objs.files.without_ext.call(null,filename),new cljs.core.Keyword(null,"%d","%d",1013905489),cwd,new cljs.core.Keyword(null,"%e","%e",1013905490),lt.objs.files.ext.call(null,filename),new cljs.core.Keyword(null,"%%","%%",1013905426),"%"], null));
});})(filename,cwd,commands))
);
});})(filename,cwd,commands))
;var pdfname = lt.plugins.litex.ensure_absolute.call(null,pathmap.call(null,settings.call(null,"outputname")),cwd);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"commands","commands",4706336250),cljs.core.map.call(null,pathmap,commands),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"texname","texname",3890856612),fullfilename,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),pdfname], null);
}
});
lt.plugins.litex.run_commands_to_client = (function run_commands_to_client(connection_command,editor,commands,cwd,pdfname,render_QMARK_){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var exitfunc = ((function (info){
return (function (error,stdout,stderr){return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),connection_command,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null)),connection_command,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"error","error",1110689146),error,new cljs.core.Keyword(null,"stdout","stdout",4416474557),stdout,new cljs.core.Keyword(null,"stderr","stderr",4416464852),stderr,new cljs.core.Keyword(null,"editor","editor",4001043679),editor,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),pdfname),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});})(info))
;lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),connection_command,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),(function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-litex-viewer-tab","add-litex-viewer-tab",1003999387),(cljs.core.truth_(render_QMARK_)?pdfname:null));
}),new cljs.core.Keyword(null,"info","info",1017141280),info], null));
lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),pdfname], null));
return lt.plugins.litex.run_commands.call(null,commands,cwd,exitfunc);
});
lt.plugins.litex.load_settings = (function load_settings(path){var file = lt.objs.files.open_sync.call(null,path);var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(file);if(cljs.core.truth_(content))
{try{return cljs.core.js__GT_clj.call(null,JSON.parse(content.replace((new RegExp("^\\s*//.*$","gm")),"")));
}catch (e8194){if((e8194 instanceof Error))
{var e = e8194;return console.log([cljs.core.str("Error parsing "),cljs.core.str(path),cljs.core.str(":\n  "),cljs.core.str(e),cljs.core.str("\nIgnoring this file.")].join(''));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8194;
} else
{return null;
}
}
}} else
{return null;
}
});
lt.plugins.litex.global_settings = (function global_settings(){return lt.objs.files.home.call(null,lt.objs.files.join.call(null,".config","litexrc"));
});
lt.plugins.litex.local_settings = (function local_settings(cwd){return lt.objs.files.join.call(null,cwd,".litexrc");
});
lt.plugins.litex.get_settings = (function get_settings(which,cwd){return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__8195_SHARP_){return cljs.core.get.call(null,p1__8195_SHARP_,which);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.litex.DEFAULT_SETTINGS,lt.plugins.litex.load_settings.call(null,lt.plugins.litex.global_settings.call(null)),lt.plugins.litex.load_settings.call(null,lt.plugins.litex.local_settings.call(null,cwd))], null)));
});
lt.plugins.litex.DEFAULT_SETTINGS = new cljs.core.PersistentArrayMap(null, 2, ["file",new cljs.core.PersistentArrayMap(null, 3, ["filename",null,"commands","pdflatex","outputname","%b.pdf"], null),"project",new cljs.core.PersistentArrayMap(null, 3, ["filename",null,"commands","pdflatex","outputname","%b.pdf"], null)], null);
lt.plugins.litex.COMMANDS = new cljs.core.PersistentArrayMap(null, 3, ["pdflatex",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pdflatex -halt-on-error --synctex=1 \"%f\""], null),"latex-dvipdf",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["latex -halt-on-error --synctex=1 \"%f\"","dvipdf \"%b\""], null),"latex-dvips-ps2pdf",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["latex -halt-on-error --synctex=1 \"%f\"","dvips \"%b\"","ps2pdf \"%b.ps\""], null)], null);
lt.plugins.litex.SETTINGS_TEMPLATE = "// This document is in JSON format.  Note that there must be a comma\n// between every pair of attributes, but not following the last one.\n//\n// Note that the only comments recongnized by the parser are those\n// with a double slash preceded only by whitespace.\n{\n  // The \"file\" settings are used when compiling with the \"eval.one\"\n  // command, bound by default to \"Ctrl-Enter\".\n  \"file\": {\n    // The filename to use in the compilation.  The default, null, means\n    // to use the name of the file being edited (if a TeX file) or the\n    // last TeX file to be compiled.\n    //\"filename\": null,\n\n    // The commands to run.  Either\n    //  - a list of strings, each one a command to be run.  The\n    //    substitution patterns below will be replaced with values\n    //    derived from filename.\n    //  - one of \"pdflatex\" (the default), \"latex-dvipdf\", or\n    //    \"latex-dvips-ps2pdf\", to call those commands with\n    //    appropriate arguments.\n    //\"commands\": \"pdflatex\",\n\n    // The name of the PDF file created by this command.  The\n    // substitution patterns may be used.\n    //\"outputname\": \"%b.pdf\"\n  },\n  // The \"project\" settings are used when compiling with the \"eval\"\n  // command, bound by default to \"Ctrl-Shift-Enter\".\n  \"project\": {\n    // The same settings as for \"file\".\n  }\n}\n\n// Pattern | Substiution value\n// --------|------------------\n//    %f   | name of file\n//    %p   | full path of file\n//    %d   | directory of file\n//    %b   | base name, without file extension\n//    %e   | file extension\n//    %%   | a percent sign\n";
lt.plugins.litex.__BEH__on_eval = (function __BEH__on_eval(editor){lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.object.raise.call(null,lt.plugins.litex.tex_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),"project",editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","on-eval","lt.plugins.litex/on-eval",1488919527),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.litex.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.object.raise.call(null,lt.plugins.litex.tex_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),"file",editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","on-eval.one","lt.plugins.litex/on-eval.one",1793048927),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.litex.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,which,editor){var temp__4092__auto__ = lt.plugins.litex.get_config_from_settings.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),which);if(cljs.core.truth_(temp__4092__auto__))
{var map__8197 = temp__4092__auto__;var map__8197__$1 = ((cljs.core.seq_QMARK_.call(null,map__8197))?cljs.core.apply.call(null,cljs.core.hash_map,map__8197):map__8197);var pdfname = cljs.core.get.call(null,map__8197__$1,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655));var texname = cljs.core.get.call(null,map__8197__$1,new cljs.core.Keyword(null,"texname","texname",3890856612));var cwd = cljs.core.get.call(null,map__8197__$1,new cljs.core.Keyword(null,"cwd","cwd",1014003170));var commands = cljs.core.get.call(null,map__8197__$1,new cljs.core.Keyword(null,"commands","commands",4706336250));lt.object.merge_BANG_.call(null,lt.plugins.litex.tex_lang,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-tex-file","last-tex-file",710788139),texname], null));
return lt.plugins.litex.run_commands_to_client.call(null,new cljs.core.Keyword(null,"editor.eval.tex","editor.eval.tex",1083030184),editor,commands,cwd,pdfname,false);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","eval!","lt.plugins.litex/eval!",4032952478),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.litex.__BEH__sync_forward = (function __BEH__sync_forward(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var filename = lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));var pdfname = cljs.core.some.call(null,((function (pos,filename){
return (function (p1__8198_SHARP_){var name = new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(p1__8198_SHARP_.call(null));if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,name)))
{return name;
} else
{return null;
}
});})(pos,filename))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (pos,filename){
return (function (){return cljs.core.deref.call(null,editor);
});})(pos,filename))
,((function (pos,filename){
return (function (){return lt.plugins.litex.get_config_from_settings.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),"file");
});})(pos,filename))
,((function (pos,filename){
return (function (){return lt.plugins.litex.get_config_from_settings.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),"project");
});})(pos,filename))
], null));if(cljs.core.truth_(pdfname))
{return lt.plugins.litex.run_commands_to_client.call(null,new cljs.core.Keyword(null,"litex.forward-sync","litex.forward-sync",2440308217),editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("synctex view -i \""),cljs.core.str((new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos) + 1)),cljs.core.str(":"),cljs.core.str((new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(pos) + 1)),cljs.core.str(":"),cljs.core.str(filename),cljs.core.str("\" -o \""),cljs.core.str(lt.objs.files.basename.call(null,pdfname)),cljs.core.str("\"")].join('')], null),lt.objs.files.parent.call(null,pdfname),pdfname,true);
} else
{return console.log("Don't know the name of the PDF file this compiles to.  (Try compiling.)");
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","sync-forward","lt.plugins.litex/sync-forward",3351270864),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__sync_forward,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-forward","sync-forward",2039658757),null], null), null));
lt.plugins.litex.__BEH__sync_backward = (function __BEH__sync_backward(this$,cwd,pdfname,pagenum,clickX,clickY){return lt.plugins.litex.run_commands.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("synctex edit -o \""),cljs.core.str(pagenum),cljs.core.str(":"),cljs.core.str(clickX),cljs.core.str(":"),cljs.core.str(clickY),cljs.core.str(":"),cljs.core.str(pdfname),cljs.core.str("\"")].join('')], null),cwd,(function (error,stdout,stderr){if(cljs.core.not.call(null,error))
{var loc = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lt.plugins.litex.kwpair,stdout.split("\n"))));var filename = ((function (loc){
return (function (p1__8199_SHARP_){if(cljs.core.truth_(lt.objs.files.absolute_QMARK_.call(null,p1__8199_SHARP_)))
{return p1__8199_SHARP_;
} else
{return lt.objs.files.join.call(null,cwd,p1__8199_SHARP_);
}
});})(loc))
.call(null,new cljs.core.Keyword(null,"Input","Input",1084709660).cljs$core$IFn$_invoke$arity$1(loc));var line = (new cljs.core.Keyword(null,"Line","Line",1016272774).cljs$core$IFn$_invoke$arity$1(loc) - 1);var column = (new cljs.core.Keyword(null,"Column","Column",3037901544).cljs$core$IFn$_invoke$arity$1(loc) - 1);lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename);
var temp__4090__auto__ = cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,filename));if(cljs.core.truth_(temp__4090__auto__))
{var edit = temp__4090__auto__;lt.objs.editor.move_cursor.call(null,edit,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),(function (){var x__7050__auto__ = column;var y__7051__auto__ = 0;return ((x__7050__auto__ > y__7051__auto__) ? x__7050__auto__ : y__7051__auto__);
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
lt.plugins.litex.__BEH__edit_settings = (function __BEH__edit_settings(editor,which){var cwd = lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));var settingsfn = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"local","local",1117049565),lt.plugins.litex.local_settings.call(null,cwd),new cljs.core.Keyword(null,"global","global",4065851157),lt.plugins.litex.global_settings.call(null)], null).call(null,which);if(cljs.core.not.call(null,lt.objs.files.exists_QMARK_.call(null,settingsfn)))
{lt.objs.files.save.call(null,settingsfn,lt.plugins.litex.SETTINGS_TEMPLATE);
} else
{}
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),settingsfn);
var temp__4090__auto__ = cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,settingsfn));if(cljs.core.truth_(temp__4090__auto__))
{var edit = temp__4090__auto__;return lt.objs.editor.set_mode.call(null,edit,"application/json");
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","edit-settings","lt.plugins.litex/edit-settings",2924511003),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__edit_settings,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edit-settings","edit-settings",2149838840),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","tex-lang","lt.plugins.litex/tex-lang",1255901069),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tex.lang","tex.lang",4241292999),null], null), null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex","eval!","lt.plugins.litex/eval!",4032952478),new cljs.core.Keyword("lt.plugins.litex","sync-backward","lt.plugins.litex/sync-backward",864848014)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sync-backward","sync-backward",4386186823),null,new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null),new cljs.core.Keyword(null,"last-tex-file","last-tex-file",710788139),null);
lt.plugins.litex.tex_lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.litex","tex-lang","lt.plugins.litex/tex-lang",1255901069));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"litex-forward-sync","litex-forward-sync",2733711224),new cljs.core.Keyword(null,"desc","desc",1016984067),"LiTeX: Forward sync from LaTeX to PDF",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"sync-forward","sync-forward",2039658757));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"litex-edit-global","litex-edit-global",3554962549),new cljs.core.Keyword(null,"desc","desc",1016984067),"LiTeX: Edit global LaTeX compilation settings",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"edit-settings","edit-settings",2149838840),new cljs.core.Keyword(null,"global","global",4065851157));
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"litex-edit-local","litex-edit-local",2901684605),new cljs.core.Keyword(null,"desc","desc",1016984067),"LiTeX: Edit local LaTeX compilation settings",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"edit-settings","edit-settings",2149838840),new cljs.core.Keyword(null,"local","local",1117049565));
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
lt.plugins.litex.viewer.utils = (function (){var obj8488 = {};return obj8488;
})();
lttools = lt.plugins.litex.viewer.utils;
lt.plugins.litex.viewer.add_util = (function add_util(nme,fn){return (lt.plugins.litex.viewer.utils[cljs.core.name.call(null,nme)] = fn);
});
lt.plugins.litex.viewer.zoom_in = (function zoom_in(this$){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-in"], null),"\u2295"], null));var seq__8495_8578 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588));
})], null)));var chunk__8496_8579 = null;var count__8497_8580 = 0;var i__8498_8581 = 0;while(true){
if((i__8498_8581 < count__8497_8580))
{var vec__8499_8582 = cljs.core._nth.call(null,chunk__8496_8579,i__8498_8581);var ev__8100__auto___8583 = cljs.core.nth.call(null,vec__8499_8582,0,null);var func__8101__auto___8584 = cljs.core.nth.call(null,vec__8499_8582,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8583,func__8101__auto___8584);
{
var G__8585 = seq__8495_8578;
var G__8586 = chunk__8496_8579;
var G__8587 = count__8497_8580;
var G__8588 = (i__8498_8581 + 1);
seq__8495_8578 = G__8585;
chunk__8496_8579 = G__8586;
count__8497_8580 = G__8587;
i__8498_8581 = G__8588;
continue;
}
} else
{var temp__4092__auto___8589 = cljs.core.seq.call(null,seq__8495_8578);if(temp__4092__auto___8589)
{var seq__8495_8590__$1 = temp__4092__auto___8589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8495_8590__$1))
{var c__7485__auto___8591 = cljs.core.chunk_first.call(null,seq__8495_8590__$1);{
var G__8592 = cljs.core.chunk_rest.call(null,seq__8495_8590__$1);
var G__8593 = c__7485__auto___8591;
var G__8594 = cljs.core.count.call(null,c__7485__auto___8591);
var G__8595 = 0;
seq__8495_8578 = G__8592;
chunk__8496_8579 = G__8593;
count__8497_8580 = G__8594;
i__8498_8581 = G__8595;
continue;
}
} else
{var vec__8500_8596 = cljs.core.first.call(null,seq__8495_8590__$1);var ev__8100__auto___8597 = cljs.core.nth.call(null,vec__8500_8596,0,null);var func__8101__auto___8598 = cljs.core.nth.call(null,vec__8500_8596,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8597,func__8101__auto___8598);
{
var G__8599 = cljs.core.next.call(null,seq__8495_8590__$1);
var G__8600 = null;
var G__8601 = 0;
var G__8602 = 0;
seq__8495_8578 = G__8599;
chunk__8496_8579 = G__8600;
count__8497_8580 = G__8601;
i__8498_8581 = G__8602;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.plugins.litex.viewer.zoom_out = (function zoom_out(this$){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-out"], null),"\u2296"], null));var seq__8507_8603 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271));
})], null)));var chunk__8508_8604 = null;var count__8509_8605 = 0;var i__8510_8606 = 0;while(true){
if((i__8510_8606 < count__8509_8605))
{var vec__8511_8607 = cljs.core._nth.call(null,chunk__8508_8604,i__8510_8606);var ev__8100__auto___8608 = cljs.core.nth.call(null,vec__8511_8607,0,null);var func__8101__auto___8609 = cljs.core.nth.call(null,vec__8511_8607,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8608,func__8101__auto___8609);
{
var G__8610 = seq__8507_8603;
var G__8611 = chunk__8508_8604;
var G__8612 = count__8509_8605;
var G__8613 = (i__8510_8606 + 1);
seq__8507_8603 = G__8610;
chunk__8508_8604 = G__8611;
count__8509_8605 = G__8612;
i__8510_8606 = G__8613;
continue;
}
} else
{var temp__4092__auto___8614 = cljs.core.seq.call(null,seq__8507_8603);if(temp__4092__auto___8614)
{var seq__8507_8615__$1 = temp__4092__auto___8614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8507_8615__$1))
{var c__7485__auto___8616 = cljs.core.chunk_first.call(null,seq__8507_8615__$1);{
var G__8617 = cljs.core.chunk_rest.call(null,seq__8507_8615__$1);
var G__8618 = c__7485__auto___8616;
var G__8619 = cljs.core.count.call(null,c__7485__auto___8616);
var G__8620 = 0;
seq__8507_8603 = G__8617;
chunk__8508_8604 = G__8618;
count__8509_8605 = G__8619;
i__8510_8606 = G__8620;
continue;
}
} else
{var vec__8512_8621 = cljs.core.first.call(null,seq__8507_8615__$1);var ev__8100__auto___8622 = cljs.core.nth.call(null,vec__8512_8621,0,null);var func__8101__auto___8623 = cljs.core.nth.call(null,vec__8512_8621,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8622,func__8101__auto___8623);
{
var G__8624 = cljs.core.next.call(null,seq__8507_8615__$1);
var G__8625 = null;
var G__8626 = 0;
var G__8627 = 0;
seq__8507_8603 = G__8624;
chunk__8508_8604 = G__8625;
count__8509_8605 = G__8626;
i__8510_8606 = G__8627;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.plugins.litex.viewer.show_log = (function show_log(this$){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"show-log"], null),"Show logs"], null));var seq__8519_8628 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"show-log!","show-log!",3359135135));
})], null)));var chunk__8520_8629 = null;var count__8521_8630 = 0;var i__8522_8631 = 0;while(true){
if((i__8522_8631 < count__8521_8630))
{var vec__8523_8632 = cljs.core._nth.call(null,chunk__8520_8629,i__8522_8631);var ev__8100__auto___8633 = cljs.core.nth.call(null,vec__8523_8632,0,null);var func__8101__auto___8634 = cljs.core.nth.call(null,vec__8523_8632,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8633,func__8101__auto___8634);
{
var G__8635 = seq__8519_8628;
var G__8636 = chunk__8520_8629;
var G__8637 = count__8521_8630;
var G__8638 = (i__8522_8631 + 1);
seq__8519_8628 = G__8635;
chunk__8520_8629 = G__8636;
count__8521_8630 = G__8637;
i__8522_8631 = G__8638;
continue;
}
} else
{var temp__4092__auto___8639 = cljs.core.seq.call(null,seq__8519_8628);if(temp__4092__auto___8639)
{var seq__8519_8640__$1 = temp__4092__auto___8639;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8519_8640__$1))
{var c__7485__auto___8641 = cljs.core.chunk_first.call(null,seq__8519_8640__$1);{
var G__8642 = cljs.core.chunk_rest.call(null,seq__8519_8640__$1);
var G__8643 = c__7485__auto___8641;
var G__8644 = cljs.core.count.call(null,c__7485__auto___8641);
var G__8645 = 0;
seq__8519_8628 = G__8642;
chunk__8520_8629 = G__8643;
count__8521_8630 = G__8644;
i__8522_8631 = G__8645;
continue;
}
} else
{var vec__8524_8646 = cljs.core.first.call(null,seq__8519_8640__$1);var ev__8100__auto___8647 = cljs.core.nth.call(null,vec__8524_8646,0,null);var func__8101__auto___8648 = cljs.core.nth.call(null,vec__8524_8646,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8647,func__8101__auto___8648);
{
var G__8649 = cljs.core.next.call(null,seq__8519_8640__$1);
var G__8650 = null;
var G__8651 = 0;
var G__8652 = 0;
seq__8519_8628 = G__8649;
chunk__8520_8629 = G__8650;
count__8521_8630 = G__8651;
i__8522_8631 = G__8652;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.plugins.litex.viewer.hide_log = (function hide_log(this$){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"hide-log"], null),"Hide logs"], null));var seq__8531_8653 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466));
})], null)));var chunk__8532_8654 = null;var count__8533_8655 = 0;var i__8534_8656 = 0;while(true){
if((i__8534_8656 < count__8533_8655))
{var vec__8535_8657 = cljs.core._nth.call(null,chunk__8532_8654,i__8534_8656);var ev__8100__auto___8658 = cljs.core.nth.call(null,vec__8535_8657,0,null);var func__8101__auto___8659 = cljs.core.nth.call(null,vec__8535_8657,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8658,func__8101__auto___8659);
{
var G__8660 = seq__8531_8653;
var G__8661 = chunk__8532_8654;
var G__8662 = count__8533_8655;
var G__8663 = (i__8534_8656 + 1);
seq__8531_8653 = G__8660;
chunk__8532_8654 = G__8661;
count__8533_8655 = G__8662;
i__8534_8656 = G__8663;
continue;
}
} else
{var temp__4092__auto___8664 = cljs.core.seq.call(null,seq__8531_8653);if(temp__4092__auto___8664)
{var seq__8531_8665__$1 = temp__4092__auto___8664;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8531_8665__$1))
{var c__7485__auto___8666 = cljs.core.chunk_first.call(null,seq__8531_8665__$1);{
var G__8667 = cljs.core.chunk_rest.call(null,seq__8531_8665__$1);
var G__8668 = c__7485__auto___8666;
var G__8669 = cljs.core.count.call(null,c__7485__auto___8666);
var G__8670 = 0;
seq__8531_8653 = G__8667;
chunk__8532_8654 = G__8668;
count__8533_8655 = G__8669;
i__8534_8656 = G__8670;
continue;
}
} else
{var vec__8536_8671 = cljs.core.first.call(null,seq__8531_8665__$1);var ev__8100__auto___8672 = cljs.core.nth.call(null,vec__8536_8671,0,null);var func__8101__auto___8673 = cljs.core.nth.call(null,vec__8536_8671,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8672,func__8101__auto___8673);
{
var G__8674 = cljs.core.next.call(null,seq__8531_8665__$1);
var G__8675 = null;
var G__8676 = 0;
var G__8677 = 0;
seq__8531_8653 = G__8674;
chunk__8532_8654 = G__8675;
count__8533_8655 = G__8676;
i__8534_8656 = G__8677;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.plugins.litex.viewer.pdfimg = (function pdfimg(viewer,src){var e__8099__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),src], null)], null));var seq__8543_8678 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (event){return lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"image-click!","image-click!",4167726013),event);
}),new cljs.core.Keyword(null,"load","load",1017231448),(function (evemt){return lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"image-load!","image-load!",2093865083),lt.plugins.litex.viewer.event);
})], null)));var chunk__8544_8679 = null;var count__8545_8680 = 0;var i__8546_8681 = 0;while(true){
if((i__8546_8681 < count__8545_8680))
{var vec__8547_8682 = cljs.core._nth.call(null,chunk__8544_8679,i__8546_8681);var ev__8100__auto___8683 = cljs.core.nth.call(null,vec__8547_8682,0,null);var func__8101__auto___8684 = cljs.core.nth.call(null,vec__8547_8682,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8683,func__8101__auto___8684);
{
var G__8685 = seq__8543_8678;
var G__8686 = chunk__8544_8679;
var G__8687 = count__8545_8680;
var G__8688 = (i__8546_8681 + 1);
seq__8543_8678 = G__8685;
chunk__8544_8679 = G__8686;
count__8545_8680 = G__8687;
i__8546_8681 = G__8688;
continue;
}
} else
{var temp__4092__auto___8689 = cljs.core.seq.call(null,seq__8543_8678);if(temp__4092__auto___8689)
{var seq__8543_8690__$1 = temp__4092__auto___8689;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8543_8690__$1))
{var c__7485__auto___8691 = cljs.core.chunk_first.call(null,seq__8543_8690__$1);{
var G__8692 = cljs.core.chunk_rest.call(null,seq__8543_8690__$1);
var G__8693 = c__7485__auto___8691;
var G__8694 = cljs.core.count.call(null,c__7485__auto___8691);
var G__8695 = 0;
seq__8543_8678 = G__8692;
chunk__8544_8679 = G__8693;
count__8545_8680 = G__8694;
i__8546_8681 = G__8695;
continue;
}
} else
{var vec__8548_8696 = cljs.core.first.call(null,seq__8543_8690__$1);var ev__8100__auto___8697 = cljs.core.nth.call(null,vec__8548_8696,0,null);var func__8101__auto___8698 = cljs.core.nth.call(null,vec__8548_8696,1,null);lt.util.dom.on.call(null,e__8099__auto__,ev__8100__auto___8697,func__8101__auto___8698);
{
var G__8699 = cljs.core.next.call(null,seq__8543_8690__$1);
var G__8700 = null;
var G__8701 = 0;
var G__8702 = 0;
seq__8543_8678 = G__8699;
chunk__8544_8679 = G__8700;
count__8545_8680 = G__8701;
i__8546_8681 = G__8702;
continue;
}
}
} else
{}
}
break;
}
return e__8099__auto__;
});
lt.plugins.litex.viewer.kwpairf = (function kwpairf(str){var vec__8550 = str.split(":");var k = cljs.core.nth.call(null,vec__8550,0,null);var v = cljs.core.nth.call(null,vec__8550,1,null);if(cljs.core.truth_(v))
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
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","browser","lt.plugins.litex.viewer/browser",2946031034),new cljs.core.Keyword(null,"name","name",1017277949),"browser",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",4492240260),null], null), null),new cljs.core.Keyword(null,"history","history",1940838406),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"history-pos","history-pos",1364759821),-1,new cljs.core.Keyword(null,"url","url",1014020321),"about:blank",new cljs.core.Keyword(null,"urlvalue","urlvalue",4359376084),"about:blank",new cljs.core.Keyword(null,"zoom","zoom",1017648965),1,new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939),1.25,new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),null,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),null,new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057),null,new cljs.core.Keyword(null,"rendering","rendering",2853558782),false,new cljs.core.Keyword(null,"loading-count","loading-count",4680473776),0,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex.viewer","destroy-on-close","lt.plugins.litex.viewer/destroy-on-close",4767354851),new cljs.core.Keyword("lt.plugins.litex.viewer","rem-client","lt.plugins.litex.viewer/rem-client",574186756),new cljs.core.Keyword("lt.plugins.litex.viewer","render-pdf","lt.plugins.litex.viewer/render-pdf",1840536781),new cljs.core.Keyword("lt.plugins.litex.viewer","render-done","lt.plugins.litex.viewer/render-done",4300380207),new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-in!","lt.plugins.litex.viewer/zoom-in!",2562456392),new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-out!","lt.plugins.litex.viewer/zoom-out!",1172268339),new cljs.core.Keyword("lt.plugins.litex.viewer","set-zoom!","lt.plugins.litex.viewer/set-zoom!",3334100069),new cljs.core.Keyword("lt.plugins.litex.viewer","show-log!","lt.plugins.litex.viewer/show-log!",837199571),new cljs.core.Keyword("lt.plugins.litex.viewer","hide-log!","lt.plugins.litex.viewer/hide-log!",2486896090),new cljs.core.Keyword("lt.plugins.litex.viewer","image-click!","lt.plugins.litex.viewer/image-click!",3767830813),new cljs.core.Keyword("lt.plugins.litex.viewer","image-load!","lt.plugins.litex.viewer/image-load!",1693983711),new cljs.core.Keyword("lt.plugins.litex.viewer","mouse-wheel!","lt.plugins.litex.viewer/mouse-wheel!",2516696884),new cljs.core.Keyword("lt.plugins.litex.viewer","init!","lt.plugins.litex.viewer/init!",2861886455),new cljs.core.Keyword("lt.plugins.litex.viewer","set-client-name","lt.plugins.litex.viewer/set-client-name",3207171848),new cljs.core.Keyword("lt.plugins.litex.viewer","set-active","lt.plugins.litex.viewer/set-active",1808486327),new cljs.core.Keyword("lt.plugins.litex.viewer","active-context","lt.plugins.litex.viewer/active-context",3628136570),new cljs.core.Keyword("lt.plugins.litex.viewer","focus-on-show","lt.plugins.litex.viewer/focus-on-show",2313578188),new cljs.core.Keyword("lt.plugins.litex.viewer","inactive-context","lt.plugins.litex.viewer/inactive-context",3143388979)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),lt.plugins.litex.viewer.connect_client.call(null,this$)], null));
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
var temp__4092__auto___8703 = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([this$], true),lt.object.by_tag.call(null,new cljs.core.Keyword(null,"browser","browser",1164844698))));if(cljs.core.truth_(temp__4092__auto___8703))
{var b_8704 = temp__4092__auto___8703;lt.objs.context.in_BANG_.call(null,new cljs.core.Keyword(null,"global.browser","global.browser",3786202959),b_8704);
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
var seq__8555_8705 = cljs.core.seq.call(null,lt.objs.files.ls.call(null,imgdir));var chunk__8556_8706 = null;var count__8557_8707 = 0;var i__8558_8708 = 0;while(true){
if((i__8558_8708 < count__8557_8707))
{var f_8709 = cljs.core._nth.call(null,chunk__8556_8706,i__8558_8708);lt.util.dom.before.call(null,sync_box,lt.plugins.litex.viewer.pdfimg.call(null,this$,[cljs.core.str("file://"),cljs.core.str(lt.objs.files.join.call(null,imgdir,f_8709))].join('')));
{
var G__8710 = seq__8555_8705;
var G__8711 = chunk__8556_8706;
var G__8712 = count__8557_8707;
var G__8713 = (i__8558_8708 + 1);
seq__8555_8705 = G__8710;
chunk__8556_8706 = G__8711;
count__8557_8707 = G__8712;
i__8558_8708 = G__8713;
continue;
}
} else
{var temp__4092__auto___8714 = cljs.core.seq.call(null,seq__8555_8705);if(temp__4092__auto___8714)
{var seq__8555_8715__$1 = temp__4092__auto___8714;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8555_8715__$1))
{var c__7485__auto___8716 = cljs.core.chunk_first.call(null,seq__8555_8715__$1);{
var G__8717 = cljs.core.chunk_rest.call(null,seq__8555_8715__$1);
var G__8718 = c__7485__auto___8716;
var G__8719 = cljs.core.count.call(null,c__7485__auto___8716);
var G__8720 = 0;
seq__8555_8705 = G__8717;
chunk__8556_8706 = G__8718;
count__8557_8707 = G__8719;
i__8558_8708 = G__8720;
continue;
}
} else
{var f_8721 = cljs.core.first.call(null,seq__8555_8715__$1);lt.util.dom.before.call(null,sync_box,lt.plugins.litex.viewer.pdfimg.call(null,this$,[cljs.core.str("file://"),cljs.core.str(lt.objs.files.join.call(null,imgdir,f_8721))].join('')));
{
var G__8722 = cljs.core.next.call(null,seq__8555_8715__$1);
var G__8723 = null;
var G__8724 = 0;
var G__8725 = 0;
seq__8555_8705 = G__8722;
chunk__8556_8706 = G__8723;
count__8557_8707 = G__8724;
i__8558_8708 = G__8725;
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
lt.plugins.litex.viewer.__BEH__set_zoom_BANG_ = (function __BEH__set_zoom_BANG_(this$,nzoom){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var vec__8565 = lt.plugins.litex.viewer.center_point.call(null,pdf_viewer);var x = cljs.core.nth.call(null,vec__8565,0,null);var y = cljs.core.nth.call(null,vec__8565,1,null);var new_zoom = (function (){var or__6743__auto__ = nzoom;if(cljs.core.truth_(or__6743__auto__))
{return or__6743__auto__;
} else
{return zoom;
}
})();lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
var seq__8566_8726 = cljs.core.seq.call(null,lt.util.dom.children.call(null,pdf_viewer));var chunk__8567_8727 = null;var count__8568_8728 = 0;var i__8569_8729 = 0;while(true){
if((i__8569_8729 < count__8568_8728))
{var elem_8730 = cljs.core._nth.call(null,chunk__8567_8727,i__8569_8729);lt.util.dom.css.call(null,elem_8730,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
{
var G__8731 = seq__8566_8726;
var G__8732 = chunk__8567_8727;
var G__8733 = count__8568_8728;
var G__8734 = (i__8569_8729 + 1);
seq__8566_8726 = G__8731;
chunk__8567_8727 = G__8732;
count__8568_8728 = G__8733;
i__8569_8729 = G__8734;
continue;
}
} else
{var temp__4092__auto___8735 = cljs.core.seq.call(null,seq__8566_8726);if(temp__4092__auto___8735)
{var seq__8566_8736__$1 = temp__4092__auto___8735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8566_8736__$1))
{var c__7485__auto___8737 = cljs.core.chunk_first.call(null,seq__8566_8736__$1);{
var G__8738 = cljs.core.chunk_rest.call(null,seq__8566_8736__$1);
var G__8739 = c__7485__auto___8737;
var G__8740 = cljs.core.count.call(null,c__7485__auto___8737);
var G__8741 = 0;
seq__8566_8726 = G__8738;
chunk__8567_8727 = G__8739;
count__8568_8728 = G__8740;
i__8569_8729 = G__8741;
continue;
}
} else
{var elem_8742 = cljs.core.first.call(null,seq__8566_8736__$1);lt.util.dom.css.call(null,elem_8742,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
{
var G__8743 = cljs.core.next.call(null,seq__8566_8736__$1);
var G__8744 = null;
var G__8745 = 0;
var G__8746 = 0;
seq__8566_8726 = G__8743;
chunk__8567_8727 = G__8744;
count__8568_8728 = G__8745;
i__8569_8729 = G__8746;
continue;
}
}
} else
{}
}
break;
}
return lt.plugins.litex.viewer.set_center_point.call(null,pdf_viewer,cljs.core.map.call(null,(function (p1__8559_SHARP_){return (p1__8559_SHARP_ * (new_zoom / zoom));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","set-zoom!","lt.plugins.litex.viewer/set-zoom!",3334100069),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__set_zoom_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),null], null), null));
lt.plugins.litex.viewer.center_point = (function center_point(elem){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(elem.scrollLeft + (elem.clientWidth / 2)),(elem.scrollTop + (elem.clientHeight / 2))], null);
});
lt.plugins.litex.viewer.set_center_point = (function set_center_point(elem,p__8570){var vec__8572 = p__8570;var x = cljs.core.nth.call(null,vec__8572,0,null);var y = cljs.core.nth.call(null,vec__8572,1,null);elem.scrollLeft = (x - (elem.clientWidth / 2));
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
lt.plugins.litex.viewer.__BEH__mouse_wheel_BANG_ = (function __BEH__mouse_wheel_BANG_(this$,event){if(cljs.core.truth_((function (){var and__6731__auto__ = event.altKey;if(cljs.core.truth_(and__6731__auto__))
{return (cljs.core.not.call(null,event.shiftKey)) && (cljs.core.not_EQ_.call(null,event.wheelDeltaY,0));
} else
{return and__6731__auto__;
}
})()))
{event.preventDefault();
return lt.object.raise.call(null,this$,(((event.wheelDeltaY < 0))?new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271):new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588)));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","mouse-wheel!","lt.plugins.litex.viewer/mouse-wheel!",2516696884),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__mouse_wheel_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-wheel!","mouse-wheel!",1809006016),null], null), null));
lt.plugins.litex.viewer.__BEH__init_BANG_ = (function __BEH__init_BANG_(this$){var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));return pdf_viewer.onmousewheel = (function (event){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"mouse-wheel!","mouse-wheel!",1809006016),event);
});
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
lt.plugins.litex.viewer.__BEH__forward_sync = (function __BEH__forward_sync(this$,msg){var viewer = new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var pdfname = new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.not_EQ_.call(null,pdfname,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viewer))))
{lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"set-pdf","set-pdf",2997736569),pdfname);
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"rendering","rendering",2853558782).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viewer))))
{return lt.object.merge_BANG_.call(null,viewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057),msg], null));
} else
{var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var sync_box = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#sync-box","div#sync-box",2601350845),lt.object.__GT_content.call(null,this$));var output_split = (function (){var and__6731__auto__ = new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__6731__auto__))
{return cljs.core.rest.call(null,new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(data).split("\nOutput"));
} else
{return and__6731__auto__;
}
})();var restore_top = new cljs.core.Keyword(null,"restore-top","restore-top",1342702856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viewer));var restore_left = new cljs.core.Keyword(null,"restore-left","restore-left",2616478552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viewer));lt.object.merge_BANG_.call(null,viewer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),null,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),null], null));
pdf_viewer.offsetHeight = pdf_viewer.offsetHeight;
if(cljs.core.truth_(output_split))
{var locs = cljs.core.map.call(null,(function (p1__8573_SHARP_){return lt.plugins.litex.viewer.pdf_to_elem.call(null,pdf_viewer,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lt.plugins.litex.viewer.kwpairf,p1__8573_SHARP_.split("\n")))));
}),output_split);var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var bbleft = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,new cljs.core.Keyword(null,"h","h",1013904346),locs));var bbtop = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (locs,zoom,bbleft){
return (function (p1__8574_SHARP_){return (new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(p1__8574_SHARP_) - new cljs.core.Keyword(null,"H","H",1013904314).cljs$core$IFn$_invoke$arity$1(p1__8574_SHARP_));
});})(locs,zoom,bbleft))
,locs));var bbright = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (locs,zoom,bbleft,bbtop){
return (function (p1__8575_SHARP_){return (new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(p1__8575_SHARP_) + new cljs.core.Keyword(null,"W","W",1013904329).cljs$core$IFn$_invoke$arity$1(p1__8575_SHARP_));
});})(locs,zoom,bbleft,bbtop))
,locs));var bbbottom = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),locs));var bbwidth = (bbright - bbleft);var bbheight = (bbbottom - bbtop);var vleft = (function (){var or__6743__auto__ = restore_left;if(cljs.core.truth_(or__6743__auto__))
{return or__6743__auto__;
} else
{return pdf_viewer.scrollLeft;
}
})();var vwidth = pdf_viewer.clientWidth;var vright = (vleft + vwidth);var vtop = (function (){var or__6743__auto__ = restore_top;if(cljs.core.truth_(or__6743__auto__))
{return or__6743__auto__;
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
lt.plugins.litex.viewer.pdf_to_elem = (function pdf_to_elem(elem,loc){var map__8577 = loc;var map__8577__$1 = ((cljs.core.seq_QMARK_.call(null,map__8577))?cljs.core.apply.call(null,cljs.core.hash_map,map__8577):map__8577);var Page = cljs.core.get.call(null,map__8577__$1,new cljs.core.Keyword(null,"Page","Page",1016384033));var H = cljs.core.get.call(null,map__8577__$1,new cljs.core.Keyword(null,"H","H",1013904314));var W = cljs.core.get.call(null,map__8577__$1,new cljs.core.Keyword(null,"W","W",1013904329));var v = cljs.core.get.call(null,map__8577__$1,new cljs.core.Keyword(null,"v","v",1013904360));var h = cljs.core.get.call(null,map__8577__$1,new cljs.core.Keyword(null,"h","h",1013904346));var img = cljs.core.nth.call(null,lt.util.dom.children.call(null,elem),(Page - 1));var scale = (150 / 72);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"h","h",1013904346),(((h * scale) + img.offsetLeft) + 2),new cljs.core.Keyword(null,"v","v",1013904360),(((v * scale) + img.offsetTop) + 2),new cljs.core.Keyword(null,"W","W",1013904329),(W * scale),new cljs.core.Keyword(null,"H","H",1013904314),(H * scale)], null);
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"add-litex-viewer-tab","add-litex-viewer-tab",1003999387),new cljs.core.Keyword(null,"desc","desc",1016984067),"LiTeX: Add PDF viewer for LaTeX document",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (filename){var b = lt.plugins.litex.viewer.add.call(null);lt.object.raise.call(null,b,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
if(cljs.core.truth_(filename))
{return lt.object.raise.call(null,b,new cljs.core.Keyword(null,"set-pdf","set-pdf",2997736569),filename,null);
} else
{return null;
}
})], null));
}

//# sourceMappingURL=litex_compiled.js.map