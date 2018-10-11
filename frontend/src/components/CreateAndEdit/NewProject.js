import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import '../../css/NewProject.css';
import { updateProject } from '../../actions';

class NewProject extends Component {
	constructor(props) {
		super(props)
		this.state = {
			companyName: this.props.project.companyName,
			headline: this.props.project.headline,
			selectedEle: '',
			templateIDs: ['companyName', 'headline'],
		}
		this.htmlRef = React.createRef();
	}

	// const css = getComputedStyle(doc)
	
	// manipulate css
	// const doc = document.getElementById('id')
	// const css = doc.getAttribute('style');
	// css[attributeToBeChanged] = valueToBeChanged;
	// doc.setAttribute('style', css);

	componentDidMount() {
		const ele = document.getElementById('new-project-container');
		const css = window.getComputedStyle(ele, null);
		const html = this.htmlRef.current;
		this.props.updateProject({ html, css });
	}

	handleChange = name => event => {
		const newValue = event.target.innerHTML;
		const html = this.htmlRef.current;
		this.props.updateProject({ [name]: newValue, html });
	}

	handleClick = event => {
		const ele = event.target;
		ele.style.border = '1px solid lightblue';
		ele.setAttribute('contentEditable', true);
	}

	render() {
		return (
			<div id='new-project-container' ref={this.htmlRef}>
				<h3 id='companyName' 
					contentEditable='false' 
					onClick={this.handleClick} 
					onInput={this.handleChange('companyName')}
					>{this.state.companyName}</h3>
				<h1 id='headline'
					contentEditable='false'
					onClick={this.handleClick}
					onInput={this.handleChange('headline')}
				>
					{this.state.headline}
				</h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		project: state.project
	} 
}

export default connect(mapStateToProps, { updateProject })(NewProject);
