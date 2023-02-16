import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { Slider } from '@opentiny/vue'
import { nextTick, ref } from 'vue'
import { randomValues } from './common/globalConfig'

randomValues(global)

let value = 40

describe('slider', () => {
  test('vertical', async () => {
    const wrapper = mount(() => <Slider v-model={value} vertical={true}></Slider>)
    expect(wrapper.find('.tiny-slider__vertical').exists()).toBe(true)
  })

  test('slot', async () => {
    const wrapper = mount(() => <Slider v-model={value} show-input={true} v-slots={{
      default: (slotScope) => <b class="onlyText">{slotScope.slotScope}%</b>
    }}></Slider>)
    expect(wrapper.find('.onlyText').text()).toBe(`${value}%`)
  })

  test('events', async () => {
    const mousedown = vi.fn()
    const wrapper = mount(() => <Slider v-model={value} onStart={mousedown}></Slider>)
    await wrapper.find('.tiny-slider__handle').trigger('mousedown')
    await nextTick()
    expect(mousedown).toHaveBeenCalled()

  })
})
