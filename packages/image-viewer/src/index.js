/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc'
import MobileTemplate from './mobile'

const $constants = {
  MODE: {
    CONTAIN: {
      name: 'contain',
      icon: 'icon-fullscreen'
    },
    ORIGINAL: {
      name: 'original',
      icon: 'icon-minscreen'
    }
  },
  DEFAULT_POPPER_ZINDEX: Number.POSITIVE_INFINITY
}

const template = (mode) => {
  if (process.env.TINY_MODE === 'pc') return PCTemplate
  else if (process.env.TINY_MODE === 'mobile') return MobileTemplate
  else return mode === 'mobile' ? MobileTemplate : PCTemplate
}

export default {
  name: $prefix + 'ImageViewer',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    urlList: {
      type: Array,
      default: () => []
    },
    zIndex: {
      type: Number,
      default: $constants.DEFAULT_POPPER_ZINDEX
    },
    previewVisible: {
      type: Boolean,
      default: false
    },
    closeShow: {
      type: Boolean,
      default: false
    },
    arrowShow: {
      type: Boolean,
      default: false
    },
    toolShow: {
      type: Boolean,
      default: false
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    imageFullCurrent: {
      type: Boolean,
      default: false
    },
    startPosition: {
      type: Number,
      default: 0
    },
    asyncClose: {
      type: Boolean,
      default: false
    },
    deleteButton: {
      type: Boolean,
      default: false
    },
    onSwitch: {
      type: Function,
      default: () => {
        // do nothing
      }
    },
    onClose: {
      type: Function,
      default: () => {
        // do nothing
      }
    }
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
