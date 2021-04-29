import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Header from './index'

const makeSut = () => {
  const sut = render(
    <Header/>
  )
  return {
    sut
  }
}

describe('Header Component', () => {
  afterEach(cleanup)

  it('Should start with initial state', () => {
    const { sut } = makeSut()
    const header = sut.getByTestId("header")
    expect(header.childElementCount).toBe(5)
  })
})