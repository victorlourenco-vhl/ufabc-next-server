const _ = require('lodash')
const app = require('@/app')
const Schema = require('mongoose').Schema

const Model = module.exports = Schema({
  locked: {
    type: Boolean,
    default: false
  },

  curso: String,
  grade: String,

  mandatory_credits_number: Number,
  limited_credits_number: Number,
  free_credits_number: Number,
  credits_total: Number
})

Model.index({ curso: 1, grade: 1 })