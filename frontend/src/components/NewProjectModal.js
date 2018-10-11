import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

function rand() { return Math.round(Math.random() * 20) - 10; }

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'fixed',
        width: theme.spacing.unit * 50,
        top: '50vh',
        left: '50vw',
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
        name: '',
        headline: '',
        companyName: '',
    };

    handleClose = () => { this.setState({ open: false }) };

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
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant='h4'>Create a New Project</Typography>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            id="outlined-name"
                            label="Name of the Project"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
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
                            defaultValue="foo"
                            value={this.state.headline}
                            onChange={this.handleChange('headline')}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
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
    } 
}

const NewProjectModalWrapped = withStyles(styles)(NewProjectModal);

export default connect(mapStateToProps, {  })(NewProjectModalWrapped);
