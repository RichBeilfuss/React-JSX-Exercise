function Person(props){
    let voteText = props.age >= 18 ? "Get out and vote!" : "Time to study!";

    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);

    return(
        <div>
            <p>Let us introduce you!</p>
            <ul>
                <li>Name: {props.name.slice(0,6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies
                     {hobbies}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    );
}