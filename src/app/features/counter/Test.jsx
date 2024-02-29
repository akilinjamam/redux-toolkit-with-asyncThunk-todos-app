

const Test = () => {
    const user = {
        name: "jamal",
        age: 32,
        profession: 'software engineering',
        nationality: "bangladesh"
    }

    const testSpreadOperator = {...user, age: 40, address: 'chittagong'}

    // console.log(testSpreadOperator)

    return (
        <div>
           {testSpreadOperator.address}
        </div>
    );
};

export default Test;