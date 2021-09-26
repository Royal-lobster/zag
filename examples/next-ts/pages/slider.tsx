/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMachine } from "@ui-machines/react"
import { slider } from "@ui-machines/web"
import { StateVisualizer } from "components/state-visualizer"
import serialize from "form-serialize"
import { useMount } from "hooks/use-mount"

export default function Page() {
  const [state, send] = useMachine(
    slider.machine.withContext({
      uid: "slider-35",
      value: 40,
      name: "volume",
      dir: "ltr",
    }),
  )

  const ref = useMount<HTMLDivElement>(send)

  const { inputProps, thumbProps, rootProps, trackProps, rangeProps, labelProps, outputProps, value } = slider.connect(
    state,
    send,
  )

  return (
    <>
      <form // ensure we can read the value within forms
        onChange={(e) => {
          const formData = serialize(e.currentTarget, { hash: true })
          console.log(formData)
        }}
      >
        <div>
          <label {...labelProps}>Slider Label</label>
          <output {...outputProps}>{value}</output>
        </div>
        <div className="slider" ref={ref} {...rootProps}>
          <div className="slider__track" {...trackProps}>
            <div className="slider__range" {...rangeProps} />
          </div>
          <div className="slider__thumb" {...thumbProps}>
            <input {...inputProps} />
          </div>
        </div>
        <StateVisualizer state={state} />
      </form>

      <style jsx>{`
        form {
          margin: 45px;
        }

        .slider {
          margin-top: 12px;
          --slider-thumb-size: 20px;
          --slider-track-height: 4px;
          height: var(--slider-thumb-size);
          display: flex;
          align-items: center;
          max-width: 200px;
          position: relative;
        }

        .slider__thumb {
          all: unset;
          width: var(--slider-thumb-size);
          height: var(--slider-thumb-size);
          border-radius: 9999px;
          background: white;
          box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 10px;
          border-radius: 999px;
        }

        .slider__thumb:focus-visible {
          box-shadow: rgb(0 0 0 / 22%) 0px 0px 0px 5px;
        }

        .slider__thumb:hover {
          background-color: rgb(245, 242, 255);
        }

        .slider__track {
          height: var(--slider-track-height);
          background: rgba(0, 0, 0, 0.2);
          border-radius: 9999px;
          flex-grow: 1;
        }

        .slider__range {
          background: magenta;
          border-radius: inherit;
          height: 100%;
        }

        output {
          margin-inline-start: 12px;
          color: lightslategray;
        }
      `}</style>
    </>
  )
}
