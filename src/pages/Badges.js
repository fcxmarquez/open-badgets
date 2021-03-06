import React from "react";
import "./styles/Badges.css";
import BadgesList from "../components/BadgesList";
import { Link } from "react-router-dom";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import Miniloader from "../components/Miniloader";
import BadgeHero from "../components/BadgeHero";
import Skeleton from "react-loading-skeleton";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(
      this.fetchData,
      10000
    ); /* define un intervalo donde se ejecutarael primer argumento */
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({
      loading: true,
      error: null,
    }); /* Volvemos a declarar el loading true por si volvemos en el futuro a utilizar fetchData */

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    /* Como vemos hacemos un manejo por cada estado de la peticion */
    if (this.state.loading === true && !this.state.data) {
      return (
        <React.Fragment>
          <Skeleton height={163} />;
          <div className="Badge__container">
            <div className="Badges__buttons">
              <Skeleton width={145} height={54}/>
            </div>
            {new Array(5).fill(1).map((_, i) => {
              return <Skeleton width={548} height={112}/>;
            })}
          </div>
        </React.Fragment>
      );
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    } /* Elegimos que hacer en caso de que ocurra un error */

    return (
      <React.Fragment>
        <BadgeHero>
          <h1 className="Badges-title">Speakers</h1>
        </BadgeHero>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList
                badges={this.state.data}
                isLoading={this.state.loading}
              />
              {this.state.loading && <Miniloader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
