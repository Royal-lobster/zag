# @zag-js/number-input

## 0.1.9

### Patch Changes

- [`dfae8e35`](https://github.com/chakra-ui/zag/commit/dfae8e351f1851d91a2d5508bd1a875be180c73d) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Cleanup types

- Updated dependencies [[`f0fb09f9`](https://github.com/chakra-ui/zag/commit/f0fb09f9bfa6a7919d078c66cf14930acab6bdfd),
  [`5982d826`](https://github.com/chakra-ui/zag/commit/5982d826126a7b83252fcd0b0479079fccb62189),
  [`e2f62c7a`](https://github.com/chakra-ui/zag/commit/e2f62c7a30266e7e2c8b1b10b55a22fb979199ed),
  [`ef2872d7`](https://github.com/chakra-ui/zag/commit/ef2872d7b291fa39c6b6293ae12f522d811a2190),
  [`63c1e3a9`](https://github.com/chakra-ui/zag/commit/63c1e3a996832ccf55e9a3cc1015d05b6ba927e2)]:
  - @zag-js/dom-utils@0.1.4
  - @zag-js/core@0.1.6
  - @zag-js/utils@0.1.2
  - @zag-js/rect-utils@0.1.2

## 0.1.8

### Patch Changes

- Updated dependencies [[`cf14f6e9`](https://github.com/chakra-ui/zag/commit/cf14f6e971460bed8a65ae061492446cd47d41c0),
  [`0d3065e9`](https://github.com/chakra-ui/zag/commit/0d3065e94d707d3161d901576421beae66c32aba),
  [`eafec246`](https://github.com/chakra-ui/zag/commit/eafec246b5dfb0c9f4cc421974a8bfa651fe81f0),
  [`587cbec9`](https://github.com/chakra-ui/zag/commit/587cbec9b32ee9e8faef5ceeefb779231b152018)]:
  - @zag-js/types@0.1.2
  - @zag-js/core@0.1.5
  - @zag-js/dom-utils@0.1.3

## 0.1.7

### Patch Changes

- [`0369e964`](https://github.com/chakra-ui/zag/commit/0369e9649ac68637a29e617bf58672ef70aa399f) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Fix issue where machine transitions to `spinning` state on right
  clicking the spinner buttons.

## 0.1.6

### Patch Changes

- [#104](https://github.com/chakra-ui/zag/pull/104)
  [`fed4d696`](https://github.com/chakra-ui/zag/commit/fed4d696cee81056634770e70778e661a0a7346c) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Fix issue where firefox doesn't fire the pointerup event
  consistently on disabled button. This created an bug where it required an extra click when the value is decreased
  to 0.

## 0.1.5

### Patch Changes

- [#101](https://github.com/chakra-ui/zag/pull/101)
  [`d0b26765`](https://github.com/chakra-ui/zag/commit/d0b26765f9771de12064104caea540131ad19e77) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Add additional `data-type` attribute to identify the spin buttons.

  ```css
  [data-part="spin-button"] {
    /* shared styles for spin buttons */
  }

  [data-part="spin-button"][data-type="increment"] {
    /* styles for increment button */
  }

  [data-part="spin-button"][data-type="decrement"] {
    /* styles for decrement button */
  }
  ```

- Updated dependencies [[`1274891d`](https://github.com/chakra-ui/zag/commit/1274891dc06ea869dd2db78685aab252b7baec91)]:
  - @zag-js/dom-utils@0.1.2

## 0.1.4

### Patch Changes

- [#83](https://github.com/chakra-ui/zag/pull/83)
  [`bcf247f1`](https://github.com/chakra-ui/zag/commit/bcf247f18afa5413a7b008f5ab5cbd3665350cb9) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Fix issue where multiple number input rendered on page causes them
  to the initial value of the first input

* [`f4d2cf6d`](https://github.com/chakra-ui/zag/commit/f4d2cf6d603268adc0ab5d99ffacc5cba6906a65) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Make the `scrubberPoint` type internal

- [#89](https://github.com/chakra-ui/zag/pull/89)
  [`a71d5d2a`](https://github.com/chakra-ui/zag/commit/a71d5d2a984e4293ebeb55944e27df20492ad1c0) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Add incremental support for shadow root in machines

- Updated dependencies [[`bcf247f1`](https://github.com/chakra-ui/zag/commit/bcf247f18afa5413a7b008f5ab5cbd3665350cb9),
  [`a71d5d2a`](https://github.com/chakra-ui/zag/commit/a71d5d2a984e4293ebeb55944e27df20492ad1c0),
  [`65df1e9a`](https://github.com/chakra-ui/zag/commit/65df1e9ad8948ee6e09519d1136f8178b693f277)]:
  - @zag-js/core@0.1.4
  - @zag-js/types@0.1.1
  - @zag-js/number-utils@0.1.2

## 0.1.3

### Patch Changes

- [#74](https://github.com/chakra-ui/zag/pull/74)
  [`206c3ba`](https://github.com/chakra-ui/zag/commit/206c3bac07d97b33df304266db516d6304aec1c6) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Update number input utils

* [`8d684f4`](https://github.com/chakra-ui/zag/commit/8d684f4a2eccb809b53cabdaa9ada62e6c3a0ba5) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Fix issue where BLUR event in focused state doesn't transition
  correctly

* Updated dependencies [[`c1a1d41`](https://github.com/chakra-ui/zag/commit/c1a1d4121b5add1b0195633261e9f6b1aca0ff2f),
  [`c53fb27`](https://github.com/chakra-ui/zag/commit/c53fb27d230ff972ef74458f60358d85f6007695),
  [`6e175c6`](https://github.com/chakra-ui/zag/commit/6e175c6a69bb70fb78ccdd77a25d83a164298888),
  [`46ef565`](https://github.com/chakra-ui/zag/commit/46ef5659a855a382af1e5b0e24d35d03466cfb22)]:
  - @zag-js/dom-utils@0.1.1
  - @zag-js/number-utils@0.1.1
  - @zag-js/utils@0.1.1
  - @zag-js/core@0.1.3
  - @zag-js/rect-utils@0.1.1

## 0.1.2

### Patch Changes

- Updated dependencies [[`3f715bd`](https://github.com/chakra-ui/zag/commit/3f715bdc4f52cdbf71ce9a22a3fc20d31c5fea89)]:
  - @zag-js/core@0.1.2

## 0.1.1

### Patch Changes

- Updated dependencies [[`8ef855e`](https://github.com/chakra-ui/zag/commit/8ef855efdf8aaca4355c816cc446bc745e34ec54)]:
  - @zag-js/core@0.1.1

## 0.1.0

### Minor Changes

- [`157aadc`](https://github.com/chakra-ui/zag/commit/157aadc3ac572d2289432efe32ae3f15a2be4ad1) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Initial release

### Patch Changes

- Updated dependencies [[`157aadc`](https://github.com/chakra-ui/zag/commit/157aadc3ac572d2289432efe32ae3f15a2be4ad1)]:
  - @zag-js/core@0.1.0
  - @zag-js/types@0.1.0
  - @zag-js/utils@0.1.0
  - @zag-js/dom-utils@0.1.0
  - @zag-js/number-utils@0.1.0
  - @zag-js/rect-utils@0.1.0
