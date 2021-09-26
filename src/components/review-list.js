import React from 'react';

export default class ReviewList extends React.Component {
	render() {
		return (
			<div className="container card mt-4">
				<div className="card-body">
					<ul className="list-group">
						<li>
							{this.props.name} {this.props.review}
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
