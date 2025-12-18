"use client";

function Error({ error, reset }) {
  return (
    <main>
      <h1>Something Went Wrong!</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </main>
  );
}

export default Error;
