import React, { Component } from 'react';

class AhliDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenAhli: {
                ahlikesehatan_id: '',
                nama: '',
                spesialis: ''
            }
        };
    }

    componentDidMount() {
        console.log('Component did mount');
        const id = this.props.match.params.id;
        console.log('Nama adalah : ' + id)
        fetch(`http://localhost:3000/daftarahli/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ chosenAhli: data }))
    };

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    firstName = (nama) => {
        let tempNama = '';
        var namaLength = nama.length;
        for (var i = 0; i < namaLength; i++) {
            if (nama[i] === ' ')
                return tempNama;
            tempNama += nama[i];
        }
        return tempNama;
    }

    render() {
        const { nama, spesialis, ahlikesehatan_id } = this.state.chosenAhli;
        return (
            <div>
                <header class="bg-white black-80 tc pv4 avenir">
                    <section class="tc">
                        <article class="hide-child relative ba b--black-20 mw5 center">
                            <img
                                src={window.location.origin + `/img/dokter/${this.firstName(nama)}.jpg`}
                                class="db"
                                alt={`Dokter ${nama}`}
                            />
                        </article>
                    </section>
                    <h1 class="mt2 mb0 baskerville i fw1 f1">{this.Capitalize(nama)}</h1>
                    <h2 class="mt2 mb0 f6 fw7 ttu tracked red">{spesialis}</h2>
                    <nav class="bt bb fl mt4 w-100-l">
                        <a class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Tentang</a>
                        <a class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/portfolio">Spesialisasi</a>
                        <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Lokasi</a>
                    </nav>
                </header>
                <div class="dt w-60">
                    <div class="dtc pv4 ph4 baskerville">
                        <h1>{`Tentang ${this.Capitalize(nama)}`}</h1>
                        <p class="measure lh-copy">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="dtc pv4 ph4 baskerville">
                        <p class="measure lh-copy">Pengalaman</p>
                        <p class="measure lh-copy">Pendidikan</p>
                    </div>
                </div>
                <div class="dt w-60">
                    <div class="dtc pv4 ph4 baskerville">
                        <h1>{`Tentang ${this.Capitalize(nama)}`}</h1>
                        <p class="measure lh-copy">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="dtc tc pv4">
                        
                    </div>
                </div>
                <div class="dt w-60">
                    <div class="dtc pv4 ph4 baskerville">
                        <h1>{`Lokasi ${this.Capitalize(nama)}`}</h1>
                        <p class="measure lh-copy">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div class="dtc tc pv4">
                        
                    </div>
                </div>

            </div>
        );
    }
}

export default AhliDetail;
