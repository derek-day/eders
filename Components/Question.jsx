// Question.js

import React, {Component} from "react";
import Options from "./Option";

class Question extends Component{
	render() {
		const {question, selectedOption, onOptionChange, onSubmit} = this.props;

		return(
			<div className="">
				<h3 className="mt-2">Question {question.id}</h3>
				<div className="ratio ratio-16x9 mt-2">
					<iframe src={question.url} title={question.title} allowFullScreen></iframe>
				</div>
				<h5 className="mt-3">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-3 mb-2">
					<Options
						options={question.options}
						selectedOption={selectedOption}
						onOptionChange={onOptionChange}
					/>
					<button type="submit" className="btn btn-primary mt-3">
						SUBMIT
					</button>
				</form>
				
			</div>
		)
	}
}

export default Question;
