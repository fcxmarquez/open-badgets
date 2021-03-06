import React from "react";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import DeleteBadgeModal from "./DeleteBadgeModal";
import BadgeHero from "./BadgeHero";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
} /* Esto es un customHook el cual a su vez por dentro nos ayudamos de un Hook ya hecho */

function BadgeDetails(props) {
  const [count, setCount] =
    useIncreaseCount(
      4
    ); /* Esto es el inicio del hook, la funcion recibe dos argumentos los cuales los guardaremos en un arreglo, este arreglo como vemos es muy similar a decir state, y setState */
  const badge = props.badge;

  return (
    <React.Fragment>
      <BadgeHero>
        <div className="container BadgeHero">
          <div className="row">
            <div className="col">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </BadgeHero>

      <div className="container">
        {" "}
        {/* Renderizamos nuestra pagina con ayuda de Bootstrap */}
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              twitter={badge.twitter}
              role={badge.jobTitle}
              email={badge.email}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div className="container buttons-container">
              <div className="row">
                <div className="col">
                  <div>
                    <Link
                      className="btn btn-primary mb-4"
                      to={`/badges/${badge.id}/edit`}
                    >
                      Edit
                    </Link>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <button
                      onClick={props.onOpenModal}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <DeleteBadgeModal
                      isOpen={props.modalIsOpen}
                      onClose={props.onCloseModal}
                      onDeleteBadge={props.onDeleteBadge}
                    />{" "}
                    {/* onClose lo manejamos asi porque recordemos que este le pertenece al contenedor ya que este componente es una funcion el cual solo presenta informacion y no hace manejo de estado */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
