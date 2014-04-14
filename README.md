LiTeX: A LaTeX plugin for Light Table
====================================
LiTeX is a plugin for [Light Table][1] providing support for LaTex
documents.  It features integrated compilation and a PDF viewer.
Forward and reverse syncing between the editor and the viewer are
provided with [SyncTeX][2].

[1]: http://www.lighttable.com/
[2]: http://itexmac.sourceforge.net/SyncTeX.html

Install
-------
LiTeX is available in the plugins repository.  Alternatively, you can
clone this repository into your plugins folder:

 * Linux: *~/.config/LightTable/plugins/*
 * Mac: *~/Library/Application Support/LightTable/plugins/*
 * Windows: *%APPDATALOCAL%\LightTable\plugins\*

You may need to reload your behaviors or restart Light Table to get
everything loaded properly.

You'll need TeX installed, of course.  For the PDF viewer, you also need
the command-line programs `pdftoppm` and `pdfinfo`, part of [Poppler][3]
or [Xpdf][4].  Linux users should find this in their repositories, if
they aren't already installed.  (On Debian-based systems, they're in the
*poppler-utils* package.)  A version for Windows is available on the
[Xpdf download page][5].  The Mac package linked to on that page does
not contain the pdftoppm binary, but I've heard that `brew install
poppler` works.

[3]: http://poppler.freedesktop.org/
[4]: http://www.foolabs.com/xpdf/home.html
[5]: http://www.foolabs.com/xpdf/download.html

Usage
-----
After loading a TeX file, the eval commands (see below) will save
the file, run LaTeX on it, and display the resultant PDF in the
integrated viewer.  A forward sync command highlights the paragraph
where your cursor is. (Hit Ctrl-Space and search for *LiTeX: forward
sync*.)  With Ctrl held, clicking on the PDF will perform a reverse sync
and move the cursor to the relevant line in your editor.

There are two compilation options, named *file* and *project*.  *File*
is bound to the *eval.one* trigger (`Ctrl`-`Enter` by default) and
*project* to *eval* (`Ctrl`-`Shift`-`Enter`), but they are otherwise
identical.  You may use one to compile individual files and the other
for a large project, one to do a quick compilation and the other to
fully regenerate the project, or something else.  Each has three
settings that you may set:

* *filename*: The name of the TeX file, for use in the next two
settings.  By default it's set to `null`, in which case the name of the
current file is used, if it's a TeX file, or the name of the most
recently compiled file.  It can be a relative filename, in which case it
is resolved relative to the directory containing the current file, or an
absolute filename.  You probably only need this is you're working on a
project with several TeX files.

* *commands*: The commands to run.  Either
  * a list of strings, each one a command to be run.  The substitution
    patterns below will be replaced with values derived from *filename*.
  * one of `"pdflatex"` (the default), `"latex-dvipdf"`, or
    `"latex-dvips-ps2pdf"`, to call those commands with appropriate
    arguments.

* *outputname*: The name of the PDF file created by this command.  The
substitution patterns may be used, and the default is `"%b.pdf"`.

Pattern | Substitution value
:------:|:------------------
  `%f`  | name of file
  `%p`  | full path of file
  `%d`  | directory of file
  `%b`  | base name, without file extension
  `%e`  | file extension
  `%%`  | a percent sign

These settings are read from two JSON-formatted files, first *litexrc*
in your configuration directory (*~/.config* on Linux,
*~/Library/Application Support* on Mac, or *%APPDATALOCAL%* on Windows)
and then *.litexrc* in the current directory.  The commands to edit
LiTeX settings will open these files for you.These JSON object may have
two attributes, `"file"` and `"project"`, each of which may have
attributes `"filename"`, `"commands"`, and `"outputname"`.  As an
example:
```JSON
{ "file": { "commands": "latex-dvipdf" },
  "project": { "filename": "main.tex",
               "commands": ["bibtex %b",
                            "pdflatex -halt-on-error --synctex=1 %f"] } }
```
If you are editing *chapter1.tex*, for example, and you press
`Ctrl`-`Enter`, `latex` and `dvipdf` will be run on *chapter1.tex*, and
the PDF viewer will open *chatper1.pdf*.  When you press
`Ctrl`-`Shift`-`Enter`, however, `bibtex` and `pdflatex` will be run on
*main.tex*, and the PDF viewer will open *main.pdf*.  If you switch to
editing *refs.bib*, you can still build *main.pdf* with
`Ctrl`-`Shift`-`Enter`.

Make sure that no commands will stop and wait for input is there is a
problem, as LiTeX doesn't offer a way to enter input.  Practically, this
means you should call `latex` with the `-halt-on-error` option.

All commands are run from the directory containing *filename*.  If
you're doing something that requires commands run in several different
directories, you're probably better off using makefiles or something
like [latexmk][6] or [rubber][7].  Just set `"commands": ["make"]`, and
you should be all set.

[6]: http://users.phys.psu.edu/~collins/software/latexmk-jcc/
[7]: https://launchpad.net/rubber/

License
-------
LiTeX is copyright 2014 Robert Schroll and others, released under
the GPLv3.  See the LICENSE file for details.  The source is
available at http://github.com/rschroll/litex.
