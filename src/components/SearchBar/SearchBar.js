import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

let sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    renderSortByOptions(){
        // my code - try it later to see if it works - it returns a list of <li>s
        // let options = [];
        // for(let option in sortByOptions){
        //     options.push(<h1 key={sortByOptions[option]}>option</h1>);
        // }
        // return options;

        //codecademey suggestion
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        })
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {/* putting the method to use - codecademy version  */}
                        {this.renderSortByOptions}                        
                    </ul>
                </div>
                <div class="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}
export default SearchBar;