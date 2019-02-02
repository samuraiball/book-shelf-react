import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import CardMedia from "@material-ui/core/es/CardMedia/CardMedia";
import Typography from "@material-ui/core/es/Typography/Typography";

const style = {
    card: {
        marginTop: 60,
        maxWidth: 300,
        height: 105,
        display: 'flex'
    },
    content: {
        flex: '1 0 auto',
        padding: 0
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    MuiCardContent: {
        paddingLeft: 16
    },
    pic: {
        height: 105,
        width: 105
    }
};

class BookCard extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.pic}
                        image="http://www.revealingthelink.com/img/more_about_ida/the_book.jpg"
                        title="a sample book"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <CardContent>
                                <Typography component="h5" variant="h5">
                                    title
                                </Typography>
                                <Typography component="subtitle1" variant="textSecondary">
                                    title
                                </Typography>
                            </CardContent>
                        </CardContent>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withStyles(style)(BookCard)
