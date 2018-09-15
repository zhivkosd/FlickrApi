import React, {Component} from 'react';
import './SearchInput.css';
let timer = 0;
const BACKSPACE = 8;

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    handleKeyUp(e) {
        let value = e.target.value;

        if (value && value.length >= 3) {
            clearTimeout(timer);
            
            timer = setTimeout(() => {
                this.props.updateGrid(value);
            }, 500);
        } else if (!value && e.keyCode === BACKSPACE) {
            clearTimeout(timer);
            
            timer = setTimeout(() => {
                this.props.updateGrid(null);
            }, 500);
        }
    }
    render() {
        return (
            <div className="search-input">
                <input
                    type="text" 
                    placeholder="Search for Flickr photos by Tag"
                    onKeyUp={this.handleKeyUp}
                />
            </div>
        );
    }
}

export default SearchInput;