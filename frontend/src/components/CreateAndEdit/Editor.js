import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveProject } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import BackgroundColorModal from './EditModals/BackgroundColorModal';
import CSSModal from './EditModals/CSSModal';
import ExportModal from './EditModals/ExportModal';

const EditorDiv = styled.div`
	background: #efefef;
`;

const styles = () => ({
    root: {
        flexGrow: '1',
    },
    appBar: {
        padding: '10px 0',
    },
    button: {
        padding: '0 15px',
    }
});
class Editor extends Component {
    // on export, get rid of hover/border properties from css
    state = {
        backgroundBool: false,
        cssBool: false,
        exportBool: false,
        redirectFlag: false,
    }
    handleClick = name => event => {
        const nameBool = !this.state[name];
        this.setState({ [name] : nameBool }, () => {
            console.log('state postClick', this.state);
        });
    }

     handleSave = async () => { 
        await this.props.saveProject(this.props.project)
        this.setState({ redirectFlag: true });
    }

	render() {
        const { classes } = this.props;
		return (
			<EditorDiv className={classes.root}>
                <AppBar className={classes.appBar} position="static" color='default' size='large'>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                        <div style={{ margin: '0 50px 0 20px' }} className='selected-edits'>
                            <Button 
                                onClick={this.handleClick('backgroundBool')} 
                                variant='contained'
                                color='primary'>
                                Change background color
                            </Button>
                            <Button
                                style={{ marginLeft: '20px' }}
                                onClick={this.handleClick('cssBool')} 
                                variant='contained'
                                color='primary'>
                                Edit css
                            </Button>
                        </div>
                        <Button variant='outlined' color='primary'>PROJECT NAME: {this.props.project.projectName}</Button>
                        <div>
                            <Button 
                                onClick={this.handleClick('exportBool')} 
                                variant='outlined' 
                                color='secondary'
                                style={{ margin: '0 20px 0 50px' }}>
                                Export
                            </Button>
                            <Button 
                                onClick={this.handleSave} 
                                variant='contained' 
                                color='secondary'
                                size='large'
                                style={{ margin: '0 20px 0 0' }}>
                                SAVE
                            </Button>
                        </div>
                    </div>
                </AppBar>
                {this.state.backgroundBool ? 
                    <BackgroundColorModal 
                        handleClose={this.handleClick('backgroundBool')} 
                        open={this.state.backgroundBool}/> : null}
                {this.state.cssBool ? 
                    <CSSModal 
                        handleClose={this.handleClick('cssBool')} 
                        open={this.state.cssBool}/> : null}
                {this.state.exportBool ? 
                    <ExportModal 
                        handleClose={this.handleClick('exportBool')} 
                        open={this.state.exportBool}/> : null}
                {this.state.redirectFlag ? <Redirect to='/createHome' /> : null}
			</EditorDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {
        project: state.project,
	} 
}

export default connect(mapStateToProps, { saveProject })(withStyles(styles)(Editor));
