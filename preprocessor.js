const ts = require('typescript');
const tsConfig = require('./tsconfig.json');

module.exports = {
  process(src, path) {
    if (path.endsWith('.ts') || path.endsWith('.tsx')) {
      const fileNames = [path.toString()];
      const options = tsConfig.compilerOptions;

      const program = ts.createProgram(fileNames, options);
      const allDiagnostics = ts.getPreEmitDiagnostics(program);

      allDiagnostics.forEach(diagnostic => {
        const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');

        console.error(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
      });

      if (allDiagnostics.length) {
        process.exit(1);
      }

      const result = ts.transpileModule(
        src,
        tsConfig,
        path,
        []
      );

      return result.outputText;
    } else if (path.endsWith('.js') || path.endsWith('.jsx')) {
      throw new Error(`This is not a TypeScript file: "${path.toString()}"`);
    }

    return src;
  }
};
