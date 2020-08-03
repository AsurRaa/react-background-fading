import React, { useState } from "react"
import styled from "styled-components"


const FadeColor = styled.div`
    width: 500px;
    height: 200px;
    transition-delay: 5s;
    background-color: ${props => props.color};
`
// transition: background-color: ${props => props.color} 5s cubic-bezier(1, 1, 1, 1);
const BackgroundFadeColor = () => {
    const [bgColor, setBgColor] = useState()



    let colors = ["red", "orange", "yellow", "green", "purple"];


    let currentIndex = 0;
    setInterval(() => {
        console.log("render interval", currentIndex++)
        currentIndex++;
        if (currentIndex == undefined || currentIndex >= colors.length) {
            currentIndex = 0;
        }
        setBgColor(colors[currentIndex])
    }, 1000);

    // const [index, setIndex] = useState(0)
    // const [switchColor, setSwitchColor] = useState() // string color
    // const changeColor = (props) => {
    //     setIndex(index + 1)
    //     setSwitchColor(colors[index])
    // }

    return (

        <div>
            {/* <button onClick={(props) => changeColor(props)}>Change color</button>
            <p>{switchColor} {index}</p>
            <FadeColor color={bgColor} />
            <p style={{
                color: bgColor
            }}>{bgColor}</p>
            <div style={{ width: 1000, height: 500, backgroundColor: bgColor, transition: "" }}>

            </div> */}
            <h1>testing</h1>
            <div>
                <span id="123" style={{ width: 100, height: 100 }}>
                </span>
                <style jsx>{`
                    h1 {
                        color: ${bgColor};
                    }
                    span {
                        transition-delay: 5s;
                        transition: background-color: ${bgColor} 5s cubic-bezier(1, 1, 1, 1);
                    }
                `}</style>
            </div>
        </div>

    )
}


export default BackgroundFadeColor;
