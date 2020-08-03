import React, {useEffect, useState} from "react"


const Lala = () => {
    // let [color, setColor] = useState()
    // let [index,setIndex] = useState(0)
    // var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    // setInterval(() => {
    //     setColor(colors[index])
    //     setIndex(index++)
    //     if (index === undefined || index >= colors.length) {
    //         setIndex(0)
    //     }
    // }, 1000);
    // let [color, setColor] = useState()
    // var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    // var currentIndex = 0;
    // var hah = 1
    // console.log("fickkkkk",document.body)
    // var colorrrrr = ''
    // setInterval(function () {
    //     document.body.style.cssText = "background-color: " + colors[currentIndex];
    //     colorrrrr = colors[currentIndex]
    //     // setColor(colors[currentIndex])
    //     currentIndex++;
    //     if (currentIndex == undefined || currentIndex >= colors.length) {
    //         currentIndex = 0;
    //     }
    // }, 1000);


    // var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    // const [color, setColor] = useState()
    // let [index, setIndex] = useState(0)
    // // useEffect(()=> {
    //     const timer = setInterval(()=> {
    //         setColor(prevTime => prevTime + 1);
    //     },1000)
    // })
    // setInterval(()=> {
    //     setColor(color => color + 1);
    // },1000)

    const [index, setIndex] = useState(0);
    const [color, setColor] = useState()
    let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prevTime => prevTime + 1);
        }, 1000);
        return () => {
            if (index === undefined || index >= colors.length) {
                setIndex(0)
            }
            window.clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <div>{index} {color} {colors[index]}
            <div className="animated">skjdfghsk</div>
            <style jsx>{`
            .animated {
                width:500px;
                height: 500px;
                background-color: ${colors[index]};
                transition: background-color 2s cubic-bezier(1, 1, 1, 1);
	            transition-delay: 1s;
            }
            `}</style>
        </div>
        </div>
    )
}

export default Lala
