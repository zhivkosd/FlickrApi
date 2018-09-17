import React, {Component} from 'react';
import PhotoBox from './photoBox/PhotoBox';
import './PhotosGrid.css';
import InfiniteScroll from 'react-infinite-scroller';

class PhotosGrid extends Component {
    render() {
        const photos = this.props.photos && this.props.photos.photo;
        
        return (
            <div className="photos-grid">
                <div className="photos-grid-header">
                    <h2>Current Tag: {this.props.filter}</h2>
                </div>
                <InfiniteScroll
                    loadMore={this.props.loadMore}
                    hasMore={photos.length ? true : false}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    initialLoad={false}
                >
                    {photos ? (
                        photos.map((item, idx) => {
                            return (
                                <PhotoBox photoItem={item} key={idx}/>
                            );
                        })
                    ) : (
                        ''
                    )}
                </InfiniteScroll>
                
            </div>
        );
    }
}

export default PhotosGrid;
