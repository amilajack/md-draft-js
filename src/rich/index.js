import bold from './bold';
import italic from './italic';
import list from './list';
import quote from './blockquote';
import code from './codeblock';
import heading from './heading';
import hr from './hr';

export function handleKeyCommand(state, command) {
  switch (command) {
    case 'bold':
      return bold(state);
    case 'italic':
      return italic(state);
    case 'hr':
      return hr(state);
    case 'quote':
      return quote(state);
    case 'code':
      return code(state);
    case 'ul':
      return list(state);
    case 'ol':
      return list(state, true);
    case 'heading':
      return heading(state);
    default:
      return state;
  }
}