import * as fs from 'fs';
import * as path from 'path';

const UTF8 = 'utf8';
const MATCHES_TS_FILE = /\.tsx?/i;
const MATCHES_BAD_COMPONENT_IMPORT = /from\s*'.*components.*';?$/im;
const TESTS_DIR = path.join(process.cwd(), 'tests');

const getAllTests = (directory: string): string[] => {
  if (!fs.existsSync(directory)) {
    throw new Error(`Could not find directory at ${directory}`);
  }

  const files = fs.readdirSync(directory);

  return files
    .reduce((memo, file) => {
      const filePath = path.join(directory, file);

      if (fs.statSync(filePath).isDirectory()) {
        return memo.concat(getAllTests(filePath));
      }

      if (MATCHES_TS_FILE.test(filePath)) {
        return memo.concat(filePath);
      }

      return memo;
    }, [] as string[])
    .sort();
};

describe('tests imports', () => {
  const tests = getAllTests(TESTS_DIR);

  it('should all import components from the index file', () => {
    tests.forEach(filePath => {
      const content = fs.readFileSync(filePath, UTF8);

      if (MATCHES_BAD_COMPONENT_IMPORT.test(content)) {
        throw new Error(
          `Tests should only import components from the /src/ts/ index file but found reference to /components/ in ${filePath}`
        );
      }
    });
  });
});
