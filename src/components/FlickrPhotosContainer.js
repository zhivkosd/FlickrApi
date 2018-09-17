import React, {Component} from 'react';
import SearchInput from './SearchInput';
import PhotosGrid from './photosGrid/PhotosGrid';
import './FlickrPhotosContainer.css';

const DEFAULT_BOX_COUNT = 24;
const MAX_BOXES_PER_PAGE = 120;
const DEFAULT_PAGE = 1;
const LOAD_MORE_AFTER_PAGE = 5;
const DEFAULT_FILTER = 'recent';
class FlickrPhotosContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: '',
            filter: DEFAULT_FILTER,
            step: DEFAULT_BOX_COUNT,
            page: DEFAULT_PAGE
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.updateGrid = this.updateGrid.bind(this);
    }

    handlePhotoPaging(state, props) {
        if (DEFAULT_PAGE + state.page > LOAD_MORE_AFTER_PAGE) {
            return {
                step: MAX_BOXES_PER_PAGE,
                page: state.page + DEFAULT_PAGE
            }
        }
        return { page: state.page + DEFAULT_PAGE };
    }

    componentDidMount() {
        this.callApiAndUpdateState();
    }

    async callFlickrApy() {
        const res = await fetch(this.getFlickrApiEndPoint());
        const resJson = await res.json();

        if (res.status !== 200) throw Error(resJson.message);
        return resJson.photos || '';
    }

    callApiAndUpdateState() {
        this.callFlickrApy()
            .then(res => {
                this.setState(this.handlePhotoPaging);
                this.setState({
                    photos: res
                })
            })
            .catch(err => console.log(err));
    }

    getFlickrApiEndPoint() {
        let flickrApiEndPoint = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=583e7d5741d00d6696a80b27339c183e&extras=owner_name,description,tags&safe_search=1&privacy-filter=public&format=json&nojsoncallback=1';
        flickrApiEndPoint += `&per_page=${this.state.step}&page=${this.state.page}&tags=${this.state.filter}`;
        return flickrApiEndPoint
    }

    handleScroll() {
        this.callFlickrApy()
        .then(res => {
            this.setState(this.handlePhotoPaging);
            this.setState((state) => {
                const photos = state.photos;
                photos.photo = [...photos.photo, ...res.photo];
                
                return {
                    photos: photos
                }
            })
        })
        .catch(err => console.log(err));
    }

    updateGrid(filter) {
        if (filter && filter !== this.state.filter) {
            this.setState({
                filter: filter,
                page: DEFAULT_PAGE
            });
            this.callApiAndUpdateState();
        } else if (!filter) {
            this.setState({
                filter: 'recent'
            });
            this.callApiAndUpdateState();
        }
    }

    render() {
        return (
            <div className="flickr-photos-container">
                <SearchInput 
                    filter={this.state.filter}
                    updateGrid={this.updateGrid}
                />
                <PhotosGrid 
                    photos={this.state.photos} 
                    filter={this.state.filter}
                    loadMore={this.handleScroll}
                />
                {this.state.photos && this.state.photos.photo.length ? (
                    ''
                ) : (
                    <div className="empty">
                        Nothing to display
                    </div>
                )}
            </div>
        );
    }
}

export default FlickrPhotosContainer;
