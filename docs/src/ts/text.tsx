import * as React from 'react';

import {
  Column,
  Row,
  Section
} from '../../../src/ts';

export const Text = () => (
  <Section>
    <Row>
      <Column>
        <h2>
          Text
        </h2>
      </Column>
    </Row>
    <Row>
      <Column>
        <h1>
          Header 1
        </h1>
        <h2>
          Header 1
        </h2>
        <h3>
          Header 1
        </h3>
        <h4>
          Header 1
        </h4>
        <h5>
          Header 1
        </h5>
        <h6>
          Header 1
        </h6>
        <p>
          Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipiscing elit. Suspendisse luctus scelerisque arcu,
          lacinia porttitor justo pretium nec. Aliquam <a href="#">erat volutpat</a>. Integer feugiat erat ut felis
          imperdiet, at aliquam quam auctor. Donec dictum pulvinar porta. Integer dui nibh, commodo vitae sodales eget,
          varius ac nulla. Morbi tempus risus ut hendrerit mattis. Nunc eu libero elementum ipsum accumsan interdum at
          eu ligula. Nunc accumsan tortor libero, sed dapibus augue hendrerit et. Donec vel nunc quis magna euismod
          facilisis. Ut mi est, aliquet non ultrices eget, euismod non risus. <a href="#">Vivamus vel nisi et enim
          efficitur interdum</a>.
        </p>
        <p>
          <i>
            Sed lobortis id nisl nec laoreet. Nulla mattis fermentum augue vitae tempus. Cras lorem leo, finibus et
            augue nec, sagittis vulputate turpis. Morbi tincidunt risus in elit dignissim, at luctus ligula feugiat.
          </i>
        </p>
        <p>
          <strong>
            <i>
              Quisque auctor rhoncus rutrum. Maecenas quis dui ut lectus tempor tincidunt. In nunc ex, condimentum in
              risus nec, porta maximus arcu. Nam dictum ipsum in dui efficitur condimentum.
            </i>
          </strong>
        </p>
        <p>
          <strong>
            In non pellentesque arcu. Maecenas lacinia semper lectus vitae sagittis. Mauris metus nibh, posuere at enim
            porttitor, maximus vehicula quam.
          </strong>
        </p>
      </Column>
    </Row>
  </Section>
);
