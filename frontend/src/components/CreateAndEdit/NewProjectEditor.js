import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewProject from './NewProject';
import Editor from './Editor';

const NewProjectEditorDiv = styled.div`
	background: #efefef;
`;

class NewProjectEditor extends Component {
	render() {
		return (
			<NewProjectEditorDiv>
                <Editor />
                <NewProject />
			</NewProjectEditorDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	} 
}

export default connect(mapStateToProps, {  })(NewProjectEditor);
