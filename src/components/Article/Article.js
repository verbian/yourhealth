import React, { Component } from 'react';
import Comment from './Comment';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenArticle: {
                id: '',
                nama: '',
                deskripsi: '',
                gambar: '',
                penulis: '',
                comment: ''
            }
        };
    }

    componentDidMount() {
        console.log('Component did mount');
        const id = this.props.match.params.id;
        console.log('Id adalah : ' + id)
        fetch(`http://localhost:3000/article/${id}`)
            .then(response => response.json())
            .then(data => this.setState({ chosenArticle: data }))
    };

    render() {
        console.log(this.state.chosenArticle.id);
        return (
            <div>
                <article className="baskerville mb3">
                    <header className="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
                        <h1 className="f3 f2-m f-subheadline-l measure lh-title fw1 mt0">{this.state.chosenArticle.nama}</h1>
                        <img className="w-100 dib measure f3" src={this.state.chosenArticle.gambar} alt="Artikel ini" />
                    </header>
                    <div className="ph3 ph4-m ph5-l tc">
                        <p className="f4 center measure lh-copy">
                            {this.state.chosenArticle.deskripsi}
                        </p>
                    </div>
                    <Comment />
                </article>

                <article className="mh4 mw5 mw6-ns br3 hidden ba b--black-10">
                    <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">Title of card</h1>
                    <div className="pa3 bt b--black-10">
                        <p className="f6 f5-ns lh-copy measure">
                            {this.state.chosenArticle.comment}
                        </p>
                    </div>
                </article>
            </div>
        );
    }
}

export default Article;
