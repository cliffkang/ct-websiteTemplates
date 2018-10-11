import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: theme.palette.background.paper,
    },
});

function Projects(props) {
    const { classes } = props;
    const projects = [{ title: 'RED' }];
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default" style={{ padding: '15px 0' }}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Typography variant="display2" color="inherit">
                        Projects
                    </Typography>
                    <Link to='/createProject'>
                        <Button 
                            variant='contained' 
                            color='secondary'
                            style={{ width: '250px'}}
                        >
                            Create New Project
                        </Button>
                    </Link>
                </Toolbar>
                <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {projects.map(project => {
                        return (
                            <ListItem style={{ 
                                width: '90%',
                                maxWidth: '550px', 
                                backgroundColor: 'white', 
                                borderRadius: '10px',
                                }}
                            >
                                <ListItemText primary={project.title} />
                                <Link to={`/projects/:id`}>
                                    <Button 
                                        variant='outlined' 
                                        color='primary'
                                    >
                                        Edit Existing
                                    </Button>
                                </Link>
                                <Link to={`/newProject/:id`}>
                                    <Button 
                                        variant='outlined'
                                        color='secondary'
                                    >
                                        Create New Version
                                    </Button>
                                </Link>
                            </ListItem>
                        );
                    })}
                </List>
            </AppBar>
        </div>
    );
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        projects : state.projects,
    } 
}

export default connect(mapStateToProps, {  })(withStyles(styles)(Projects));
