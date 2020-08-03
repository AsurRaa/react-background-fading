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
  transition: background-color 2s cubic-bezier(1, 1, 1, 1);
  transition-delay: 0s;
`

interface Props {
  width: number
  height: number
  color: Array<String>
}

const ExampleComponent: React.FC<Props> = (props) => {
  const [index, setIndex] = useState<number>(0)
  const [chhosenColor, setChoosenColor] = useState<string>()
  const colors = ['orange', 'gray', 'yellow', 'green', 'red']
  useEffect(() => {
    const timer = setInterval(() => {
      // @ts-ignore
      setIndex((prevTime: number) => {
        if (prevTime === colors.length - 1) {
          setChoosenColor(colors[index])
          setIndex(0)
        } else {
          setChoosenColor(colors[index])
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
    <Layout width={props.width} height={props.height} color={chhosenColor} />
  )
}

export default ExampleComponent
