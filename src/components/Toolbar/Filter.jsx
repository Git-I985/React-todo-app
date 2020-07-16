import React, { useState } from 'react';

const Filter = (props) => {
    const [icon, setIcon] = useState(0);
    const icons = ['event_available', 'event_busy', 'event_note'];

    // 0.. 1.. 2.. 0.. 1.. 2..
    const switchIcon = () => setIcon(icon === icons.length - 1 ? 0 : icon + 1);

    return (
        <i className="material-icons mr-2 toolbar-icon" onClick={() => switchIcon()}>
            {icons[icon]}
        </i>
    );
};

export default Filter;
