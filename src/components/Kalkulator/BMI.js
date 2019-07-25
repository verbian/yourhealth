import React from 'react';

class BMI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beratBadan: '',
            tinggiBadan: ''
        }
    }

    onWeightChange = (event) => {
        this.setState({ beratBadan: event.target.value })
    }

    onHeightChange = (event) => {
        this.setState({ tinggiBadan: event.target.value })
    }


    calculateBMI = () => {
        return (
            <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir blue">{this.state.beratBadan * this.state.tinggiBadan}</h3>
        );
    }

    render() {
        return (
            <div>
                <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir blue">Kalkulator Body Mass Index</h3>
                <p>Berat Badan : <input className='ma2' onChange={this.onWeightChange} type='text' />kg</p>
                <p>Tinggi Badan : <input className='ma2' onChange={this.onHeightChange} type='text' />cm</p>
                <input className='tc'
                    onClick={this.calculateBMI}
                    type='submit'
                    value='Hitung' />
                <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir blue">A</h3>
            </div>
        )
    }
}

export default BMI;