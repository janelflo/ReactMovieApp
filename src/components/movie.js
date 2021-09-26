//Movie component that will go into the MoveList Container
import React from 'react';
import img from './img/movie-icon.jpeg';
import ReviewContainer from './review-container';

export default class Movie extends React.Component {
	render() {
		return (
			<div className="container card w-50 mt-3">
				<img
					src={img}
					width="300px"
					className="img-thumbnail mt-3 rounded mx-auto d-block"
					alt="cinema icon"
				/>
				<div className="card-body">
					<h3 className="card-title text-center">Movie Title</h3>
					<p className="card-text mx-4 text-center">
						<strong>Rated:</strong> PG <br />
						<strong> Movie Summary: </strong> Some quick example
						text.
					</p>
				</div>
				<div className="mb-3">
					<ReviewContainer />
				</div>
			</div>
		);
	}
}
