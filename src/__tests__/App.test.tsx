// Import test dependencies
import { screen, render } from '@testing-library/react'
import user from '@testing-library/user-event'

// Test components to test
import App from "../App"

// Tests
test('Renders main page correctly', async () => {
	// Setup
	render(<App />)
	const buttonCount = await screen.findByRole('button');

	// Pre Expectations
	expect(buttonCount.innerHTML).toBe('count is 0')

	// Init
	await user.click(buttonCount)
	await user.click(buttonCount)

	// Post Expectations
	expect(buttonCount.innerHTML).toBe('count is 2')
});