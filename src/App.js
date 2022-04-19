import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="pricing1 container-fluid min-vh-100">
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card h-100 shadow-lg">
                <div className="card-body">
                  <div className="text-center p-2">
                    <h4 className="card-title">Basic</h4>
                    <lead>Individual</lead>
                    <br />
                    <br />
                    <span className="h2">$8</span>/month
                    <br />
                    <br />
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i class="bi bi-check"></i> Cras justo odio
                  </li>
                  <li className="list-group-item">
                    <i class="bi bi-check"></i> Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item">
                    <i class="bi bi-check"></i> Vestibulum at eros
                  </li>
                </ul>
                <div className="card-body text-center">
                  <button className="btn btn-outline-primary btn-lg">
                    Select
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card h-100 shadow-lg">
                <div className="card-body">
                  <div className="text-center p-2">
                    <h4 className="card-title">Standard</h4>
                    <lead>Small Business</lead>
                    <br />
                    <br />
                    <span className="h2">$20</span>/month
                    <br />
                    <br />
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i class="bi bi-check"></i> Cras justo odio
                  </li>
                  <li className="list-group-item">
                    <i class="bi bi-check"></i> Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item">
                    <i class="bi bi-check"></i> Vestibulum at eros
                  </li>
                </ul>
                <div className="card-body text-center">
                  <button className="btn btn-outline-primary btn-lg">
                    Select
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card h-100 shadow-lg">
                <div className="card-body">
                  <div className="text-center p-2">
                    <h4 className="card-title">Premium</h4>
                    <lead>Large Companies</lead>
                    <br />
                    <br />
                    <span className="h2">$40</span>/month
                    <br />
                    <br />
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i class="bi bi-check"></i> Cras justo odio
                  </li>
                  <li className="list-group-item">
                    <i class="bi bi-check"></i> Dapibus ac facilisis in
                  </li>
                  <li className="list-group-item">
                    <i class="bi bi-check"></i> Vestibulum at eros
                  </li>
                </ul>
                <div className="card-body text-center">
                  <button className="btn btn-outline-primary btn-lg">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
