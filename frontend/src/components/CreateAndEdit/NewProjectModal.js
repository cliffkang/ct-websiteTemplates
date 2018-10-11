import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createProject } from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        margin: '50px auto',
        minHeight: '370px',
        maxHeight: '400px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

class NewProjectModal extends React.Component {
    state = {
        open: true,
        projectName: '',
        headline: '',
        companyName: '',
    };

    handleClose = () => {
        const { projectName, headline, companyName } = this.state;
        this.props.createProject({ projectName, headline, companyName }, () => {
            this.setState({ open: false }) 
        });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div className={classes.paper}>
                    <Typography variant='h4'>Create a New Project</Typography>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            id="outlined-name"
                            label="Name of the Project"
                            className={classes.textField}
                            value={this.state.projectName}
                            onChange={this.handleChange('projectName')}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-company-name"
                            label="Your company name"
                            value={this.state.companyName}
                            onChange={this.handleChange('companyName')}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-headline"
                            label="The Best Headline Ever"
                            value={this.state.headline}
                            onChange={this.handleChange('headline')}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <Button 
                            style={{ marginTop: '15px' }} 
                            size='large' 
                            color='primary' 
                            variant='contained' 
                            onClick={this.handleClose}
                        >
                            Save
                        </Button>
                    </FormControl>
                </div>
            </Modal>
        );
    }
}

NewProjectModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        project: state.currentProject
    } 
}

export default connect(mapStateToProps, { createProject })(withStyles(styles)(NewProjectModal));
