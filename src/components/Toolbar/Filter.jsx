import React, { useState } from 'react';

const Filter = (props) => {
    let [icon, setIcon] = useState(0);
    let icons = ['event_available', 'event_busy', 'event_note'];

    const switchIcon = () => setIcon(icon === icons.length - 1 ? 0 : icon + 1);

    return (
        <i className="material-icons mr-2 toolbar-icon" onClick={() => switchIcon()}>
            {icons[icon]}
        </i>
    );
};

export default Filter;
