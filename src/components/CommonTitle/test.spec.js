import React from 'react'
import faker from 'faker'
import { render, cleanup } from '@testing-library/react'
import CommonTitle from './index'

const makeSut = (text) => {
  const sut = render(
    <CommonTitle text={text}/>
  )
  return {
    sut
  }
}

describe('CommonTitle Component', () => {
  afterEach(cleanup)

  it('Should start with initial state', () => {
    const { sut } = makeSut('')
    const title = sut.getByTestId("title")
    expect(title.textContent).toBe('')
  })

  it('Should change text on default change', () => {
    const text = faker.random.words()
    const { sut } = makeSut(text)
    const title = sut.getByTestId("title")
    expect(title.textContent).toBe(text)
  })
})