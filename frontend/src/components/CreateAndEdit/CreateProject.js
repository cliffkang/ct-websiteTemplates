import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ResponsiveCreator from '../ResponsiveCreator';
import NewProjectModal from './NewProjectModal';
import NewProjectEditor from './NewProjectEditor';

const CreateProjectDiv = styled.div`
	background: #efefef;
`;

class CreateProject extends Component {
    render() {
        let { project } = this.props;
        const projectExist = Object.keys(project).length ? true : false;
		return (
			<CreateProjectDiv>
                <ResponsiveCreator>
                    {projectExist ? 
                        <NewProjectEditor />
                    :
                        <NewProjectModal />
                    }
                </ResponsiveCreator>
			</CreateProjectDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
        project: state.project
	} 
}

export default connect(mapStateToProps, {  })(CreateProject);
