# Jamie Bray UI

## Goals

### Semantic HTML

Each element must actually convey meaning (no arbitrary `div`s)

Minimal HTML elements (no bloating html to make CSS "easier")

### Beautiful raw CSS

Modern SPA visuals (animations on actions & transitions between content)

Raw HTML (animations on actions & transitions between content)

### No JS

Static pages do not need "logic"

## Favourite learned features

##### `isolation: isolate`

Creates a new stacking context within child elements, allowing locally scoped z-index usage.

##### `position: fixed` creates a relative context for a child `position: fixed` element

huh!

## Stastics

### Size comparisson with my previous React portfolio

## Learnings

### What is the difference between `section` and `article`?



### How do you make "single letter" buttons, without losing HTML semantics & accessibility?

In making keyboard style buttons; I encounted the challenge of making my `a` tags look like keyboard buttons. The issue being; how do you make a semantic & accessible html document that has "keyboard" style buttons .

Normally - I'd just modify the HTML, slap on an aria tag, and a tooltip element that spawned on hover.

Today - we can't break the integrity of the HTML just for "style reasons".

##### Using CSS to only show the first letter

(Found an equivilant stack overflow question)[https://stackoverflow.com/questions/11512989/display-first-letter-only]

```css
element {
  font-size: 0;
}
element:first-letter {
  font-size: 12px;
}
```


##### Using CSS to generate tooltips

So initially I was just trying to find out how to "make elements" in CSS, that obviously didn't turn up anything useful. But, then I stumbled upon this (article about making shapes in CSS)[https://css-tricks.com/the-shapes-of-css/]. Then I realised that you can leverage the "before" and "after" tags as effectively new canvases to draw.


### How do you make SPA page transitions without JS?

(Found an equivilant stack overflow question)[https://stackoverflow.com/questions/6894125/how-to-open-a-hidden-div-when-a-hash-is-on-the-url]

```css
element {
  display: none;
}
element:target {
  display: block;
}
```

## References

https://www.smashingmagazine.com/2022/07/article-section-elements-accessibility/
https://neumorphism.io/
https://themesberg.com/docs/neumorphism-ui/foundation/typography/
https://codepen.io/aitchiss/pen/QWKmPqx
https://codepen.io/thomasrye/pen/VaRoYv
https://cssgradient.io/
just cool: https://codepen.io/dev_loop/pen/jOborLv
