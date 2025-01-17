import React from 'react';


const Newsletter = () => {
    return (
        <div>
            <form class="pa4">
                <fieldset id="favorite_movies" class="bn">
                    <legend class="fw7 mb2">Favorite Movies</legend>
                    <div class="flex items-center mb2">
                        <input class="mr2" type="checkbox" id="spacejam" value="spacejam" />
                        <label for="spacejam" class="lh-copy">Space Jam</label>
                    </div>
                    <div class="flex items-center mb2">
                        <input class="mr2" type="checkbox" id="airbud" value="airbud" />
                        <label for="airbud" class="lh-copy">Air Bud</label>
                    </div>
                    <div class="flex items-center mb2">
                        <input class="mr2" type="checkbox" id="hocuspocus" value="hocuspocus" />
                        <label for="hocuspocus" class="lh-copy">Hocus Pocus</label>
                    </div>
                    <div class="flex items-center mb2">
                        <input class="mr2" type="checkbox" id="diehard" value="diehard" />
                        <label for="diehard" class="lh-copy">Die Hard</label>
                    </div>
                    <div class="flex items-center mb2">
                        <input class="mr2" type="checkbox" id="primer" value="primer" />
                        <label for="primer" class="lh-copy">Primer</label>
                    </div>
                    <div class="flex items-center mb2">
                        <input class="mr2" type="checkbox" id="proxy" value="proxy" />
                        <label for="proxy" class="lh-copy">Hudsucker Proxy</label>
                    </div>
                    <div class="flex items-center mb2">
                        <input class="mr2" type="checkbox" id="homealone" value="homealone" />
                        <label for="homealone" class="lh-copy">Home Alone</label>
                    </div>
                </fieldset>
            </form>
        </div>
    )

}

export default Newsletter;