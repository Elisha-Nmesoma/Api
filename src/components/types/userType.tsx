export type Address = {
    street:string;
    suite: string;
    city: string;
}
export type Company ={
    name: string;
}

    export type User = {
     id: number;
     name: string;
     username: string;
     email: string;
     address: Address;
     phone: string;
     website: string;
     company: Company;
    }