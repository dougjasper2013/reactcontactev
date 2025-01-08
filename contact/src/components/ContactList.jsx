import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ContactList () {
    const [contacts, setContacts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalContacts, setTotalContacts] = useState(0);
    const postsPerPage = 4;

    useEffect(() => {
        const fetchContacts = async () => {
             setIsLoading(true);
            //try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/list.php`);                
                setContacts(response.data.data);
                setTotalContacts(response.data.totalContacts);
                setIsLoading(false);
           // }
            // catch (error) {
            //     console.error(error);
            //     setError('Failed to load posts.');                
            //     setIsLoading(false);
            // }
        };

        fetchContacts();
    },[]);

    // const totalPages = Math.ceil(totalPosts / postsPerPage);
    // const goToPreviousPage = () => setCurrentPage(currentPage - 1);
    // const goToNextPage = () => setCurrentPage(currentPage + 1);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">All Contacts</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="row">
                {isLoading ? (
                    <p>Loading contacts...</p>
                ) : contacts.length ? (
                    contacts.map(contact => (
                        <div className="col-md-6" key={contact.contactID}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{contact.firstName} {contact.lastName}</h5>
                                    <p className="card-text">Email: {contact.emailAddress} Phone: {contact.phone} </p>
                                    <Link to ={`/contact/${contact.contactID}`} className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>

                    ))
                ) : (
                    <p>No posts available.</p>
                )}
            </div>

            {/* <nav aria-label="Page navigation">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={goToPreviousPage}>Previous</button>
                    </li>
                    {Array.from({ length: totalPages}, (_, index) => (
                        <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={goToNextPage}>Next</button>
                    </li>
                </ul>
            </nav> */}

        </div>
    );

}

export default ContactList;

