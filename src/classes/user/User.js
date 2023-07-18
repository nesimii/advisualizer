export class User {
    constructor(
        id,
        objectSid,
        distinguishedName,
        servicePrincipalName,
        securityDescriptor,
        whenCreated,
        pwdLastSet,
        genericAll,
        writeDacl
    ) {
        this.id = id;
        this.objectSid = objectSid;
        this.distinguishedName = distinguishedName;
        this.servicePrincipalName = servicePrincipalName;
        this.securityDescriptor = securityDescriptor;
        this.whenCreated = whenCreated;
        this.pwdLastSet = pwdLastSet;
        this.genericAll = genericAll;
        this.writeDacl = writeDacl;
    }
}

export class UsersResponse {
    constructor(count, next, previous, userList) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.dataList = userList;
    }
}
