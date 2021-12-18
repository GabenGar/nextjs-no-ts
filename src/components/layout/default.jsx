/**
 * @param {object} props
 * @param {JSX.Element} props.children
 */
export const DefaultLayout = ({ children }) => {
  return (<>
    <header>Header</header>
    <main>{children}</main>
    <footer>Footer</footer>
  </>)
}
