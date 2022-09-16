import React from "react";

const Suivi = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 ">
            <p className="text-center">SUIVI CHEQUES/TRAITES CLIENTS</p>
          </div>
        </div>

        <div className="row">
          <div className="col-2 d-flex">
            <form action="">
              <label htmlFor="situation">Situation&nbsp;&nbsp;&nbsp; </label>
              <input type="text" size="1" id="situation" name="situation" />
            </form>
            <button>1</button>
          </div>
          <div className="col-3 d-flex">
            <form action="">
              <label htmlFor="reglement">Règlement&nbsp;&nbsp;&nbsp; </label>
              <input type="text" size="10" id="situation" name="situation" />
            </form>
            <button>1</button>
          </div>
          <div className="col-3 d-flex">
            <form action="">
              <label htmlFor="name">bordereau Nº&nbsp;&nbsp;&nbsp; </label>
              <input type="text" size="10" id="situation" name="situation" />
            </form>
            <button>1</button>
          </div>
          <div className="col-2 ">
            <form>
              <input type="radio" name="sel" />
              <label htmlFor="sel">&nbsp;Par Date Règlement</label>
            </form>
          </div>
          <div className="col-2 ">
            <form>
              <label htmlFor="Du">Du &nbsp;</label>
              <input type="date" id="Du" name="Du" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-2 ms-auto">
            <form>
              <input type="radio" name="sel" />
              <label htmlFor="sel">&nbsp;Par Date Echéance</label>
            </form>
          </div>
          <div className="col-2 ">
            <form>
              <label htmlFor="Au">Au &nbsp;</label>
              <input type="date" id="Au" name="Au" />
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <table class="table bg-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
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
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">
            <button className="btn btn-info">Afficher </button>
          </div>
          <div className="col-1">
            <button className="btn btn-secondary">Enregister</button>
          </div>
          <div className="col-1">
            <button className="btn btn-success">Aperçu</button>
          </div>
          <div className="col-1">
            <button className="btn btn-info">Fermer</button>
          </div>
          <div className="col-1">
            <button className="btn btn-success">Aperçu2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suivi;
