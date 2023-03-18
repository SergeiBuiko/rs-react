import React from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <Link to="/">go to Home page</Link>
    </div>
  );
}
// export { NotFound };
