import React, {Component} from 'react';
import PhotoBox from './photoBox/PhotoBox';
import './PhotosGrid.css';

class PhotosGrid extends Component {
    render() {
        const photos = this.props.photos && this.props.photos.photo;
        
        return (
            <div className="photos-grid">
                <div className="photos-grid-header">
                    <h2>Current Tag: {this.props.filter}</h2>
                </div>
                {photos ? (
                    photos.map((item, idx) => {
                        return (
                            <PhotoBox photoItem={item} key={idx}/>
                        );
                    })
                ) : (
                    ''
                )}
            </div>
        );
    }
}

export default PhotosGrid;
