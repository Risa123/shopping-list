import Button from "react-bootstrap/Button"

export default function List(props){
    return <div>
    {props.name}
 <Button variant = "secondary">archive</Button>
 <Button variant = "secondary">rename</Button>
 <Button variant = "danger">remove</Button>
</div>
}