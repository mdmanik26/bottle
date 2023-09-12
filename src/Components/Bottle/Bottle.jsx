

const Bottle = ({bottle}) => {
    const {name, img, price, } = bottle
    return (
        <div className="border rounded-lg px-5 py-3 bg-[#a5a3a330]">
            <img className="max-w-[300px] mx-auto mb-5" src={img} alt="" />
            <h1 className="text-xl font-bold">{name}</h1>
            <h1 className="text-xl font-bold">Price :{price}</h1>
        </div>
    );
};

export default Bottle;