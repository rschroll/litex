LiTeX: A LaTeX plugin for Light Table
====================================
LiTeX is a plugin for [Light Table][1] providing support for LaTex
documents.  It features integrated compilation and a PDF viewer.
Forward and reverse syncing between the editor and the viewer are
provided with [SyncTeX][2]

[1]: http://www.lighttable.com/
[2]: http://itexmac.sourceforge.net/SyncTeX.html

Install
-------
To install, just clone this repository into your plugins folder:

 * Linux: `~/.config/LightTable/plugins/`
 * Mac: `~/Library/Application Support/LightTable/plugins/`
 * Windows: `%APPDATALOCAL%\\LightTable\\plugins\\`

Restart Light Table, and you should be all set.

Alternatively, you can install LiTeX from the plugins repository.

You'll need TeX installed, of course.  At the moment, you also need
pdftoppm, a utility from [Poppler][3] or [Xpdf][4], to create
bitmaps of the pages for the PDF viewer.  This should be in the
repositories of any Linux distribution, if not already installed.  I
don't know what the situation is for Mac or Windows.

[3]: http://poppler.freedesktop.org/
[4]: http://www.foolabs.com/xpdf/home.html

Usage
-----
After loading a TeX file, the eval commands (normally bound to
Ctrl-Enter and Ctrl-Shift-Enter) will save the file, run LaTeX on
it, and display the resultant PDF in the integrated viewer.  A
forward sync command highlights the paragraph where your cursor is.
(Hit Ctrl-Space and search for *LiTeX: forward sync*.)  With Ctrl
held, clicking on the PDF will perform a reverse sync and move the
cursor to the relevant line in your editor.

Right now, the compilation settings are hard-coded in, but I hope to
fix that soon.  In the meantime, you can edit
`src/lit/plugins/litex.cljs` to set the process you want.  You
should make sure that LaTeX won't ask for input, so `-halt-on-error`
is a good idea.  Set `--synctex=1` if you want the syncing to work.

License
-------
LiTeX is copyright 2014 Robert Schroll and others, released under
the GPLv3.  See the LICENSE file for details.  The source is
available at http://github.com/rschroll/litex.
