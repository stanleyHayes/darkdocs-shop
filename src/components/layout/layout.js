import React, {useState} from "react";
import Footer from "../footer/footer";
import {AppBar, SwipeableDrawer} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import TopHeader from "../headers/top-header";
import NavigationHeader from "../headers/navigation-header";
import DrawerContent from "../drawer/drawer-content";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        return {
            content: {
                paddingTop: 142,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '85vh',
                backgroundColor: theme.palette.background.default,
                [theme.breakpoints.down('sm')]: {
                    paddingTop: 64,
                    minHeight: '93vh'
                }
            },
            appBar: {},
            root: {
            },
            footer: {},
            main: {
                flexGrow: 1
            }
        }
    });

    const classes = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    }

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} variant="outlined">
                <TopHeader
                    handleDrawerClose={handleDrawerClose}
                    handleDrawerOpen={handleDrawerOpen}
                />
                <NavigationHeader
                    handleDrawerClose={handleDrawerClose}
                    handleDrawerOpen={handleDrawerOpen}
                />
            </AppBar>
            <div className={classes.content}>
                <div className={classes.main}>
                    {children}
                </div>
                <div className={classes.footer}>
                    <Footer/>
                </div>
            </div>
            <SwipeableDrawer
                onClose={handleDrawerClose}
                onOpen={handleDrawerOpen}
                open={drawerOpen}>
                <DrawerContent handleDrawerClose={handleDrawerClose}/>
            </SwipeableDrawer>
        </div>
    )
}

export default Layout;
