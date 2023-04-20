import { useParams } from "react-router";

function Header(){

    let {headerid} = useParams();
    return (<>
    <h3>Header</h3>
    {headerid}
    </>)
}

export default Header;











