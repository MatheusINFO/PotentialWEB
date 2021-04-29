import React from 'react'
import faker from 'faker'
import { render, cleanup, fireEvent } from '@testing-library/react'
import CommonInput from './index'

const makeSut = ({name, placeholder}) => {
  const sut = render(
    <CommonInput name={name} placeholder={placeholder}/>
  )
  return {
    sut
  }
}

describe('CommonInput Component', () => {
  afterEach(cleanup)

  it('Should start with initial state', () => {
    const { sut } = makeSut('', '')
    const input = sut.getByTestId("input")
    expect(input.placeholder).toBe("")
    expect(input.value).toBe("")
  })

  it('Should change value on edit', () => {
    const { sut } = makeSut('', '')
    const input = sut.getByTestId("input")
    const value = faker.random.words()
    fireEvent.input(input, { target: { value } })
    expect(input.value).toBe(value)
  })
})