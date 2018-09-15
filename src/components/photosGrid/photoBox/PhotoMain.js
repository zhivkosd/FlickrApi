import React, { Component } from 'react';
import './PhotoMain.css';
const url = "https://www.flickr.com/photos/";

class PhotoMain extends Component {
    getUrl(title) {
        return url + this.props.owner + (title ? '/' + this.props.id : '');
    }
    render() {
        return (
            <div className="photo-main-info">
                <a className="photo-title cut-text" href={this.getUrl(true)}>
                    {this.props.title}
                </a>
                <span> by </span> 
                <a className="photo-author cut-text" href={this.getUrl()}>
                    {this.props.ownername}
                </a>
            </div>
        );
    }
}

export default PhotoMain;
