import { 
  registerMutations,
  fetchAsync,
  createMutationSet
 } from '../src'

const mockSet = {
  BASE: 'GET_DATA',
  SUCCESS: 'GET_DATA_SUCCESS',
  FAILURE: 'GET_DATA_FAILURE',
  PENDING: 'GET_DATA_PENDING',
  stateKey: 'getDataData',
  loadingKey: 'getDataPending',
  statusCode: 'getDataStatusCode'
}

const anotherSet = {
  BASE: 'GET_POST'
}

describe('registerMutations', () => {
  it('registers a single mutation set', () => {
    const mutations = {}

    registerMutations(mutations, mockSet)

    expect(mutations).toHaveProperty('GET_DATA')
    expect(typeof mutations['GET_DATA']).toBe('function')
  })

  it('registers an array of mutation sets', () => {
    const mutations = {}

    registerMutations(mutations, [mockSet, anotherSet])

    expect(mutations).toHaveProperty('GET_DATA')
    expect(mutations).toHaveProperty('GET_POST')
    expect(typeof mutations['GET_DATA']).toBe('function')
    expect(typeof mutations['GET_POST']).toBe('function')
  })
})

describe('createMutationSet', () => {
  it('creates an object with the three async states', () => {
    const expected = mockSet

    const actual = createMutationSet('GET_DATA')

    expect(actual).toEqual(expected)
  })
})