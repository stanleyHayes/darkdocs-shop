import React from "react";
import {Hidden} from "@material-ui/core";
import DesktopNavigationHeader from "./desktop-navigation-header";
import MobileNavigationHeader from "./mobile-navigation-header";
import TabletNavigationHeader from "./tablet-navigation-header";

const NavigationHeader = () => {
    return (
        <React.Fragment>
            <Hidden mdDown={true}>
                <DesktopNavigationHeader />
            </Hidden>
            <Hidden mdUp={true}>
                <MobileNavigationHeader />
            </Hidden>

            <Hidden only={['sm', 'xs', 'lg', 'xl']}>
                <TabletNavigationHeader />
            </Hidden>
        </React.Fragment>
    )
}

export default NavigationHeader;
