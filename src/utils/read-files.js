import { pathToFileURL } from 'url';
import { readdirSync } from 'fs';
import { join } from 'path';

export const readFolder = async(path) => {
  const files = readdirSync(join(process.cwd(), path));
  const modules = await Promise.all(
    files.map(async(file) => {
      const module = await import(pathToFileURL(join(process.cwd(), path, file)));
      return module;
    }),
  );

  return modules;
};
