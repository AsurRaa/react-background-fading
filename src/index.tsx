import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  width: ${(props) => {
    // @ts-ignore
    return `${props.width}px`
  }};
  height: ${(props) => {
    // @ts-ignore
    return `${props.height}px`
  }};
  background-color: ${(props) => props.color};
  transition-delay: 0s;
  transition: ${(props) => {
    // @ts-ignore
    return `background-color ${props.time}s cubic-bezier(1, 1, 1, 1);`
  }}
  };
`

interface Props {
  width: number
  height: number
  transitionTiming?: number
  colors?: Array<String>
}

const ReactBackgroundFading: React.FC<Props> = (props) => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      // @ts-ignore
      setIndex((prevTime: number) => {
        // @ts-ignore
        if (prevTime === props.colors.length - 1) {
          setIndex(0)
        } else {
          return prevTime + 1
        }
      })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    // @ts-ignore
    <Layout
      width={props.width}
      height={props.height}
      // @ts-ignore
      color={props.colors[index]}
      time={props.transitionTiming}
    />
  )
}

ReactBackgroundFading.defaultProps = {
  colors: ['orange', 'gray', 'yellow', 'green', 'red'],
  transitionTiming: 2
}

export default ReactBackgroundFading
