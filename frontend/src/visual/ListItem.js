import Button from "react-bootstrap/Button"

export default function ListItem(props){
    return <div>
       {props.name}
    <Button>archive</Button>
    <Button>rename</Button>
    <Button variant = "danger">remove</Button>
  </div>
}