import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Projects from '../Projects';
import ResponsiveCreator from '../ResponsiveCreator';

const CreateHomeDiv = styled.div`
`;

class CreateHome extends Component {
	render() {
		return (
			<CreateHomeDiv>
                <ResponsiveCreator>
                    <Projects />
                </ResponsiveCreator>
			</CreateHomeDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	} 
}

export default connect(mapStateToProps, {  })(CreateHome);
