import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function title() {
    return (
        <section className="title">
            <h1>Laura Smith</h1>
            <h5>Frontend Developer</h5>
            <p>laurasmith.website</p>

            {/* buttons container */}
            <div className='buttons-container'>
                <button className='button email-button'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                </button>
                <button className='button linkedin-button'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    LinkedIn
                </button>
            </div>
        </section>
    )
}
