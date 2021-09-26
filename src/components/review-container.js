//a container inside of a Movie that houses Review components -- SHould contain 1) Review form
//import ReviewForm from './review-form';
import React from 'react';
import ReviewList from './review-list';
import ReviewForm from './review-form';

//A parent class of ReviewForm and ReviewList
export default class ReviewContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			reviewGroup: [],
			name: props.name,
			review: props.review,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updateReview = this.updateReview.bind(this);
		this.displayList = this.displayList.bind(this);
	}

	//method to map through array and display on review list
	displayList(review) {
		const displayReview = this.state.reviewGroup;
		const listItems = displayReview.map((review) => (
			<li
				key={displayReview.toString()}
				value={displayReview}
				className="list-group">
				{review}
			</li>
		));
		return (
			<div>
				<ul>{listItems}</ul>
			</div>
		);
	}

	//Update Name in state -- build within parent class
	updateReview(review) {
		this.setState({ review: review });
		console.log(review);
	}

	//Update Review in state -- build within parent class -- pass down function in review form
	updateName(name) {
		this.setState({ name: name });
		console.log(name);
	}

	//This is working -- handleSubmit tied to form -- pass prop here
	handleSubmit(event) {
		console.log('button is clicked');
		let { reviewGroup, name, review } = this.state;
		reviewGroup.push([name, review]);
		this.setState({ reviewGroup: [...this.state.name, this.state.review] });
		alert(
			`Thank you, ${this.state.name}, your review was submitted successfully!`
		);
		this.displayList(this.state.reviewGroup);
		//event.preventDefault();
		//console.log(event.target.name.value);
		//console.log(this.state.review);
		console.log(this.state.reviewGroup);
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						{/* Create a prop of a function in here */}
						<ReviewForm
							handleSubmit={this.handleSubmit}
							updateName={this.updateName}
							updateReview={this.updateReview}
						/>
					</div>
					<div className="row">
						<div className="col mx-3">
							<ReviewList displayList={this.displayList} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
