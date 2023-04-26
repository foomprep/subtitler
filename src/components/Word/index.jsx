import './Word.css';

const Word = ({
    word
}) => {

    const handleClick = async () => {
    }

    return (
        <div className='word' onClick={handleClick}>{word}</div>
    )
}

export default Word