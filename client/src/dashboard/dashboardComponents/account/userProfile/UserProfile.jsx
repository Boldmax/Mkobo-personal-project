import React, { useState, useEffect, useContext } from 'react';
import { InputBar } from "../AccountNav.styled";
import image from "../../images/profile-1.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { GlobalState } from '../../../../GlobalState';
import './UserProfile.css';
import styled from "styled-components"



const schema = yup.object().shape({
    BVN: yup.string().required("BVN is required").matches(/^[0-9]+$/, "Enter a valid BVN").min(11, "Enter a valid BVN").max(11),
    fisrt_name: yup.string().required("Enter a valid Email Address"),
    last_name: yup.string().required("Enter a valid Email Address"),
    address: yup.string().required("Enter a valid Email Address"),
    gender: yup.string().required("Password is required"),
    email: yup.string().required("Enter a valid Email Address"),
    date_of_birth: yup.string().required("BVN is required")
})


export default function InvestmentDetails() {
    const { token } = useContext(GlobalState)

    const [bvn, setBvn] = useState({});
    const [firstName, setFirstName] = useState({});
    const [lastName, setLastName] = useState({});
    const [email, setEmail] = useState({});
    const [date, setDate] = useState({});
    const [address, setAddress] = useState({});
    const [gender, setGender] = useState();


    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const getFromLS = () => {
        return localStorage.getItem('JWT')
    };

    const handleDisplay = () => {
        axios.get('http://localhost:4000/app/user/', {
            headers: {
                Authorization: `Bearer ${getFromLS()}`
            }
        })
            .then(resp => {
                setBvn(resp.data[0].BVN);
                setFirstName(resp.data[0].fisrt_name);
                setLastName(resp.data[0].last_name);
                setEmail(resp.data[0].email);
                setDate(resp.data[0].date_of_birth);
                setAddress(resp.data[0].address)
                setGender(resp.data[0].gender)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        handleDisplay()
    })


    let onSubmit = (data) => {
        console.log(data)
        axios.post('http://localhost:4000/app/users/create', data)
            .then(res => console.log(res))
        //     history.push()
    };
    return (
        <div id="user" >
            <div className='topbox'>
                <h2>My Profile</h2>
            </div>
            <form className="content" onSubmit={handleSubmit(onSubmit)}>

                <div className="profileImage">
                    <img src={image} />
                    <input type="file" placeholder="Tap to change profile image" />
                </div>

                <label>BVN</label>
                <InputBar ref={register} name="BVN" placeholder={bvn} />
                <label>First Name</label>
                <InputBar ref={register} name="fisrt_name" placeholder={firstName} />
                <label>Last Name</label>
                <InputBar ref={register} name="last_name" placeholder={lastName} />
                <label>Email Address</label>
                <InputBar ref={register} name="email" placeholder={email} />
                <label>Gender</label>

                <select ref={register} name="gender" value={gender} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label>Date of Birth</label>
                <Date type='date' ref={register} name="date_of_birth" placeholder={date} />
                <label>Address</label>
                <InputBar ref={register} name="address" placeholder={address} />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}


const Date = styled.input`
    width: 25vw;
    height: 48px;
    margin: 1rem 0;
    border: 1px solid rgba(93, 129, 162, 0.3);
    border-radius: 5px;
    background: #e5e5e5; 
    @media (max-width: 768px) {
    width: 80vw;
    height: 46px;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
}
`