import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Payment.css';

const Payment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        paypalEmail: '',
        bankAccount: '',
        amount: ''
    });

    const [paymentmethod, setPaymentMethod] = useState('card');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('jwtToken');
            const response = await axios.post('http://localhost:8080/api/payments', {
                name: formData.name,
                email: formData.email,
                paymentmethod,
                paymentAmount: formData.amount,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('Payment response:', response.data);
            setShowModal(true);
        } catch (error) {
            console.error('There was an error making the payment!', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                navigate('/home');
            }, 2000); // Redirect after 2 seconds

            return () => clearTimeout(timer); // Clean up the timer on component unmount
        }
    }, [showModal, navigate]);

    return (
        <div className="payment-container">
            <h1>Make a Payment</h1>
            <form onSubmit={handleSubmit} className="payment-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select id="paymentMethod" value={paymentmethod} onChange={handlePaymentMethodChange} required>
                        <option value="card">Credit/Debit Card</option>
                        <option value="paypal">UPI Payment</option>
                        <option value="bank">Net Banking</option>
                    </select>
                </div>

                {paymentmethod === 'card' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="expirationDate">Expiration Date</label>
                            <input type="text" id="expirationDate" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required />
                        </div>
                    </>
                )}

                {paymentmethod === 'paypal' && (
                    <div className="form-group">
                        <label htmlFor="paypalEmail">UPI Id</label>
                        <input type="email" id="paypalEmail" name="paypalEmail" value={formData.paypalEmail} onChange={handleChange} required />
                    </div>
                )}

                {paymentmethod === 'bank' && (
                    <div className="form-group">
                        <label htmlFor="bankAccount">Bank Account Number</label>
                        <input type="text" id="bankAccount" name="bankAccount" value={formData.bankAccount} onChange={handleChange} required />
                    </div>
                )}

                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-button">Submit Payment</button>
            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>Your Payment is Successful</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payment;
