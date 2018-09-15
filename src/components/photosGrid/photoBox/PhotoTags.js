import React, { Component } from 'react';
import './PhotoTags.css';

class PhotoTags extends Component {
    render() {
        let tags = this.props.tags.split(' ').join(', ');
        
        return (
            <div className="photo-tags" title={tags}>
                <span>Tags:</span> {tags}
            </div>
        );
    }
}

export default PhotoTags;
