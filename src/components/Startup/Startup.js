import React from 'react';
import Card from '../Card/Card';
import './Startup.css'

const Startup = () => {
    return (
        <div>
            <header className="sans-serif">
                <div className="cover bg-left bg-center-l" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544819616-8b86befe568c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)' }}>
                    <div className="bg-black-80 pb5 pb6-m pb7-l">
                        <nav className="dt w-100 mw8 center">
                            <div className="dtc v-mid tr pa3">
                            </div>
                        </nav>
                        <div className="tc-l mt4 mt5-m mt6-l ph3">
                            <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Konsultasi langsung dengan ahli kesehatan</h1>
                            <a className="f6 no-underline grow dib v-mid bg-red white ph3 pv2 mt3 mb3" href="/">Konsultasi</a>
                        </div>
                    </div>
                </div>
            </header>
            <Card />
        </div>
    )
}

export default Startup;