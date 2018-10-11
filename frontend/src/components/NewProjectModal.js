import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
        position: 'absolute',
        width: theme.spacing.unit * 50,
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
    };

    handleClose = () => { this.setState({ open: false }) };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { classes } = this.props;
        console.log('comes into NewProjectModal.js');
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-uncontrolled"
                        label="Uncontrolled"
                        defaultValue="foo"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />
                        <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />
                        <TextField
                        error
                        id="outlined-error"
                        label="Error"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />
                        <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-email-input"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        />
                    </form>
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
