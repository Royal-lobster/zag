import { isIos } from "@zag-js/utils"

const identifier = "data-scroll-lock"

function assignStyle(el: HTMLElement | null | undefined, style: Partial<CSSStyleDeclaration>) {
  if (!el) return () => {}
  const previousStyle = el.style.cssText
  Object.assign(el.style, style)
  return () => {
    el.style.cssText = previousStyle
  }
}

function setCSSProperty(el: HTMLElement | null | undefined, property: string, value: string) {
  if (!el) return () => {}
  const previousValue = el.style.getPropertyValue(property)
  el.style.setProperty(property, value)
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue)
    } else {
      el.style.removeProperty(property)
    }
  }
}

function getPaddingProperty(documentElement: HTMLElement) {
  // RTL <body> scrollbar
  const documentLeft = documentElement.getBoundingClientRect().left
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft
  return scrollbarX ? "paddingLeft" : "paddingRight"
}

interface BodyScrollOptions {
  disabled?: boolean
  document?: Document
}

export function preventBodyScroll(options: BodyScrollOptions = {}) {
  const { document: docProp, disabled } = options

  if (disabled) return

  const doc = docProp ?? document
  const win = doc?.defaultView ?? window
  const { documentElement, body } = doc

  const locked = body.hasAttribute(identifier)
  if (locked) return

  body.setAttribute(identifier, "")

  const scrollbarWidth = win.innerWidth - documentElement.clientWidth
  const setScrollbarWidthProperty = () => setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`)
  const paddingProperty = getPaddingProperty(documentElement)

  const setStyle = () =>
    assignStyle(body, {
      overflow: "hidden",
      [paddingProperty]: `${scrollbarWidth}px`,
    })

  // Only iOS doesn't respect `overflow: hidden` on document.body
  const setIOSStyle = () => {
    const { scrollX, scrollY, visualViewport } = win

    // iOS 12 does not support `visuaViewport`.
    const offsetLeft = visualViewport?.offsetLeft ?? 0
    const offsetTop = visualViewport?.offsetTop ?? 0

    const restoreStyle = assignStyle(body, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: "0",
      [paddingProperty]: `${scrollbarWidth}px`,
    })

    return () => {
      restoreStyle()
      win.scrollTo(scrollX, scrollY)
    }
  }

  const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()]

  return () => {
    cleanups.forEach((cleanup) => cleanup())
    body.removeAttribute(identifier)
  }
}
