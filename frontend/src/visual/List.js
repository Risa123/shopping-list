import Button from "react-bootstrap/Button"

export default function List(props){
    return <div>
    {props.name}
 <Button>archive</Button>
 <Button>rename</Button>
 <Button variant = "danger">remove</Button>
</div>
}