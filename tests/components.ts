import * as fs from 'fs';
import * as path from 'path';

const UTF8 = 'utf8';
const MATCHES_TS_FILE = /\.tsx?/i;
const MATCHES_DEFAULT_EXPORT = /^export\sdefault\s([^;]+).*$/im;
const TS_SOURCE_DIR = 'src/ts';
const COMPONENTS_DIR = path.join(process.cwd(), TS_SOURCE_DIR, 'components');
const INDEX_FILE_PATH = path.join(process.cwd(), TS_SOURCE_DIR, 'index.ts');

const getAllComponents = (directory: string): string[] => {
  if (!fs.existsSync(directory)) {
    throw new Error(`Could not find directory at ${directory}`);
  }

  const files = fs.readdirSync(directory);

  return files
    .reduce(
      (memo, file) => {
        const filePath = path.join(directory, file);

        if (fs.statSync(filePath).isDirectory()) {
          return memo.concat(getAllComponents(filePath));
        }

        if (MATCHES_TS_FILE.test(filePath)) {
          return memo.concat(filePath);
        }

        return memo;
      },
      [] as string[]
    )
    .sort();
};

describe('components', () => {
  const components = getAllComponents(COMPONENTS_DIR);

  it('should all export a named class and the same class as default (for styleguidist)', () => {
    components.forEach(filePath => {
      const content = fs.readFileSync(filePath, UTF8);

      const defaultExport = MATCHES_DEFAULT_EXPORT.exec(content);

      if (!defaultExport) {
        throw new Error(`No default export in component at ${filePath}`);
      }

      const classRegex = new RegExp(
        `^export (class|const) ${defaultExport[1]}`,
        'm'
      );

      if (!classRegex.test(content)) {
        throw new Error(
          `Default export ${
            defaultExport[0]
          } is not exported as a named class or const at ${filePath}`
        );
      }
    });
  });

  it('should all be exported from the index file', () => {
    components.forEach(filePath => {
      const content = fs.readFileSync(filePath, UTF8);

      const defaultExport = MATCHES_DEFAULT_EXPORT.exec(content);

      if (!defaultExport) {
        throw new Error(`No default export in component at ${filePath}`);
      }

      if (!fs.existsSync(INDEX_FILE_PATH)) {
        throw new Error(`Could not find index file at ${INDEX_FILE_PATH}`);
      }

      const indexContent = fs.readFileSync(INDEX_FILE_PATH, UTF8);

      const indexRegex = new RegExp(
        `^export\\s+{\\s+default\\s+as\\s+${
          defaultExport[1]
        },?\\s+}\\s+from\\s+'[a-z/.-]+';$`,
        'm'
      );

      if (!indexRegex.test(indexContent)) {
        throw new Error(
          `Component ${
            defaultExport[1]
          } is not exported from default at ${INDEX_FILE_PATH}`
        );
      }
    });
  });
});
