import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <a href="#" id="menu-action">
            <i className="fa fa-bars" />
            <span>Close</span>
          </a>
          <div className="logo">{localStorage.getItem("Name")}</div>
        </div>
        <div className="sidebar">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-desktop" />
                <span>Desktop</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-server" />
                <span>Server</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-calendar" />
                <span>Calendar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-envelope-o" />
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-table" />
                <span>Data Table</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Content */}
        <div className="main">
          <div className="hipsum">
            <div className="jumbotron">
              <h1 id="hello,-world!">
                Hello, world!
                <a className="anchorjs-link" href="#hello,-world!">
                  <span className="anchorjs-icon" />
                </a>
              </h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <p>
                <a className="btn btn-primary" href="#" role="button">
                  Learn more
                </a>
              </p>
            </div>
            <p>
              Keffiyeh banjo keytar selfies. Actually plaid PBR&amp;B, High Life
              dreamcatcher kale chips master cleanse craft beer messenger bag
              locavore Brooklyn Blue Bottle. Freegan literally brunch kale chips
              small batch. Etsy iPhone gentrify photo booth. Lomo keffiyeh
              vinyl, distillery pop-up messenger bag kale chips post-ironic DIY
              90's keytar. Intelligentsia next level Pitchfork forage vinyl
              Marfa, normcore heirloom. Drinking vinegar asymmetrical roof
              party, yr artisan Carles mixtape jean shorts.
            </p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
            <p>
              Slow-carb fanny pack yr Brooklyn gentrify. Fanny pack keffiyeh
              taxidermy, ugh viral polaroid craft beer. +1 distillery Truffaut
              typewriter tousled crucifix, lo-fi butcher normcore skateboard.
              Drinking vinegar ugh whatever sriracha. Synth tofu viral butcher
              flexitarian. 3 wolf moon Schlitz plaid small batch kale chips
              blog. Fingerstache selfies freegan, Helvetica Neutra Brooklyn
              semiotics cred narwhal beard tousled leggings.
            </p>
            <div className="row">
              <div className="col-sm-6">
                <p>
                  Slow-carb fanny pack yr Brooklyn gentrify. Fanny pack keffiyeh
                  taxidermy, ugh viral polaroid craft beer. +1 distillery
                  Truffaut typewriter tousled crucifix, lo-fi butcher normcore
                  skateboard. Drinking vinegar ugh whatever sriracha. Synth tofu
                  viral butcher flexitarian. 3 wolf moon Schlitz plaid small
                  batch kale chips blog. Fingerstache selfies freegan, Helvetica
                  Neutra Brooklyn semiotics cred narwhal beard tousled leggings.
                </p>
              </div>
              <div className="col-sm-6">
                <p>
                  Slow-carb fanny pack yr Brooklyn gentrify. Fanny pack keffiyeh
                  taxidermy, ugh viral polaroid craft beer. +1 distillery
                  Truffaut typewriter tousled crucifix, lo-fi butcher normcore
                  skateboard. Drinking vinegar ugh whatever sriracha. Synth tofu
                  viral butcher flexitarian. 3 wolf moon Schlitz plaid small
                  batch kale chips blog. Fingerstache selfies freegan, Helvetica
                  Neutra Brooklyn semiotics cred narwhal beard tousled leggings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
