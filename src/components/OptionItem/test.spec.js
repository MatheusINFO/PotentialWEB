import React from 'react'
import faker from 'faker'
import { render, cleanup, fireEvent } from '@testing-library/react'
import OptionItem from './index'

const makeSut = ({value, nome, idade, sexo}) => {
  const sut = render(
    <OptionItem value={value} nome={nome} idade={idade} sexo={sexo}/>
  )
  return {
    sut
  }
}

describe('OptionItem Component', () => {
  afterEach(cleanup)

  it('Should start with initial state', () => {
    const { sut } = makeSut('', '', '', '')
    const option = sut.getByTestId("option")
    expect(option.value).toBe(", anos - ()")
  })

  it('Should change on change', () => {
    const { sut } = makeSut('', '', '', '')
    const option = sut.getByTestId("option")
    const text = faker.random.words()
    fireEvent.input(option, { target: { text }})
    expect(option.value).toBe(text)
    expect(option.textContent).toBe(text)
  })
})