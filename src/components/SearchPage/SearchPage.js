import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import Button from '@material-ui/core/Button';

import style from './SearchPage.module.scss';


const SearchPage = () => {
return (
    <form className={style.form_container}>

        <div className={style.search_input}>
            <SearchIcon className={style.searchIcon} />
            <input />
            <MicIcon className={style.micIcon} />
        </div>

        <div className={style.search_button}>
                <Button variant="outlined" className={style.tagButton}>Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>

        <div className={style.languages}>
            <spam>Google offered in:{" "}</spam>
            <div className={style.languages_link}>
                <Link >हिन्दी</Link>
                <Link>বাংলা</Link>
                <Link>తెలుగు</Link>
                <Link>मराठी</Link>
                <Link>தமிழ்</Link>
                <Link>ગુજરાતી</Link>
                <Link>ಕನ್ನಡ</Link>
                <Link>മലയാളം</Link>
                <Link>ਪੰਜਾਬੀ</Link>
            </div>
        </div>
    </form>
    );
}

export default SearchPage;
