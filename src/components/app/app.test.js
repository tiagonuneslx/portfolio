import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import App from './app'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders YO button', () => {
  const { getByRole, getByText } = render(<App />)
  expect(getByRole('button')).toBeInTheDocument()
  expect(getByText('YO')).toBeInTheDocument()
})
