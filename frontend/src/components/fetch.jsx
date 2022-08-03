//SyntaxError: Unexpected end of input
const getData = async () => {
    fetch(`http://localhost:4000/engine`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log('Problem:', error)
        }
    )
}

//TypeError: Failed to fetch  - (BLOCKED)
const getData1 = async () => {
    fetch(`http://localhost:4000/engine`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log('Problem:', error)
        }
    )
}

//Uncaught (in promise) TypeError: Failed to fetch  - (BLOCKED)
const getData2 = async () => {
    const response = await fetch(`http://localhost:4000/engine`);
    const data = await response.json();
    console.log( data);
}

const getData3 = async () => {
fetch("http://localhost:4000/engine")
    .then(res => res.json())
    .then(
    (result) => {
        setIsLoaded(true);
        setItems(result);
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
        setIsLoaded(true);
        setError(error);
    })
}