export class Contributor {
    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private title: string,
        private jobTitle: string,
        private age: number,
    ) {}
    
    public getId(): string {
        return this.id
    }

    public getFirstName(): string {
        return this.firstName
    }

    public getLastName(): string {
        return this.lastName
    }

    public getTitle(): string {
        return this.title
    }

    public getJobTitle(): string {
        return this.jobTitle
    }

    public getAge(): number {
        return this.age
    }
}
