import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Kalkulator extends Component {

    render() {
        return (
            <div>
                <nav class="ph3 ph5-ns pv4">
                    <div class="dt dt--fixed">
                        <div class="dtc tc bg-black-10">
                            <Link to='/hidupsehat/kalkulator/bmi'><h4 class="link dim gray f5 f4-ns dib mr3" title="Body Mass Index">Body Mass Index</h4></Link>
                        </div>
                        <div class="dtc tc bg-black-05">
                            <Link to='/hidupsehat/kalkulator/donordarah'><h4 class="link dim gray f5 f4-ns dib mr3" title="Link 2">Kalkulator Donor Darah</h4></Link>
                        </div>
                        <div class="dtc tc bg-black-10">
                            <h4 class="link dim gray f5 f4-ns dib mr3" title="Link 3">Konsumsi Air</h4>
                        </div>
                    </div>
                </nav >
            </div>

        )
    }
}

export default Kalkulator;







