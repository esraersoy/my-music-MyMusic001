import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { DataStore } from 'aws-amplify';
import Cookies from 'js-cookie';
import CustomGenderRadioButtonGroup from "./CustomObjects/CustomGenderRadioButtonGroup";
import CustomMultipleSelectCheckmarks from "./CustomObjects/CustomCheckBox";
import CustomCountryList from "./CustomObjects/CustomCountryList";
import { User } from './models'

const Settings = () => {

    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState(null);

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState();
    const [gender, setGender] = useState();
    const [country, setCountry] = useState();
    const [musicGenres, setMusicGenres] = useState();
    const [errorMessage, setErrorMessage] = useState();

    useEffect(() => {
        if (Cookies.get('emailaddress') === undefined) {
            history.push('/register');
        } else if (emailAddress == null) {
            setEmailAddress(Cookies.get('emailaddress'));
            setVariables(Cookies.get('emailaddress'));;
        }
    }, [emailAddress, history])


    const setVariables = async (emailAddress) => {
        const originalUserData = (await DataStore.query(User)).filter(c => c.emailaddress === emailAddress);
        if (originalUserData != "") {
            setName(originalUserData[0].name);
            setBirthDate(originalUserData[0].birthdate);
            setCountry(originalUserData[0].country);
            setGender(originalUserData[0].gender);
            setMusicGenres(JSON.parse(originalUserData[0].musicgenres));
        } else {
            Cookies.remove('emailaddress');
            history.push('/register');
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Get the user entry from the table
            const originalUserData = (await DataStore.query(User)).filter(c => c.emailaddress === emailAddress);
            console.log(originalUserData);
            // Update the user entry in the table
            DataStore.save(
                User.copyOf(originalUserData[0], updated => {
                    updated.name = name;
                    updated.birthdate = birthDate;
                    updated.gender = gender;
                    updated.country = country;
                    updated.musicgenres = JSON.stringify(musicGenres);
                }
                )
            );
            console.log("User updated successfully!")
            setErrorMessage();
            history.push("/");
        } catch (error) {
            console.log("Error updating user, ", error);
            setErrorMessage("Error updating user, " + error.message);
        }
    }

    return (
        <div>
            <div className="customform">
                <h2>Settings</h2>
                <div>{errorMessage && <p className="error">{errorMessage}</p>}</div>
                <form onSubmit={handleSubmit}>

                    <label>E-mail Address:</label>
                    <input type="email"
                        required
                        disabled
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                    />

                    <label>Name:</label>
                    <input type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Birth Date:</label>
                    <input type="date"
                        required
                        value={birthDate}
                        min="1940-01-01" max="2006-01-01"
                        onChange={(e) => setBirthDate(e.target.value)}
                    />

                    {country &&
                        <div>
                            <label>Country:</label>
                            <input type="text" disabled required value={country} onChange={(e) => setBirthDate(e.target.value)} />
                        </div>
                    }
                    {!country && <CustomCountryList onChange={value => setCountry(value)} />}


                    {gender &&
                        <div>
                            <label>Gender:</label>
                            <input type="text" disabled required value={gender}></input>
                        </div>
                    }
                    {!gender && <CustomGenderRadioButtonGroup onChange={value => setGender(value)} gender={gender} />}


                    {musicGenres && <div>
                        <label>musicGenres:</label>
                        <input type="text" disabled required value={musicGenres} />
                    </div>
                    }
                    <CustomMultipleSelectCheckmarks musicGenres={musicGenres} onChange={value => setMusicGenres(value)} />

                    <button className="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Settings;