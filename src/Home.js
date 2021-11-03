import { useEffect, useState } from "react";
import { useHistory } from "react-router";
//import useFetch from './useFetch';
import Cookies from 'js-cookie';
import Settings from './Settings';

const Home = () => {
    //const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState(null);

    useEffect(() => {
        console.log("useeffect 01:" + emailAddress)
        if (Cookies.get('emailaddress') === undefined) {
            history.push('/register');
        } else if (emailAddress == null) {
            setEmailAddress(Cookies.get('emailaddress'));
        }
    }, [emailAddress, history])

    return (
        <div>
            {!emailAddress && <Settings />}
            {emailAddress &&
                <div className="home">
                    <div><b>Hi {emailAddress}</b></div>
                    <div><b>Please find the Music List Suggestions below!</b></div><br />
                </div>
            }
        </div>
    );
};

export default Home;