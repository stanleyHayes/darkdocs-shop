import React from "react";
import Footer from "../footer/footer";
import {AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import TopHeader from "../headers/top-header";
import NavigationHeader from "../headers/navigation-header";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            content: {
                paddingTop: 142,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '85vh',
                backgroundColor: theme.palette.background.default
            },
            appBar: {},
            root: {},
            footer: {},
            main: {
                flexGrow: 1
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} variant="outlined">
                <TopHeader/>
                <NavigationHeader/>
            </AppBar>
            <div className={classes.content}>
                <div className={classes.main}>
                    {children}
                </div>
                <div className={classes.footer}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Layout;
