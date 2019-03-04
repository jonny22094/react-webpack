//@flow
import {types} from 'mobx-state-tree'

export const Store = types.model('store', {
  userStore: types.optional(types.boolean, false),
  websiteStore: types.optional(types.boolean, false)
})