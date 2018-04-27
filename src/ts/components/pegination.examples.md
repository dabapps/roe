#### Example

```js
class PaginationsExample extends React.Component {
  conttructor(props) {
    super(props);

    this.state = {
      page: 0
    }
  }

  changePage (value) {
    this.setState({ page: value })
  }

  render () {
    return (
      <Pagination
        pageSize={1}
        changePage={(value) => this.changePage(value)}
        currentPage={2}
        itemCount={10}
        // disabled
      />
    )
  }
}

<PaginationsExample />
```

#### Less variables

```less

```
