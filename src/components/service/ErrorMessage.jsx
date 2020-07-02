import React from 'react';

export default () => {
    return (
        <div className="text-center mt-5 error-box">
            <h1 className="mb-3">
                Error status <span className="error-box__status-code">503</span>
            </h1>
            <div className="text-muted">
                <p className="mb-1">
                    Server is not responding now, you can send request to tech support
                </p>
                <a href="mailto:edw4rd.young@gmail.com" className="text-decoration-none">
                    edw4rd.young@gmail.com
                </a>
            </div>
        </div>
    );
};
