// eslint-disable-next-line import/no-unresolved
import { h, render } from 'https://esm.sh/preact';
// eslint-disable-next-line import/no-unresolved
import htm from 'https://esm.sh/htm';
import { readBlockConfig } from '../../scripts/aem.js';
import { AdventuresList } from './AdventuresList.js';

const html = htm.bind(h);

export default async function decorate(block) {
  const config = readBlockConfig(block);
  render(html`<${AdventuresList} ...${config} block=${block} />`, block);
}
