import React from 'react';
import { Link } from 'react-router-dom';

const Informasi = () => {
    return (
        <div>
            <ul className="list pl0">
                <li className="pa3 pa4-ns bb b--black-10">
                    <Link to='/informasi/berita'><b class="db f3 mb1">BERITA KESEHATAN</b></Link>
                    <span className="f5 db lh-copy measure">
                        The positioning of text within the page margins. Alignment can be flush left, flush right, justified, or centered. Flush left and flush right are sometimes referred to as left justified and right justified.
                    </span>
                </li>
                <li className="pa3 pa4-ns bb b--black-10">
                    <Link to='/informasi/newsletter'><b class="db f3 mb1">NEWSLETTER</b></Link>
                    <span className="f5 db lh-copy measure">
                        The positioning of text within the page margins. Alignment can be flush left, flush right, justified, or centered. Flush left and flush right are sometimes referred to as left justified and right justified.
                    </span>
                </li>
                <li className="pa3 pa4-ns bb b--black-10">
                    <Link to='/informasi/daftarahli'><b class="db f3 mb1">DAFTAR AHLI</b></Link>
                    <span className="f5 db lh-copy measure">
                        The positioning of text within the page margins. Alignment can be flush left, flush right, justified, or centered. Flush left and flush right are sometimes referred to as left justified and right justified.
                    </span>
                </li>
            </ul>
        </div>
    )

}

export default Informasi;