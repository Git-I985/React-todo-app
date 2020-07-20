export default [
    {
        name: 'All tasks',
        icon: 'event_note',
        callback: () => true,
    },
    {
        name: 'Completed tasks',
        icon: 'event_available',
        callback: (task) => task.completed,
    },
    {
        name: 'Open tasks',
        icon: 'event_busy',
        callback: (task) => !task.completed,
    },
];
