import Shuffle from './Shuffle';

function Footer(props){
    return(
        <footer className="inline-flex items-center gap-1">
            <Shuffle
                text={"Made by "}
                shuffleDirection="down"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                loop={true}
                loopDelay={1}
            />
            <a href={props.link} style={{fontSize:"2em", fontFamily: 'Press Start 2P'}}> {props.owner} </a>
            <Shuffle
                text={" with ☕ and ❤️"}
                shuffleDirection="down"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={false}
                respectReducedMotion={true}
                loop={true}
                loopDelay={1}
            />
        </footer>
);
}
export default Footer;