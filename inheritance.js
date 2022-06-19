class TeamMember{
    name;
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMember{

    groupSupportTime;
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime = time;
    }
}

const karim = new Support('Karim', 'Sylhet', 11);
console.log(karim);


class StudentCare extends TeamMember{
    constructor(name, address,time){
        super(name,address)
        this.time = time;
    }
}

const rahim = new StudentCare('Karim' , 'BD', 11);
console.log(rahim)