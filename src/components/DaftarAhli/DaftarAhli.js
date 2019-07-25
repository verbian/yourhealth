import React from 'react';
import {Link} from 'react-router-dom';

class DaftarAhli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ahliList: []
        }
    }

    componentDidMount() {
        console.log('Component did mount')
        fetch('http://localhost:3000/daftarahli')
            .then(response => response.json())
            .then(ahli => this.setState({ ahliList: ahli }))
    };

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    firstName = (nama) => {
        let tempNama = '';
        let namaLength = nama.length;
        for (let i = 0; i < namaLength; i++) {
            if (nama[i] === ' ')
                return tempNama;
            tempNama += nama[i];
        }
        return tempNama;
    }

    render() {
        var count = 0;
        var index = this.state.ahliList.map(ahli => {
            return (
                <div>
                    <ul className="list pl0 mt0 measure center">
                        <Link to={`/informasi/daftarahli/${ahli.ahlikesehatan_id}`}>
                            <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                                <img 
                                className="w2 h2 w3-ns h3-ns br-100"
                                src={window.location.origin + `/img/dokter/${this.firstName(ahli.nama)}.jpg`}
                                alt={`Dokter ${this.state.nama}`} />
                                <div className="pl3 flex-auto">
                                    <span className="f6 db black-70">{this.Capitalize(ahli.nama)}</span>
                                    <span className="f6 db black-70">{ahli.spesialis}</span>
                                </div>
                                <div class="dtc v-mid">
                                    <div class="w-100 tr">
                                        <button class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                                    </div>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </div>
            )
        })

        return (
            <div className="mw9 center ph3-ns" >
                <div className="cf ph2-ns">
                    <div key={count++}>{index}</div>
                </div>
            </div>
        )
    }
}

export default DaftarAhli;