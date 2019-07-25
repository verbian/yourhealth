import React, { Component } from 'react';
import { Link } from "react-router-dom";

class EventKesehatan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: []
        };
    }

    componentDidMount() {
        console.log('Component did mount')
        fetch('http://localhost:3000/eventkesehatan')
            .then(response => response.json())
            .then(event => this.setState({ eventList: event }))
    };


    render() {
        console.log(this.state.eventList);
        var count = 0;
        var index = this.state.eventList.map(event => {
            return (
                <div>

                    <Link to={`/hidupsehat/eventkesehatan/${event.event_id}`}>
                        <article className="bt bb b--black-10">
                            <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
                                <div className="flex flex-column flex-row-ns">
                                    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                                        <img src={event.gambar} className="db" alt={`gambar mengenai ${event.judul}`} />
                                    </div>
                                    <div className="w-100 w-60-ns pl3-ns">
                                        <h1 className="f3 fw1 baskerville mt0 lh-title">{event.judul}</h1>
                                        <p className="f6 f5-l lh-copy">
                                            {event.deskripsi}
                                        </p>
                                        <p className="f6 lh-copy mv0">{event.tempat}</p>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </Link>

                </div >
            )
        })

        return (
            <div className="mw9 center ph3-ns" >
                <div className="cf ph2-ns">
                    <section className="mw7 center avenir">
                        <h2 className="baskerville fw1 ph3 ph0-l">Event</h2>
                        <div key={count++}>{index}</div>
                    </section>
                </div>
            </div>
        )
    }
}

export default EventKesehatan;