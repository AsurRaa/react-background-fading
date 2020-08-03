import React, {useEffect, useState} from "react"


const Lala = () => {
    const [index, setIndex] = useState(0);
    let colors = ["orange", "gray", "yellow", "green", "red"];
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prevTime =>{
                if(prevTime === colors.length -1 ) {
                    setIndex(0)
                } else return  prevTime + 1
            });
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <div>{index}  {colors[index]}
            <div className="animated">skjdfghsk</div>
            <style jsx>{`
            .animated {
                width:500px;
                height: 500px;
                background-color: ${colors[index]};
                transition: background-color 2s cubic-bezier(1, 1, 1, 1);
	            transition-delay: 0s;
            }
            `}</style>
        </div>
        </div>
    )
}

export default Lala
