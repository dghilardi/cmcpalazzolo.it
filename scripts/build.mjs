import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';

// Serve the association's content in the initial HTML as well as in React.
await build();
try {
  await build({
    publicDir: false,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: '.prerender',
      rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  });
  const { render } = await import('../.prerender/entry-server.mjs');
  const template = await readFile('dist/index.html', 'utf8');
  if (!template.includes('<!--app-html-->')) {
    throw new Error('Manca il punto di inserimento HTML della pagina.');
  }
  await writeFile('dist/index.html', template.replace('<!--app-html-->', render()));
} finally {
  await rm('.prerender', { recursive: true, force: true });
}
