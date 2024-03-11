import { AddressType } from "./AddressType";

export type UserType = {
    id: string;
    firstName: string;
    lastName: string;
    address: AddressType;
    image: string;
}
