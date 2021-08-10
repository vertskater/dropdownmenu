# What is this?

A Drop-Down-Menu toogle with animation

# Installation

`npm install vertskatersddm --save`

Then ...

```
import { dropdownmenu } from 'dropdownmenu';

dropdownmenu({
  duration: '300ms',
  appearance: 'scale',
});
```

html ...

```
<nav>
  <em class="nav-trigger"></em>
  <ul>
    <li>...</li>
    <li>...</li>
    <li>...</li>
    <li>...</li>
    <li>...</li>
    ...
  </ul>
</nav>
```

## Options

This menu supports 2 options

- _duration_ string in seconds (s) or (ms);
- _appearance_ _scale | fromtop_
