import React, {memo} from 'react';
import {styleGuide} from "../../components";

export default memo(function Home() {
  return <>
    <h1>JWI Louvers</h1>
    <h2>Overview /</h2>
    <p>
      While switching between AS3 (a few Adobe Air projects) and the HTML/CSS/JS stack projects at Canvas Group, I got
      the change to work on Fox Johnston's new Wordpress based website.
    </p>
    <p>
      I tried to push what was possible with CSS at that time, and I had decided to use some "cutting edge" CSS
      features, while making sure everything was progressively enhanced to support IE8.
    </p>
    <p>
      The tech stack was very similar to FoxJohnston's: jQuery, Objs, modernizr etc. I may have switched from LESS to
      SCSS around that time.
    </p>
    <div className={styleGuide.awards}>
      <span className="list">
        Awwwards, ADGA
      </span>
    </div>
    <picture>
      <source srcSet="/images/jwi/desktop.png 1x" media="(min-width: 768px)"/>
      <source srcSet="/images/jwi/tablet.png 1x, /images/jwi/desktop.png 2x" media="(min-width: 425px)"/>
      <source srcSet="/images/jwi/small.png 1x, /images/jwi/small-retina.png 2x" media="(min-width: 0px)"/>
      <img src="/images/jwi/preview.png" alt="Supercell"/>
    </picture>
  </>
});
