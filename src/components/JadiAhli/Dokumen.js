import React from 'react';

class Dokumen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    uploadFile = (file) => {
        fetch('http://localhost:3000/registerahli/dokumen', {
            // content-type header should not be specified!
            method: 'POST',
            body: file,
        })
            .then(response => response.json())
            .then(success => {
                // Do something with the successful response
            })
            .catch(error => console.log(error)
            );
    }

    // onChangeHandler = event => {
    //     this.setState({
    //         selectedFile: event.target.files[0],
    //         loaded: 0,
    //     })
    // }

    // onClickHandler = () => {
    //     const data = new FormData()
    //     data.append('file', this.state.selectedFile)
    // }


    render() {
        return (
            <div>
                <article class="cf ph3 ph5-ns pv5">
                    <header class="fn fl-ns w-50-ns pr4-ns">
                        <h1 class="f2 lh-title fw7 mb3 mt0 pt3 bt bw2">
                            Upload Dokumen Untuk Verifikasi
                    </h1>
                        <p class="f6 ttu tracked black w-75 pa1">Untuk pengverifikasian ahli kesehatan, mohon upload dokumen untuk verifikasi kredensial anda.</p>
                        <p class="f6 ttu tracked black w-75 pa1">Mohon sertakan <strong>setidaknya 1 file</strong> untuk setiap dokumen yang diperlukan</p>
                        <article class="cf">
                            <div class="fl w-30-ns tc">
                                <img className='mw3 dib tc' src={window.location.origin + '/img/sertifikat.png'} alt='sertifikasi' />
                                <ul className='tl'>
                                    <li>Sertifikasi Kesehatan</li>
                                    <li>Badge Pengenal</li>
                                    <li>Ijazah</li>
                                </ul>
                                {/* <input type="file" name="file" onChange={this.onChangeHandler} /> */}
                                <button type="button" class="btn btn-success btn-block" onClick={this.uploadFile}>Upload</button>
                            </div>
                            <div class="fl w-30-ns tc">
                                <img className='mw3 dib tc' src={window.location.origin + '/img/identifikasi.png'} alt='identifikasi' />
                                <ul className='tl'>
                                    <li>Kartu Tanda Pengenal</li>
                                    <li>Passport</li>
                                    <li>Surat Izin Mengemudi</li>
                                </ul>
                            </div>
                        </article>
                        {/* <time class="f6 ttu tracked gray">Sometime before 1967</time> */}
                    </header>
                    <div class="fn fl-ns w-50-ns">
                        <h3 class="f5 lh-copy measure mt0-ns">
                            Bergabung dengan yourhealth, bagikan pengetahuan anda
                    </h3>

                    </div>
                    <div class="f n fl-ns w-50-ns">
                        <h3 class="f5 lh-copy measure">Berkolaborasi dengan ahli lainnya.</h3>
                        <h3 class="f5 lh-copy measure">Kembangkan reputasi.</h3>
                        <h3 class="f5 lh-copy measure">Jam kerja fleksibel.</h3>
                    </div>
                </article>
            </div>
        )
    }
}

export default Dokumen;