import React, { Component } from 'react';
import './PhotoDescription.css';

class PhotoDescription extends Component {
    render() {
        return (
            <div className="photo-description" title={this.props.desc}>
                {this.props.desc}
            </div>
        );
    }
}

export default PhotoDescription;
