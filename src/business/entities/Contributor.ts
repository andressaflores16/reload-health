export class Contributor {
    constructor(
        private id: string,
        private first_name: string,
        private last_name: string,
        private title: string,
        private job_title: string,
        private age: number,
    ) {}
    
    public getId(): string {
        return this.id
    }

    public getFirstName(): string {
        return this.first_name
    }

    public getLastName(): string {
        return this.last_name
    }

    public getTitle(): string {
        return this.title
    }

    public getJobTitle(): string {
        return this.job_title
    }

    public getAge(): number {
        return this.age
    }
}
