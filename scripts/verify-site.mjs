import { readFile } from 'node:fs/promises';

const html = await readFile('index.html', 'utf8');
const required = [
  '<title>NBO — Novo Business Order</title>',
  'class="brand-name">NBO</span>',
  'data-lang="en"',
  'data-lang="es"',
  'id="briefBtn"',
  'LET YOUR WORK FLOW.'
];

for (const marker of required) {
  if (!html.includes(marker)) {
    throw new Error(`Missing required NBO site marker: ${marker}`);
  }
}

const forbidden = [
  'client-project-starter',
  'raw.githubusercontent.com/ejnburrows-rgb/tucker-pool-crm'
];

for (const marker of forbidden) {
  if (html.includes(marker)) {
    throw new Error(`Retired dependency or identity still present: ${marker}`);
  }
}

console.log('NBO site verification passed.');
