import { injectGlobal } from "@emotion/css"
import { normalizeProps, PropTypes, useMachine, useSetup } from "@zag-js/vue"
import * as toggle from "@zag-js/toggle"
import { defineComponent } from "@vue/runtime-core"
import { toggleStyle } from "../../../../shared/style"
import { StateVisualizer } from "../components/state-visualizer"
import { computed, h, Fragment } from "vue"
import { useId } from "../hooks/use-id"

injectGlobal(toggleStyle)

export default defineComponent({
  name: "Toggle",
  setup() {
    const [state, send] = useMachine(toggle.machine({ label: "Toggle italic" }))
    const ref = useSetup({ send, id: useId() })
    const apiRef = computed(() => toggle.connect<PropTypes>(state.value, send, normalizeProps))

    return () => {
      const api = apiRef.value
      return (
        <div ref={ref}>
          <button class="toggle" {...api.buttonProps}>
            B
          </button>
          <StateVisualizer state={state} />
        </div>
      )
    }
  },
})
