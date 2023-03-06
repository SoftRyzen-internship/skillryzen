import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

export function formatCode(code: string): string {
  const options: any = {
    parser: 'babel',
    plugins: [parserBabel],
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    useTabs: false,
    tabWidth: 2,
  };

  return prettier.format(code, options);
}