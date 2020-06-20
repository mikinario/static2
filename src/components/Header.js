import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "value"
        };
        this.searchingBar = this.searchingBar.bind(this);
    }

    searchingBar() {
        let resultado = document.getElementById("inp_search").value;
        alert("No se ha encontrado " + resultado)
    }

    render() {
        return (
            <header className="p-3 mb-0 bg-dark text-white row">
                <div className="col-3">
                    <img src="img/logo original BLANCO.png" id="logo" alt="logo"/>
                </div>
                <div className="col-6">
                    <nav className="navbar navbar-dark bg-dark">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search" id="inp_search">
                            </input>
                            <button className="btn btn-outline-warning my-2 my-sm-0" id="btnsearch"
                                    type="button" onClick={() => this.searchingBar()}>Search
                            </button>
                        </form>
                    </nav>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-outline-success ">Sing
                        in
                    </button>
                    <button type="button" className="btn btn-outline-primary">Sing
                        up
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;


