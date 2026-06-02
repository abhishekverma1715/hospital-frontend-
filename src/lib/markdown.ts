// Minimal, dependency-free Markdown -> HTML renderer.
//
// Content for patient-education articles is authored in the admin dashboard as
// plain text with light Markdown (paragraphs, headings, bold/italic, lists,
// links, blockquotes, code, rules). We render a safe subset on the server.
//
// Raw HTML in the source is escaped (never injected verbatim) so a content
// editor cannot inject markup or scripts — only the formatting below renders.

const ESCAPE_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
};

function escapeHtml(text: string): string {
  return text.replace(/[&<>]/g, (ch) => ESCAPE_MAP[ch]);
}

// Only allow URLs that are safe to navigate to. Anything else becomes "#".
function sanitizeUrl(url: string): string {
  const trimmed = url.trim();
  if (/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(trimmed)) {
    return trimmed;
  }
  return '#';
}

// Inline formatting. Input MUST already be HTML-escaped.
function renderInline(text: string): string {
  let out = text;

  // Inline code first, so its contents aren't treated as other formatting.
  out = out.replace(/`([^`]+)`/g, (_m, code) => `<code>${code}</code>`);

  // Links: [label](url)
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, url) => {
    const href = sanitizeUrl(url);
    const external = /^https?:\/\//i.test(href);
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<a href="${href}"${attrs}>${label}</a>`;
  });

  // Bold before italic so "**x**" isn't consumed by the italic rule.
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  out = out.replace(/(^|[^a-zA-Z0-9])_([^_]+)_/g, '$1<em>$2</em>');

  return out;
}

export function renderMarkdown(markdown: string): string {
  if (!markdown) return '';

  // Detect block structure on the RAW text, then HTML-escape each text
  // segment before inline formatting. (Escaping up front would turn the
  // blockquote ">" marker into "&gt;" and break detection.)
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');

  const html: string[] = [];
  let paragraph: string[] = [];

  // Escape each raw line, join multi-line text with <br />, then format inline.
  const inlineLines = (raw: string[]): string =>
    renderInline(raw.map(escapeHtml).join('<br />'));
  const inlineLine = (raw: string): string => renderInline(escapeHtml(raw));

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${inlineLines(paragraph)}</p>`);
      paragraph = [];
    }
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Blank line ends a paragraph.
    if (trimmed === '') {
      flushParagraph();
      i++;
      continue;
    }

    // Heading: # .. ######
    const heading = /^(#{1,6})\s+(.*)$/.exec(trimmed);
    if (heading) {
      flushParagraph();
      const level = heading[1].length;
      html.push(`<h${level}>${inlineLine(heading[2].trim())}</h${level}>`);
      i++;
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      flushParagraph();
      html.push('<hr />');
      i++;
      continue;
    }

    // Blockquote: one or more consecutive ">" lines
    if (/^>\s?/.test(trimmed)) {
      flushParagraph();
      const quote: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        quote.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      html.push(`<blockquote>${inlineLines(quote)}</blockquote>`);
      continue;
    }

    // Unordered list: -, *, or + followed by a space
    if (/^[-*+]\s+/.test(trimmed)) {
      flushParagraph();
      const items: string[] = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*+]\s+/, ''));
        i++;
      }
      html.push(`<ul>${items.map((it) => `<li>${inlineLine(it)}</li>`).join('')}</ul>`);
      continue;
    }

    // Ordered list: "1." style
    if (/^\d+\.\s+/.test(trimmed)) {
      flushParagraph();
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      html.push(`<ol>${items.map((it) => `<li>${inlineLine(it)}</li>`).join('')}</ol>`);
      continue;
    }

    // Otherwise: accumulate into the current paragraph.
    paragraph.push(trimmed);
    i++;
  }

  flushParagraph();
  return html.join('\n');
}

// Estimated reading time in minutes, based on ~200 words per minute.
export function readingTime(markdown: string): number {
  if (!markdown) return 1;
  const words = markdown
    .replace(/[#>*_`[\]()-]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
