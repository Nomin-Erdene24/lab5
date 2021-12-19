import "./App.css";
import React from "react";
import Nomin from "../ugugdul/ugugdul";
import Yurunhii from "../yurunhii/Yurunhii";
import Header from "../header/Header";
import { HashRouter, Route, Routes} from "react-router-dom";
// import Huudas from "../huudas/Huudas";
import Ylgah from "../ylgah/Ylgah";
import Uni from "../uni/Uni";
import Filter from "../filter/Filter";
// import SearchInput from "../SearchInput";
import SearchInput from "../SearchInput/index"
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ugugdul: Nomin
    };
  }
  render() {
    let cats = [];
    cats = this.state.ugugdul.map((el) => el.type);
    cats = Uni(cats);
    return (
      <HashRouter>
      <div>
        <div>
         <Header prop={this.state.ugugdul} />
          <Routes>
          <Route
                  path="/"
                  exact
                  element={<Yurunhii medeelel={this.state.ugugdul} /> }
                />
                
           {cats.map((el) => {
                  return (
                    <Route
                      path={`/${el}`}
                      exact
                      element={<Filter prop={this.state.ugugdul} />}
                    />
                  );
                })}
                {this.state.ugugdul.map((el) => {
                  return (
                    <Route
                      path={`/${el.type}/${el.id}`}
                      exact
                      element={<Ylgah prop={this.state.ugugdul} />}
                    />
                  );
                })}
          </Routes>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
