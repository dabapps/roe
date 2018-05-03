#### Pagination example:

```js
class PaginationExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 1,
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage (value) {
    this.setState({ page: value });
  }

  render () {
    const ITEM_COUNT = 7;
    const PAGE_SIZE = 2;
    const { page } = this.state;

    return (
      <div>
        <Row>
          <Column xs={4}>
            <PaginationDisplay
              pageSize={PAGE_SIZE}
              currentPage={page}
              itemCount={ITEM_COUNT}
            />
          </Column>
          <Column xs={8}>
            <Pagination
              className="float-right margin-top-base"
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
@pagination-button-background: @grey-lighter;
@pagination-selected-color: @white;
@pagination-selected-background: @primary;
@pagination-indicator-color: @grey-dark;
@pagination-indicator-background: @grey-lighter;
@pagination-dots-color: @grey-dark;
@pagination-dots-background: @grey-lighter;
```
