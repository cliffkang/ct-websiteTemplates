import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const TemplateDiv = styled.div`
	background: #efefef;
`;

class Template extends Component {
	render() {
		return (
			<TemplateDiv>
			</TemplateDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	} 
}

export default connect(mapStateToProps, {  })(Template);
