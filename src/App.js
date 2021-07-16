import './App.css';
import React, {useEffect} from "react";
import {Switch, Route, useHistory} from 'react-router-dom';
import DashboardPage from "./pages/dashboard/dashboard-page";
import ProfilePage from "./pages/profile/profile-page";
import OrdersPage from "./pages/orders/orders-page";
import EditProfilePage from "./pages/profile/edit-profile-page";
import ChangePasswordPage from "./pages/authentication/change-password-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import VerifyAccountPage from "./pages/authentication/verify-account-page";
import RegisterPage from "./pages/authentication/register-page";
import LoginPage from "./pages/authentication/login-page";
import ScrollToTop from "./components/shared/scroll-to-top";
import ResetPasswordPage from "./pages/authentication/reset-password-page";
import {DARKDOCS_SHOP_TOKEN_KEY} from "./constants/constants";

function App() {

    const history = useHistory();
    const token = localStorage.getItem(DARKDOCS_SHOP_TOKEN_KEY);
    useEffect(() => {
        if(token){
            history.push('/');
        }else {
            history.push('/auth/login');
        }
    }, [history, token]);
    return (
        <ScrollToTop>
            <Switch>
                <Route exact={true} path="/" component={DashboardPage}/>
                <Route exact={true} path="/profile" component={ProfilePage}/>
                <Route exact={true} path="/orders" component={OrdersPage}/>
                <Route exact={true} path="/edit-profile" component={EditProfilePage}/>
                <Route exact={true} path="/auth/change-password" component={ChangePasswordPage}/>
                <Route exact={true} path="/auth/forgot-password" component={ForgotPasswordPage}/>
                <Route exact={true} path="/auth/verify-account" component={VerifyAccountPage}/>
                <Route exact={true} path="/auth/register" component={RegisterPage}/>
                <Route exact={true} path="/auth/login" component={LoginPage}/>
                <Route exact={true} path="/auth/reset-password" component={ResetPasswordPage}/>
            </Switch>
        </ScrollToTop>
    );
}

export default App;
