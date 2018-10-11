import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ProjectDiv = styled.div`
	background: #efefef;
`;

class NewProject extends Component {
	constructor(props) {
		super(props)
		this.state = {
			companyName: 'Clicktool',
			// headline: this.props.project.headline,
			selectedEle: '',
			templateIDs: ['companyLogo', 'companyName', 'headline'],
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
		console.log('container', this.htmlRef.current);
	}

	render() {
		return (
			<div id='container' ref={this.htmlRef}>
				<div id='companyLogo'>THE BEST COMPANY LOGO</div>
				<h3 id='companyName'>{this.state.companyName}</h3>
				<div id='headline'>{this.state.headline}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		project: state.currentProject
	} 
}

export default connect(mapStateToProps, {  })(NewProject);
