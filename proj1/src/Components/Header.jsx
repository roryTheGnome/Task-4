import Title from "./Title.jsx" ;

function Header(){
    return(
        <header>
            <Title s="TASKS"/>
            <ul>
                <li><a href='#'>Home</a> </li>
                <li><a href='#'>About</a> </li>
                <li><a href='#'>Contact</a> </li>
            </ul>
        </header>
    );
}
export default Header;