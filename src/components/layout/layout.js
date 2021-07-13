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
                paddingTop: 112
            },
            appBar: {}

        }
    });

    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appBar} variant="outlined">
                <TopDesktopHeader/>
                <DesktopNavigationHeader/>
            </AppBar>
            <div className={classes.content}>
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout;
