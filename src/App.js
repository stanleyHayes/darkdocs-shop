import './App.css';
import {Switch, Route} from 'react-router-dom';
import DashboardPage from "./pages/dashboard/dashboard-page";
import ProfilePage from "./pages/profile/profile-page";
import OrdersPage from "./pages/orders/orders-page";
import EditProfilePage from "./pages/profile/edit-profile-page";
import ChangePasswordPage from "./pages/authentication/change-password-page";
import ForgotPasswordPage from "./pages/authentication/forgot-password-page";
import VerifyAccountPage from "./pages/authentication/verify-account-page";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact={true} path="/" component={DashboardPage}/>
                <Route exact={true} path="/profile" component={ProfilePage}/>
                <Route exact={true} path="/orders" component={OrdersPage}/>
                <Route exact={true} path="/edit-profile" component={EditProfilePage}/>
                <Route exact={true} path="/auth/change-password" component={ChangePasswordPage}/>
                <Route exact={true} path="/auth/forgot-password" component={ForgotPasswordPage}/>
                <Route exact={true} path="/auth/verify-account" component={VerifyAccountPage}/>
            </Switch>
        </div>
    );
}

export default App;
