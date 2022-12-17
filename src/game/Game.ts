export class Game {
    public users: { username: string, lastPing: number }[] = []

    constructor(username: string) {
        this.addUser(username)
    }

    public addUser(username: string) {
        this.users.push({ username, lastPing: Date.now() })
    }
}