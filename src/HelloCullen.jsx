/**
 * HelloCullen is a component
 *
 * Components are functions
 * that return JSX ("HTML-ish" code)
 *
 * Components can only return one element
 *
 * Conventions:
 * - Components are PascalCase'd
 * - One component per file (one function with a return with JSX in it)
 */
function HelloCullen() {
  return (
    // JSX fragment!
    // An element with no name
    <>
      <h1>Hello Cullen!!!!</h1>
      <h2>How you doing?!</h2>
    </>
  );
}

// In node, we'd do:
// module.exports = HelloCullen;

// Client side (react) we do this instead:
export default HelloCullen;
