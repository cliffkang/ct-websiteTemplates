import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ResponsiveCreator from './ResponsiveCreator';
import NewProjectModal from './NewProjectModal';
import NewProject from './NewProject';

const CreateProjectDiv = styled.div`
	background: #efefef;
`;

class CreateProject extends Component {
    render() {
        let { project }= this.props;
        project = [{ companyName: 'clicktool' }];
        const projectExist = Object.keys(project).length ? true : false;
		return (
			<CreateProjectDiv>
                <ResponsiveCreator>
                    {projectExist ? 
                        <NewProject />
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
