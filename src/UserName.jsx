export default function UserName (props) {
        function handleSubmit(e) {
        e.preventDefault();
        props.setName(e.target.username.value);
        localStorage.setItem("username", e.target.username.value); //localStorage.setItem("username", props.name);
        console.log(`Form submitted, ${e.target.username.value}`);    

    }
    return (
    <form  onSubmit={handleSubmit}>
    <label htmlFor="name">Please enter your name</label>
    <input  name="username" />
    <button  type="submit">Submit</button>
    </form>
    )
}

