import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function Sidebar() {
  let { path } = useRouteMatch();
  return (
    <div>
      {/* <input type="checkbox" id="check" /> */}
      {/* <label className="button bars" for="check">
        <i class="bx bx-menu"></i> */}
      {/* </label> */}
      <div className="side-bar">
        <div className="title">
          <div className="logo">Hellobox</div>
          {/* <label className="button cancel" for="check"> */}
            {/* <i class="bx bx-x"></i> */}
          {/* </label> */}
        </div>
        <ul className="ul">
          <li>
            <Link to={`${path}/dashboard`}>
              {/* <a> */}
                <i class="bx bx-category"></i>Dashboard
              {/* </a> */}
            </Link>
          </li>
          <li>
            <Link to={`${path}/user`}>
              {/* <a> */}
                <i class="bx bx-user"></i>User
              {/* </a> */}
            </Link>
          </li>
          {/* <li>
            <Link to={`${path}/katalogs`}>
              <a>
                <i class="bx bx-images"></i>Katalogs
              </a>
            </Link>
          </li> */}
          <li>
            <Link to={`${path}/patners`}>
              <i class="bx bx-store-alt"></i>
              Patners
            </Link>
          </li>
          <li>
            <Link to={`${path}/prodocts`}>
              {/* <a> */}
                <i class="bx bx-cart-alt"></i>Prodocts
              {/* </a> */}
            </Link>
          </li>
          <li>
            <Link to={`${path}/order`}>
              {/* <a> */}
                <i class="bx bx-transfer-alt"></i>Order
              {/* </a> */}
            </Link>
          </li>
          <li>
            <Link to={`${path}/news`}>
              {/* <a> */}
                <i class="bx bx-news"></i>News
              {/* </a> */}
            </Link>
          </li>
          <li>
            <Link to={`${path}/settings`}>
              {/* <a> */}
                <i class="bx bx-cog"></i>Settings
              {/* </a> */}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
