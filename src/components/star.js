import React from 'react';

export default class Star extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			grade: props.grade,
			index: props.index,
		};
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<label className="star align-content-center">
							<input
								type="radio"
								name="rating"
								id={this.state.grade}
								value={this.state.index}
								className="stars_radio-input"
							/>
							<svg
								width="40"
								height="40"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#393939"
								strokeWidth="1"
								strokeLinecap="round"
								strokeLinejoin="round">
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
							</svg>
						</label>
					</div>
				</div>
			</div>
		);
	}
}
