import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const GolComponent = props => {
  const { open } = props
  const [title, setTitle] = useState('')
  useEffect(() => {
    console.log(title)
  }, [title])

  const handleSubmitData = () => {
    console.log('Test')
  }

  return (
    <Fragment key="gol-component">
      <div className="gol-container">
        <form action="" onSubmit={() => handleSubmitData}>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input type="text" />
          <input type="text" />
          <textarea name="ta-gol" id="ta-gol" cols="30" rows="10" />
          <button type="submit">Zapisz</button>
        </form>
      </div>
    </Fragment>
  )
}

GolComponent.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default GolComponent
