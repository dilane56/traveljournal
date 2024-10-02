
import '../styles/Main.css'
import map from '../images/Fill 219.png'
export default function Main(props) {
    const image = props.item.image;
    const country = props.item.country;
    const monument = props.item.monument;
    const description = props.item.description;
    const date =props.item.date;

    return (
        <div >
            <div className="bloc">

                < img src={image} alt='' className='bloc-image'/>
                <div className='bloc-info'>
                    <div className='info1'>
                        <img src={map} alt=''  />
                        <p className='country'>{country}</p>
                        <a href="">View on Google Maps</a>
                    </div>
                    <h2 className='monument'>{monument}</h2>

                    <h4 className='date'>{date}</h4>
                    <p className='description'>{description}</p>

                </div>


            </div>
            <hr className='line'/>


        </div>
    )
}