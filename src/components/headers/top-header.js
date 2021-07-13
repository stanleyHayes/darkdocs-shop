import React from "react";
import {Hidden} from "@material-ui/core";
import TopTabletHeader from "./top-tablet-header";
import TopDesktopHeader from "./top-desktop-header";

const TopHeader = () => {
    return (
        <React.Fragment>
            <Hidden mdDown={true}>
                <TopDesktopHeader />
            </Hidden>
            <Hidden only={['sm', 'xs', 'lg', 'xl']}>
                <TopTabletHeader />
            </Hidden>
        </React.Fragment>
    )
}

export default TopHeader;
