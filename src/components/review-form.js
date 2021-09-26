import React from 'react';
import RatingStars from './rating-stars';
//import Star from './star';

export default class ReviewForm extends React.Component {
	constructor(props) {
		super(props);
		this.sendName = this.sendName.bind(this);
		this.sendReview = this.sendReview.bind(this);
		this.submitMe = this.submitMe.bind(this);
	}
	//Submit Form Prop
	submitMe(event) {
		this.props.handleSubmit(this.props.name, this.props.review);
		event.preventDefault();
		document.getElementById('name').value = ' ';
		document.getElementById('review').value = ' ';
	}

	//Submit Name Prop
	sendName = (event) => {
		this.props.updateName(event.target.value);
		console.log(event.target.value);
	};

	sendReview = (event) => {
		this.props.updateReview(event.target.value);
	};

	render() {
		return (
			<div className="container">
				<form className="card-body" onSubmit={this.submitMe}>
					<h5 className="card-header text-center">Submit a Review</h5>
					<div className="mb-3 mt-3">
						<label className="form-label">Name</label>
						<input
							type="text"
							id="name"
							name={this.props.name}
							onChange={this.sendName}
							className="form-control"
							placeholder="First Name"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Review</label>
						<input
							type="text"
							className="form-control"
							id="review"
							review={this.props.review}
							onChange={this.sendReview}
							placeholder="Leave Review"
						/>
					</div>
					<div>
						<RatingStars />
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		);
	}
}
