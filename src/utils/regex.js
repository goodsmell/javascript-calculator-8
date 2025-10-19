export const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export const makeDelimiterRegex = (delims) => new RegExp(delims.map(escapeRegex).join('|'), 'g');
