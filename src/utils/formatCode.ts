import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';

export function formatCode(code: string): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    parser: 'babel',
    plugins: [parserBabel],
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    useTabs: false,
    tabWidth: 2,
  };
  try {
    if (code.includes('"')) {
      // use single quotes to wrap the code string
      // eslint-disable-next-line quotes
      const formattedCode = prettier.format("'" + code + "'", options);

      // remove the single quotes added for formatting
      return formattedCode.slice(1, -1);
    }
    return prettier.format(code, options);
  } catch (error) {
    return code;
  }
}
