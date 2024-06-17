import axios from 'axios';
import './Word.css';

const Word = ({
    word
}) => {

    const handleClick = async () => {
        const response = await axios.post('http://localhost:5001/translate', {
            text: word
        })
        console.log(response.data['translation_text']);
    }

    return (
        <div className='word' onClick={handleClick}>{word}</div>
    )
}

export default Word