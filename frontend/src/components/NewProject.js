import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ProjectDiv = styled.div`
	background: #efefef;
`;

class Project extends Component {
	state= {
		companyName: 'Clicktool',
		// headline: this.props.project.headline,
		selectedEle: '',
	}

	// const doc = document.getElementById('id')
	// const html = doc.outerHTML
	// const css = getComputedStyle(doc)
	
	// manipulate css
	// const doc = document.getElementById('id')
	// const css = doc.getAttribute('style');
	// css[attributeToBeChanged] = valueToBeChanged;
	// doc.setAttribute('style', css);

	render() {
		return (
			<ProjectDiv>
				<div id='companyLogo'></div>
				<h3 id='companyName'>{this.state.companyName}</h3>
				<div id='headline'>{this.state.headline}</div>
			</ProjectDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		project: state.currentProject
	} 
}

export default connect(mapStateToProps, {  })(Project);
