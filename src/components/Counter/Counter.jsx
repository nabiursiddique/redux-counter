import Button from "../Button/Button";

const Counter = () => {
    return (
        <div className="shadow-xl p-10 my-5 bg-white rounded-lg">
            <h2 className="text-6xl text-center text-gray-600 my-10 font-bold">0</h2>
            <div>
                <Button>Increment</Button>
                <Button>Decrement</Button>
                <Button>Reset</Button>
            </div>
        </div>
    );
};

export default Counter;