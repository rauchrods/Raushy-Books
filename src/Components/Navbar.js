
import { useState } from 'react';
import logoimg from '../Images/logoimg.png';
import { FaMagnifyingGlass } from "react-icons/fa6";

let Navbar = ({ setbooks }) => {

    let [text, setText] = useState("");

    function findnewbooks() {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => result.items)
            .then(data => {

                setbooks(data);

            })
            .catch(error => console.log('error', error));
    }



    return (
        <div className="navbar">
            <div className="navleft">
                <img src={logoimg} alt="logo image company" />
                <div className="title">
                    <span>KeazoN</span>
                    <span>Books</span>
                </div>
            </div>
            <div className="navcenter">
                <div className="searchbar">
                    <FaMagnifyingGlass></FaMagnifyingGlass>
                    <input type="search" placeholder='Search for the book you want and read it now... ' onChange={(e) => { setText(e.target.value) }} value={text} />
                </div>
                <button onClick={findnewbooks}>Search</button>
            </div>
            <div className="navright">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.142 6.486C10.2309 6.33776 10.3566 6.21507 10.507 6.12989C10.6573 6.04472 10.8272 5.99996 11 6H29C29.1728 5.99996 29.3427 6.04472 29.4931 6.12989C29.6435 6.21507 29.7692 6.33776 29.858 6.486L35.858 16.486C35.9645 16.6639 36.0131 16.8706 35.997 17.0773C35.9808 17.2841 35.9008 17.4807 35.768 17.64L34.954 18.616C34.4047 17.8086 33.6659 17.148 32.8023 16.692C31.9387 16.236 30.9766 15.9984 30 16H33.234L28.434 8H24.476L27.676 16H30C28.222 16 26.626 16.772 25.528 18H14.46L20 32.24L20.06 32.086L20.08 32.26C20.2164 33.3213 20.5487 34.3481 21.06 35.288L20.768 35.64C20.6742 35.7525 20.5567 35.8431 20.424 35.9052C20.2913 35.9673 20.1466 35.9995 20 35.9995C19.8535 35.9995 19.7087 35.9673 19.576 35.9052C19.4433 35.8431 19.3259 35.7525 19.232 35.64L4.23203 17.64C4.09922 17.4807 4.01921 17.2841 4.00309 17.0773C3.98696 16.8706 4.03552 16.6639 4.14203 16.486L10.142 6.486ZM11.566 8L6.76603 16H12.324L15.524 8H11.566ZM16.85 29.658L12.316 18H7.13603L16.85 29.658ZM17.678 8L14.478 16H25.522L22.322 8H17.68H17.678ZM22.472 33.596C22.2714 33.0827 22.1344 32.5467 22.064 32C22.0209 31.6684 21.9995 31.3344 22 31C22 30.2044 22.3161 29.4413 22.8787 28.8787C23.4413 28.3161 24.2044 28 25 28H35C35.7957 28 36.5587 28.3161 37.1213 28.8787C37.684 29.4413 38 30.2044 38 31C38 33.232 37.082 35.02 35.576 36.23C34.094 37.42 32.106 38 30 38C27.894 38 25.906 37.42 24.424 36.23C23.5542 35.5378 22.8812 34.6296 22.472 33.596ZM27.262 19.084C27.98 18.412 28.942 18 30 18C30.8125 17.9984 31.6061 18.2454 32.274 18.708C32.8056 19.0772 33.2401 19.5693 33.5406 20.1424C33.8411 20.7156 33.9987 21.3528 34 22C34 23.0609 33.5786 24.0783 32.8285 24.8284C32.0783 25.5786 31.0609 26 30 26C28.9392 26 27.9217 25.5786 27.1716 24.8284C26.4215 24.0783 26 23.0609 26 22C26 20.85 26.486 19.814 27.262 19.084Z" fill="#E7E2E2" fillOpacity={"0.81"} />
                </svg>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.15 28.8167L30 26.6667V18.3333C30 13.2167 27.2667 8.93332 22.5 7.79999V6.66666C22.5 5.28332 21.3834 4.16666 20 4.16666C18.6167 4.16666 17.5 5.28332 17.5 6.66666V7.79999C12.7167 8.93332 10 13.2 10 18.3333V26.6667L7.85002 28.8167C6.80002 29.8667 7.53336 31.6667 9.01669 31.6667H30.9667C32.4667 31.6667 33.2 29.8667 32.15 28.8167ZM26.6667 28.3333H13.3334V18.3333C13.3334 14.2 15.85 10.8333 20 10.8333C24.15 10.8333 26.6667 14.2 26.6667 18.3333V28.3333ZM20 36.6667C21.8334 36.6667 23.3334 35.1667 23.3334 33.3333H16.6667C16.6667 34.2174 17.0179 35.0652 17.643 35.6903C18.2681 36.3155 19.116 36.6667 20 36.6667Z" fill="#E7E2E2" fillOpacity="0.81" />
                </svg>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13.3333V31.6667C5 35.335 7.99 36.6667 10 36.6667H35V33.3333H10.02C9.25 33.3133 8.33333 33.01 8.33333 31.6667C8.33333 30.3233 9.25 30.02 10.02 30H35V6.66668C35 4.82834 33.505 3.33334 31.6667 3.33334H10C7.99 3.33334 5 4.66501 5 8.33334V13.3333ZM10 6.66668H31.6667V26.6667H8.33333V8.33334C8.33333 6.99001 9.25 6.68668 10 6.66668Z" fill="#E7E2E2" fill-opacity="0.81" />
                    <path d="M19.995 23.3333L25.5783 17.8517C25.9226 17.5206 26.1964 17.1234 26.3835 16.684C26.5706 16.2445 26.667 15.7718 26.667 15.2942C26.667 14.8165 26.5706 14.3438 26.3835 13.9044C26.1964 13.4649 25.9226 13.0677 25.5783 12.7367C24.8843 12.0517 23.9484 11.6676 22.9733 11.6676C21.9982 11.6676 21.0623 12.0517 20.3683 12.7367L19.995 13.1L19.6217 12.735C18.9279 12.0501 17.9923 11.6661 17.0175 11.6661C16.0427 11.6661 15.1071 12.0501 14.4133 12.735C14.0691 13.0661 13.7952 13.4632 13.6081 13.9027C13.4211 14.3422 13.3246 14.8149 13.3246 15.2925C13.3246 15.7701 13.4211 16.2428 13.6081 16.6823C13.7952 17.1217 14.0691 17.5189 14.4133 17.85L19.995 23.3333Z" fill="#E7E2E2" fillOpacity={"0.81"} />
                </svg>
            </div>
        </div>


    )

}

export default Navbar;