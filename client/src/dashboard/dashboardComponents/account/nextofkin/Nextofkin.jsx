import React, { useEffect, useState, useContext } from 'react';
import { InputBar, BackButton } from "../AccountNav.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { GlobalState } from '../../../../GlobalState';
import './Nextofkin.css';


const schema = yup.object().shape({
    phone_number: yup.string().required("BVN is required").matches(/^[0-9]+$/, "Enter a valid BVN").min(11, "Enter a valid BVN").max(11),
    fisrt_name: yup.string().required("Enter a valid Email Address"),
    last_name: yup.string().required("Enter a valid Email Address"),
    relationship: yup.string().required("Enter a valid Email Address"),
    email: yup.string().required("Password is required"),
    address: yup.string().required("BVN is required")
})


export default function Nextofkin() {
    const { userId } = useContext(GlobalState)

    const [relationship, setRelationship] = useState({});
    const [firstName, setFirstName] = useState({});
    const [lastName, setLastName] = useState({});
    const [email, setEmail] = useState({});
    const [phone, setPhone] = useState({});
    const [address, setAddress] = useState({});

    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const getFromLS = () => {
        return localStorage.getItem('JWT')
    };
    const token = getFromLS()

    const handleDisplay = () => {
        axios.get('http://localhost:4000/app/user/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setPhone(res.data[0].nextOfKin[0].phone_number);
                setFirstName(res.data[0].nextOfKin[0].fisrt_name);
                setLastName(res.data[0].nextOfKin[0].last_name);
                setEmail(res.data[0].nextOfKin[0].email);
                setRelationship(res.data[0].nextOfKin[0].relationship);
                setAddress(res.data[0].nextOfKin[0].address)
            })
            .catch(err => console.log(err));
    }

    let onSubmit = (data) => {
        axios.post('http://localhost:4000/kin/users/' + userId + '/create', data)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        handleDisplay()
    })


    return (
        <div className="nextOfKin">
            <div className="topbox">
                <h2>Next of Kin Details</h2>
                <span>Your next of kin who is your closest living blood relative is very important. In
                a case where we are unable to reach you for a long period of time, or if the
            person dies, your next of kin will be contacted.</span></div>
            <form /* className="contentBody" */ onSubmit={handleSubmit(onSubmit)}>

                <label>First Name</label>
                <InputBar name="fisrt_name" ref={register} placeholder={firstName} />
                <label>Last Name</label>
                <InputBar name="last_name" ref={register} placeholder={lastName} />
                <label>Relationship</label>
                <InputBar name="relationship" ref={register} placeholder={relationship} />
                <label>Phone Number</label>
                <InputBar type="PhoneNumber" name="phone_number" ref={register} placeholder={phone} />
                <label>Email</label>
                <InputBar name="email" ref={register} placeholder={email} />
                <label>Address</label>
                <InputBar name="address" ref={register} placeholder={address} />
                <BackButton type="submit" /* id='BackButton2' */ >Update</BackButton>
            </form>
        </div>
    )
}


{/* <h2>Next of Kin Details</h2>
            <span>Your next of kin who is your closest living blood relative is very important. In
            a case where we are unable to reach you for a long period of time, or if the
            person dies, your next of kin will be contacted.</span>
            <form className="contentBody" onSubmit={handleSubmit(onSubmit)}>

                <label>First Name</label>
                <InputBar name="fisrt_name" ref={register} placeholder={firstName} />
                <label>Last Name</label>
                <InputBar name="last_name" ref={register} placeholder={lastName} />
                <label>Relationship</label>
                <InputBar name="relationship" ref={register} placeholder={relationship} />
                <label>Phone Number</label>
                <InputBar type="PhoneNumber" name="phone_number" ref={register} placeholder={phone} />
                <label>Email</label>
                <InputBar name="email" ref={register} placeholder={email} />
                <label>Address</label>
                <InputBar name="address" ref={register} placeholder={address} />
                <BackButton type="submit" id='BackButton2' >Update</BackButton>
            </form> */}