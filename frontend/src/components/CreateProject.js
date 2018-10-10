import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const CreateProjectDiv = styled.div`
	background: #efefef;
`;

class CreateProject extends Component {
	render() {
		return (
			<CreateProjectDiv>
			</CreateProjectDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	} 
}

export default connect(mapStateToProps, {  })(CreateProject);
