import React from 'react';
import { render, screen } from '@testing-library/react';
import Authentication from './Authentication.test';  // Pfad ggf. anpassen, falls nötig

describe('Authentication Component', () => {
  test('renders login button', () => {
    render(<Authentication />);
    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  // Füge hier weitere Testfälle hinzu, z.B. Test auf das Auftreten von Fehlermeldungen
});

