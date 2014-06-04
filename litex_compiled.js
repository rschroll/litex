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
lt.plugins.litex.exec = (function exec(command,cwd,encoding,exitfunc){return lt.plugins.litex._exec.call(null,command,(function (){var obj8607 = {"cwd":cwd,"encoding":encoding,"env":lt.objs.proc.merge_env.call(null,null),"maxBuffer":(1024 * 1024)};return obj8607;
})(),exitfunc);
});
lt.plugins.litex.kwpair = (function kwpair(str){var vec__8609 = str.split(":");var k = cljs.core.nth.call(null,vec__8609,0,null);var v = cljs.core.nth.call(null,vec__8609,1,null);if(cljs.core.truth_(v))
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
var run_commands__delegate = function (commands,cwd,exitfunc,p__8610){var map__8612 = p__8610;var map__8612__$1 = ((cljs.core.seq_QMARK_.call(null,map__8612))?cljs.core.apply.call(null,cljs.core.hash_map,map__8612):map__8612);var encoding = cljs.core.get.call(null,map__8612__$1,new cljs.core.Keyword(null,"encoding","encoding",2725126341),"utf8");var accout = cljs.core.get.call(null,map__8612__$1,new cljs.core.Keyword(null,"accout","accout",3885420191),"");if(cljs.core.empty_QMARK_.call(null,commands))
{return exitfunc.call(null,null,accout,"");
} else
{var command = cljs.core.first.call(null,commands);var commands__$1 = cljs.core.rest.call(null,commands);return lt.plugins.litex.exec.call(null,command,cwd,encoding,((function (command,commands__$1,map__8612,map__8612__$1,encoding,accout){
return (function (error,stdout,stderr){var stdout__$1 = [cljs.core.str(accout),cljs.core.str(stdout)].join('');if(cljs.core.truth_(error))
{return exitfunc.call(null,error,stdout__$1,stderr);
} else
{return run_commands.call(null,commands__$1,cwd,exitfunc,new cljs.core.Keyword(null,"accout","accout",3885420191),stdout__$1,new cljs.core.Keyword(null,"encoding","encoding",2725126341),encoding);
}
});})(command,commands__$1,map__8612,map__8612__$1,encoding,accout))
);
}
};
var run_commands = function (commands,cwd,exitfunc,var_args){
var p__8610 = null;if (arguments.length > 3) {
  p__8610 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return run_commands__delegate.call(this,commands,cwd,exitfunc,p__8610);};
run_commands.cljs$lang$maxFixedArity = 3;
run_commands.cljs$lang$applyTo = (function (arglist__8620){
var commands = cljs.core.first(arglist__8620);
arglist__8620 = cljs.core.next(arglist__8620);
var cwd = cljs.core.first(arglist__8620);
arglist__8620 = cljs.core.next(arglist__8620);
var exitfunc = cljs.core.first(arglist__8620);
var p__8610 = cljs.core.rest(arglist__8620);
return run_commands__delegate(commands,cwd,exitfunc,p__8610);
});
run_commands.cljs$core$IFn$_invoke$arity$variadic = run_commands__delegate;
return run_commands;
})()
;
lt.plugins.litex.get_config_from_settings = (function get_config_from_settings(path,which){var settings = lt.plugins.litex.get_settings.call(null,which,lt.objs.files.parent.call(null,path));var fullfilename = lt.plugins.litex.ensure_absolute.call(null,(function (){var or__6365__auto__ = cljs.core.get.call(null,settings,"filename");if(cljs.core.truth_(or__6365__auto__))
{return or__6365__auto__;
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
{var filename = lt.objs.files.basename.call(null,fullfilename);var cwd = lt.objs.files.parent.call(null,fullfilename);var commands = settings.call(null,"commands");var commands__$1 = ((typeof commands === 'string')?(function (){var or__6365__auto__ = lt.plugins.litex.COMMANDS.call(null,commands);if(cljs.core.truth_(or__6365__auto__))
{return or__6365__auto__;
} else
{throw [cljs.core.str("Unknown command: \""),cljs.core.str(commands),cljs.core.str("\".  "),cljs.core.str("Remember, a custom command should be a list of strings.")].join('');
}
})():commands);var pathmap = ((function (filename,cwd,commands,commands__$1,settings,fullfilename){
return (function (s){return clojure.string.replace.call(null,s,/%[fpbde%]/,((function (filename,cwd,commands,commands__$1,settings,fullfilename){
return (function (p1__8613_SHARP_){return cljs.core.keyword.call(null,p1__8613_SHARP_).call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"%f","%f",1013905491),filename,new cljs.core.Keyword(null,"%p","%p",1013905501),fullfilename,new cljs.core.Keyword(null,"%b","%b",1013905487),lt.objs.files.without_ext.call(null,filename),new cljs.core.Keyword(null,"%d","%d",1013905489),cwd,new cljs.core.Keyword(null,"%e","%e",1013905490),lt.objs.files.ext.call(null,filename),new cljs.core.Keyword(null,"%%","%%",1013905426),"%"], null));
});})(filename,cwd,commands,commands__$1,settings,fullfilename))
);
});})(filename,cwd,commands,commands__$1,settings,fullfilename))
;var pdfname = lt.plugins.litex.ensure_absolute.call(null,pathmap.call(null,settings.call(null,"outputname")),cwd);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"commands","commands",4706336250),cljs.core.map.call(null,pathmap,commands__$1),new cljs.core.Keyword(null,"cwd","cwd",1014003170),cwd,new cljs.core.Keyword(null,"texname","texname",3890856612),fullfilename,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),pdfname], null);
}
});
lt.plugins.litex.run_commands_to_client = (function run_commands_to_client(connection_command,editor,commands,cwd,pdfname,render_QMARK_){var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var exitfunc = ((function (info){
return (function (error,stdout,stderr){return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),connection_command,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null)),connection_command,cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"error","error",1110689146),error,new cljs.core.Keyword(null,"stdout","stdout",4416474557),stdout,new cljs.core.Keyword(null,"stderr","stderr",4416464852),stderr,new cljs.core.Keyword(null,"editor","editor",4001043679),editor,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),pdfname),new cljs.core.Keyword(null,"only","only",1017320222),editor);
});})(info))
;lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",1964298941),connection_command,new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"create","create",3956577390),((function (info,exitfunc){
return (function (){return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"add-litex-viewer-tab","add-litex-viewer-tab",1003999387),(cljs.core.truth_(render_QMARK_)?pdfname:null));
});})(info,exitfunc))
,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
lt.object.merge_BANG_.call(null,editor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pdfname","pdfname",4590556655),pdfname], null));
return lt.plugins.litex.run_commands.call(null,commands,cwd,exitfunc);
});
lt.plugins.litex.load_settings = (function load_settings(path){var file = lt.objs.files.open_sync.call(null,path);var content = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(file);if(cljs.core.truth_(content))
{try{return cljs.core.js__GT_clj.call(null,JSON.parse(content.replace((new RegExp("^\\s*//.*$","gm")),"")));
}catch (e8615){if((e8615 instanceof Error))
{var e = e8615;return console.log([cljs.core.str("Error parsing "),cljs.core.str(path),cljs.core.str(":\n  "),cljs.core.str(e),cljs.core.str("\nIgnoring this file.")].join(''));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8615;
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
lt.plugins.litex.get_settings = (function get_settings(which,cwd){return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__8616_SHARP_){return cljs.core.get.call(null,p1__8616_SHARP_,which);
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
{var map__8618 = temp__4092__auto__;var map__8618__$1 = ((cljs.core.seq_QMARK_.call(null,map__8618))?cljs.core.apply.call(null,cljs.core.hash_map,map__8618):map__8618);var pdfname = cljs.core.get.call(null,map__8618__$1,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655));var texname = cljs.core.get.call(null,map__8618__$1,new cljs.core.Keyword(null,"texname","texname",3890856612));var cwd = cljs.core.get.call(null,map__8618__$1,new cljs.core.Keyword(null,"cwd","cwd",1014003170));var commands = cljs.core.get.call(null,map__8618__$1,new cljs.core.Keyword(null,"commands","commands",4706336250));lt.object.merge_BANG_.call(null,lt.plugins.litex.tex_lang,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-tex-file","last-tex-file",710788139),texname], null));
return lt.plugins.litex.run_commands_to_client.call(null,new cljs.core.Keyword(null,"editor.eval.tex","editor.eval.tex",1083030184),editor,commands,cwd,pdfname,false);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex","eval!","lt.plugins.litex/eval!",4032952478),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.litex.__BEH__sync_forward = (function __BEH__sync_forward(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var filename = lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))));var pdfname = cljs.core.some.call(null,((function (pos,filename){
return (function (p1__8619_SHARP_){var name = new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(p1__8619_SHARP_.call(null));if(cljs.core.truth_(lt.objs.files.exists_QMARK_.call(null,name)))
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
{var edit = temp__4090__auto__;lt.objs.editor.move_cursor.call(null,edit,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),line,new cljs.core.Keyword(null,"ch","ch",1013907415),(function (){var x__6672__auto__ = column;var y__6673__auto__ = 0;return ((x__6672__auto__ > y__6673__auto__) ? x__6672__auto__ : y__6673__auto__);
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
lt.plugins.litex.viewer.utils = (function (){var obj8345 = {};return obj8345;
})();
lttools = lt.plugins.litex.viewer.utils;
lt.plugins.litex.viewer.add_util = (function add_util(nme,fn){return (lt.plugins.litex.viewer.utils[cljs.core.name.call(null,nme)] = fn);
});
lt.plugins.litex.viewer.zoom_in = (function zoom_in(this$){var e__7756__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-in"], null),"\u2295"], null));var seq__8352_8437 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7756__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588));
});})(e__7756__auto__))
], null)));var chunk__8353_8438 = null;var count__8354_8439 = 0;var i__8355_8440 = 0;while(true){
if((i__8355_8440 < count__8354_8439))
{var vec__8356_8441 = cljs.core._nth.call(null,chunk__8353_8438,i__8355_8440);var ev__7757__auto___8442 = cljs.core.nth.call(null,vec__8356_8441,0,null);var func__7758__auto___8443 = cljs.core.nth.call(null,vec__8356_8441,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8442,func__7758__auto___8443);
{
var G__8444 = seq__8352_8437;
var G__8445 = chunk__8353_8438;
var G__8446 = count__8354_8439;
var G__8447 = (i__8355_8440 + 1);
seq__8352_8437 = G__8444;
chunk__8353_8438 = G__8445;
count__8354_8439 = G__8446;
i__8355_8440 = G__8447;
continue;
}
} else
{var temp__4092__auto___8448 = cljs.core.seq.call(null,seq__8352_8437);if(temp__4092__auto___8448)
{var seq__8352_8449__$1 = temp__4092__auto___8448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8352_8449__$1))
{var c__7113__auto___8450 = cljs.core.chunk_first.call(null,seq__8352_8449__$1);{
var G__8451 = cljs.core.chunk_rest.call(null,seq__8352_8449__$1);
var G__8452 = c__7113__auto___8450;
var G__8453 = cljs.core.count.call(null,c__7113__auto___8450);
var G__8454 = 0;
seq__8352_8437 = G__8451;
chunk__8353_8438 = G__8452;
count__8354_8439 = G__8453;
i__8355_8440 = G__8454;
continue;
}
} else
{var vec__8357_8455 = cljs.core.first.call(null,seq__8352_8449__$1);var ev__7757__auto___8456 = cljs.core.nth.call(null,vec__8357_8455,0,null);var func__7758__auto___8457 = cljs.core.nth.call(null,vec__8357_8455,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8456,func__7758__auto___8457);
{
var G__8458 = cljs.core.next.call(null,seq__8352_8449__$1);
var G__8459 = null;
var G__8460 = 0;
var G__8461 = 0;
seq__8352_8437 = G__8458;
chunk__8353_8438 = G__8459;
count__8354_8439 = G__8460;
i__8355_8440 = G__8461;
continue;
}
}
} else
{}
}
break;
}
return e__7756__auto__;
});
lt.plugins.litex.viewer.zoom_out = (function zoom_out(this$){var e__7756__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"zoom-out"], null),"\u2296"], null));var seq__8364_8462 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7756__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271));
});})(e__7756__auto__))
], null)));var chunk__8365_8463 = null;var count__8366_8464 = 0;var i__8367_8465 = 0;while(true){
if((i__8367_8465 < count__8366_8464))
{var vec__8368_8466 = cljs.core._nth.call(null,chunk__8365_8463,i__8367_8465);var ev__7757__auto___8467 = cljs.core.nth.call(null,vec__8368_8466,0,null);var func__7758__auto___8468 = cljs.core.nth.call(null,vec__8368_8466,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8467,func__7758__auto___8468);
{
var G__8469 = seq__8364_8462;
var G__8470 = chunk__8365_8463;
var G__8471 = count__8366_8464;
var G__8472 = (i__8367_8465 + 1);
seq__8364_8462 = G__8469;
chunk__8365_8463 = G__8470;
count__8366_8464 = G__8471;
i__8367_8465 = G__8472;
continue;
}
} else
{var temp__4092__auto___8473 = cljs.core.seq.call(null,seq__8364_8462);if(temp__4092__auto___8473)
{var seq__8364_8474__$1 = temp__4092__auto___8473;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8364_8474__$1))
{var c__7113__auto___8475 = cljs.core.chunk_first.call(null,seq__8364_8474__$1);{
var G__8476 = cljs.core.chunk_rest.call(null,seq__8364_8474__$1);
var G__8477 = c__7113__auto___8475;
var G__8478 = cljs.core.count.call(null,c__7113__auto___8475);
var G__8479 = 0;
seq__8364_8462 = G__8476;
chunk__8365_8463 = G__8477;
count__8366_8464 = G__8478;
i__8367_8465 = G__8479;
continue;
}
} else
{var vec__8369_8480 = cljs.core.first.call(null,seq__8364_8474__$1);var ev__7757__auto___8481 = cljs.core.nth.call(null,vec__8369_8480,0,null);var func__7758__auto___8482 = cljs.core.nth.call(null,vec__8369_8480,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8481,func__7758__auto___8482);
{
var G__8483 = cljs.core.next.call(null,seq__8364_8474__$1);
var G__8484 = null;
var G__8485 = 0;
var G__8486 = 0;
seq__8364_8462 = G__8483;
chunk__8365_8463 = G__8484;
count__8366_8464 = G__8485;
i__8367_8465 = G__8486;
continue;
}
}
} else
{}
}
break;
}
return e__7756__auto__;
});
lt.plugins.litex.viewer.show_log = (function show_log(this$){var e__7756__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"show-log"], null),"Show logs"], null));var seq__8376_8487 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7756__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"show-log!","show-log!",3359135135));
});})(e__7756__auto__))
], null)));var chunk__8377_8488 = null;var count__8378_8489 = 0;var i__8379_8490 = 0;while(true){
if((i__8379_8490 < count__8378_8489))
{var vec__8380_8491 = cljs.core._nth.call(null,chunk__8377_8488,i__8379_8490);var ev__7757__auto___8492 = cljs.core.nth.call(null,vec__8380_8491,0,null);var func__7758__auto___8493 = cljs.core.nth.call(null,vec__8380_8491,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8492,func__7758__auto___8493);
{
var G__8494 = seq__8376_8487;
var G__8495 = chunk__8377_8488;
var G__8496 = count__8378_8489;
var G__8497 = (i__8379_8490 + 1);
seq__8376_8487 = G__8494;
chunk__8377_8488 = G__8495;
count__8378_8489 = G__8496;
i__8379_8490 = G__8497;
continue;
}
} else
{var temp__4092__auto___8498 = cljs.core.seq.call(null,seq__8376_8487);if(temp__4092__auto___8498)
{var seq__8376_8499__$1 = temp__4092__auto___8498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8376_8499__$1))
{var c__7113__auto___8500 = cljs.core.chunk_first.call(null,seq__8376_8499__$1);{
var G__8501 = cljs.core.chunk_rest.call(null,seq__8376_8499__$1);
var G__8502 = c__7113__auto___8500;
var G__8503 = cljs.core.count.call(null,c__7113__auto___8500);
var G__8504 = 0;
seq__8376_8487 = G__8501;
chunk__8377_8488 = G__8502;
count__8378_8489 = G__8503;
i__8379_8490 = G__8504;
continue;
}
} else
{var vec__8381_8505 = cljs.core.first.call(null,seq__8376_8499__$1);var ev__7757__auto___8506 = cljs.core.nth.call(null,vec__8381_8505,0,null);var func__7758__auto___8507 = cljs.core.nth.call(null,vec__8381_8505,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8506,func__7758__auto___8507);
{
var G__8508 = cljs.core.next.call(null,seq__8376_8499__$1);
var G__8509 = null;
var G__8510 = 0;
var G__8511 = 0;
seq__8376_8487 = G__8508;
chunk__8377_8488 = G__8509;
count__8378_8489 = G__8510;
i__8379_8490 = G__8511;
continue;
}
}
} else
{}
}
break;
}
return e__7756__auto__;
});
lt.plugins.litex.viewer.hide_log = (function hide_log(this$){var e__7756__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),"hide-log"], null),"Hide logs"], null));var seq__8388_8512 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7756__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466));
});})(e__7756__auto__))
], null)));var chunk__8389_8513 = null;var count__8390_8514 = 0;var i__8391_8515 = 0;while(true){
if((i__8391_8515 < count__8390_8514))
{var vec__8392_8516 = cljs.core._nth.call(null,chunk__8389_8513,i__8391_8515);var ev__7757__auto___8517 = cljs.core.nth.call(null,vec__8392_8516,0,null);var func__7758__auto___8518 = cljs.core.nth.call(null,vec__8392_8516,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8517,func__7758__auto___8518);
{
var G__8519 = seq__8388_8512;
var G__8520 = chunk__8389_8513;
var G__8521 = count__8390_8514;
var G__8522 = (i__8391_8515 + 1);
seq__8388_8512 = G__8519;
chunk__8389_8513 = G__8520;
count__8390_8514 = G__8521;
i__8391_8515 = G__8522;
continue;
}
} else
{var temp__4092__auto___8523 = cljs.core.seq.call(null,seq__8388_8512);if(temp__4092__auto___8523)
{var seq__8388_8524__$1 = temp__4092__auto___8523;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8388_8524__$1))
{var c__7113__auto___8525 = cljs.core.chunk_first.call(null,seq__8388_8524__$1);{
var G__8526 = cljs.core.chunk_rest.call(null,seq__8388_8524__$1);
var G__8527 = c__7113__auto___8525;
var G__8528 = cljs.core.count.call(null,c__7113__auto___8525);
var G__8529 = 0;
seq__8388_8512 = G__8526;
chunk__8389_8513 = G__8527;
count__8390_8514 = G__8528;
i__8391_8515 = G__8529;
continue;
}
} else
{var vec__8393_8530 = cljs.core.first.call(null,seq__8388_8524__$1);var ev__7757__auto___8531 = cljs.core.nth.call(null,vec__8393_8530,0,null);var func__7758__auto___8532 = cljs.core.nth.call(null,vec__8393_8530,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8531,func__7758__auto___8532);
{
var G__8533 = cljs.core.next.call(null,seq__8388_8524__$1);
var G__8534 = null;
var G__8535 = 0;
var G__8536 = 0;
seq__8388_8512 = G__8533;
chunk__8389_8513 = G__8534;
count__8390_8514 = G__8535;
i__8391_8515 = G__8536;
continue;
}
}
} else
{}
}
break;
}
return e__7756__auto__;
});
lt.plugins.litex.viewer.pdfimg = (function pdfimg(page,viewer){var e__7756__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),page], null)], null));var seq__8400_8537 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__7756__auto__){
return (function (event){return lt.object.raise.call(null,viewer,new cljs.core.Keyword(null,"image-click!","image-click!",4167726013),event);
});})(e__7756__auto__))
], null)));var chunk__8401_8538 = null;var count__8402_8539 = 0;var i__8403_8540 = 0;while(true){
if((i__8403_8540 < count__8402_8539))
{var vec__8404_8541 = cljs.core._nth.call(null,chunk__8401_8538,i__8403_8540);var ev__7757__auto___8542 = cljs.core.nth.call(null,vec__8404_8541,0,null);var func__7758__auto___8543 = cljs.core.nth.call(null,vec__8404_8541,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8542,func__7758__auto___8543);
{
var G__8544 = seq__8400_8537;
var G__8545 = chunk__8401_8538;
var G__8546 = count__8402_8539;
var G__8547 = (i__8403_8540 + 1);
seq__8400_8537 = G__8544;
chunk__8401_8538 = G__8545;
count__8402_8539 = G__8546;
i__8403_8540 = G__8547;
continue;
}
} else
{var temp__4092__auto___8548 = cljs.core.seq.call(null,seq__8400_8537);if(temp__4092__auto___8548)
{var seq__8400_8549__$1 = temp__4092__auto___8548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8400_8549__$1))
{var c__7113__auto___8550 = cljs.core.chunk_first.call(null,seq__8400_8549__$1);{
var G__8551 = cljs.core.chunk_rest.call(null,seq__8400_8549__$1);
var G__8552 = c__7113__auto___8550;
var G__8553 = cljs.core.count.call(null,c__7113__auto___8550);
var G__8554 = 0;
seq__8400_8537 = G__8551;
chunk__8401_8538 = G__8552;
count__8402_8539 = G__8553;
i__8403_8540 = G__8554;
continue;
}
} else
{var vec__8405_8555 = cljs.core.first.call(null,seq__8400_8549__$1);var ev__7757__auto___8556 = cljs.core.nth.call(null,vec__8405_8555,0,null);var func__7758__auto___8557 = cljs.core.nth.call(null,vec__8405_8555,1,null);lt.util.dom.on.call(null,e__7756__auto__,ev__7757__auto___8556,func__7758__auto___8557);
{
var G__8558 = cljs.core.next.call(null,seq__8400_8549__$1);
var G__8559 = null;
var G__8560 = 0;
var G__8561 = 0;
seq__8400_8537 = G__8558;
chunk__8401_8538 = G__8559;
count__8402_8539 = G__8560;
i__8403_8540 = G__8561;
continue;
}
}
} else
{}
}
break;
}
return e__7756__auto__;
});
lt.plugins.litex.viewer.make_page = (function make_page(str,viewer){var re = (new RegExp("^Page *(\\d*) size: ([\\d\\.]*) x ([\\d\\.]*)"));var match = re.exec(str);if(cljs.core.truth_(match))
{var page = parseInt((match[1]));var width = parseFloat((match[2]));var height = parseFloat((match[3]));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",1017337345),page,new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"height","height",4087841945),height,new cljs.core.Keyword(null,"img","img",1014008629),lt.plugins.litex.viewer.pdfimg.call(null,page,viewer),new cljs.core.Keyword(null,"zoom","zoom",1017648965),0], null)], null);
} else
{return null;
}
});
lt.plugins.litex.viewer.kwpairf = (function kwpairf(str){var vec__8407 = str.split(":");var k = cljs.core.nth.call(null,vec__8407,0,null);var v = cljs.core.nth.call(null,vec__8407,1,null);if(cljs.core.truth_(v))
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
lt.plugins.litex.viewer.add = (function add(){var viewer = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","viewer","lt.plugins.litex.viewer/viewer",4117559032));var tabset = lt.objs.tabs.in_tab_QMARK_.call(null,lt.objs.editor.pool.last_active.call(null));var viewerts = (function (){var or__6365__auto__ = lt.objs.tabs.next_tabset.call(null,tabset);if(cljs.core.truth_(or__6365__auto__))
{return or__6365__auto__;
} else
{var or__6365__auto____$1 = lt.objs.tabs.prev_tabset.call(null,tabset);if(cljs.core.truth_(or__6365__auto____$1))
{return or__6365__auto____$1;
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
return lt.plugins.litex.run_commands.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("pdfinfo -l -1 \""),cljs.core.str(basename),cljs.core.str(".pdf\"")].join('')], null),dirname,((function (randstr,filename,basename,dirname){
return (function (error,stdout,stderr){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"structure-done","structure-done",2666298126),error,stdout,stderr);
});})(randstr,filename,basename,dirname))
);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","layout-pdf","lt.plugins.litex.viewer/layout-pdf",3093606065),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__layout_pdf,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-pdf","set-pdf",2997736569),null], null), null));
lt.plugins.litex.viewer.__BEH__layout_done = (function __BEH__layout_done(this$,error,stdout,stderr){if(cljs.core.truth_(error))
{throw [cljs.core.str("pdfinfo error: "),cljs.core.str(stderr)].join('');
} else
{}
var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var sync_box = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#sync-box","div#sync-box",2601350845),lt.object.__GT_content.call(null,this$));var scroll_top = pdf_viewer.scrollTop;var scroll_left = pdf_viewer.scrollLeft;var pages = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (pdf_viewer,sync_box,scroll_top,scroll_left){
return (function (p1__8408_SHARP_){return lt.plugins.litex.viewer.make_page.call(null,p1__8408_SHARP_,this$);
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
var seq__8413_8562 = cljs.core.seq.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,pages)));var chunk__8414_8563 = null;var count__8415_8564 = 0;var i__8416_8565 = 0;while(true){
if((i__8416_8565 < count__8415_8564))
{var n_8566 = cljs.core._nth.call(null,chunk__8414_8563,i__8416_8565);lt.util.dom.before.call(null,sync_box,new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(pages.call(null,n_8566)));
{
var G__8567 = seq__8413_8562;
var G__8568 = chunk__8414_8563;
var G__8569 = count__8415_8564;
var G__8570 = (i__8416_8565 + 1);
seq__8413_8562 = G__8567;
chunk__8414_8563 = G__8568;
count__8415_8564 = G__8569;
i__8416_8565 = G__8570;
continue;
}
} else
{var temp__4092__auto___8571 = cljs.core.seq.call(null,seq__8413_8562);if(temp__4092__auto___8571)
{var seq__8413_8572__$1 = temp__4092__auto___8571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8413_8572__$1))
{var c__7113__auto___8573 = cljs.core.chunk_first.call(null,seq__8413_8572__$1);{
var G__8574 = cljs.core.chunk_rest.call(null,seq__8413_8572__$1);
var G__8575 = c__7113__auto___8573;
var G__8576 = cljs.core.count.call(null,c__7113__auto___8573);
var G__8577 = 0;
seq__8413_8562 = G__8574;
chunk__8414_8563 = G__8575;
count__8415_8564 = G__8576;
i__8416_8565 = G__8577;
continue;
}
} else
{var n_8578 = cljs.core.first.call(null,seq__8413_8572__$1);lt.util.dom.before.call(null,sync_box,new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(pages.call(null,n_8578)));
{
var G__8579 = cljs.core.next.call(null,seq__8413_8572__$1);
var G__8580 = null;
var G__8581 = 0;
var G__8582 = 0;
seq__8413_8562 = G__8579;
chunk__8414_8563 = G__8580;
count__8415_8564 = G__8581;
i__8416_8565 = G__8582;
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
return (function (p1__8417_SHARP_){return (new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(p1__8417_SHARP_) < zoom);
});})(pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom))
,cljs.core.concat.call(null,(new cljs.core.LazySeq(null,((function (pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom){
return (function (){return visible_pages;
});})(pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom))
,null,null)),(new cljs.core.LazySeq(null,((function (pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom){
return (function (){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pages.call(null,(new cljs.core.Keyword(null,"page","page",1017337345).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,visible_pages)) + 1)),pages.call(null,(new cljs.core.Keyword(null,"page","page",1017337345).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,visible_pages)) - 1))], null);
});})(pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom))
,null,null)))));if(cljs.core.truth_(render_page))
{var render_page__$1 = cljs.core.assoc.call(null,render_page,new cljs.core.Keyword(null,"zoom","zoom",1017648965),zoom);var pagenum = new cljs.core.Keyword(null,"page","page",1017337345).cljs$core$IFn$_invoke$arity$1(render_page__$1);lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pages","pages",1120330550),cljs.core.assoc.call(null,pages,pagenum,render_page__$1)], null));
return lt.plugins.litex.run_commands.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("pdftoppm -f "),cljs.core.str(pagenum),cljs.core.str(" -l "),cljs.core.str(pagenum),cljs.core.str(" -r "),cljs.core.str((72 * zoom)),cljs.core.str(" -png \""),cljs.core.str(new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),cljs.core.str("\"")].join('')], null),lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))),((function (render_page__$1,pagenum,pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom,render_page){
return (function (error,stdout,stderr){if(cljs.core.not.call(null,error))
{new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(render_page__$1).src = [cljs.core.str("data:image/png;base64,"),cljs.core.str(stdout)].join('');
} else
{throw [cljs.core.str("pdftoppm error: "),cljs.core.str(window.atob(stderr))].join('');
}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"render-page","render-page",3635004376));
});})(render_page__$1,pagenum,pdf_viewer,viewtop,viewbottom,pages,visible_pages,zoom,render_page))
,new cljs.core.Keyword(null,"encoding","encoding",2725126341),"base64");
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
lt.plugins.litex.viewer.__BEH__set_zoom_BANG_ = (function __BEH__set_zoom_BANG_(this$,nzoom){var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));var vec__8424 = lt.plugins.litex.viewer.center_point.call(null,pdf_viewer);var x = cljs.core.nth.call(null,vec__8424,0,null);var y = cljs.core.nth.call(null,vec__8424,1,null);var new_zoom = (function (){var or__6365__auto__ = nzoom;if(cljs.core.truth_(or__6365__auto__))
{return or__6365__auto__;
} else
{return zoom;
}
})();lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"zoom","zoom",1017648965),new_zoom], null));
var seq__8425_8583 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"pages","pages",1120330550).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var chunk__8426_8584 = null;var count__8427_8585 = 0;var i__8428_8586 = 0;while(true){
if((i__8428_8586 < count__8427_8585))
{var p_8587 = cljs.core._nth.call(null,chunk__8426_8584,i__8428_8586);lt.util.dom.css.call(null,new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(p_8587),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),Math.ceil((new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(p_8587) * new_zoom)),new cljs.core.Keyword(null,"height","height",4087841945),Math.ceil((new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(p_8587) * new_zoom)),new cljs.core.Keyword(null,"margin","margin",4227561760),[cljs.core.str((20 * new_zoom)),cljs.core.str("px auto")].join('')], null));
{
var G__8588 = seq__8425_8583;
var G__8589 = chunk__8426_8584;
var G__8590 = count__8427_8585;
var G__8591 = (i__8428_8586 + 1);
seq__8425_8583 = G__8588;
chunk__8426_8584 = G__8589;
count__8427_8585 = G__8590;
i__8428_8586 = G__8591;
continue;
}
} else
{var temp__4092__auto___8592 = cljs.core.seq.call(null,seq__8425_8583);if(temp__4092__auto___8592)
{var seq__8425_8593__$1 = temp__4092__auto___8592;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8425_8593__$1))
{var c__7113__auto___8594 = cljs.core.chunk_first.call(null,seq__8425_8593__$1);{
var G__8595 = cljs.core.chunk_rest.call(null,seq__8425_8593__$1);
var G__8596 = c__7113__auto___8594;
var G__8597 = cljs.core.count.call(null,c__7113__auto___8594);
var G__8598 = 0;
seq__8425_8583 = G__8595;
chunk__8426_8584 = G__8596;
count__8427_8585 = G__8597;
i__8428_8586 = G__8598;
continue;
}
} else
{var p_8599 = cljs.core.first.call(null,seq__8425_8593__$1);lt.util.dom.css.call(null,new cljs.core.Keyword(null,"img","img",1014008629).cljs$core$IFn$_invoke$arity$1(p_8599),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),Math.ceil((new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(p_8599) * new_zoom)),new cljs.core.Keyword(null,"height","height",4087841945),Math.ceil((new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(p_8599) * new_zoom)),new cljs.core.Keyword(null,"margin","margin",4227561760),[cljs.core.str((20 * new_zoom)),cljs.core.str("px auto")].join('')], null));
{
var G__8600 = cljs.core.next.call(null,seq__8425_8593__$1);
var G__8601 = null;
var G__8602 = 0;
var G__8603 = 0;
seq__8425_8583 = G__8600;
chunk__8426_8584 = G__8601;
count__8427_8585 = G__8602;
i__8428_8586 = G__8603;
continue;
}
}
} else
{}
}
break;
}
return lt.plugins.litex.viewer.set_center_point.call(null,pdf_viewer,cljs.core.map.call(null,((function (zoom,pdf_viewer,vec__8424,x,y,new_zoom){
return (function (p1__8418_SHARP_){return (p1__8418_SHARP_ * (new_zoom / zoom));
});})(zoom,pdf_viewer,vec__8424,x,y,new_zoom))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","set-zoom!","lt.plugins.litex.viewer/set-zoom!",3334100069),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__set_zoom_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-zoom!","set-zoom!",520866037),null], null), null));
lt.plugins.litex.viewer.center_point = (function center_point(elem){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(elem.scrollLeft + (elem.clientWidth / 2)),(elem.scrollTop + (elem.clientHeight / 2))], null);
});
lt.plugins.litex.viewer.set_center_point = (function set_center_point(elem,p__8429){var vec__8431 = p__8429;var x = cljs.core.nth.call(null,vec__8431,0,null);var y = cljs.core.nth.call(null,vec__8431,1,null);elem.scrollLeft = (x - (elem.clientWidth / 2));
return elem.scrollTop = (y - (elem.clientHeight / 2));
});
lt.plugins.litex.viewer.__BEH__show_log_BANG_ = (function __BEH__show_log_BANG_(this$){return lt.util.dom.remove_class.call(null,lt.object.__GT_content.call(null,this$),"hide-log");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","show-log!","lt.plugins.litex.viewer/show-log!",837199571),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__show_log_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-log!","show-log!",3359135135),null], null), null));
lt.plugins.litex.viewer.__BEH__hide_log_BANG_ = (function __BEH__hide_log_BANG_(this$){return lt.util.dom.add_class.call(null,lt.object.__GT_content.call(null,this$),"hide-log");
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","hide-log!","lt.plugins.litex.viewer/hide-log!",2486896090),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__hide_log_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-log!","hide-log!",1821177466),null], null), null));
lt.plugins.litex.viewer.__BEH__image_click_BANG_ = (function __BEH__image_click_BANG_(this$,event){if(cljs.core.truth_((function (){var or__6365__auto__ = event.ctrlKey;if(cljs.core.truth_(or__6365__auto__))
{return or__6365__auto__;
} else
{var and__6353__auto__ = lt.objs.platform.mac_QMARK_.call(null);if(cljs.core.truth_(and__6353__auto__))
{return event.metaKey;
} else
{return and__6353__auto__;
}
}
})()))
{var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var clickX = ((parseFloat(event.offsetX) / zoom) - 2);var clickY = ((parseFloat(event.offsetY) / zoom) - 2);var pagenum = parseInt(event.srcElement.classList);var cwd = lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));var pdfname = lt.objs.files.basename.call(null,new cljs.core.Keyword(null,"pdfname","pdfname",4590556655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));return lt.object.raise.call(null,lt.plugins.litex.tex_lang,new cljs.core.Keyword(null,"sync-backward","sync-backward",4386186823),cwd,pdfname,pagenum,clickX,clickY);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","image-click!","lt.plugins.litex.viewer/image-click!",3767830813),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__image_click_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image-click!","image-click!",4167726013),null], null), null));
lt.plugins.litex.viewer.__BEH__mouse_wheel_BANG_ = (function __BEH__mouse_wheel_BANG_(this$,event){if(cljs.core.truth_((function (){var and__6353__auto__ = event.altKey;if(cljs.core.truth_(and__6353__auto__))
{return (cljs.core.not.call(null,event.shiftKey)) && (cljs.core.not_EQ_.call(null,event.wheelDeltaY,0));
} else
{return and__6353__auto__;
}
})()))
{event.preventDefault();
return lt.object.raise.call(null,this$,(((event.wheelDeltaY < 0))?new cljs.core.Keyword(null,"zoom-out!","zoom-out!",2620430271):new cljs.core.Keyword(null,"zoom-in!","zoom-in!",1897005588)));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.litex.viewer","mouse-wheel!","lt.plugins.litex.viewer/mouse-wheel!",2516696884),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.litex.viewer.__BEH__mouse_wheel_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-wheel!","mouse-wheel!",1809006016),null], null), null));
lt.plugins.litex.viewer.__BEH__init_BANG_ = (function __BEH__init_BANG_(this$){var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,this$));pdf_viewer.onmousewheel = ((function (pdf_viewer){
return (function (event){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"mouse-wheel!","mouse-wheel!",1809006016),event);
});})(pdf_viewer))
;
return pdf_viewer.onscroll = ((function (pdf_viewer){
return (function (event){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"render-start","render-start",666961117));
});})(pdf_viewer))
;
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
lt.plugins.litex.viewer.__BEH__tex_eval = (function __BEH__tex_eval(this$,msg){var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var viewer = new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));var log_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"pre#log-viewer","pre#log-viewer",3895935501),lt.object.__GT_content.call(null,viewer));if(cljs.core.not.call(null,new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(data)))
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
{var data = new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg);var pdf_viewer = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#pdf-viewer","div#pdf-viewer",2086035953),lt.object.__GT_content.call(null,viewer));var sync_box = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"div#sync-box","div#sync-box",2601350845),lt.object.__GT_content.call(null,viewer));var output_split = (function (){var and__6353__auto__ = new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(and__6353__auto__))
{return cljs.core.rest.call(null,new cljs.core.Keyword(null,"stdout","stdout",4416474557).cljs$core$IFn$_invoke$arity$1(data).split("\nOutput"));
} else
{return and__6353__auto__;
}
})();var restore_top = new cljs.core.Keyword(null,"restore-top","restore-top",1342702856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viewer));var restore_left = new cljs.core.Keyword(null,"restore-left","restore-left",2616478552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,viewer));lt.object.merge_BANG_.call(null,viewer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"restore-top","restore-top",1342702856),null,new cljs.core.Keyword(null,"restore-left","restore-left",2616478552),null], null));
pdf_viewer.offsetHeight = pdf_viewer.offsetHeight;
if(cljs.core.truth_(output_split))
{var zoom = new cljs.core.Keyword(null,"zoom","zoom",1017648965).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"frame","frame",1111596255).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));var locs = cljs.core.map.call(null,((function (zoom,data,pdf_viewer,sync_box,output_split,restore_top,restore_left,viewer,pdfname){
return (function (p1__8432_SHARP_){return lt.plugins.litex.viewer.pdf_to_elem.call(null,pdf_viewer,zoom,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,lt.plugins.litex.viewer.kwpairf,p1__8432_SHARP_.split("\n")))));
});})(zoom,data,pdf_viewer,sync_box,output_split,restore_top,restore_left,viewer,pdfname))
,output_split);var bbleft = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,new cljs.core.Keyword(null,"h","h",1013904346),locs));var bbtop = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,((function (zoom,locs,bbleft,data,pdf_viewer,sync_box,output_split,restore_top,restore_left,viewer,pdfname){
return (function (p1__8433_SHARP_){return (new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(p1__8433_SHARP_) - new cljs.core.Keyword(null,"H","H",1013904314).cljs$core$IFn$_invoke$arity$1(p1__8433_SHARP_));
});})(zoom,locs,bbleft,data,pdf_viewer,sync_box,output_split,restore_top,restore_left,viewer,pdfname))
,locs));var bbright = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (zoom,locs,bbleft,bbtop,data,pdf_viewer,sync_box,output_split,restore_top,restore_left,viewer,pdfname){
return (function (p1__8434_SHARP_){return (new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(p1__8434_SHARP_) + new cljs.core.Keyword(null,"W","W",1013904329).cljs$core$IFn$_invoke$arity$1(p1__8434_SHARP_));
});})(zoom,locs,bbleft,bbtop,data,pdf_viewer,sync_box,output_split,restore_top,restore_left,viewer,pdfname))
,locs));var bbbottom = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",1013904360),locs));var bbwidth = (bbright - bbleft);var bbheight = (bbbottom - bbtop);var vleft = (function (){var or__6365__auto__ = restore_left;if(cljs.core.truth_(or__6365__auto__))
{return or__6365__auto__;
} else
{return pdf_viewer.scrollLeft;
}
})();var vwidth = pdf_viewer.clientWidth;var vright = (vleft + vwidth);var vtop = (function (){var or__6365__auto__ = restore_top;if(cljs.core.truth_(or__6365__auto__))
{return or__6365__auto__;
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
lt.plugins.litex.viewer.pdf_to_elem = (function pdf_to_elem(elem,zoom,loc){var map__8436 = loc;var map__8436__$1 = ((cljs.core.seq_QMARK_.call(null,map__8436))?cljs.core.apply.call(null,cljs.core.hash_map,map__8436):map__8436);var Page = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"Page","Page",1016384033));var H = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"H","H",1013904314));var W = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"W","W",1013904329));var v = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"v","v",1013904360));var h = cljs.core.get.call(null,map__8436__$1,new cljs.core.Keyword(null,"h","h",1013904346));var img = cljs.core.nth.call(null,lt.util.dom.children.call(null,elem),(Page - 1));if((cljs.core.not.call(null,img)) || (cljs.core._EQ_.call(null,img.id,"sync-box")))
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