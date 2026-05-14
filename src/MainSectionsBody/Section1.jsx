import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
function Section1() {
    const Items=[
        {
            icon:DirectionsCarFilledOutlinedIcon,
            header:"Free Shopping",
            sec:"lorem car to get your order safly", 
        },
        {
            icon:PaymentOutlinedIcon,
            header:"Safe Payment",
            sec:"lorem Data to get your order safly",
        },
        {
            icon:SecurityOutlinedIcon,
            header:"Secure Payment",
            sec:"lorem data to get your order safly",
        },
        {
            icon:HeadphonesOutlinedIcon,
            header:"Back Guarantee",
            sec:"lorem tools to get your order safly",
        }
    ];
    return(
        <div className="w-5/6 h-2/6 grid grid-col-4 col-span-3 py-4">
            {Items.map((item,index)=>
                {
                const Icon = item.icon;
                    <div key={index} className="text-center rounded-xl bg-slate-700">
                        <p>{Icon}</p>
                        <h1>{item.header}</h1>
                        <p>{item.sec}</p>
                    </div>
                })
            }
        </div>
    )
}
export default Section1;