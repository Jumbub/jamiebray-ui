# [Jamie Bray UI](https://jamiebray.me)

My personal website - with semantic HTML & zero JS.

## The challenge

I built this site as a challenge to push my knowledge of native browser functionality, and improve my skills CSS.

With this challenge I set about some rules, and I've documented my learnings.

## Rules

### Semantic HTML

- Each element must actually convey meaning. (no arbitrary `div`)

- Minimal HTML elements. (no CSS selector bloat)

### Beautiful CSS

- Modern SPA animations. (using `:target`)

### No JS

- Need I say more.

## Favourite learnings

##### `isolation: isolate`

Creates a new stacking context within child elements, allowing locally scoped z-index usage.

##### `section:target ~ section`

You can create an SPA "like" site by just transitioning between elements based on whether they're the current target. (`url.com/#target`)

With this CSS query, you can transition (almost) any arbitrary element based on a specific adjacent element being targeted.

#####  `box-shadow`

Box shadow is magnitudes easier to think about when you create a template.

```css
--body-highlight: inset 2px 2px 4px #f00f;
--body-shadow: inset -2px -2px 4px #0f0f;
--reflection: -2px -2px 4px #00ff;
--shadow: 2px 2px 0px #ff0f;
box-shadow: var(--body-shadow), var(--body-highlight), var(--reflection), var(--shadow);
```

##### `::after` & `::before`

I didn't realise how *easy* these selectors were to use - just 2 free adjacent "elements" to style.

##### `grid-column` & `grid-row` overlapping

You can overlap elements if you assign the same starting position of 2 grid elements with `grid-column` and `grid-row`.

##### `webkit-background-clip: text`

This snippet creates a gradient font colour!

```css
background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

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
