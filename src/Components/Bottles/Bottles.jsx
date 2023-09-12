import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('../../../public/JSON/local.json')
            .then(res => res.json())
            .then(data => setBottles(data))
        

    }, [])



    return (
        <div className="max-w-[1480px] px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;