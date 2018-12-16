http://img.badgesize.io/juiceboxes/juice-grid/juice-grid.min.css.svg

# Juiceboxes/juice-grid

A lightweight, simple, grid system using CSS Grid OR flexbox

This is not a complete grid, but, like other juicebox repos, is a lightweight product used for rapid prototyping.

## Installing
`npm install @juiceboxes/juice-grid`

### Imports
Regular CSS: `@import 'node_modules/@juiceboxes/juice-grid/juice-grid.css'`

Minified CSS: `@import 'node_modules/@juiceboxes/juice-grid/juice-grid.min.css'`

SCSS with Variable declarations: `@import 'node_modules/@juiceboxes/juice-grid/juice-grid.scss'`

## Useage
You have two different grid formats to use, both of which span 12 columns

### 1. Grid, uses CSS Grid for formatting and specified content widths

#### Basic
``` html
<div class="grid">
    <div class="row">
        <div class="col-4">4 Columns</div>
        <div class="col-8">8 Columns</div>
    </div>
</div>
```

#### With Gutters

Before your import of the `.scss` file, declare your `$grid-gutter` variable. Otherwise, the default is `15px`.

``` html
<div class="grid with-gutters">
    .
    .
    .
</div>
```

#### Offsetting Columns
``` html
<div class="grid">
    <div class="row">
        <div class="col-4 push-8">4 Column span starting at column 9 (spans col 9, 10 ,11 ,12)</div>
    </div>
</div>
```

### 2. Flex Grid, uses flexbox for formatting and no specified content widths

#### Basic
``` html
<div class="grid-flex">
    <div class="row">
        <div class="col">6</div>
        <div class="col">6</div>
    </div>
    <div class="row">
        <div class="col">4</div>
        <div class="col">4</div>
        <div class="col">4</div>
    </div>
</div>
```

#### With Gutters

Before your import of the `.scss` file, declare your `$grid-gutter` variable. Otherwise, the default is `15px`.

``` html
<div class="grid-flex with-gutters">
    .
    .
    .
</div>
```


## Development
`npm run start` will build and watch the `index.pug` and `src/juice-grid.scss` files