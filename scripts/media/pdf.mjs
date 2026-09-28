// Ghostscript rasterizer for PDF masters (RESEARCH §Code Examples, Pitfall 5).
// One page per gs call (-dFirstPage/-dLastPage): a page-list option would number its
// outputs by position, not by page number, so it is never used. -dSAFER is always on:
// the PDF is local and trusted, but the interpreter still runs with file access
// restricted. Arguments are an array (no shell). The PNG always lands under
// media-src/.tmp/ and is removed at exit.
import { join, resolve, sep } from "node:path";
import { MEDIA_SRC, run } from "./util.mjs";

const TMP_DIR = join(MEDIA_SRC, ".tmp");

export function renderPdfPage(pdfAbs, page, dpi, outPng) {
  if (!Number.isInteger(page) || page < 1) throw new Error(`pdf page must be an integer ≥ 1`);
  if (!Number.isInteger(dpi) || dpi < 72 || dpi > 600) {
    throw new Error(`pdf dpi must be an integer in 72..600`);
  }
  if (!resolve(outPng).startsWith(TMP_DIR + sep)) {
    throw new Error(`pdf output must stay inside media-src/.tmp/: ${outPng}`);
  }
  run("gs", [
    "-q",
    "-dSAFER",
    "-dBATCH",
    "-dNOPAUSE",
    "-sDEVICE=png16m",
    `-r${dpi}`,
    "-dTextAlphaBits=4",
    "-dGraphicsAlphaBits=4",
    "-dUseCropBox",
    `-dFirstPage=${page}`,
    `-dLastPage=${page}`,
    "-o",
    outPng,
    pdfAbs,
  ]);
  return outPng;
}
