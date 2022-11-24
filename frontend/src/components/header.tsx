import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = () => {
    return (
        <div className='flex p-2 bg-slate-200'>
            <div className='flex items-center'>
                <ArrowBackIosIcon/>
            </div>
            <div className='w-min rounded-full p-1 bg-violet-400' >
                DD
            </div>
            <div className='flex items-center ml-2'>
                Damien Demolin
            </div>
        </div>
    )
}

export default Header;