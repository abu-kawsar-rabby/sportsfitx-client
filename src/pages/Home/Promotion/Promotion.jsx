import Container from "../../shared/Container/Container";
import './Promotion.css';


const Promotion = () => {
    return (
        <div className='bg bg-fixed my-10 pt-8 pb-16 text-white '>
            {/* <CategoryTitle
            heading='FROM OUR MENU'
            subHeading='Check it out'
        ></CategoryTitle> */}
            <Container>
                <div className='w-1/2 space-y-5'>
                    <p className='uppercase text-5xl font-bold'>JOIN US NOW & GET FREE TRAINING!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn-sportsfitx">Join us</button>
                </div>
            </Container>
        </div>
    );
};

export default Promotion;