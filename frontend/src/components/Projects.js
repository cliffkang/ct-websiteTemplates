import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Project from './Project';

const ProjectsDiv = styled.div`
	background: #efefef;
`;

class Projects extends Component {
    state= {
        projects: [],
    };
	render() {
		return (
			<ProjectsDiv>
                <h2>Projects</h2>
                {this.state.projects.map(project => {
                    return( <Project /> );
                })}
			</ProjectsDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	} 
}

export default connect(mapStateToProps, {  })(Projects);
