export class Group {
    constructor(id, objectSid, distinguishedName, description, whenCreated, securityDescriptor, genericAll, writeDacl) {
        this.id = id;
        this.objectSid = objectSid;
        this.distinguishedName = distinguishedName;
        this.description = description;
        this.whenCreated = whenCreated;
        this.securityDescriptor = securityDescriptor;
        this.genericAll = genericAll;
        this.writeDacl = writeDacl;
    }
}

export class GroupsResponse {
    constructor(count, next, previous, groupList) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.groupList = groupList;
    }
}