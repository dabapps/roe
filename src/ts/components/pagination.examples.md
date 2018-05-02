#### Pagination example:

```js
class PaginationExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 2,
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage (value) {
    this.setState({ page: value });
  }

  render () {
    const ITEM_COUNT = 26;
    const PAGE_SIZE = 3;
    const { page } = this.state;

    return (
      <div>
        <Row>
          <Column>
            <Pagination
              pageSize={PAGE_SIZE}
              changePage={(value) => this.changePage(value)}
              currentPage={page}
              itemCount={ITEM_COUNT}
              disabled={false}
            />
          </Column>
        </Row>
      </div>
    );
  }
}

<PaginationExample />
```

#### Less variables
```less
@pagination-button-color: @grey-dark;
@pagination-button-bg-color: @grey-lighter;
@pagination-selected-button-color: @white;
@pagination-selected-button-bg-color: @primary;
@pagination-indicator-button-color: @grey-dark;
@pagination-indicator-button-bg-color: @grey-lighter;
@pagination-dots-color: @grey-dark;
@pagination-dots-bg-color: @grey-lighter;
```
