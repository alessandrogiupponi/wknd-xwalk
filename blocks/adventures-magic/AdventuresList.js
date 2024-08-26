// eslint-disable-next-line import/no-unresolved
import { h, Component } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import AdventureItem from './AdventureItem.js';

const html = htm.bind(h);
const REACT_APP_DEFAULT_AUTHOR_HOST = process.env;

export async function performQuery() {
  const headers = {
    Authorization: `Basic ${btoa('admin:admin')}`,
  };
  return fetch(`${REACT_APP_DEFAULT_AUTHOR_HOST}graphql/execute.json/wknd/adventures-all`, {
  // return fetch('https://localhost:8443/graphql/execute.json/wknd/adventures-all', {
    method: 'GET',
    headers,
  }).then((response) => {
    if (!response.ok) {
      return null;
    }
    return response.json();
  }).then((data) => data);
}

export async function getAdventures() {
  return performQuery().then((adventuresData) => {
    if (!adventuresData?.data?.adventureList?.items) {
      return null;
    }

    return adventuresData?.data?.adventureList?.items;
  });
}

class AdventuresList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      adventures: [],
    };
  }

  componentDidMount() {
    getAdventures().then((data) => {
      this.setState({
        loading: false,
        adventures: data,
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render(props, state) {
    if (state.loading) return html`<div>Loading...</div>`;
    return html`${state.adventures.map((adventure) => html`<${AdventureItem} adventure=${adventure} />`)}`;
  }
}

export default AdventuresList;
