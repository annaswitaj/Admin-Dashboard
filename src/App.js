import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>

          <Route exact path="/users">
            <UserList />

          </Route>
          <Route exact path="/user/:userId">
            <User />
          </Route>
    
          <Route exact path="/newUser">
            <NewUser />
          </Route>

          <Route exact path="/products">
            <ProductList />
          </Route>

          <Route exact path="/product/:productId">
            <Product/>
          </Route>

          <Route exact path="/newproduct">
            <NewProduct />
          </Route>

          <Route path="/">

            <Home />
          </Route>



        </Switch>

      </div>

    </Router>
  );
}

export default App;
