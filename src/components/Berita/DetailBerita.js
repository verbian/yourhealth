import React, { Component } from 'react';

class DetailBerita extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenBerita: {
                berita_id: '',
                judul: '',
                deskripsi: '',
                gambar: ''
            }
        };
    }

    componentDidMount() {
        console.log('Component did mount');
        const id = this.props.match.params.id;
        console.log('Id adalah : ' + id)
        fetch(`http://localhost:3000/berita/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ chosenBerita: data }))
    };

    render() {
        console.log(this.state.chosenBerita.berita_id);
        return (
            <div>
                <article class="baskerville pb5">
                    <header class="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
                        <h1 class="f3 f2-m f-subheadline-l measure lh-title fw1 mt0">{this.state.chosenBerita.judul}</h1>
                        <img class="w-100 dib measure f3" src={this.state.chosenBerita.gambar} />
                    </header>
                    <div class="ph3 ph4-m ph5-l tc">
                        <p class="f4 mb4 center measure lh-copy">
                            {this.state.chosenBerita.deskripsi}
                        </p>
                    </div>
                </article>
            </div>
        );
    }
}

export default DetailBerita;
