import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import BackgroundColorModal from './EditModals/BackgroundColorModal';
import CSSModal from './EditModals/CSSModal';
import ExportModal from './EditModals/ExportModal';

const EditorDiv = styled.div`
	background: #efefef;
`;

class Editor extends Component {
    // on export, get rid of hover/border properties from css
    state = {
        backgroundBool: false,
        cssBool: false,
        exportBool: false,
    }
    handleClick = name => event => {
        const nameBool = !this.state[name];
        this.setState({ [name] : nameBool });
    }

	render() {
		return (
			<EditorDiv>
                <AppBar>
                    <div className='selected-edits'>
                        <Button onClick={this.handleClick('backgroundBool')}>
                            Change background color
                        </Button>
                        {this.state.backgroundBool ? <BackgroundColorModal /> : null}
                        <Button onClick={this.handleClick('cssBool')}>
                            Edit css
                        </Button>
                        {this.state.cssBool ? <CSSModal /> : null}
                    </div>
                    <Button onClick={this.handleClick('exportBool')} variant='contained'>
                        Export
                    </Button>
                    {this.state.exportBool ? <ExportModal /> : null}
                </AppBar>
			</EditorDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	} 
}

export default connect(mapStateToProps, {  })(Editor);
