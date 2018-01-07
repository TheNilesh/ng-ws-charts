export class Message {
    private _city: string;
    private _count: number;
    get City(): string {
        return this._city;
    }

    get Count(): number {
        return this._count;
    }
}