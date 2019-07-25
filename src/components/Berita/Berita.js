import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Berita extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beritaList: []
        };
    }

    componentDidMount() {
        console.log('Component did mount')
        fetch('http://localhost:3000/berita')
            .then(response => response.json())
            .then(berita => this.setState({ beritaList: berita }))
    };

    render() {
        var count = 0;
        var index = this.state.beritaList.map(berita => {
            return (
                <div>
                    <Link to={`/informasi/berita/${berita.berita_id}`}>
                        <article class="pv4 bt bb b--black-10 ph3 ph0-l">
                            <div class="flex flex-column flex-row-ns">
                                <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                                    <h1 class="f3 athelas mt0 lh-title">{berita.judul}</h1>
                                </div>
                                <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                                    <img src={berita.gambar} class="db" alt={`berita tentang ${berita.judul}`} />
                                </div>
                            </div>
                            <p class="f6 lh-copy gray mv0">By <span class="ttu">Robin Darnell</span></p>
                        </article>
                    </Link>

                </div>
            )
        })

        return (
            <div className="mw9 center ph3-ns" >
                <div className="cf ph2-ns">
                    <section class="mw7 center">
                        <h2 class="athelas ph3 ph0-l">News</h2>
                        <div key={count++}>{index}</div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Berita;