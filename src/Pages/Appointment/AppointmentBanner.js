
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair_bg from '../../assets/images/bg.png';
const AppointmentBanner = ({selected, setSelected}) => {
    return (
        <section id='appoint_banner' style={{
            background: `url(${chair_bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className='container'>
                <div class="hero min-h-screen">
                    <div class="hero-content  flex-col lg:flex-row-reverse">
                        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='calender_img' />
                        <div className='shadow-lg shadow-cyan-500/50 rounded-lg'>
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;
