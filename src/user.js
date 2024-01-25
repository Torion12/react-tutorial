const User = (props) => {

    return (
        <>
            {props.name.map((value) => !value.isGasPlanet && <h1>{value.name}</h1>)}
        </>
    )
};

export default User;