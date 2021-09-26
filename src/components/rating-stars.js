//Create the star rating to place in movie component
import React from 'react';
import Star from './star';

const grades = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

const activeStar = {
	fill: 'yellow',
};

//const [gradeIndex, setGradeIndex] = useState();

//Parent class of the Star Component
export default class RatingStars extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			grade: props.grade,
			index: props.index,
		};
	}

	//Need a method for when the stars are clicked, an event happens
	changeGradeIndex(index) {
		//setGradeIndex(index);
	}

	render() {
		return (
			<div className="container p-2">
				<div className="stars flex-wrap">
					{grades.map((grade, index) => (
						<Star
							index={index}
							key={grade}
							changeGradeIndex={this.changeGradeIndex}
							// style={gradeIndex > index ? activeStar : {}}
						/>
					))}
				</div>
			</div>
		);
	}
}
