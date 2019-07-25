import React from 'react';

const Header = () => {
    return (
        <div>
            <header class="sans-serif">
                <div class="cover bg-left bg-center-l" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1478476868527-002ae3f3e159?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)' }}>
                    <div class="bg-black-80 pb5 pb6-m pb7-l">
                        <nav class="dt w-100 mw8 center">
                            <div class="dtc w2 v-mid pa3">
                            </div>
                        </nav>
                        <div class="mt4 mt5-m mt6-l ph3">
                            <h1 class="lf f2 f1-l fw2 white-90 mb0 lh-title">Tertarik untuk bergabung sebagai ahli di yourhealth ?</h1>
                            <h2 class="fw1 f3 white-80 mt3 mb4">
                                Dengan menjadi ahli kesehatan di <i>yourhealth</i> anda dapat mendapatkan <i>benefits</i> sebagai berikut :
                            </h2>
                            <ul className='green'>
                                <li><p>Mengedukasi masyarakat tentang pengetahuan kesehatan yang benar</p></li>
                                <li><p>Memperluas koneksi profesional dan pribadi</p></li>
                                <li><p>Berbagi pengetahuan dengan ahli lainnya</p></li>
                            </ul>
                            {/* <a class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call to Action</a>
                            <span class="dib v-mid ph3 white-70 mb3">or</span>
                            <a class="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Secondary call to action</a> */}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;