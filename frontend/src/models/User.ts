interface User {
    acces_token: string,
    data: {
        id: number,
        email: string,
        name: string,
        firstName: string
    }
}

export default User;