import React from "react";
import Songs from "./Songs";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "value"
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="row">
                <aside className=" mb-0 bg-dark text-white col-lg-1 ">
                    <button type="button" className="btn btn-secondary btn-lg btn-block" id="btnall">ALL</button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" id="btnrock">ROCK</button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" id="btnpop">POP</button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" id="btnele">ELECTRO</button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" id="btncla">CLASIC</button>
                </aside>
                <main className="col-10 mt-4 ml-4 mr-0 mb-4" id="info_search">
                    <Songs/>
                </main>
            </div>
        );
    }
}

export default Main;