import React from 'react'
import { mount } from 'enzyme'
import Button from '../index'

/* eslint-disable no-undef */
describe('Button Component render tests.', () => {

  let wrappedComponent

  beforeEach(() => {
    wrappedComponent = mount(<Button />)
  });

  afterEach(() => {
    wrappedComponent.unmount()
  })

  it('Should successfully render button component')
})