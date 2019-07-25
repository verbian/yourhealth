import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Penyakit extends Component {
    



    render() {
        console.log(this.state.articleList);
        var count = 0;
        var index = this.state.articleList.map(article => {
            console.log(article.gambar);
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
                        <p class="f6 lh-copy gray mv0">By <span class="ttu">{article.penulis}</span></p>
                        <time class="f6 db gray">Nov. 21, 2016</time>
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
export default Penyakit;



/* // <div>
        //     <div className="mw9 center ph3-ns">
        //         <div className="cf ph2-ns">
        //             <Link to='/article'>
        //                 <div className="fl w-50 w-40-ns pa2 br2 ba dark-gray b--black-10 mt4 mh4">
        //                     <img className="db w-100 br2 br--top" src={window.location.origin + '/img/yoga.jpg'} alt='yoga' />
        //                     <div className="pa2 ph3-ns pb3-ns">
        //                         <div className="dt w-100 mt1">
        //                             <h1 className="f5 f4-ns mv0">Manfaat yoga dan caranya</h1>
        //                         </div>
        //                     </div>
        //                     <p className="f6 lh-copy measure mt2 mid-gray">
        //                         In vestibulum interdum accumsan. Nullam in magna in enim volutpat porttitor. Sed aliquam ex eu orci laoreet, pulvinar porta sem posuere.
        //                     </p>
        //                 </div>
        //             </Link>
        //          </div>
        //             <div className="fr w-50 w-40-ns pa2 br2 ba dark-gray b--black-10 mt4 mh4">
        //                 <img className="db w-100 br2 br--top" src={window.location.origin + '/img/tea.jpg'} alt='teh' />
        //                 <div className="pa2 ph3-ns pb3-ns">
        //                     <div className="dt w-100 mt1">
        //                         <h1 className="f5 f4-ns mv0">Apakah teh dapat membersihkan minyak ?</h1>
        //                     </div>
        //                 </div>
        //                 <p className="f6 lh-copy measure mt2 mid-gray">
        //                     In vestibulum interdum accumsan. Nullam in magna in enim volutpat porttitor. Sed aliquam ex eu orci laoreet, pulvinar porta sem posuere.
        //                 </p>
        //             </div>
        //             <div className="fl w-50 w-40-ns pa2 br2 ba dark-gray b--black-10 mt4 mh4">
        //                 <img className="db w-100 br2 br--top" src={window.location.origin + '/img/obat.jpg'} alt='obat' />
        //                 <div className="pa2 ph3-ns pb3-ns">
        //                     <div className="dt w-100 mt1">
        //                         <h1 className="f5 f4-ns mv0">Apakah aman mengonsumsi obat setiap timbul gejala ?</h1>
        //                     </div>
        //                 </div>
        //                 <p className="f6 lh-copy measure mt2 mid-gray">
        //                     In vestibulum interdum accumsan. Nullam in magna in enim volutpat porttitor. Sed aliquam ex eu orci laoreet, pulvinar porta sem posuere.
        //             </p>
        //             </div>
        //             <div className="fr w-50 w-40-ns pa2 br2 ba dark-gray b--black-10 mt4 mh4">
        //                 <img className="db w-100 br2 br--top" src={window.location.origin + '/img/olahraga.jpg'} alt='olahraga' />
        //                 <div className="pa2 ph3-ns pb3-ns">
        //                     <div className="dt w-100 mt1">
        //                         <h1 className="f5 f4-ns mv0">Manfaat olahraga</h1>
        //                     </div>
        //                 </div>
        //                 <p className="f6 lh-copy measure mt2 mid-gray">
        //                     In vestibulum interdum accumsan. Nullam in magna in enim volutpat porttitor. Sed aliquam ex eu orci laoreet, pulvinar porta sem posuere.
        //         </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
     */


 // var arr = [];
        // Object.keys(this.state.articleList).forEach(element => {
        //     arr.push(this.state.articleList[element]);
        //     console.log(arr);
        // })
        // arr.push(Object.keys(this.state.articleList).map(i => this.state.articleList[i]));
        // console.log(arr);

