import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; //Tenemos que importar todas las propiedades, es decir en este caso la etiqueta
import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import BadgeEdit from "../pages/BadgeEdit"

function App() {
  return (
      <BrowserRouter>
        {/* Nuestro elemento principal solamente debe de tener un solo hijo */}
        <Layout>
          <Switch>
            {/* Similar al Switch de programacion, hace que solo eligamos una ruta */}
            <Route exact path="/badges" component={Badges} />{" "}
            {/* Seran nuestros directorios, tiene exact path porque de otra manera el switch se confundira y abrira otra ruta ya que badges y badges/new coinciden al inicio */}
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route component={NotFound}/>
            <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} /> {/* El badgeId es una variable, la cual si estara definida en nuestra URL pero sera variable, sera un valor generico */}
          </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;