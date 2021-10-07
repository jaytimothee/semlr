import Vue from 'vue'
import Vuex from 'vuex'

import { arrayMoveImmutable } from 'array-move';

import {
  fetchContent,
  fetchTransformations,
  renameData,
  removeItem,
  moveArray
} from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    transformations: [],
    transformedContent: [],
    errorTransformation: [],

    rename: [],
    remove: [],
    move: [],

    stats: false
  },

  actions: {
    async getData({ commit }) {
      const data = await fetchContent()
      const transformationContent = fetchTransformations()

      commit('SET_DATA', data)
      commit('SET_TRANSFORMATION', transformationContent)
    },

    async rename({ commit }, { params }) {
      try {
        const result = await renameData(params)
        commit("SET_RENAME_TRANSFORMATION", result)
      } catch (error) {
        commit("SET_ERROR_TRANSFORMATION", error)
      }
    },

    async remove({ commit }, { params }) {
      const result = await removeItem(params)
      try {
        commit('SET_REMOVE_TRANSFORMATION', result)
      } catch (error) {
        console.log('error')
        commit('SET_ERROR_TRANSFORMATION', error)
      }
    },

    async move({ commit }, { params }) {
      const result = await moveArray(params)
      try {
        commit('SET_MOVE_TRANSFORMATION', result)
      } catch (error) {
        commit('SET_ERROR_TRANSFORMATION', error)

      }
    },

    reset({ commit }) {
      commit('SET_DATA_RESET')
    }

  },

  mutations: {
    SET_DATA(state, data) {
      state.data = data
    },

    SET_TRANSFORMATION(state, data) {
      state.transformations = data
    },
    SET_RENAME_TRANSFORMATION(state, props) {
      state.rename.push(props)
      state.transformedContent = state.data.slice(0)
      state.rename.forEach(item => {
        state.transformedContent[item.index] = item.propId
      })
    },

    SET_REMOVE_TRANSFORMATION(state, props) {
      state.remove.push(props)
      state.transformedContent = state.data.slice(0)
      state.remove.forEach(item => {
        state.transformedContent.splice(item.index, 1)
      })
    },

    SET_MOVE_TRANSFORMATION(state, props) {
      state.stats = true
      state.move.push(props)
      state.transformedContent = arrayMoveImmutable(state.transformedContent, props.position, props.distance);

    },

    SET_ERROR_TRANSFORMATION(state, error) {
      console.log("error", error);
      state.errorTransformation.push(error)
    },

    SET_DATA_RESET(state) {
      // state.data = []
      // state.transformations = []
      state.transformedContent = []
      state.errorTransformation = []

      state.rename = []
      state.remove = []
      state.move = []
      state.stats = false
    }

  },
})
