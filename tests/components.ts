import * as fs from 'fs';
import * as path from 'path';

const UTF8 = 'utf8';
const MATCHES_TS_FILE = /\.tsx?/i;
const MATCHES_DEFAULT_EXPORT = /^export\sdefault\s(React\.memo\(|\w+\()?([^;)]+).*$/im;
const MATCHES_MEMO_NAMING = /Memo$/;
const TS_SOURCE_DIR = 'src/ts';
const COMPONENTS_DIR = path.join(process.cwd(), TS_SOURCE_DIR, 'components');
const INDEX_FILE_PATH = path.join(process.cwd(), TS_SOURCE_DIR, 'index.ts');

const getAllComponents = (directory: string): string[] => {
  if (!fs.existsSync(directory)) {
    throw new Error(`Could not find directory at ${directory}`);
  }

  const files = fs.readdirSync(directory);

  return files
    .reduce((memo, file) => {
      const filePath = path.join(directory, file);

      if (fs.statSync(filePath).isDirectory()) {
        return memo.concat(getAllComponents(filePath));
      }

      if (MATCHES_TS_FILE.test(filePath)) {
        return memo.concat(filePath);
      }

      return memo;
    }, [] as string[])
    .sort();
};

describe('components', () => {
  const components = getAllComponents(COMPONENTS_DIR);

  it('should all have a default and named export (for styleguidist)', () => {
    components.forEach(filePath => {
      const content = fs.readFileSync(filePath, UTF8);

      const defaultExport = MATCHES_DEFAULT_EXPORT.exec(content);

      if (!defaultExport) {
        throw new Error(`No default export in component at ${filePath}`);
      }

      const [, memo, componentName] = defaultExport;

      if (!memo) {
        throw new Error(
          `Default export "${componentName}" was not wrapped with React.memo`
        );
      }

      if (MATCHES_MEMO_NAMING.test(componentName)) {
        throw new Error(
          `Default export "${componentName}" should not end with container "Memo"`
        );
      }

      const matchesNamedExport = new RegExp(
        `^export\\s*{\\s*${componentName}\\s+as\\s+${componentName}\\s*}`,
        'm'
      );

      if (matchesNamedExport.test(content)) {
        throw new Error(`Unnecessary named export for "${componentName}"`);
      }
    });
  });

  it('should all be exported from the index file with their props', () => {
    components.forEach(filePath => {
      const content = fs.readFileSync(filePath, UTF8);

      const defaultExport = MATCHES_DEFAULT_EXPORT.exec(content);

      if (!defaultExport) {
        throw new Error(`No default export in component at ${filePath}`);
      }

      const [, , componentName] = defaultExport;

      if (!fs.existsSync(INDEX_FILE_PATH)) {
        throw new Error(`Could not find index file at ${INDEX_FILE_PATH}`);
      }

      const indexContent = fs.readFileSync(INDEX_FILE_PATH, UTF8);
      const indexRegex = new RegExp(
        `^export\\s+{\\s+default\\s+as\\s+${componentName},?\\s+${componentName}Props,?[^}]+}\\s+from\\s+'[a-z/.-]+';$`,
        'm'
      );

      if (!indexRegex.test(indexContent)) {
        throw new Error(
          `Component "${componentName}" is not exported from default at ${INDEX_FILE_PATH}`
        );
      }
    });
  });
});
