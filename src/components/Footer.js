import React from "react";

class Footer extends React.Component {
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
            <footer className="p-3 bg-dark text-whit row">
                <p className="text-white bg-dark text-center col-12">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                    Asperiores aut
                    dignissimos officiis quas repellat reprehenderit suscipit voluptate voluptatum. Accusamus assumenda
                    aut
                    explicabo fuga hic incidunt ipsam minima provident quod ut.</p>
                <button className="text-white bg-dark col-3">Youtube</button>
                <button className="text-white bg-dark col-3">Twitter</button>
                <button className="text-white bg-dark col-3">Facebook</button>
                <button className="text-white bg-dark col-3">Instagram</button>
            </footer>
        );
    }
}

export default Footer;