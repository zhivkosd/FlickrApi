import React, {Component} from 'react';
import './ImageContainer.css';

class ImageContainer extends Component {
    getImageUrl() {
        return `https://farm${this.props.farm}.staticflickr.com/${this.props.server}/${this.props.id}_${this.props.secret}_m.jpg`;
    }
    render() {
        return (
            <div className="image-container">
                <img src={this.getImageUrl()} alt={this.props.title} />
            </div>
        );
    }
}

export default ImageContainer;
