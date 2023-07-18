export class Computer {
    constructor(id, objectSid, distinguishedName, operatingSystem, securityDescriptor, whenCreated) {
        this.id = id;
        this.objectSid = objectSid;
        this.distinguishedName = distinguishedName;
        this.operatingSystem = operatingSystem;
        this.securityDescriptor = securityDescriptor;
        this.whenCreated = whenCreated;
    }
}

export class ComputersResponse {
    constructor(count, next, previous, computerList) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.dataList = computerList;
    }
}
