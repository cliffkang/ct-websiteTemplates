import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ProjectsDiv = styled.div`
	background: #efefef;
`;

class Projects extends Component {
	render() {
		return (
			<ProjectsDiv>
			</ProjectsDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	} 
}

export default connect(mapStateToProps, {  })(Projects);
