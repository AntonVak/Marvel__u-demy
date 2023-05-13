import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMassage";
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (process, Component, data) => {
    switch(process) {
        case 'waiting':
            return <Skeleton/>;
            break;
        case 'loading':
            return <Spinner/>;
            break;
        case 'confirmed':
            return <Component data={data}/>;
            break;
        case 'error': 
            return <ErrorMessage/>;
        default:
            throw new Error('uuuuuuuuuuuuuu')    
    }   
}

export default setContent;