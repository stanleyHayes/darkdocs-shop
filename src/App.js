import './App.css';
import {Switch, Route} from 'react-router-dom';
import DashboardPage from "./pages/dashboard/dashboard-page";
import ProfilePage from "./pages/profile/profile-page";
import OrdersPage from "./pages/orders/orders-page";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact={true} path="/" component={DashboardPage}/>
                <Route exact={true} path="/profile" component={ProfilePage}/>
                <Route exact={true} path="/orders" component={OrdersPage}/>
            </Switch>
        </div>
    );
}

export default App;
