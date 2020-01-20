import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Exchange from '../components/Exchange'

test('renders component', () => {
  const { getByText } = render(<Exchange />)
  expect(getByText('Please specify value')).toBeInstanceOf(HTMLParagraphElement)
})

test('calculates result after user types value', () => {
  const { getByLabelText, getByText, debug } = render(<Exchange />)
  const input = getByLabelText('pln-input')

  fireEvent.change(input, { target: { value: '122' } })
  const textNode = waitForElement(() => getByText('PLN 122.00 = €28.50'))

  expect(textNode).toBeInstanceOf(Promise)
})
