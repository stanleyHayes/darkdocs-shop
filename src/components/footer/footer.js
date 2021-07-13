import React from "react";
import {Container, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const Footer = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                backgroundColor: theme.palette.primary.dark,
                paddingTop: 16,
                paddingBottom: 16
            },
            copyright: {
                color: theme.palette.text.primary,
            }
        }
    });

    const classes = useStyles();

    return (
        <footer className={classes.container}>
            <Container>
                <Typography className={classes.copyright} align="center" variant="body1" gutterBottom={true}>
                    Copyright © {new Date().getFullYear()} Darkdocs Shop.
                </Typography>
                <Typography className={classes.copyright}  align="center" variant="body2">
                    All rights reserved.
                </Typography>
            </Container>
        </footer>
    )
}

export default Footer;
