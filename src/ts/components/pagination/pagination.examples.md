#### Pagination example:

```js
import { Row, Column, PaginationDisplay, Pagination } from '@dabapps/roe';

class PaginationExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(value) {
    this.setState({ page: value });
  }

  render() {
    const ITEM_COUNT = 22;
    const PAGE_SIZE = 3;
    const { page } = this.state;

    return (
      <div>
        <Row>
          <Column xs={4}>
            <PaginationDisplay
              pageSize={PAGE_SIZE}
              currentPageNumber={page}
              itemCount={ITEM_COUNT}
            />
          </Column>
          <Column xs={8}>
            <Pagination
              className="float-right margin-top-base"
              pageSize={PAGE_SIZE}
              changePage={this.changePage}
              currentPageNumber={page}
              itemCount={ITEM_COUNT}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

<PaginationExample />;
```

#### Less variables

```css
@pagination-button-color: @grey-dark;
@pagination-button-background: @grey-lighter;
@pagination-selected-color: @white;
@pagination-selected-background: @primary;
@pagination-indicator-color: @grey-dark;
@pagination-indicator-background: @grey-lighter;
```
