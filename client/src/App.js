import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import "./App.css";

import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import NavigationBar from "./components/NavigationBar";

function App() {
	const [search, setSearch] = useState("");

	return (
		<Router>
			<Provider store={store}>
				<NavigationBar
					setSearch={(e) => {
						setSearch(e);
					}}
				/>
				<Switch>
					<Route path="/detail/:id">
						<Detail />
					</Route>
					<Route path="/favorites">
						<Favorites />
					</Route>
					<Route path="/">
						<Dashboard search={search} />
					</Route>
				</Switch>
			</Provider>
		</Router>
	);
}

export default App;
