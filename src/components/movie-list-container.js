/*
This is my parent container and where i'll house my state and create my feed -- this will be placed in App.js

Movie Component: image, summaryReview Container: Review Form, Star Rating, List of Reviews
*/
import React from "react";
import Movie from "./movie";

//Parent Class - house state of App
export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className='container'>
                <Movie />
            </div>
        )
    }
}
