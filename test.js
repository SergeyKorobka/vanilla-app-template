import fs from 'fs';
import path from 'path';

export default function checkPathExists(config = {}) {
  const { rootDir = 'src', publicDir = 'public' } = config;
  const cwd = process.cwd();
  const srcPath = path.join(cwd, rootDir);
  const publicPath = path.join(srcPath, publicDir);

  return {
    name: 'check-path-exists',
    apply: 'serve',

    transformIndexHtml(html) {
      const urls = html.match(/(href|src|srcset)="([^"]*\.[^"]*)"/g) || [];
      urls.forEach(url => {
        const relPath = url
          .match(/(href|src|srcset)="([^"]*\.[^"]*)"/)[2]
          .split('#')[0]
          .split('?t=')[0];
        const paths = url.includes('srcset')
          ? relPath.split(',').map(p => p.trim().split(' ')[0])
          : [relPath];

        paths.forEach(p => {
          const absPath = path.join(srcPath, p);
          const publicAbsPath = p.startsWith('/')
            ? path.join(publicPath, p)
            : '';

          if (
            !p.startsWith('http') &&
            !p.startsWith('//') &&
            !fs.existsSync(absPath) &&
            !fs.existsSync(publicAbsPath)
          ) {
            throw new Error(
              `🚨 File or directory "${
                publicAbsPath || absPath
              }" in ${url} does not exist.`
            );
          }
        });
      });
      return html;
    },
  };
}
