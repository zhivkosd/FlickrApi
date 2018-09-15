import React, {Component} from 'react';
import ImageContainer from './ImageContainer';
import PhotoMain from './PhotoMain';
import PhotoDescription from './PhotoDescription';
import PhotoTags from './PhotoTags';
import './PhotoBox.css';

class PhotoBox extends Component {
    render() {
        const photoItem = this.props.photoItem;

        return (
            <div className="photo-box">
                <ImageContainer 
                    farm={photoItem.farm}
                    server={photoItem.server}
                    id={photoItem.id}
                    secret={photoItem.secret}
                    title={photoItem.title}
                />
                <PhotoMain 
                    owner={photoItem.owner}
                    id={photoItem.id}
                    ownername={photoItem.ownername}
                    title={photoItem.title}
                />
                <PhotoDescription
                    desc={photoItem.description._content}
                />
                <PhotoTags 
                    tags={photoItem.tags}
                />
            </div>
        );
    }
};

export default PhotoBox;
