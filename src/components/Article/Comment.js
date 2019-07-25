import React from 'react';

class Comment extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         comment: ''
    //     };
    // }

    // componentDidMount() {
    //     console.log('Component did mount');
    //     const id = this.props.match.params.id;
    //     console.log('Id adalah : ' + id)
    //     fetch(`http://localhost:3000/article/${id}`)
    //         .then(response => response.json())
    //         .then(data => this.setState({ chosenArticle: data }))
    // };

    onCommentChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    onSubmitComment = () => {
        var id = this.props.data.id;
        console.log(id);
        fetch(`http://localhost:3000/article/${id}`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                comment: this.state.comment
            })
        }).then(response => response.json())
            .then(comment => {
                if (comment) {
                    console.log('berhasil');
                }
            })
    }

    render() {
        return (
            <form className="pa4 black-80">
                <div>
                    <label htmlFor="comment" className="f6 b db mb2">Comments<span className="normal black-60">(optional)</span></label>
                    <textarea
                        onChange={this.onCommentChange}
                        id="comment"
                        name="comment"
                        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2"
                        aria-describedby="comment-desc">
                    </textarea>
                    <div className="mt3">
                        <input
                            onClick={this.onSubmitComment}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"
                            type="submit"
                            value="Comment" />
                    </div>
                </div>
            </form>
        )
    }
}

export default Comment;