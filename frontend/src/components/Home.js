import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const HomeDiv = styled.div`
	background: #efefef;
`;

class Home extends Component {
	render() {
		return (
			<HomeDiv>
			</HomeDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	} 
}

export default connect(mapStateToProps, {  })(Home);
