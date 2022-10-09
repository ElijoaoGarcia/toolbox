import { cleanup, render, screen } from '@testing-library/react'
import { it, describe, expect, beforeEach,  } from 'vitest';
import FileCard from './FileCard.jsx'


describe('<FileCard /> test suit', () => {
  const file = {file: "test1.csv", lines: [{ text: "3jh34", number: 34234, hex: "234234234234" }]}
  
  beforeEach(cleanup)

  it('should be a function', () => {
    expect(typeof FileCard).toBe('function')
  })

  it('should render title properly', () => {
    render(<FileCard file={file} />)

    screen.getByText("test1.csv")
  })

  it('should render the file properly', () => {
    render(<FileCard file={file} />)

    screen.getByText(file.lines[0].text)
    screen.getByText(file.lines[0].number)
    screen.getByText(file.lines[0].hex)
  })
})

