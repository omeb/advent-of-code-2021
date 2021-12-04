import { readFileSync } from 'fs';
import path from 'path';

const dirname = path.resolve();

export default (fileName) => readFileSync(path.resolve(dirname, fileName)).toString().trim();
