# [Jamie Bray UI](https://jamiebray.me)

My personal website - with semantic HTML & **zero** JS.

> Having worked professionally with React for 5 years now, raw HTML 5 is somewhat satisfying.

<br/>

### Pure Semantic HTML

- Every element conveys meaning.
> (in fact - there are no `div` elements)

- Minimal element attributes.
> (for example - no class attributes required, thanks to semantic HTML)

### Beautiful CSS

- Modern SPA animations.
> (for example - leveraging `:target` selector for page transitions)

### No JS

- With great power, comes great responsibility.

<br/>

## Notable learnings

#### `isolation: isolate`

Creates a new stacking context within child elements, allowing locally scoped z-index usage.

<br/>

#### `section:target ~ section`

You can create an SPA "like" site by just transitioning between elements based on whether they're the current target. (`url.com/#target`)

With this CSS query, you can transition (almost) any arbitrary element based on a specific adjacent element being targeted.

<br/>

#### `box-shadow`

Box shadow is magnitudes easier to think about when you create a template.

```css
--body-highlight: inset 2px 2px 4px #f00f;
--body-shadow: inset -2px -2px 4px #0f0f;
--reflection: -2px -2px 4px #00ff;
--shadow: 2px 2px 0px #ff0f;
box-shadow: var(--body-shadow), var(--body-highlight), var(--reflection), var(--shadow);
```

<br/>

#### `::after` & `::before`

I didn't realise how _easy_ these selectors were to use - I really was leaning on React components too much.

<br/>

#### `grid-column` & `grid-row` overlapping

You can overlap elements if you assign the same starting position of 2 grid elements with `grid-column` and `grid-row`.

<br/>

#### `webkit-background-clip: text`

This snippet creates a gradient font colour!

```css
background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

<br/>

#### `img` elements have `line-height`

This was so frustrating to debug - by default an image will behave like text and have "line-height padding" much like text would.

https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image

To remove this, set the image to `display: block`.

<br/>

## References

https://www.smashingmagazine.com/2022/07/article-section-elements-accessibility/
https://neumorphism.io/
https://themesberg.com/docs/neumorphism-ui/foundation/typography/
https://codepen.io/aitchiss/pen/QWKmPqx
https://codepen.io/thomasrye/pen/VaRoYv
https://codepen.io/slimsmearlapp/pen/DqVqPy
https://codepen.io/bingwa/pen/vYERWpv
https://cssgradient.io/
https://heropatterns.com/
https://codepen.io/dev_loop/pen/jOborLv (didn't even reference this one, but it's so cool)
