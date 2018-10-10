import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const ProjectDiv = styled.div`
	background: #efefef;
`;

class Project extends Component {
	render() {
		return (
			<ProjectDiv>
			</ProjectDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	} 
}

export default connect(mapStateToProps, {  })(Project);
