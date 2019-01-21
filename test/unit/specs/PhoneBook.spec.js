/**
 * @jest-environment node
 */

// Import Vue and the component being tested
import Vue from "vue";
import { mount } from '@vue/test-utils'
import Component from '../../../src/components/PhoneBook'

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('PhoneBook', () => {
  // Inspect the raw component options
  it('has a created Phone Book', () => {
    expect(typeof Component.created).toBe('function')
  })

  it('should check initial data', () => {
    const data = Component.data()

    expect(data.sortDir).toEqual('asc')
    expect(data.sortName).toEqual('nick')
  })

  it('should set sort name/dir', () => {
    const comp = new Vue(Component).$mount();
    comp.setSort('phoneNumber')
    expect(comp.sortName).toEqual('phoneNumber')
    expect(comp.sortDir).toEqual('asc')
    comp.setSort('phoneNumber')
    expect(comp.sortDir).toEqual('desc')
  })

})
