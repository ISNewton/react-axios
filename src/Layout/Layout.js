const layout = props => {
  return  (
  <>
    <h1>The Header</h1>
    <main>
      {props.children}
    </main>
  </>
  )

}

export default layout