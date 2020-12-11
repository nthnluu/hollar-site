import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {LinearProgress} from '@material-ui/core';

class LoadingBar extends Component {
    render() {
        const {classes} = this.props;
        return <LinearProgress {...this.props} classes={{
            colorPrimary: classes.colorPrimary,
            barColorPrimary: classes.barColorPrimary
        }} style={{height: 2}}/>;
    }
}

const styles = props => ({
    colorPrimary: {
        backgroundColor: '#F97315',
    },
    barColorPrimary: {
        backgroundColor: '#ffe4ce',
    }
});

export default withStyles(styles)(LoadingBar);