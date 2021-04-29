import React from 'react'
import { render, cleanup } from '@testing-library/react'
import CommonSelect from './index'

const makeSut = ({children}) => {
  const sut = render(
    <CommonSelect>
      {children}
    </CommonSelect>
  )
  return {
    sut
  }
}

describe('CommonSelect Component', () => {
  afterEach(cleanup)

  it('Should load childrens on add options', () => {
    const option = [
      <option value="M" select>M</option>,
      <option value="F" select>F</option>
    ]
    const { sut } = makeSut(option)
    const select = sut.getByTestId("select")
    expect(select.children).toBeTruthy()
  })
})