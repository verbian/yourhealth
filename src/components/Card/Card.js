import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: []
        };
    }

    componentDidMount() {
        console.log('Component did mount')
        fetch('http://localhost:3000/article')
            .then(response => response.json())
            .then(article => this.setState({ articleList: article }))
    };

    render() {
        var count = 0;
        var index = this.state.articleList.map(article => {
            return (
                <Link to={`/article/${article.id}`}>
                    <div className="fl w-50 w-40-ns pa2 br2 ba dark-gray b--black-10  mt4 mh4">
                        {/* <img className="db w-100 br2 br--top" src={article.gambar} alt='ini adalah' /> */}
                        <img className="db w-100 br2 br--top" src={article.gambar} alt='ini adalah' />
                        <div className="pa2 ph3-ns  pb3-ns">
                            <div className="dt w-100 mt1">
                                <h1 className="f5 f4-ns mv0">{article.nama}</h1>
                            </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                            {article.deskripsi}
                        </p>
                        <p className="f6 lh-copy gray mv0">By <span className="ttu">{article.penulis}</span></p>
                        <time className="f6 db gray">Nov. 21, 2016</time>
                    </div>
                </Link>

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
export default Card;
