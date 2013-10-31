# To Do

## Types of captions

- Embedded Caption
    - Positioning
        - Bottom (default)
        - Top
    - Effects
        - Static (default)
        - Hover to hide
        - Hover to hide, animate
        - Hover to show
        - Hover to show, animate
    - Font Size
        - Normal (default)
        - Larger
    - Theme
        - Neutral, gray with black text (default)
        - Light, white with black text
        - Dark, black with white text

- Overlay Caption
    - Positioning
        - Over (default)
    - Effects
        - Hover to show (default)
        - Hover to show, animate
    - Font Size
        - Normal (default)
        - Larger
    - Theme
        - Neutral, gray with black text (default)
        - Light, white with black text
        - Dark, black with white text

## Selectors

### Key Differentiator

- embed vs overlay

### Distinct Selectors

- position
- effect

### Common Selectors

- font-size
- theme

### Embed Options

- embed (bottom) (static) (normal) (neutral)
    - ... hide (normal) (neutral)
    - ... hide-smooth (normal) (neutral)
    - ... show (normal) (neutral)
    - ... show-smooth (normal) (neutral)
    - ... hide-slide (normal) (neutral)
    - ... show-slide (normal) (neutral)
- embed top (static) (normal) (neutral)
    - ... hide (normal) (neutral)
    - ... hide-smooth (normal) (neutral)
    - ... show (normal) (neutral)
    - ... show-smooth (normal) (neutral)
    - ... hide-slide (normal) (neutral)
    - ... show-slide (normal) (neutral)

Seems like for the slide to work across various positionings, it will have
to be linked to the positioning selector that way if it is top-slide, then
it can be animated to slide down (rather than up for the default bottom
position).

embed-top-hide normal/larger neutral
embed-top-hide-smooth normal/larger neutral
...

vs.

embed-top hide normal/larger neutral
embed-top hide-smooth normal/larger neutral
...

### Overlay Options

- overlay (over) (show) (normal) (neutral)
    - ... show-smooth (normal) (neutral)
    - ... show-slide (normal) (neutral)

overlay-show normal/larger neutral
overlay-show-smooth normal/larger neutral
overlay-show-slide normal/larger neutral

## Types of Animations

- Fade In
- Fade Out
- Slide In ?
- Slide Out ?
