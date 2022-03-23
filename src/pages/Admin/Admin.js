import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderlist";
import Pizzaslist from "./Pizzalist";
import Userslist from "./Userlist";

export default function Admin() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  console.log(currentUser);
  const isAdmin = currentUser.isAdmin;
  console.log(isAdmin);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={"/admin/userslist"} style={{ color: "white" }}>
                Users List
              </Link>
            </li>
            <li>
              <Link to={"/admin/pizzaslist"} style={{ color: "white" }}>
                Pizzas List
              </Link>
            </li>
            <li>
              <Link to={"/admin/addpizza"} style={{ color: "white" }}>
                Add Pizza
              </Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"} style={{ color: "white" }}>
                Orders List
              </Link>
            </li>
          </ul>
          {/* <Router> */}
          {/* <Switch> */}
          {/* <Route path="/admin/*" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} exact />
            <Route path="/admin/orderslist" component={Orderslist} exact />
            <Route path="/admin/pizzaslist" component={Pizzaslist} exact />
            <Route path="/admin/addpizza" component={Addpizza} exact />
            <Route
              path="/admin/editpizza/:pizzaid"
              component={Editpizza}
              exact
            /> */}
          {/* </Switch> */}
          {/* </Router> */}
        </div>
      </div>
    </div>
  );
}
