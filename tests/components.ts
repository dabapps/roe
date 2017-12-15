import * as fs from 'fs';
import * as path from 'path';

const UTF8 = 'utf8';
const MATCHES_COMPONENT = /\.tsx?/i;
const MATCHES_DEFAULT_EXPORT = /^export\sdefault\s([^;]+).*$/im;
const COMPONENTS_DIR = path.join(process.cwd(), 'src/ts/components');

const getAllComponents = (directory: string): string[] => {
  if (!fs.existsSync(directory)) {
    throw new Error(`Could not find directory at ${directory}`);
  }

  const files = fs.readdirSync(directory);

  return files.reduce((memo, file) => {
    const filePath = path.join(directory, file);

    if (fs.statSync(filePath).isDirectory()) {
      return memo.concat(getAllComponents(filePath));
    }

    if (MATCHES_COMPONENT.test(filePath)) {
      return memo.concat(filePath);
    }

    return memo;
  }, [] as string[]).sort();
};

describe('components', () => {

  it('should all export a named class and as default (for styleguidist)', () => {
    const components = getAllComponents(COMPONENTS_DIR);

    components.forEach((filePath) => {
      const content = fs.readFileSync(filePath, UTF8);

      const defaultExport = MATCHES_DEFAULT_EXPORT.exec(content);

      if (!defaultExport) {
        throw new Error(`No default export in component at ${filePath}`);
      }

      const classRegex = new RegExp(`^export class ${defaultExport[1]}`, 'm');

      if (!classRegex.test(content)) {
        throw new Error(`Default export is not exported as a named class at ${filePath}`);
      }
    });
  });

});
