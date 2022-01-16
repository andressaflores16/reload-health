export class Desktop {
    constructor(
        private id: string,
        private platform: string,
        private type: string,
        private os: string,
        private ip: string
    ) {}

    public getId(): string {
        return this.id
    }

    public getPlatform(): string {
        return this.platform
    }

    public getType(): string {
        return this.type
    }

    public getOS(): string {
        return this.os
    }

    public getIP(): string {
        return this.ip
    }
  }