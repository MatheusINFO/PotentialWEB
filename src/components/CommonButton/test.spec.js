import React from 'react'
import { render, cleanup } from '@testing-library/react'
import CommonButton from './index'

const makeSut = (value) => {
  const sut = render(
    <CommonButton text={value}/>
  )
  return {
    sut
  }
}

describe('CommonButton Component', () => {
  afterEach(cleanup)

  it('Should start with initial state', () => {
    const { sut } = makeSut('')
    const button = sut.getByTestId("button")
    expect(button.textContent).toBe('')
  })

  it('Should change default text on change', () => {
    const { sut } = makeSut('Cadastrar')
    const button = sut.getByTestId("button")
    expect(button.textContent).toBe('Cadastrar')
  })

  it('Should button enable', () => {
    const { sut } = makeSut('Cadastrar')
    const button = sut.getByTestId("button")
    expect(button.disabled).toBeFalsy()
  })
})