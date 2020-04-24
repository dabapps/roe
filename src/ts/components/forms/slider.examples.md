#### Examples

With initial values set and popover displayed:

```js
<Slider
  displayPopover
  onSlide={value => console.log(value)}
  initialValue={{ from: 0, to: 700 }}
  min={0}
  max={1000}
  step={10}
/>
```

Without initial values and without popover displayed:

```js
<Slider onSlide={value => console.log(value)} min={-100} max={100} step={1} />
```

#### Less variables

```less
@slider-bar-background: lighten(@grey-lighter, 8%);
@slider-bar-thickness: 5px;
@slider-z-index: 2;
@slider-range-color: @info;
@slider-control-width: 15px;
@slider-control-height: 15px;
@slider-control-background: @info;
@slider-control-border-radius: 20px;
@slider-control-popover-background: lighten(@info, 25%);
```
