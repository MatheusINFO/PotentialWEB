import React from 'react'
import faker from 'faker'
import { render, cleanup, fireEvent } from '@testing-library/react'
import LinkButton from './index'

const makeSut = ({destiny, title, text}) => {
  const sut = render(
    <LinkButton destiny={destiny} title={title} text={text}/>
  )
  return {
    sut
  }
}

describe('LinkButton Component', () => {
  afterEach(cleanup)

  it('Should start with initial state', () => {
    const { sut } = makeSut('', '', '')
    const link = sut.getByTestId("link")
    expect(link.textContent).toBe('')
  })

  it('Should change text on default change', () => {
    const { sut } = makeSut('', '',  '')
    const link = sut.getByTestId("link")
    const text = faker.random.words()
    fireEvent.input(link, { target: { text }})
    expect(link.textContent).toBe(text)
  })
})