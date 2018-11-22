import React from 'react';
import PropTypes from 'prop-types';

/*Material UI Components*/
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { BrowserRouter, Redirect } from 'react-router-dom';

/*Own Components*/

const styles = theme => ({
    onTop: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1101,
        height: 3,
    }
});


class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    login = () => {
        this.props.setAuth(true);
        window.location = "/Dashboard"
    }

    componentDidMount = () => {
        this.render();
    }

    render() {
        const { classes } = this.props;
        return (
            <p onClick={() => this.login()}>Login</p>

        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);