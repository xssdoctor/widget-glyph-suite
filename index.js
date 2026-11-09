import { glyph } from "glyph-core";

export function renderGlyph(status) {
  return glyph(status);
}

export function renderGlyphList(rows) {
  return rows.map((row) => `${row.name}: ${renderGlyph(row.status)}`);
}
