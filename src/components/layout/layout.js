import React from "react";
import Footer from "../footer/footer";
import TopDesktopHeader from "../headers/top-desktop-header";
import DesktopNavigationHeader from "../headers/desktop-navigation-header";
import {AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            content: {
                paddingTop: 142,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '92vh',
                backgroundColor: theme.palette.background.default
            },
            appBar: {},
            root: {
            },
            footer: {

            },
            main: {
                flexGrow: 1
            }
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} variant="outlined">
                <TopDesktopHeader/>
                <DesktopNavigationHeader/>
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
