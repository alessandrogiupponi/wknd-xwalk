// eslint-disable-next-line import/no-unresolved
import { h, Component } from 'https://esm.sh/preact';
// eslint-disable-next-line import/no-unresolved
import htm from 'https://esm.sh/htm';
import AdventureItem from './AdventureItem.js';

const html = htm.bind(h);

class AdventuresList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      adventures: [],
    };
  }

  componentDidMount() {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    fetch('https://author-p117303-e1145208.adobeaemcloud.com/graphql/execute.json/wknd/adventures-all', {
      method: 'GET',
      headers,
    }).then((response) => {
      if (!response.ok) {
        return null;
      }
      return response.json();
    }).then((filmsData) => {
      if (!filmsData?.data?.allFilms?.films) {
        return null;
      }

      return filmsData?.data?.allFilms?.films;
    }).then((data) => {
      this.setState({
        loading: false,
        adventures: data,
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render(props, state) {
    if (state.loading) return html`<div>Loading...</div>`;
    return html`<div class="table">
        <div class="table-header">
            <div class="table-header-cell">
                Title
            </div>
            <div class="table-header-cell">
                Director
            </div>
            <div class="table-header-cell">
                Release Date
            </div>
            <div class="table-header-cell">
                Producers
            </div>
        </div>
        <div class="table-body">
            ${state.adventures.map((adventure) => html`<${AdventureItem} adventure=${adventure} />`)}
        </div>
       </div>`;
  }
}

export default AdventuresList;
