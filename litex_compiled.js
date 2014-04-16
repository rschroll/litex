if(!lt.util.load.provided_QMARK_('lt.plugins.litex')) {
goog.provide('lt.plugins.litex');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.proc');
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
lt.plugins.litex.exec = (function exec(command,cwd,encoding,exitfunc){return lt.plugins.litex._exec.call(null,command,(function (){var obj8876 = {"cwd":cwd,"encoding":encoding,"env":lt.objs.proc.merge_env.call(null,null),"maxBuffer":(1024 * 1024),"windowsVerbatimArguments":((cljs.core._EQ_.call(null,process.platform,"win32"))?true:null)};return obj8876;
})(),exitfunc);
});
lt.plugins.litex.kwpair = (function kwpair(str){var vec__8878 = str.split(":");var k = cljs.core.nth.call(null,vec__8878,0,null);var v = cljs.core.nth.call(null,vec__8878,1,null);if(cljs.core.truth_(v))
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
var run_commands__delegate = function (commands,cwd,exitfunc,p__8879){var map__8881 = p__8879;var map__8881__$1 = ((cljs.core.seq_QMARK_.call(null,map__8881))?cljs.core.apply.call(null,cljs.core.hash_map,map__8881):map__8881);var encoding = cljs.core.get.call(null,map__8881__$1,new cljs.core.Keyword(null,"encoding","encoding",2725126341),"utf8");var accout = cljs.core.get.call(null,map__8881__$1,new cljs.core.Keyword(null,"accout","accout",3885420191),"");if(cljs.core.empty_QMARK_.call(null,commands))
{return exitfunc.call(null,null,accout,"");
} else
{var command = cljs.core.first.call(null,commands);var commands__$1 = cljs.core.rest.call(null,commands);return lt.plugins.litex.exec.call(null,command,cwd,encoding,(function (error,stdout,stderr){var stdout__$1 = [cljs.core.str(accout),cljs.core.str(stdout)].join('');if(cljs.core.truth_(error))
{return exitfunc.call(null,error,stdout__$1,stderr);
} else
{return run_commands.call(null,commands__$1,cwd,exitfunc,new cljs.core.Keyword(null,"accout","accout",3885420191),stdout__$1,new cljs.core.Keyword(null,"encoding","encoding",2725126341),encoding);
}
}));
}
};
var run_commands = function (commands,cwd,exitfunc,var_args){
var p__8879 = null;if (arguments.length > 3) {
  p__8879 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return run_commands__delegate.call(this,commands,cwd,exitfunc,p__8879);};
run_commands.cljs$lang$maxFixedArity = 3;
run_commands.cljs$lang$applyTo = (function (arglist__8889){
var commands = cljs.core.first(arglist__8889);
arglist__8889 = cljs.core.next(arglist__8889);
var cwd = cljs.core.first(arglist__8889);
arglist__8889 = cljs.core.next(arglist__8889);
var exitfunc = cljs.core.first(arglist__8889);
var p__8879 = cljs.core.rest(arglist__8889);
return run_commands__delegate(commands,cwd,exitfunc,p__8879);
});
run_commands.cljs$core$IFn$_invoke$arity$variadic = run_commands__delegate;
return run_commands;
})()
;
lt.plugins.litex.get_config_from_settings = (function get_config_from_settings(path,which){var settings = lt.plugins.litex.get_settings.call(null,which,lt.objs.files.parent.call(null,path));var fullfilename = lt.plugins.litex.ensure_absolute.call(null,(function (){var or__6816__auto__ = cljs.core.get.call(null,settings,"filename");if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
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
{var filename = lt.objs.files.basename.call(null,fullfilename);var cwd = lt.objs.files.parent.call(null,fullfilename);var commands = settings.call(null,"commands");var commands__$1 = ((typeof commands === 'string')?(function (){var or__6816__auto__ = lt.plugins.litex.COMMANDS.call(null,commands);if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{throw [cljs.core.str("Unknown command: \""),cljs.core.str(commands),cljs.core.str("\".  "),cljs.core.str("Remember, a custom command should be a list of strings.")].join('');
}
})():commands);var pathmap = ((function (filename,cwd,commands,commands__$1){
return (function (s){return clojure.string.replace.call(null,s,/%[fpbde%]/,((function (filename,cwd,commands,commands__$1){
return (function (p1__8882_SHARP_){return cljs.core.keyword.call(null,p1__8882_SHARP_).call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"%f","%f",1013905491),filename,new cljs.core.Keyword(null,"%p","%p",1013905501),fullfilename,new cljs.core.Keyword(null,"%b","%b",1013905487),lt.objs.files.without_ext.call(null,filename),new cljs.core.Keyword(null,"%d","%d",1013905489),cwd,new cljs.core.Keyword(null,"%e","%e",1013905490),lt.objs.files.ext.call(null,filename),new cljs.core.Keyword(null,"%%","%%",1013905426),"%"], null));
});})(filename,cwd,commands,commands__$1))
);
});})(filename,cwd,commands,commands__$1))
;var pdfname = lt.plugins.litex.ensure_absolute.call(null,pathmap.call(null,settings.call(null,"outputname")),cwd);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"commands","commands",4706336250),cljs.core.map.call(null,pathmap,commands__$1),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"texname","texname",3890856612),fullfilename,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),pdfname], null);
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
}catch (e8884){if((e8884 instanceof Error))
{var e = e8884;return console.log([cljs.core.str("Error parsing "),cljs.core.str(path),cljs.core.str(":\n  "),cljs.core.str(e),cljs.core.str("\nIgnoring this file.")].join(''));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8884;
} else
{return null;
}
}
}} else
{return null;
}
});
lt.plugins.litex.global_settings = (function global_settings(){return lt.objs.files.join.call(null,lt.objs.files.parent.call(null,lt.objs.files.data_path),"litexrc");
});
lt.plugins.litex.local_settings = (function local_settings(cwd){return lt.objs.files.join.call(null,cwd,".litexrc");
});
lt.plugins.litex.get_settings = (function get_settings(which,cwd){return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__8885_SHARP_){return cljs.core.get.call(null,p1__8885_SHARP_,which);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lt.plugins.litex.DEFAULT_SETTINGS,lt.plugins.litex.load_settings.call(null,lt.plugins.litex.global_settings.call(null)),lt.plugins.litex.load_settings.call(null,lt.plugins.litex.local_settings.call(null,cwd))], null)));
});
lt.plugins.litex.DEFAULT_SETTINGS = new cljs.core.PersistentArrayMap(null, 2, ["file",new cljs.core.PersistentArrayMap(null, 3, ["filename",null,"commands","pdflatex","outputname","%b.pdf"], null),"project",new cljs.core.PersistentArrayMap(null, 3, ["filename",null,"commands","pdflatex","outputname","%b.pdf"], null)], null);
lt.plugins.litex.COMMANDS = new cljs.core.PersistentArrayMap(null, 3, ["pdflatex",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pdflatex -interaction=nonstopmode -halt-on-error -file-line-error --synctex=1 \"%f\""], null),"latex-dvipdf",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["latex -interaction=nonstopmode -halt-on-error -file-line-error --synctex=1 \"%f\"","dvipdf \"%b\""], null),"latex-dvips-ps2pdf",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["latex -interaction=nonstopmode -halt-on-error -file-line-error --synctex=1 \"%f\"","dvips \"%b\"","ps2pdf \"%b.ps\""], null)], null);
lt.plugins.litex.SETTINGS_TEMPLATE = "// This document is in JSON format.  Note that there must be a comma\n// between every pair of attributes, but not following the last one.\n//\n// Note that the only comments recongnized by the parser are those\n// with a double slash preceded only by whitespace.\n{\n  // The \"file\" settings are used when compiling with the \"eval.one\"\n  // command, bound by default to \"Ctrl-Enter\".\n  \"file\": {\n    // The filename to use in the compilation.  The default, null, means\n    // to use the name of the file being edited (if a TeX file) or the\n    // last TeX file to be compiled.\n    //\"filename\": null,\n\n    // The commands to run.  Either\n    //  - a list of strings, each one a command to be run.  The\n    //    substitution patterns below will be replaced with values\n    //    derived from filename.\n    //  - one of \"pdflatex\" (the default), \"latex-dvipdf\", or\n    //    \"latex-dvips-ps2pdf\", to call those commands with\n    //    appropriate arguments.\n    //\"commands\": \"pdflatex\",\n\n    // The name of the PDF file created by this command.  The\n    // substitution patterns may be used.\n    //\"outputname\": \"%b.pdf\"\n  },\n  // The \"project\" settings are used when compiling with the \"eval\"\n  // command, bound by default to \"Ctrl-Shift-Enter\".\n  \"project\": {\n    // The same settings as for \"file\".\n  }\n}\n\n// Pattern | Substitution value\n// --------|-------------------\n//    %f   | name of file\n//    %p   | full path of file\n//    %d   | directory of file\n//    %b   | base name, without file extension\n//    %e   | file extension\n//    %%   | a percent sign\n";
lt.plugins.litex.__BEH__on_eval = (function __BEH__on_eval(editor){lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.object.raise.call(null,lt.plugins.litex.tex_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),"project",editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","on-eval","lt.plugins.litex/on-eval",1488919527),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.litex.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"save","save",1017427183));
return lt.object.raise.call(null,lt.plugins.litex.tex_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),"file",editor);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","on-eval.one","lt.plugins.litex/on-eval.one",1793048927),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.litex.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,which,editor){var temp__4092__auto__ = lt.plugins.litex.get_config_from_settings.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))),which);if(cljs.core.truth_(temp__4092__auto__))
{var map__8887 = temp__4092__auto__;var map__8887__$1 = ((cljs.core.seq_QMARK_.call(null,map__8887))?cljs.core.apply.call(null,cljs.core.hash_map,map__8887):map__8887);var pdfname = cljs.core.get.call(null,map__8887__$1,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655));var texname = cljs.core.get.call(null,map__8887__$1,new cljs.core.Keyword(null,"texname","texname",3890856612));var cwd = cljs.core.get.call(null,map__8887__$1,new cljs.core.Keyword(null,"cwd","cwd",1014003170));var commands = cljs.core.get.call(null,map__8887__$1,new cljs.core.Keyword(null,"commands","commands",4706336250));lt.object.merge_BANG_.call(null,lt.plugins.litex.tex_lang,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-tex-file","last-tex-file",710788139),texname], null));
return lt.plugins.litex.run_commands_to_client.call(null,new cljs.core.Keyword(null,"editor.eval.tex","editor.eval.tex",1083030184),editor,commands,cwd,pdfname,false);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","eval!","lt.plugins.litex/eval!",4032952478),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.litex.__BEH__sync_forward = (function __BEH__sync_forward(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var filename = lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));var pdfname = cljs.core.some.call(null,((function (pos,filename){
return (function (p1__8888_SHARP_){var name = new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(p1__8888_SHARP_.call(null));if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,name)))
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
{var loc = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lt.plugins.litex.kwpair,stdout.split("\n"))));var filename = lt.objs.files.resolve.call(null,cwd,new cljs.core.Keyword(null,"Input","Input",1084709660).cljs$core$IFn$_invoke$arity$1(loc));var line = (new cljs.core.Keyword(null,"Line","Line",1016272774).cljs$core$IFn$_invoke$arity$1(loc) - 1);var column = (new cljs.core.Keyword(null,"Column","Column",3037901544).cljs$core$IFn$_invoke$arity$1(loc) - 1);lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),filename);
var temp__4090__auto__ = cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,filename));if(cljs.core.truth_(temp__4090__auto__))
{var edit = temp__4090__auto__;lt.objs.editor.move_cursor.call(null,edit,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),(function (){var x__7123__auto__ = column;var y__7124__auto__ = 0;return ((x__7123__auto__ > y__7124__auto__) ? x__7123__auto__ : y__7124__auto__);
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
goog.require('lt.objs.files');
goog.require('lt.util.dom');
goog.require('lt.objs.platform');
goog.require('lt.objs.tabs');
goog.require('lt.util.dom');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.clients');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.litex.viewer.utils = (function (){var obj8614 = {};return obj8614;
})();
lttools = lt.plugins.litex.viewer.utils;
lt.plugins.litex.viewer.add_util = (function add_util(nme,fn){return (lt.plugins.litex.viewer.utils[cljs.core.name.call(null,nme)] = fn);
});
lt.plugins.litex.viewer.zoom_in = (function zoom_in(this$){var e__8186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-in"], null),"\u2295"], null));var seq__8621_8706 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588));
})], null)));var chunk__8622_8707 = null;var count__8623_8708 = 0;var i__8624_8709 = 0;while(true){
if((i__8624_8709 < count__8623_8708))
{var vec__8625_8710 = cljs.core._nth.call(null,chunk__8622_8707,i__8624_8709);var ev__8187__auto___8711 = cljs.core.nth.call(null,vec__8625_8710,0,null);var func__8188__auto___8712 = cljs.core.nth.call(null,vec__8625_8710,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8711,func__8188__auto___8712);
{
var G__8713 = seq__8621_8706;
var G__8714 = chunk__8622_8707;
var G__8715 = count__8623_8708;
var G__8716 = (i__8624_8709 + 1);
seq__8621_8706 = G__8713;
chunk__8622_8707 = G__8714;
count__8623_8708 = G__8715;
i__8624_8709 = G__8716;
continue;
}
} else
{var temp__4092__auto___8717 = cljs.core.seq.call(null,seq__8621_8706);if(temp__4092__auto___8717)
{var seq__8621_8718__$1 = temp__4092__auto___8717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8621_8718__$1))
{var c__7564__auto___8719 = cljs.core.chunk_first.call(null,seq__8621_8718__$1);{
var G__8720 = cljs.core.chunk_rest.call(null,seq__8621_8718__$1);
var G__8721 = c__7564__auto___8719;
var G__8722 = cljs.core.count.call(null,c__7564__auto___8719);
var G__8723 = 0;
seq__8621_8706 = G__8720;
chunk__8622_8707 = G__8721;
count__8623_8708 = G__8722;
i__8624_8709 = G__8723;
continue;
}
} else
{var vec__8626_8724 = cljs.core.first.call(null,seq__8621_8718__$1);var ev__8187__auto___8725 = cljs.core.nth.call(null,vec__8626_8724,0,null);var func__8188__auto___8726 = cljs.core.nth.call(null,vec__8626_8724,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8725,func__8188__auto___8726);
{
var G__8727 = cljs.core.next.call(null,seq__8621_8718__$1);
var G__8728 = null;
var G__8729 = 0;
var G__8730 = 0;
seq__8621_8706 = G__8727;
chunk__8622_8707 = G__8728;
count__8623_8708 = G__8729;
i__8624_8709 = G__8730;
continue;
}
}
} else
{}
}
break;
}
return e__8186__auto__;
});
lt.plugins.litex.viewer.zoom_out = (function zoom_out(this$){var e__8186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-out"], null),"\u2296"], null));var seq__8633_8731 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271));
})], null)));var chunk__8634_8732 = null;var count__8635_8733 = 0;var i__8636_8734 = 0;while(true){
if((i__8636_8734 < count__8635_8733))
{var vec__8637_8735 = cljs.core._nth.call(null,chunk__8634_8732,i__8636_8734);var ev__8187__auto___8736 = cljs.core.nth.call(null,vec__8637_8735,0,null);var func__8188__auto___8737 = cljs.core.nth.call(null,vec__8637_8735,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8736,func__8188__auto___8737);
{
var G__8738 = seq__8633_8731;
var G__8739 = chunk__8634_8732;
var G__8740 = count__8635_8733;
var G__8741 = (i__8636_8734 + 1);
seq__8633_8731 = G__8738;
chunk__8634_8732 = G__8739;
count__8635_8733 = G__8740;
i__8636_8734 = G__8741;
continue;
}
} else
{var temp__4092__auto___8742 = cljs.core.seq.call(null,seq__8633_8731);if(temp__4092__auto___8742)
{var seq__8633_8743__$1 = temp__4092__auto___8742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8633_8743__$1))
{var c__7564__auto___8744 = cljs.core.chunk_first.call(null,seq__8633_8743__$1);{
var G__8745 = cljs.core.chunk_rest.call(null,seq__8633_8743__$1);
var G__8746 = c__7564__auto___8744;
var G__8747 = cljs.core.count.call(null,c__7564__auto___8744);
var G__8748 = 0;
seq__8633_8731 = G__8745;
chunk__8634_8732 = G__8746;
count__8635_8733 = G__8747;
i__8636_8734 = G__8748;
continue;
}
} else
{var vec__8638_8749 = cljs.core.first.call(null,seq__8633_8743__$1);var ev__8187__auto___8750 = cljs.core.nth.call(null,vec__8638_8749,0,null);var func__8188__auto___8751 = cljs.core.nth.call(null,vec__8638_8749,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8750,func__8188__auto___8751);
{
var G__8752 = cljs.core.next.call(null,seq__8633_8743__$1);
var G__8753 = null;
var G__8754 = 0;
var G__8755 = 0;
seq__8633_8731 = G__8752;
chunk__8634_8732 = G__8753;
count__8635_8733 = G__8754;
i__8636_8734 = G__8755;
continue;
}
}
} else
{}
}
break;
}
return e__8186__auto__;
});
lt.plugins.litex.viewer.show_log = (function show_log(this$){var e__8186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"show-log"], null),"Show logs"], null));var seq__8645_8756 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"show-log!","show-log!",3359135135));
})], null)));var chunk__8646_8757 = null;var count__8647_8758 = 0;var i__8648_8759 = 0;while(true){
if((i__8648_8759 < count__8647_8758))
{var vec__8649_8760 = cljs.core._nth.call(null,chunk__8646_8757,i__8648_8759);var ev__8187__auto___8761 = cljs.core.nth.call(null,vec__8649_8760,0,null);var func__8188__auto___8762 = cljs.core.nth.call(null,vec__8649_8760,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8761,func__8188__auto___8762);
{
var G__8763 = seq__8645_8756;
var G__8764 = chunk__8646_8757;
var G__8765 = count__8647_8758;
var G__8766 = (i__8648_8759 + 1);
seq__8645_8756 = G__8763;
chunk__8646_8757 = G__8764;
count__8647_8758 = G__8765;
i__8648_8759 = G__8766;
continue;
}
} else
{var temp__4092__auto___8767 = cljs.core.seq.call(null,seq__8645_8756);if(temp__4092__auto___8767)
{var seq__8645_8768__$1 = temp__4092__auto___8767;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8645_8768__$1))
{var c__7564__auto___8769 = cljs.core.chunk_first.call(null,seq__8645_8768__$1);{
var G__8770 = cljs.core.chunk_rest.call(null,seq__8645_8768__$1);
var G__8771 = c__7564__auto___8769;
var G__8772 = cljs.core.count.call(null,c__7564__auto___8769);
var G__8773 = 0;
seq__8645_8756 = G__8770;
chunk__8646_8757 = G__8771;
count__8647_8758 = G__8772;
i__8648_8759 = G__8773;
continue;
}
} else
{var vec__8650_8774 = cljs.core.first.call(null,seq__8645_8768__$1);var ev__8187__auto___8775 = cljs.core.nth.call(null,vec__8650_8774,0,null);var func__8188__auto___8776 = cljs.core.nth.call(null,vec__8650_8774,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8775,func__8188__auto___8776);
{
var G__8777 = cljs.core.next.call(null,seq__8645_8768__$1);
var G__8778 = null;
var G__8779 = 0;
var G__8780 = 0;
seq__8645_8756 = G__8777;
chunk__8646_8757 = G__8778;
count__8647_8758 = G__8779;
i__8648_8759 = G__8780;
continue;
}
}
} else
{}
}
break;
}
return e__8186__auto__;
});
lt.plugins.litex.viewer.hide_log = (function hide_log(this$){var e__8186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"hide-log"], null),"Hide logs"], null));var seq__8657_8781 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466));
})], null)));var chunk__8658_8782 = null;var count__8659_8783 = 0;var i__8660_8784 = 0;while(true){
if((i__8660_8784 < count__8659_8783))
{var vec__8661_8785 = cljs.core._nth.call(null,chunk__8658_8782,i__8660_8784);var ev__8187__auto___8786 = cljs.core.nth.call(null,vec__8661_8785,0,null);var func__8188__auto___8787 = cljs.core.nth.call(null,vec__8661_8785,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8786,func__8188__auto___8787);
{
var G__8788 = seq__8657_8781;
var G__8789 = chunk__8658_8782;
var G__8790 = count__8659_8783;
var G__8791 = (i__8660_8784 + 1);
seq__8657_8781 = G__8788;
chunk__8658_8782 = G__8789;
count__8659_8783 = G__8790;
i__8660_8784 = G__8791;
continue;
}
} else
{var temp__4092__auto___8792 = cljs.core.seq.call(null,seq__8657_8781);if(temp__4092__auto___8792)
{var seq__8657_8793__$1 = temp__4092__auto___8792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8657_8793__$1))
{var c__7564__auto___8794 = cljs.core.chunk_first.call(null,seq__8657_8793__$1);{
var G__8795 = cljs.core.chunk_rest.call(null,seq__8657_8793__$1);
var G__8796 = c__7564__auto___8794;
var G__8797 = cljs.core.count.call(null,c__7564__auto___8794);
var G__8798 = 0;
seq__8657_8781 = G__8795;
chunk__8658_8782 = G__8796;
count__8659_8783 = G__8797;
i__8660_8784 = G__8798;
continue;
}
} else
{var vec__8662_8799 = cljs.core.first.call(null,seq__8657_8793__$1);var ev__8187__auto___8800 = cljs.core.nth.call(null,vec__8662_8799,0,null);var func__8188__auto___8801 = cljs.core.nth.call(null,vec__8662_8799,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8800,func__8188__auto___8801);
{
var G__8802 = cljs.core.next.call(null,seq__8657_8793__$1);
var G__8803 = null;
var G__8804 = 0;
var G__8805 = 0;
seq__8657_8781 = G__8802;
chunk__8658_8782 = G__8803;
count__8659_8783 = G__8804;
i__8660_8784 = G__8805;
continue;
}
}
} else
{}
}
break;
}
return e__8186__auto__;
});
lt.plugins.litex.viewer.pdfimg = (function pdfimg(page,viewer){var e__8186__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),page], null)], null));var seq__8669_8806 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),(function (event){return lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"image-click!","image-click!",4167726013),event);
})], null)));var chunk__8670_8807 = null;var count__8671_8808 = 0;var i__8672_8809 = 0;while(true){
if((i__8672_8809 < count__8671_8808))
{var vec__8673_8810 = cljs.core._nth.call(null,chunk__8670_8807,i__8672_8809);var ev__8187__auto___8811 = cljs.core.nth.call(null,vec__8673_8810,0,null);var func__8188__auto___8812 = cljs.core.nth.call(null,vec__8673_8810,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8811,func__8188__auto___8812);
{
var G__8813 = seq__8669_8806;
var G__8814 = chunk__8670_8807;
var G__8815 = count__8671_8808;
var G__8816 = (i__8672_8809 + 1);
seq__8669_8806 = G__8813;
chunk__8670_8807 = G__8814;
count__8671_8808 = G__8815;
i__8672_8809 = G__8816;
continue;
}
} else
{var temp__4092__auto___8817 = cljs.core.seq.call(null,seq__8669_8806);if(temp__4092__auto___8817)
{var seq__8669_8818__$1 = temp__4092__auto___8817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8669_8818__$1))
{var c__7564__auto___8819 = cljs.core.chunk_first.call(null,seq__8669_8818__$1);{
var G__8820 = cljs.core.chunk_rest.call(null,seq__8669_8818__$1);
var G__8821 = c__7564__auto___8819;
var G__8822 = cljs.core.count.call(null,c__7564__auto___8819);
var G__8823 = 0;
seq__8669_8806 = G__8820;
chunk__8670_8807 = G__8821;
count__8671_8808 = G__8822;
i__8672_8809 = G__8823;
continue;
}
} else
{var vec__8674_8824 = cljs.core.first.call(null,seq__8669_8818__$1);var ev__8187__auto___8825 = cljs.core.nth.call(null,vec__8674_8824,0,null);var func__8188__auto___8826 = cljs.core.nth.call(null,vec__8674_8824,1,null);lt.util.dom.on.call(null,e__8186__auto__,ev__8187__auto___8825,func__8188__auto___8826);
{
var G__8827 = cljs.core.next.call(null,seq__8669_8818__$1);
var G__8828 = null;
var G__8829 = 0;
var G__8830 = 0;
seq__8669_8806 = G__8827;
chunk__8670_8807 = G__8828;
count__8671_8808 = G__8829;
i__8672_8809 = G__8830;
continue;
}
}
} else
{}
}
break;
}
return e__8186__auto__;
});
lt.plugins.litex.viewer.make_page = (function make_page(str,viewer){var re = (new RegExp("^Page *(\\d*) size: ([\\d\\.]*) x ([\\d\\.]*)"));var match = re.exec(str);if(cljs.core.truth_(match))
{var page = parseInt((match[1]));var width = parseFloat((match[2]));var height = parseFloat((match[3]));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",1017337345),page,new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"height","height",4087841945),height,new cljs.core.Keyword(null,"img","img",1014008629),lt.plugins.litex.viewer.pdfimg.call(null,page,viewer),new cljs.core.Keyword(null,"zoom","zoom",1017648965),0], null)], null);
} else
{return null;
}
});
lt.plugins.litex.viewer.kwpairf = (function kwpairf(str){var vec__8676 = str.split(":");var k = cljs.core.nth.call(null,vec__8676,0,null);var v = cljs.core.nth.call(null,vec__8676,1,null);if(cljs.core.truth_(v))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),parseFloat(v)], null);
} else
{return null;
}
});
lt.plugins.litex.viewer.connect_client = (function connect_client(this$){return lt.objs.clients.handle_connection_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1017277949),"PDF Viewer",new cljs.core.Keyword(null,"frame","frame",1111596255),this$,new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"litex.client","litex.client",2675161121)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex.viewer","tex-eval","lt.plugins.litex.viewer/tex-eval",3832158056),new cljs.core.Keyword("lt.plugins.litex.viewer","forward-sync","lt.plugins.litex.viewer/forward-sync",3501952325),new cljs.core.Keyword("lt.plugins.litex.viewer","handle-send!","lt.plugins.litex.viewer/handle-send!",1448649814),new cljs.core.Keyword("lt.plugins.litex.viewer","handle-close!","lt.plugins.litex.viewer/handle-close!",3739019540)], null),new cljs.core.Keyword(null,"commands","commands",4706336250),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"editor.eval.tex","editor.eval.tex",1083030184),null,new cljs.core.Keyword(null,"litex.forward-sync","litex.forward-sync",2440308217),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),"LiTeX PDF Viewer"], null));
});
lt.plugins.litex.viewer.new_tabset = (function new_tabset(){var ts = lt.objs.tabs.spawn_tabset.call(null);lt.objs.tabs.equalize_tabset_widths.call(null);
return ts;
});
lt.plugins.litex.viewer.add = (function add(){var viewer = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","viewer","lt.plugins.litex.viewer/viewer",4117559032));var tabset = lt.objs.tabs.in_tab_QMARK_.call(null,lt.objs.editor.pool.last_active.call(null));var viewerts = (function (){var or__6816__auto__ = lt.objs.tabs.next_tabset.call(null,tabset);if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{var or__6816__auto____$1 = lt.objs.tabs.prev_tabset.call(null,tabset);if(cljs.core.truth_(or__6816__auto____$1))
{return or__6816__auto____$1;
} else
{return lt.plugins.litex.viewer.new_tabset.call(null);
}
}
})();lt.objs.tabs.add_BANG_.call(null,viewer,viewerts);
lt.objs.tabs.active_BANG_.call(null,viewer);
return viewer;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","viewer","lt.plugins.litex.viewer/viewer",4117559032),new cljs.core.Keyword(null,"name","name",1017277949),"PDF Viewer",new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewer","viewer",4492240260),null], null), null),new cljs.core.Keyword(null,"zoom","zoom",1017648965),1,new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939),1.25,new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),null,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),null,new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057),null,new cljs.core.Keyword(null,"laying-out","laying-out",4406897713),false,new cljs.core.Keyword(null,"rendering","rendering",2853558782),false,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.litex.viewer","destroy-on-close","lt.plugins.litex.viewer/destroy-on-close",4767354851),new cljs.core.Keyword("lt.plugins.litex.viewer","rem-client","lt.plugins.litex.viewer/rem-client",574186756),new cljs.core.Keyword("lt.plugins.litex.viewer","layout-pdf","lt.plugins.litex.viewer/layout-pdf",3093606065),new cljs.core.Keyword("lt.plugins.litex.viewer","layout-done","lt.plugins.litex.viewer/layout-done",1530426651),new cljs.core.Keyword("lt.plugins.litex.viewer","render-pages","lt.plugins.litex.viewer/render-pages",3510169011),new cljs.core.Keyword("lt.plugins.litex.viewer","render-page","lt.plugins.litex.viewer/render-page",4300495100),new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-in!","lt.plugins.litex.viewer/zoom-in!",2562456392),new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-out!","lt.plugins.litex.viewer/zoom-out!",1172268339),new cljs.core.Keyword("lt.plugins.litex.viewer","set-zoom!","lt.plugins.litex.viewer/set-zoom!",3334100069),new cljs.core.Keyword("lt.plugins.litex.viewer","show-log!","lt.plugins.litex.viewer/show-log!",837199571),new cljs.core.Keyword("lt.plugins.litex.viewer","hide-log!","lt.plugins.litex.viewer/hide-log!",2486896090),new cljs.core.Keyword("lt.plugins.litex.viewer","image-click!","lt.plugins.litex.viewer/image-click!",3767830813),new cljs.core.Keyword("lt.plugins.litex.viewer","mouse-wheel!","lt.plugins.litex.viewer/mouse-wheel!",2516696884),new cljs.core.Keyword("lt.plugins.litex.viewer","init!","lt.plugins.litex.viewer/init!",2861886455),new cljs.core.Keyword("lt.plugins.litex.viewer","set-client-name","lt.plugins.litex.viewer/set-client-name",3207171848),new cljs.core.Keyword("lt.plugins.litex.viewer","focus-on-show","lt.plugins.litex.viewer/focus-on-show",2313578188)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client","client",3951159101),lt.plugins.litex.viewer.connect_client.call(null,this$)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#litex-viewer.cm-s-default.hide-log","div#litex-viewer.cm-s-default.hide-log",2295371982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pdf-viewer-container","div#pdf-viewer-container",4332961317),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#sync-box.animate","div#sync-box.animate",4450762416)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",1014013077),lt.plugins.litex.viewer.zoom_in.call(null,this$),lt.plugins.litex.viewer.zoom_out.call(null,this$),lt.plugins.litex.viewer.show_log.call(null,this$),lt.plugins.litex.viewer.hide_log.call(null,this$)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre#log-viewer","pre#log-viewer",3895935501)], null)], null);
}));
lt.plugins.litex.viewer.__BEH__destroy_on_close = (function __BEH__destroy_on_close(this$){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"inactive","inactive",1038569437));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","destroy-on-close","lt.plugins.litex.viewer/destroy-on-close",4767354851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__destroy_on_close,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.litex.viewer.__BEH__rem_client = (function __BEH__rem_client(this$){return lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","rem-client","lt.plugins.litex.viewer/rem-client",574186756),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__rem_client,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"destroy","destroy",2571277164),null], null), null));
lt.plugins.litex.viewer.__BEH__layout_pdf = (function __BEH__layout_pdf(this$,path){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"laying-out","laying-out",4406897713),true], null));
var randstr = cljs.core.rand_int.call(null,1679616).toString(36);var filename = lt.objs.files.basename.call(null,path);var basename = lt.objs.files.without_ext.call(null,filename);var dirname = lt.objs.files.parent.call(null,path);lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-name","set-name",2383102088),filename);
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),path], null));
return lt.plugins.litex.run_commands.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("pdfinfo -l -1 \""),cljs.core.str(basename),cljs.core.str(".pdf\"")].join('')], null),dirname,(function (error,stdout,stderr){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"structure-done","structure-done",2666298126),error,stdout,stderr);
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","layout-pdf","lt.plugins.litex.viewer/layout-pdf",3093606065),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__layout_pdf,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-pdf","set-pdf",2997736569),null], null), null));
lt.plugins.litex.viewer.__BEH__layout_done = (function __BEH__layout_done(this$,error,stdout,stderr){if(cljs.core.truth_(error))
{throw [cljs.core.str("pdfinfo error: "),cljs.core.str(stderr)].join('');
} else
{}
var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var sync_box = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#sync-box","div#sync-box",2601350845),lt.object.__GT_content.call(null,this$));var scroll_top = pdf_viewer.scrollTop;var scroll_left = pdf_viewer.scrollLeft;var pages = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (pdf_viewer,sync_box,scroll_top,scroll_left){
return (function (p1__8677_SHARP_){return lt.plugins.litex.viewer.make_page.call(null,p1__8677_SHARP_,this$);
});})(pdf_viewer,sync_box,scroll_top,scroll_left))
,stdout.split("\n"))));while(true){
if(!(cljs.core._EQ_.call(null,sync_box,cljs.core.first.call(null,lt.util.dom.children.call(null,pdf_viewer)))))
{lt.util.dom.remove.call(null,cljs.core.first.call(null,lt.util.dom.children.call(null,pdf_viewer)));
{
continue;
}
} else
{}
break;
}
var seq__8682_8831 = cljs.core.seq.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,pages)));var chunk__8683_8832 = null;var count__8684_8833 = 0;var i__8685_8834 = 0;while(true){
if((i__8685_8834 < count__8684_8833))
{var n_8835 = cljs.core._nth.call(null,chunk__8683_8832,i__8685_8834);lt.util.dom.before.call(null,sync_box,new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(pages.call(null,n_8835)));
{
var G__8836 = seq__8682_8831;
var G__8837 = chunk__8683_8832;
var G__8838 = count__8684_8833;
var G__8839 = (i__8685_8834 + 1);
seq__8682_8831 = G__8836;
chunk__8683_8832 = G__8837;
count__8684_8833 = G__8838;
i__8685_8834 = G__8839;
continue;
}
} else
{var temp__4092__auto___8840 = cljs.core.seq.call(null,seq__8682_8831);if(temp__4092__auto___8840)
{var seq__8682_8841__$1 = temp__4092__auto___8840;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8682_8841__$1))
{var c__7564__auto___8842 = cljs.core.chunk_first.call(null,seq__8682_8841__$1);{
var G__8843 = cljs.core.chunk_rest.call(null,seq__8682_8841__$1);
var G__8844 = c__7564__auto___8842;
var G__8845 = cljs.core.count.call(null,c__7564__auto___8842);
var G__8846 = 0;
seq__8682_8831 = G__8843;
chunk__8683_8832 = G__8844;
count__8684_8833 = G__8845;
i__8685_8834 = G__8846;
continue;
}
} else
{var n_8847 = cljs.core.first.call(null,seq__8682_8841__$1);lt.util.dom.before.call(null,sync_box,new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(pages.call(null,n_8847)));
{
var G__8848 = cljs.core.next.call(null,seq__8682_8841__$1);
var G__8849 = null;
var G__8850 = 0;
var G__8851 = 0;
seq__8682_8831 = G__8848;
chunk__8683_8832 = G__8849;
count__8684_8833 = G__8850;
i__8685_8834 = G__8851;
continue;
}
}
} else
{}
}
break;
}
lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pages","pages",1120330550),pages,new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),scroll_top,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),scroll_left,new cljs.core.Keyword(null,"laying-out","laying-out",4406897713),false], null));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037));
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"render-start","render-start",666961117));
var temp__4092__auto__ = new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto__))
{var sync_msg = temp__4092__auto__;lt.object.raise.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"litex.forward-sync!","litex.forward-sync!",2282754540),sync_msg);
return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057),null], null));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","layout-done","lt.plugins.litex.viewer/layout-done",1530426651),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__layout_done,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure-done","structure-done",2666298126),null], null), null));
lt.plugins.litex.viewer.__BEH__render_pages = (function __BEH__render_pages(this$){if(cljs.core.not.call(null,new cljs.core.Keyword(null,"rendering","rendering",2853558782).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rendering","rendering",2853558782),true], null));
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"render-page","render-page",3635004376));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","render-pages","lt.plugins.litex.viewer/render-pages",3510169011),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__render_pages,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-start","render-start",666961117),null], null), null));
lt.plugins.litex.viewer.__BEH__render_page = (function __BEH__render_page(this$){var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var viewtop = pdf_viewer.scrollTop;var viewbottom = (pdf_viewer.clientHeight + viewtop);var pages = new cljs.core.Keyword(null,"pages","pages",1120330550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var visible_pages = cljs.core.filter.call(null,((function (pdf_viewer,viewtop,viewbottom,pages){
return (function (page){var img = new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(page);var imgtop = img.offsetTop;var imgbottom = (img.offsetHeight + imgtop);return ((imgbottom >= viewtop)) && ((imgtop <= viewbottom));
});})(pdf_viewer,viewtop,viewbottom,pages))
,cljs.core.vals.call(null,pages));var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var render_page = cljs.core.first.call(null,cljs.core.filter.call(null,((function (pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom){
return (function (p1__8686_SHARP_){return (new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(p1__8686_SHARP_) < zoom);
});})(pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom))
,cljs.core.concat.call(null,(new cljs.core.LazySeq(null,((function (pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom){
return (function (){return visible_pages;
});})(pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom))
,null,null)),(new cljs.core.LazySeq(null,((function (pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.call(null,(new cljs.core.Keyword(null,"page","page",1017337345).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,visible_pages)) + 1)),pages.call(null,(new cljs.core.Keyword(null,"page","page",1017337345).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,visible_pages)) - 1))], null);
});})(pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom))
,null,null)))));if(cljs.core.truth_(render_page))
{var render_page__$1 = cljs.core.assoc.call(null,render_page,new cljs.core.Keyword(null,"zoom","zoom",1017648965),zoom);var pagenum = new cljs.core.Keyword(null,"page","page",1017337345).cljs$core$IFn$_invoke$arity$1(render_page__$1);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages","pages",1120330550),cljs.core.assoc.call(null,pages,pagenum,render_page__$1)], null));
return lt.plugins.litex.run_commands.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("pdftoppm -f "),cljs.core.str(pagenum),cljs.core.str(" -l "),cljs.core.str(pagenum),cljs.core.str(" -r "),cljs.core.str((72 * zoom)),cljs.core.str(" -png \""),cljs.core.str(new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),cljs.core.str("\"")].join('')], null),lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),(function (error,stdout,stderr){if(cljs.core.not.call(null,error))
{new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(render_page__$1).src = [cljs.core.str("data:image/png;base64,"),cljs.core.str(stdout)].join('');
} else
{throw [cljs.core.str("pdftoppm error: "),cljs.core.str(window.atob(stderr))].join('');
}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"render-page","render-page",3635004376));
}),new cljs.core.Keyword(null,"encoding","encoding",2725126341),"base64");
} else
{return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rendering","rendering",2853558782),false], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","render-page","lt.plugins.litex.viewer/render-page",4300495100),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__render_page,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-page","render-page",3635004376),null], null), null));
lt.plugins.litex.viewer.__BEH__zoom_in_BANG_ = (function __BEH__zoom_in_BANG_(this$){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var factor = new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),(zoom * factor));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-in!","lt.plugins.litex.viewer/zoom-in!",2562456392),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__zoom_in_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588),null], null), null));
lt.plugins.litex.viewer.__BEH__zoom_out_BANG_ = (function __BEH__zoom_out_BANG_(this$){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var factor = new cljs.core.Keyword(null,"zoom-factor","zoom-factor",2715602939).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),(zoom / factor));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","zoom-out!","lt.plugins.litex.viewer/zoom-out!",1172268339),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__zoom_out_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271),null], null), null));
lt.plugins.litex.viewer.__BEH__set_zoom_BANG_ = (function __BEH__set_zoom_BANG_(this$,nzoom){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var vec__8693 = lt.plugins.litex.viewer.center_point.call(null,pdf_viewer);var x = cljs.core.nth.call(null,vec__8693,0,null);var y = cljs.core.nth.call(null,vec__8693,1,null);var new_zoom = (function (){var or__6816__auto__ = nzoom;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return zoom;
}
})();lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
var seq__8694_8852 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"pages","pages",1120330550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var chunk__8695_8853 = null;var count__8696_8854 = 0;var i__8697_8855 = 0;while(true){
if((i__8697_8855 < count__8696_8854))
{var p_8856 = cljs.core._nth.call(null,chunk__8695_8853,i__8697_8855);lt.util.dom.css.call(null,new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(p_8856),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),Math.ceil((new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(p_8856) * new_zoom)),new cljs.core.Keyword(null,"height","height",4087841945),Math.ceil((new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(p_8856) * new_zoom)),new cljs.core.Keyword(null,"margin","margin",4227561760),[cljs.core.str((20 * new_zoom)),cljs.core.str("px auto")].join('')], null));
{
var G__8857 = seq__8694_8852;
var G__8858 = chunk__8695_8853;
var G__8859 = count__8696_8854;
var G__8860 = (i__8697_8855 + 1);
seq__8694_8852 = G__8857;
chunk__8695_8853 = G__8858;
count__8696_8854 = G__8859;
i__8697_8855 = G__8860;
continue;
}
} else
{var temp__4092__auto___8861 = cljs.core.seq.call(null,seq__8694_8852);if(temp__4092__auto___8861)
{var seq__8694_8862__$1 = temp__4092__auto___8861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8694_8862__$1))
{var c__7564__auto___8863 = cljs.core.chunk_first.call(null,seq__8694_8862__$1);{
var G__8864 = cljs.core.chunk_rest.call(null,seq__8694_8862__$1);
var G__8865 = c__7564__auto___8863;
var G__8866 = cljs.core.count.call(null,c__7564__auto___8863);
var G__8867 = 0;
seq__8694_8852 = G__8864;
chunk__8695_8853 = G__8865;
count__8696_8854 = G__8866;
i__8697_8855 = G__8867;
continue;
}
} else
{var p_8868 = cljs.core.first.call(null,seq__8694_8862__$1);lt.util.dom.css.call(null,new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(p_8868),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),Math.ceil((new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(p_8868) * new_zoom)),new cljs.core.Keyword(null,"height","height",4087841945),Math.ceil((new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(p_8868) * new_zoom)),new cljs.core.Keyword(null,"margin","margin",4227561760),[cljs.core.str((20 * new_zoom)),cljs.core.str("px auto")].join('')], null));
{
var G__8869 = cljs.core.next.call(null,seq__8694_8862__$1);
var G__8870 = null;
var G__8871 = 0;
var G__8872 = 0;
seq__8694_8852 = G__8869;
chunk__8695_8853 = G__8870;
count__8696_8854 = G__8871;
i__8697_8855 = G__8872;
continue;
}
}
} else
{}
}
break;
}
return lt.plugins.litex.viewer.set_center_point.call(null,pdf_viewer,cljs.core.map.call(null,(function (p1__8687_SHARP_){return (p1__8687_SHARP_ * (new_zoom / zoom));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","set-zoom!","lt.plugins.litex.viewer/set-zoom!",3334100069),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__set_zoom_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),null], null), null));
lt.plugins.litex.viewer.center_point = (function center_point(elem){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(elem.scrollLeft + (elem.clientWidth / 2)),(elem.scrollTop + (elem.clientHeight / 2))], null);
});
lt.plugins.litex.viewer.set_center_point = (function set_center_point(elem,p__8698){var vec__8700 = p__8698;var x = cljs.core.nth.call(null,vec__8700,0,null);var y = cljs.core.nth.call(null,vec__8700,1,null);elem.scrollLeft = (x - (elem.clientWidth / 2));
return elem.scrollTop = (y - (elem.clientHeight / 2));
});
lt.plugins.litex.viewer.__BEH__show_log_BANG_ = (function __BEH__show_log_BANG_(this$){return lt.util.dom.remove_class.call(null,lt.object.__GT_content.call(null,this$),"hide-log");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","show-log!","lt.plugins.litex.viewer/show-log!",837199571),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__show_log_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-log!","show-log!",3359135135),null], null), null));
lt.plugins.litex.viewer.__BEH__hide_log_BANG_ = (function __BEH__hide_log_BANG_(this$){return lt.util.dom.add_class.call(null,lt.object.__GT_content.call(null,this$),"hide-log");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","hide-log!","lt.plugins.litex.viewer/hide-log!",2486896090),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__hide_log_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466),null], null), null));
lt.plugins.litex.viewer.__BEH__image_click_BANG_ = (function __BEH__image_click_BANG_(this$,event){if(cljs.core.truth_((function (){var or__6816__auto__ = event.ctrlKey;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{var and__6804__auto__ = lt.objs.platform.mac_QMARK_.call(null);if(cljs.core.truth_(and__6804__auto__))
{return event.metaKey;
} else
{return and__6804__auto__;
}
}
})()))
{var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var clickX = ((parseFloat(event.offsetX) / zoom) - 2);var clickY = ((parseFloat(event.offsetY) / zoom) - 2);var pagenum = parseInt(event.srcElement.classList);var cwd = lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var pdfname = lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.object.raise.call(null,lt.plugins.litex.tex_lang,new cljs.core.Keyword(null,"sync-backward","sync-backward",4386186823),cwd,pdfname,pagenum,clickX,clickY);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","image-click!","lt.plugins.litex.viewer/image-click!",3767830813),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__image_click_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image-click!","image-click!",4167726013),null], null), null));
lt.plugins.litex.viewer.__BEH__mouse_wheel_BANG_ = (function __BEH__mouse_wheel_BANG_(this$,event){if(cljs.core.truth_((function (){var and__6804__auto__ = event.altKey;if(cljs.core.truth_(and__6804__auto__))
{return (cljs.core.not.call(null,event.shiftKey)) && (cljs.core.not_EQ_.call(null,event.wheelDeltaY,0));
} else
{return and__6804__auto__;
}
})()))
{event.preventDefault();
return lt.object.raise.call(null,this$,(((event.wheelDeltaY < 0))?new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271):new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588)));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","mouse-wheel!","lt.plugins.litex.viewer/mouse-wheel!",2516696884),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__mouse_wheel_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-wheel!","mouse-wheel!",1809006016),null], null), null));
lt.plugins.litex.viewer.__BEH__init_BANG_ = (function __BEH__init_BANG_(this$){var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));pdf_viewer.onmousewheel = (function (event){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"mouse-wheel!","mouse-wheel!",1809006016),event);
});
return pdf_viewer.onscroll = (function (event){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"render-start","render-start",666961117));
});
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","init!","lt.plugins.litex.viewer/init!",2861886455),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__init_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",1017141378),null], null), null));
lt.plugins.litex.viewer.__BEH__set_client_name = (function __BEH__set_client_name(this$,title){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),title], null));
lt.objs.tabs.refresh_BANG_.call(null,this$);
return lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),title], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","set-client-name","lt.plugins.litex.viewer/set-client-name",3207171848),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__set_client_name,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-name","set-name",2383102088),null], null), null));
lt.plugins.litex.viewer.__BEH__focus_on_show = (function __BEH__focus_on_show(this$){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"focus!","focus!",4039653819));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","focus-on-show","lt.plugins.litex.viewer/focus-on-show",2313578188),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__focus_on_show,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",1017433711),null], null), null));
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
if(cljs.core.truth_(new cljs.core.Keyword(null,"laying-out","laying-out",4406897713).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viewer))))
{return lt.object.merge_BANG_.call(null,viewer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sync-msg","sync-msg",2829477057),msg], null));
} else
{var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var sync_box = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#sync-box","div#sync-box",2601350845),lt.object.__GT_content.call(null,this$));var output_split = (function (){var and__6804__auto__ = new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__6804__auto__))
{return cljs.core.rest.call(null,new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(data).split("\nOutput"));
} else
{return and__6804__auto__;
}
})();var restore_top = new cljs.core.Keyword(null,"restore-top","restore-top",1342702856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viewer));var restore_left = new cljs.core.Keyword(null,"restore-left","restore-left",2616478552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viewer));lt.object.merge_BANG_.call(null,viewer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),null,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),null], null));
pdf_viewer.offsetHeight = pdf_viewer.offsetHeight;
if(cljs.core.truth_(output_split))
{var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var locs = cljs.core.map.call(null,((function (zoom){
return (function (p1__8701_SHARP_){return lt.plugins.litex.viewer.pdf_to_elem.call(null,pdf_viewer,zoom,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lt.plugins.litex.viewer.kwpairf,p1__8701_SHARP_.split("\n")))));
});})(zoom))
,output_split);var bbleft = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,new cljs.core.Keyword(null,"h","h",1013904346),locs));var bbtop = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (zoom,locs,bbleft){
return (function (p1__8702_SHARP_){return (new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(p1__8702_SHARP_) - new cljs.core.Keyword(null,"H","H",1013904314).cljs$core$IFn$_invoke$arity$1(p1__8702_SHARP_));
});})(zoom,locs,bbleft))
,locs));var bbright = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (zoom,locs,bbleft,bbtop){
return (function (p1__8703_SHARP_){return (new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(p1__8703_SHARP_) + new cljs.core.Keyword(null,"W","W",1013904329).cljs$core$IFn$_invoke$arity$1(p1__8703_SHARP_));
});})(zoom,locs,bbleft,bbtop))
,locs));var bbbottom = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),locs));var bbwidth = (bbright - bbleft);var bbheight = (bbbottom - bbtop);var vleft = (function (){var or__6816__auto__ = restore_left;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return pdf_viewer.scrollLeft;
}
})();var vwidth = pdf_viewer.clientWidth;var vright = (vleft + vwidth);var vtop = (function (){var or__6816__auto__ = restore_top;if(cljs.core.truth_(or__6816__auto__))
{return or__6816__auto__;
} else
{return pdf_viewer.scrollTop;
}
})();var vheight = pdf_viewer.clientHeight;var vbottom = (vtop + vheight);lt.util.dom.remove_class.call(null,sync_box,new cljs.core.Keyword(null,"animate","animate",4451935827));
pdf_viewer.scrollLeft = ((((bbleft >= vleft)) && ((bbright <= vright)))?vleft:(((bbwidth <= vwidth))?(bbleft + ((bbwidth - vwidth) / 2)):((new cljs.core.Keyword(null,"else","else",1017020587))?bbleft:null)));
pdf_viewer.scrollTop = ((((bbtop >= vtop)) && ((bbbottom <= vbottom)))?vtop:(((bbheight <= vheight))?(bbtop + ((bbheight - vheight) / 2)):((new cljs.core.Keyword(null,"else","else",1017020587))?(bbtop * zoom):null)));
lt.util.dom.css.call(null,sync_box,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",1017222009),[cljs.core.str(bbleft),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"top","top",1014019271),[cljs.core.str(bbtop),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"width","width",1127031096),[cljs.core.str((bbright - bbleft)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",4087841945),[cljs.core.str((bbbottom - bbtop)),cljs.core.str("px")].join('')], null));
return lt.util.dom.add_class.call(null,sync_box,new cljs.core.Keyword(null,"animate","animate",4451935827));
} else
{return console.log("No synctex results!");
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","forward-sync","lt.plugins.litex.viewer/forward-sync",3501952325),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__forward_sync,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"litex.forward-sync!","litex.forward-sync!",2282754540),null], null), null));
lt.plugins.litex.viewer.pdf_to_elem = (function pdf_to_elem(elem,zoom,loc){var map__8705 = loc;var map__8705__$1 = ((cljs.core.seq_QMARK_.call(null,map__8705))?cljs.core.apply.call(null,cljs.core.hash_map,map__8705):map__8705);var Page = cljs.core.get.call(null,map__8705__$1,new cljs.core.Keyword(null,"Page","Page",1016384033));var H = cljs.core.get.call(null,map__8705__$1,new cljs.core.Keyword(null,"H","H",1013904314));var W = cljs.core.get.call(null,map__8705__$1,new cljs.core.Keyword(null,"W","W",1013904329));var v = cljs.core.get.call(null,map__8705__$1,new cljs.core.Keyword(null,"v","v",1013904360));var h = cljs.core.get.call(null,map__8705__$1,new cljs.core.Keyword(null,"h","h",1013904346));var img = cljs.core.nth.call(null,lt.util.dom.children.call(null,elem),(Page - 1));if((cljs.core.not.call(null,img)) || (cljs.core._EQ_.call(null,img.id,"sync-box")))
{throw [cljs.core.str("Error: could not find image for page "),cljs.core.str(Page)].join('');
} else
{}
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"h","h",1013904346),(((h * zoom) + img.offsetLeft) + 2),new cljs.core.Keyword(null,"v","v",1013904360),(((v * zoom) + img.offsetTop) + 2),new cljs.core.Keyword(null,"W","W",1013904329),(W * zoom),new cljs.core.Keyword(null,"H","H",1013904314),(H * zoom)], null);
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