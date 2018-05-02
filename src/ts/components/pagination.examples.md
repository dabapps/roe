#### Pagination example:

```js
class PaginationExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 5,
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage (value) {
    this.setState({ page: value });
  }

  render () {
    const ITEM_COUNT = 16;
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

```
