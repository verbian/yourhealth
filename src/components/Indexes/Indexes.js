import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
import Header from './Header';

class Indexes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            penyakit: {
                nama: ''
            }
        };
    }

    componentDidMount() {
        console.log('Component did mount')
        const id = this.props.match.params.id;
        fetch(`http://localhost:3000/penyakit/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ penyakit: data }))
    };

    printIndex = (huruf) => {
        const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return (
            <div>
                <ScrollableAnchor id={`index${s[huruf]}`}>
                    <div>
                        <p className="f2 fw4 ttu tracked lh-title mt3 mb3 georgia ml5 gray bb w3">{s[huruf]}</p>
                        <div className="dt dt--fixed">
                            <div className="dtc tc pv4 dib">
                                {this.state.penyakit.nama}
                            </div>
                            <div className="dtc tc pv4 dib">
                                2
                            </div>
                            <div className="dtc tc pv4 dib">
                                3
                            </div>
                        </div>
                    </div>
                </ScrollableAnchor>
            </div>
        )
    }

    showIndex = () => {
        let indx = []
        for (let i = 0; i < 26; i++) {
            indx.push(this.printIndex(i))
        }
        return indx
    }


    render() {
        return (
            <div>
                <Header />
                {this.showIndex()}
            </div >
        )
    }

}

export default Indexes;