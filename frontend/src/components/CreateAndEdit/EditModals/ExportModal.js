import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
const fs = require('fs');
const createHTML = require('create-html');

const styles = theme => ({
    paper: {
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        margin: '50px auto',
        maxHeight: '400px',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class SimpleModal extends React.Component {
    state = {
        open: this.props.open,
    };

    handleClose = () => {
        this.props.handleClick();
    };

    handleExportHTML = () => {
        console.log('html', this.props.project.html);
        const html = createHTML({
            title: 'example',
            // css: this.props.project.css,
            html: this.props.project.html,
        })
        console.log('html pre-write', html);
        fs.writeFile('./example.html', html, (err) => {
            if(err) console.log(err);
            console.log('write completed!');
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div className={classes.paper}>
                        <Button onClick={this.handleExportHTML}>Export as html</Button>
                        <Button>Export as website</Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        project: state.project,
    } 
}

export default connect(mapStateToProps, {  })(withStyles(styles)(SimpleModal));
