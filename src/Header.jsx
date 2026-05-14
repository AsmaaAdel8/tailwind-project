import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
function Header() {

    return(
        <div className='w-full m-auto border-b-2 border-b-blue-500'>
            <div className="flex flex-row w-5/6 m-auto bg-white  h-10 pt-2 pl-3">
                <div className="flex-1 flex">
                    <ShoppingBagOutlinedIcon />
                    <h2 className='font-bold uppercase '>Store</h2>
                </div>
                <div className="flex space-x-6 text-center cursor-pointer font-bold">
                    <p >Home</p>
                    <p >Shop</p>
                    <p >Cart</p>
                    <p className='relative'>
                        <span className='bg-blue-500 w-4 h-4 text-center rounded absolute -top-1 -right-2'>0</span>
                        <LocalGroceryStoreIcon/>
                    </p>
                </div>
            </div>
         </div>
    )
}

export default Header;