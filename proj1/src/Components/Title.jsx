import TextPressure from './TextPressure';

function Title ({s}){
    return (
        <div className="title-container text-center my-4">
            <TextPressure
                text={s}
                flex
                alpha={false}
                stroke={false}
                width
                weight
                italic
                textColor="#ffffff"
                strokeColor="#5227FF"
                minFontSize={16}
            />
        </div>
    );
}

export default Title