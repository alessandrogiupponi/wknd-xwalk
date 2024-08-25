/* eslint-disable object-curly-spacing, class-methods-use-this */
// eslint-disable-next-line import/no-unresolved
import { h, Component } from 'https://esm.sh/preact';
// eslint-disable-next-line import/no-unresolved
import htm from 'https://esm.sh/htm';

const html = htm.bind(h);

class AdventureItem extends Component {
  constructor(props) {
    super(props);
    this.director = props.film.director;
    this.title = props.film.title;
    this.releaseDate = props.film.releaseDate;
    this.producers = props.film.producers;
    this.id = props.film.id;
  }

  clicked(id) {
    window.location.href = `/films/film/${id.replaceAll('=', '-')}`;
  }

  render() {
    return html`<div class="table-row">
            <div class="table-body-cell clickable" onclick=${() => this.clicked(this.id)}>${this.title}</div>
            <div class="table-body-cell">${this.director}</div>
            <div class="table-body-cell">${this.releaseDate}</div>
            <div class="table-body-cell">
                ${this.producers.map((producer) => html`<div>${producer}</div>`)}
            </div>
        </div>`;
  }
}

export default AdventureItem;
