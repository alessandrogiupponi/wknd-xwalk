/* eslint-disable object-curly-spacing, class-methods-use-this */
import { h, Component } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

class AdventureItem extends Component {
  constructor(props) {
    super(props);
    this.adventurePrice = props.adventure.adventurePrice;
    this.adventureTitle = props.adventure.adventureTitle;
    this.adventurePrimaryImage = props.adventure.adventurePrimaryImage;
    this.adventureTripLength = props.adventure.adventureTripLength;
    // eslint-disable-next-line no-underscore-dangle
    this.path = props.adventure._path;
    this.slug = props.adventure.slug;
  }

  render() {
    return html`<div class="adventure-item">
            <div class="adventure-image-card" >
                <img class="adventure-item-image" src="http://localhost:4502/${this.adventurePrimaryImage._path}" />
                <div class="adventure-item-price">${this.adventurePrice}</div> 
            </div>
            <div class="adventure-item-title"><p>${this.adventureTitle}</p></div>
        </div>`;
  }
}

export default AdventureItem;
