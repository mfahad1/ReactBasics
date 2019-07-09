import React from 'react';

const ShowCount = ({ value }) => <h1>{ value }</h1>
const CounterCaller = () => {
  const heading = 'this is my counter that we will use to understand states further on';
  return (
    <div>
      {heading}
      <ShowCount value={1} />
    </div>
  )
}

export default CounterCaller;
export {
  ShowCount
}
// export default CounterCaller;