import { Coords, Middleware } from "@floating-ui/dom"

/* -----------------------------------------------------------------------------
 * Shared middleware utils
 * -----------------------------------------------------------------------------*/

const toVar = (value: string) => ({ variable: value, reference: `var(${value})` })

export const cssVars = {
  arrowSize: toVar("--arrow-size"),
  arrowSizeHalf: toVar("--arrow-size-half"),
  arrowBg: toVar("--arrow-background"),
  transformOrigin: toVar("--transform-origin"),
  arrowOffset: toVar("--arrow-offset"),
}

/* -----------------------------------------------------------------------------
 * Transform Origin Middleware
 * -----------------------------------------------------------------------------*/

const getTransformOrigin = (arrow?: Partial<Coords>) => ({
  top: "bottom center",
  "top-start": arrow ? `${arrow.x}px bottom` : "left bottom",
  "top-end": arrow ? `${arrow.x}px bottom` : "right bottom",
  bottom: "top center",
  "bottom-start": arrow ? `${arrow.x}px top` : "top left",
  "bottom-end": arrow ? `${arrow.x}px top` : "top right",
  left: "right center",
  "left-start": arrow ? `right ${arrow.y}px` : "right top",
  "left-end": arrow ? `right ${arrow.y}px` : "right bottom",
  right: "left center",
  "right-start": arrow ? `left ${arrow.y}px` : "left top",
  "right-end": arrow ? `left ${arrow.y}px` : "left bottom",
})

export const transformOrigin: Middleware = {
  name: "transformOrigin",
  fn({ placement, elements, middlewareData }) {
    const { arrow } = middlewareData
    const transformOrigin = getTransformOrigin(arrow)[placement]

    const { floating } = elements
    floating.style.setProperty(cssVars.transformOrigin.variable, transformOrigin)

    return {
      data: { transformOrigin },
    }
  },
}

/* -----------------------------------------------------------------------------
 * Arrow Middleware
 * -----------------------------------------------------------------------------*/

type ArrowOptions = { element: HTMLElement }

export const shiftArrow = (opts: ArrowOptions): Middleware => ({
  name: "shiftArrow",
  fn({ placement, middlewareData }) {
    const { element: arrow } = opts
    const { x, y } = middlewareData.arrow ?? { x: 0, y: 0 }

    const dir = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[placement.split("-")[0]]!

    Object.assign(arrow.style, {
      top: `${y}px`,
      left: `${x}px`,
      [dir]: cssVars.arrowOffset.reference,
    })

    return {}
  },
})
