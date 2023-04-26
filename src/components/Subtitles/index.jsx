import Word from "../Word";
import './Subtitles.css'

const Subtitles = ({ subtitles }) => {

    const words = subtitles.split(' ').slice(1);
    
    return (
        <div className="subtitles">
            <div className="words">
                {words.map((word, index) => {
                    return <Word word={word} key={index} />
                })}
            </div>
        </div>
    )
}

export default Subtitles