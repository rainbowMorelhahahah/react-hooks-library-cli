import React from 'react'

import { useMyHook } from 'crh'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App