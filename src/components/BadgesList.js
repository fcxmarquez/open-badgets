import React from "react";
import "./styles/BadgesList.css";
import {Link} from "react-router-dom"
import Gravatar from "./Gravatar"

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) { /* Manejamos el error 404 not found */
      return(
        <div>
          <h3>No badges we're found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      )
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          //La funcion map retornara un li por cada valor
          return (
            <li key={badge.id}>
              {/* id porque asi es unico, si ponemos por ejemplo first name corremos el riesgo de que dos elementos se llamen iguales */}
              <Gravatar email={badge.email} />
              <div>
                <p>
                  <b>
                    {badge.firstName} {badge.lastName}
                  </b>
                </p>
                <p>
                  <span>
                    <img
                      src="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png"
                      alt="Twitter Icon"
                      width="20px"
                    />
                  </span>
                  @{badge.twitter}
                </p>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;