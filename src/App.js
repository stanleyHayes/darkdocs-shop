import './App.css';
import React from "react";
import {Route, Switch,} from 'react-router-dom';
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
import ChequesPage from "./pages/cheques/cheques-page";
import FundsPage from "./pages/funds/funds-page";
import ProductsPage from "./pages/products/products-page";
import ProtectedRoute from "./components/shared/protected-route";

function App() {

    return (
        <ScrollToTop>
            <Switch>
                <ProtectedRoute exact={true} path="/" component={DashboardPage}/>
                <ProtectedRoute exact={true} path="/profile" component={ProfilePage}/>
                <ProtectedRoute exact={true} path="/orders" component={OrdersPage}/>
                <ProtectedRoute exact={true} path="/products" component={ProductsPage}/>
                <ProtectedRoute exact={true} path="/funds" component={FundsPage}/>
                <ProtectedRoute exact={true} path="/cheques" component={ChequesPage}/>
                <ProtectedRoute exact={true} path="/edit-profile" component={EditProfilePage}/>
                <ProtectedRoute exact={true} path="/auth/change-password" component={ChangePasswordPage}/>
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
