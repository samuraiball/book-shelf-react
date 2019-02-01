import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';


const style = {
    color: {
        background: '#ff5252'
    },
    box: {
        display: 'block'
    },
    card: {
        marginTop: 60,
        margin: 'auto',
        maxWidth: 320,
        height: 305
    },
    form: {
        margin: 'auto',
        maxWidth: 250
    },
    textBox: {
        width: 250
    },
    button:{
        margin: 'auto',
        width: 250
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
};

class LoginPage extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar className={classes.color}>
                        Book-Shelf
                    </Toolbar>
                </AppBar>
                <div>
                    <Card className={classes.card}>
                        <AppBar position="static">
                            <Toolbar className={classes.color}>
                                Sing in to Book-Shelf
                            </Toolbar>
                        </AppBar>
                        <CardContent>
                            <div>
                                <div className={classes.form}>
                                    <TextField
                                        className={classes.textBox}
                                        id="filled-password-input"
                                        label="E-mail"
                                        type="usrname"
                                        autoComplete="current-username"
                                        margin="none"
                                        variant="filled"
                                    />
                                </div>
                                <div className={classes.form}>
                                    <TextField
                                        className={classes.textBox}
                                        id="filled-password-input"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                        variant="filled"
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" className={classes.button}>
                                login
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withStyles(style)(LoginPage);
