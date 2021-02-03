const users = [];

const addUser = ({ id, username, room }) => {
    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username;
    })
    if (existingUser) {
        return {
            error: 'Username is not available!'
        }
    }

    // Store user
    const user = { id, username, room };
    users.push(user);
    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    const user = users.find((user) => user.id === id);

    if (user) {
        return  user;
    }
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    const usersInRoom = users.filter((user) => user.room === room);

    return usersInRoom;
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}