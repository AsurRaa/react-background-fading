import React, { useState } from "react"

const Testing = (props) => {
    const [colorChooen, setColorChoosen] = useState()
    let [currentIndex, setCurrentIndex] = useState(0)
    let colors = ["red", "orange", "yellow", "green", "purple"];



    setInterval(() => {
        setColorChoosen(colors[currentIndex])
        setCurrentIndex(currentIndex++);
        if (currentIndex == undefined || currentIndex >= colors.length) {
            setCurrentIndex(currentIndex = 0);
        }

    }, 1000);

    return (
        <div>

            <div className="animated">skjdfghsk</div>
            {console.log(colorChooen)}
            <style jsx>{`
            .animated {
                width:500px;
                height: 500px;
                background-color: ${colorChooen};
                transition: background-color 2s cubic-bezier(1, 1, 1, 1);
	            transition-delay: 1s;
            }
            `}</style>
        </div>
    )
}


export default Testing;
