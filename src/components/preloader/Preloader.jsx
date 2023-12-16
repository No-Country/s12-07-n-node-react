import './preloader.css';
import rectangle from '../../assets/icons/rectangle.svg';
import polygon1 from '../../assets/icons/polygon1.svg';
const Preloader = () => {
	return (
		<div className='logo-container'>
			<div className='growing-logo h-[100px] w-[100px]'>
				<img src={rectangle} className='rotating-square' />
				<img src={polygon1} className='icono' />
				<div className='text'>STREAM VIEW</div>
			</div>
		</div>
	);
};

export default Preloader;
